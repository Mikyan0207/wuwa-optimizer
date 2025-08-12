import type { BuildWithDependencies } from '~/Core/Interfaces/Build'
import type Echo from '~/Core/Interfaces/Echo'
import { useScoreCalculator } from '~/composables/calculators/UseScoreCalculator'
import { useStatsCalculator } from '~/composables/calculators/UseStatsCalculator'
import { useBuildsStore } from '~/stores/BuildsStore'
import { useCharacter } from '../characters/UseCharacter'

export function useBuild() {
  const { CurrentCharacter } = useCharacter()
  const BuildsStore = useBuildsStore()

  const StatsCalculator = useStatsCalculator()
  const ScoreCalculator = useScoreCalculator()

  const CurrentBuild = ref<BuildWithDependencies | undefined>(undefined)

  const CurrentWeapon = computed(() => {
    return CurrentBuild.value?.Weapon
  })

  watch(CurrentCharacter, async (newCharacter, oldCharacter) => {
    if (newCharacter?.Id === oldCharacter?.Id)
      return

    if (!CurrentCharacter.value || CurrentBuild.value)
      return

    CurrentBuild.value = await BuildsStore.GetDefaultBuildWithDependencies(CurrentCharacter.value.Id)
  })

  const CurrentStats = computed(() => {
    if (!CurrentCharacter.value)
      return []

    if (!CurrentBuild.value) {
      return CurrentCharacter.value.BaseStats
    }

    return StatsCalculator.CalculateTotalStats(CurrentCharacter.value!, CurrentBuild.value)
  })

  const CurrentEchoes = computed(() => {
    return Array.from({ length: 5 }, (_, index) => {
      return CurrentBuild.value?.Echoes?.[index] || undefined
    })
  })

  function UpdateEcho(slot: number, echo: Partial<Echo>) {
    if (!CurrentBuild.value || slot < 0 || slot >= 5)
      return

    const newEchoes = [...(CurrentBuild.value.Echoes || [])]

    if (newEchoes[slot]) {
      newEchoes[slot] = { ...newEchoes[slot], ...echo }
    }
    else {
      newEchoes[slot] = echo as Echo
    }

    BuildsStore.UpdateBuild(CurrentBuild.value.Id, {
      Echoes: newEchoes,
    })

    UpdateScore()
  }

  function ReorderEchoes(newOrder: Echo[]) {
    if (!CurrentBuild.value)
      return

    const filteredOrder = newOrder.filter(echo => echo !== undefined)

    BuildsStore.UpdateBuild(CurrentBuild.value.Id, {
      Echoes: filteredOrder,
    })
  }

  function UpdateScore() {
    if (!CurrentBuild.value || !CurrentCharacter.value)
      return

    const scoreResult = ScoreCalculator.GetCharacterScore(CurrentCharacter.value, CurrentBuild.value)
    if (scoreResult) {
      BuildsStore.UpdateBuild(CurrentBuild.value.Id, {
        Score: scoreResult.Score,
        Note: scoreResult.Note,
      })
    }
  }

  function GetEchoBySlot(slot: number) {
    return CurrentEchoes.value[slot]
  }

  return {
    CurrentCharacter,
    CurrentBuild,
    CurrentWeapon,
    CurrentEchoes,
    CurrentStats,
    GetEchoBySlot,
    UpdateEcho,
    UpdateScore,
    ReorderEchoes,

    Score: computed(() => {
      return CurrentBuild.value?.Score || 0
    }),
    Note: computed(() => {
      return CurrentBuild.value?.Note || 'F'
    }),
  }
}
