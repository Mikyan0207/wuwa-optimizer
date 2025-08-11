import type Build from '~/Core/Interfaces/Build'
import type Echo from '~/Core/Interfaces/Echo'
import { useScoreCalculator } from '~/composables/calculators/UseScoreCalculator'
import { useStatsCalculator } from '~/composables/calculators/UseStatsCalculator'
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

  const DefaultBuild = ref<Build | undefined>(undefined)

  watchEffect(() => {
    if (CurrentCharacter.value) {
      DefaultBuild.value = BuildsStore.GetDefaultBuild(CurrentCharacter.value.Id)
    }
  })

  const Score = computed(() => {
    if (!DefaultBuild.value)
      return 0

    return DefaultBuild.value.Score
  })

  const Note = computed(() => {
    if (!DefaultBuild.value)
      return ScoreGrade.F

    return DefaultBuild.value.Note
  })

  const CurrentWeapon = computed({
    get: () => {
      if (!DefaultBuild.value)
        return undefined

      const weaponId = DefaultBuild.value.WeaponId

      return weaponId ? WeaponsStore.GetById(weaponId) : undefined
    },
    set: (val) => {
      if (!DefaultBuild.value)
        return

      BuildsStore.UpdateBuild(DefaultBuild.value.Id, {
        WeaponId: val?.Id,
      })

      UpdateScore()
    },
  })

  function UpdateScore() {
    if (!DefaultBuild.value)
      return

    const updatedScore = ScoreCalculator.GetCharacterScore(CurrentCharacter.value, DefaultBuild.value)
    if (updatedScore) {
      BuildsStore.UpdateBuild(DefaultBuild.value.Id, {
        Score: updatedScore.Score,
        Note: updatedScore.Note,
      })
    }
  }

  const CurrentEchoes = computed(() => {
    const base = Array.from({ length: 5 }, () => ({ ...Empty_Echo as Echo }))

    if (!DefaultBuild.value)
      return base

    DefaultBuild.value.Echoes.forEach((echo: Echo, idx: number) => {
      const slot = echo.EquipedSlot ?? idx
      if (slot >= 0 && slot < 5) {
        base[slot] = { ...echo }
      }
    })

    return base
  })

  const Stats = computed(() => {
    if (!DefaultBuild.value || !CurrentCharacter.value)
      return undefined

    return StatsCalculator.CalculateTotalStats(CurrentCharacter.value, DefaultBuild.value)
  })

  function UpdateEcho(slot: number, echo: Partial<Echo>) {
    if (!DefaultBuild.value)
      return

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
    Note,
    UpdateEcho,
    GetEchoBySlot,
  }
}
