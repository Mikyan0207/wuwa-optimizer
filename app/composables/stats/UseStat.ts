import type Statistic from '~/Core/Interfaces/Statistic'
import { StatType } from '~/Core/Enums/StatType'
import { STAT_ICONS } from '~/Core/Statistics'

export function useStat(stat: Statistic | undefined, weights: Record<StatType, number>, isMainStat: boolean) {
  const { t } = useI18n()

  const Weight = computed(() => {
    const statValue = toValue(stat)
    const weightsValue = toValue(weights)

    if (!statValue || !weightsValue)
      return 0

    let weight = weightsValue[statValue.Type] || 0

    if (weight === 0) {
      const percentageType = GetPercentageStatType(statValue.Type)
      if (percentageType) {
        weight = weightsValue[percentageType] || 0
      }
    }

    return weight
  })

  const Name = computed(() => {
    const statValue = toValue(stat)
    if (!statValue)
      return ''

    return t(`label_stat_${statValue.Type.toLowerCase()}`)
  })

  const Icon = computed(() => {
    const statValue = toValue(stat)
    if (!statValue)
      return ''

    return STAT_ICONS[statValue.Type]
  })

  const FormattedValue = computed(() => {
    const statValue = toValue(stat)
    if (!statValue)
      return ''

    const value = statValue.Value
    if (!IsPercentageStat(statValue.Type))
      return value.toString()

    const decimals = toValue(isMainStat) === true ? 2 : 1
    return `${value.toFixed(decimals)}%`
  })

  function IsPercentageStat(statType: StatType): boolean {
    return statType !== StatType.HP
      && statType !== StatType.DEF
      && statType !== StatType.ATTACK
  }

  function GetPercentageStatType(statType: StatType): StatType | null {
    switch (statType) {
      case 'ATTACK':
        return StatType.ATTACK_PERCENTAGE
      case 'HP':
        return StatType.HP_PERCENTAGE
      case 'DEF':
        return StatType.DEF_PERCENTAGE
      default:
        return null
    }
  }

  function GetWeightColor(): string | undefined {
    const weightColorMap: Record<number, string> = {
      1.0: 'text-amber-500',
      0.9: 'text-orange-500',
      0.8: 'text-red-500',
      0.7: 'text-purple-500',
      0.6: 'text-indigo-500',
      0.5: 'text-blue-500',
      0.4: 'text-cyan-500',
      0.3: 'text-teal-500',
      0.2: 'text-green-500',
      0.1: 'text-lime-500',
      0.0: 'text-gray-400',
    }

    const w = Weight.value ?? 0
    const weight = Math.floor(w * 10) / 10

    return weightColorMap[weight] || weightColorMap[0.0]
  }

  return {
    Name,
    Icon,
    Weight,
    FormattedValue,
    GetWeightColor,
  }
}
