import type Build from '~/Core/Interfaces/Build'
import type Echo from '~/Core/Interfaces/Echo'
import { useCharacter } from '~/composables/characters/UseCharacter'
import { Empty_Echo } from '~/Core/Echoes'
import { ScoreGrade } from '~/Core/Enums/ScoreGrade'
import { useBuildsStore } from '~/stores/BuildsStore'
import { useWeaponsStore } from '~/stores/WeaponsStore'

export function useBuild() {
  const { CurrentCharacter } = useCharacter()
  const WeaponsStore = useWeaponsStore()
  const BuildsStore = useBuildsStore()

  const StatsCalculator = useStatsCalculator()
  const ScoreCalculator = useScoreCalculator()

  const DefaultBuild = computed(() => {
    return BuildsStore.GetDefaultBuild(CurrentCharacter.value.Id)
      || BuildsStore.CreateBuild('Default Build', CurrentCharacter.value.Id)
      || {
        Id: '',
        CharacterId: CurrentCharacter.value.Id,
        Name: 'Default Build',
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
        IsDefault: false,
        Order: 0,
        Echoes: [],
      } as Build
  })

  const CurrentWeapon = computed({
    get: () => {
      const weaponId = DefaultBuild.value.WeaponId
      return weaponId ? WeaponsStore.GetWeapon(weaponId) : undefined
    },
    set: (val) => {
      BuildsStore.UpdateBuild(DefaultBuild.value.Id, {
        WeaponId: val?.Id,
      })

      const updatedScore = ScoreCalculator.GetCharacterScore(CurrentCharacter.value, DefaultBuild.value)
      if (updatedScore) {
        BuildsStore.UpdateBuild(DefaultBuild.value.Id, {
          Score: updatedScore.Score,
          Note: updatedScore.Note,
        })
      }
    },
  })

  const CurrentEchoes = computed(() => {
    const base = Array.from({ length: 5 }, () => ({ ...Empty_Echo as Echo }))

    DefaultBuild.value.Echoes.forEach((echo: Echo, idx: number) => {
      const slot = echo.EquipedSlot ?? idx
      if (slot >= 0 && slot < 5) {
        base[slot] = { ...echo }
      }
    })

    return base
  })

  const Stats = computed(() => {
    return StatsCalculator.CalculateTotalStats(DefaultBuild.value)
  })

  const Score = computed(() => {
    const currentScore = ScoreCalculator.GetCharacterScore(CurrentCharacter.value, DefaultBuild.value)

    if (currentScore) {
      if (currentScore.Score !== DefaultBuild.value.Score) {
        BuildsStore.UpdateBuild(DefaultBuild.value.Id, {
          Score: currentScore.Score,
          Note: currentScore.Note,
        })
      }

      return {
        Score: currentScore.Score,
        EchoesScores: currentScore.EchoesScores,
        Note: currentScore.Note,
      }
    }

    return {
      Score: 0,
      EchoesScores: [],
      Note: ScoreGrade.F,
    }
  })

  function UpdateEcho(slot: number, echo: Partial<Echo>) {
    const updatedEchoes: Echo[] = [...((DefaultBuild.value.Echoes as Echo[]) || [])]
    const existingEchoIndex = updatedEchoes.findIndex(e => e.EquipedSlot === slot)

    if (existingEchoIndex >= 0) {
      const existingEcho = updatedEchoes[existingEchoIndex] as Echo
      updatedEchoes[existingEchoIndex] = {
        ...existingEcho,
        ...echo,
        BuildId: DefaultBuild.value.Id,
        EquipedSlot: slot,
      } as Echo
    }
    else {
      updatedEchoes.push({
        ...echo,
        BuildId: DefaultBuild.value.Id,
        EquipedSlot: slot,
      } as Echo)
    }

    BuildsStore.UpdateBuild(DefaultBuild.value.Id, {
      Echoes: updatedEchoes,
    })
  }

  function GetEchoBySlot(slot: number) {
    return CurrentEchoes.value.find((x: Echo) => x.EquipedSlot === slot)
  }

  return {
    DefaultBuild,
    CurrentWeapon,
    CurrentEchoes,
    Stats,
    Score,
    UpdateEcho,
    GetEchoBySlot,
  }
}
