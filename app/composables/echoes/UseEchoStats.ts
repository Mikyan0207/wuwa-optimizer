import type Echo from '~/Core/Interfaces/Echo'

export function useEchoStats(echo?: Echo) {
  const MainStatistic = computed(() => echo?.MainStatistic)
  const SecondaryStatistic = computed(() => echo?.SecondaryStatistic)

  const IsValid = computed(() => echo && echo.Id !== -1)

  const SubStats = computed(() => {
    if (!IsValid.value)
      return []

    return echo?.Statistics ?? []
  })

  const ExtraStats = computed(() => {
    if (!IsValid.value)
      return []

    return echo?.ExtraStatistics ?? []
  })

  return { MainStatistic, SecondaryStatistic, SubStats, ExtraStats, IsValid }
}
