import type Echo from '~/Core/Interfaces/Echo'

export function useEchoStats(echo?: Echo) {
  const MainStatistic = computed(() => {
    const echoValue = toValue(echo)
    return echoValue?.MainStatistic
  })

  const SecondaryStatistic = computed(() => {
    const echoValue = toValue(echo)
    return echoValue?.SecondaryStatistic
  })

  const IsValid = computed(() => {
    const echoValue = toValue(echo)
    return echoValue && echoValue.Id !== -1
  })

  const SubStats = computed(() => {
    if (!IsValid.value)
      return []

    const echoValue = toValue(echo)
    return echoValue?.Statistics ?? []
  })

  const ExtraStats = computed(() => {
    if (!IsValid.value)
      return []

    const echoValue = toValue(echo)
    return echoValue?.ExtraStatistics ?? []
  })

  return { MainStatistic, SecondaryStatistic, SubStats, ExtraStats, IsValid }
}
