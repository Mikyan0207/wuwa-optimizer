import type Echo from '~/Core/Interfaces/Echo'
import { Empty_Echo } from '~/Core/Echoes'

export function useCharacterContext() {
  const Route = useRoute()
  const CharacterId = computed(() => Number.parseInt((Route.params as { id: string }).id))

  const CharactersStore = useCharactersStore()
  const WeaponsStore = useWeaponsStore()
  const EchoesStore = useEchoesStore()

  const StatsCalculator = useStatsCalculator()
  const ScoreCalculator = useScoreCalculator()

  const CurrentCharacter = computed({
    get: () => CharactersStore.Get(CharacterId.value),
    set: val => CharactersStore.Update(CharacterId.value, val),
  })

  const DefaultBuild = computed(() => {
    const BuildsStore = useBuildsStore()
    let defaultBuild = BuildsStore.GetDefaultBuild(CurrentCharacter.value.Id)

    if (!defaultBuild) {
      defaultBuild = BuildsStore.CreateBuild(CurrentCharacter.value.Id, 'Default Build')
      BuildsStore.SetDefaultBuild(CurrentCharacter.value.Id, defaultBuild.Id)
    }

    return defaultBuild
  })

  const CurrentWeapon = computed({
    get: () => {
      const weaponId = DefaultBuild.value.WeaponId
      return weaponId ? WeaponsStore.GetWeapon(weaponId) : undefined
    },
    set: (val) => {
      const BuildsStore = useBuildsStore()

      BuildsStore.UpdateBuild(DefaultBuild.value.Id, {
        WeaponId: val?.Id,
      })

      const updatedScore = ScoreCalculator.GetCharacterScore(CurrentCharacter.value, DefaultBuild.value)
      if (updatedScore) {
        BuildsStore.UpdateBuild(DefaultBuild.value.Id, {
          Score: updatedScore.Score,
          Note: updatedScore.Note,
          EchoesScores: updatedScore.EchoesScores,
        })
      }
    },
  })

  const CurrentEchoes = computed(() => {
    const base = Array.from({ length: 5 }, () => ({ ...Empty_Echo }))

    if (DefaultBuild.value.EchoesData && DefaultBuild.value.EchoesData.length > 0) {
      DefaultBuild.value.EchoesData.forEach((echoData) => {
        const slot = echoData.EquipedSlot ?? 0
        if (slot >= 0 && slot < 5) {
          base[slot] = echoData
        }
      })
    }

    return base
  })

  const Stats = computed(() => {
    return StatsCalculator.CalculateTotalStats(CharacterId.value, DefaultBuild.value)
  })

  const Score = computed(() => {
    const buildScore = DefaultBuild.value.Score
    if (buildScore !== undefined) {
      const echoesScores = DefaultBuild.value.EchoesScores || ScoreCalculator.GetCharacterScore(CurrentCharacter.value, DefaultBuild.value)?.EchoesScores || []
      return {
        Score: buildScore,
        EchoesScores: echoesScores,
        Note: DefaultBuild.value.Note || 'F',
      }
    }

    return {
      Score: 0,
      EchoesScores: [],
      Note: 'F',
    }
  })

  function UpdateEcho(slot: number, echo: Partial<Echo>) {
    echo.EquipedSlot = slot
    echo.EquipedBy = CurrentCharacter.value.Id
    EchoesStore.Update(echo.Id, echo)

    const BuildsStore = useBuildsStore()

    const updatedEquipedEchoes = [...(DefaultBuild.value.EquipedEchoes || [])]
    updatedEquipedEchoes[slot] = echo.Id!

    const updatedEchoesData = [...(DefaultBuild.value.EchoesData || [])]
    const existingEchoIndex = updatedEchoesData.findIndex(e => e.EquipedSlot === slot)

    if (existingEchoIndex >= 0) {
      updatedEchoesData[existingEchoIndex] = {
        ...echo,
        BuildId: updatedEchoesData[existingEchoIndex]?.BuildId || Date.now() + Math.random(),
        EquipedSlot: slot,
        EquipedBy: CurrentCharacter.value.Id,
      } as Echo & { BuildId: number }
    }
    else {
      updatedEchoesData.push({
        ...echo,
        BuildId: Date.now() + Math.random() + slot,
        EquipedSlot: slot,
        EquipedBy: CurrentCharacter.value.Id,
      } as Echo & { BuildId: number })
    }

    BuildsStore.UpdateBuild(DefaultBuild.value.Id, {
      EquipedEchoes: updatedEquipedEchoes,
      EchoesData: updatedEchoesData,
    })

    const updatedScore = ScoreCalculator.GetCharacterScore(CurrentCharacter.value, DefaultBuild.value)
    if (updatedScore) {
      BuildsStore.UpdateBuild(DefaultBuild.value.Id, {
        Score: updatedScore.Score,
        Note: updatedScore.Note,
        EchoesScores: updatedScore.EchoesScores,
      })
    }
  }

  function GetEchoBySlot(slot: number) {
    return CurrentEchoes.value.find(x => x.EquipedSlot === slot)
  }

  function MigrateToBuilds() {
    const BuildsStore = useBuildsStore()

    const equippedEchoes = CurrentCharacter.value.EquipedEchoes || []
    const echoesData = equippedEchoes
      .map((id, index) => {
        if (id === -1)
          return null
        const echo = EchoesStore.GetEquipedBy(id, CurrentCharacter.value.Id)
        if (echo) {
          return {
            ...echo,
            BuildId: Date.now() + Math.random() + index,
            EquipedSlot: index,
            EquipedBy: CurrentCharacter.value.Id,
          } as Echo & { BuildId: number }
        }
        return null
      })
      .filter((echo): echo is NonNullable<typeof echo> => echo !== null)

    const weaponId = CurrentCharacter.value.EquipedWeapon

    BuildsStore.UpdateBuild(DefaultBuild.value.Id, {
      WeaponId: weaponId,
      EquipedEchoes: equippedEchoes,
      EchoesData: echoesData,
    })

    const updatedScore = ScoreCalculator.GetCharacterScore(CurrentCharacter.value, DefaultBuild.value)
    if (updatedScore) {
      BuildsStore.UpdateBuild(DefaultBuild.value.Id, {
        Score: updatedScore.Score,
        Note: updatedScore.Note,
        EchoesScores: updatedScore.EchoesScores,
      })
    }
  }

  return {
    CurrentCharacter,
    CurrentWeapon,
    CurrentEchoes,
    Stats,
    Score,
    UpdateEcho,
    GetEchoBySlot,
    MigrateToBuilds,
  }
}
