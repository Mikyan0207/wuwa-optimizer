import type Statistic from '../Interfaces/Statistic'
import { EchoCost } from '../Enums/EchoCost'
import { StatType } from '../Enums/StatType'
import { FOUR_COST_SECONDARY_STATS_VALUES, ONE_COST_SECONDARY_STATS_VALUES, STAT_NAMES, THREE_COST_SECONDARY_STATS_VALUES } from '../Statistics'

export function GetSecondaryStat(echoCost: EchoCost): Statistic {
  switch (echoCost) {
    case EchoCost.FOUR_COST:
      return {
        Type: StatType.ATTACK,
        Value: FOUR_COST_SECONDARY_STATS_VALUES[StatType.ATTACK],
      }
    case EchoCost.THREE_COST:
      return {
        Type: StatType.ATTACK,
        Value: THREE_COST_SECONDARY_STATS_VALUES[StatType.ATTACK],
      }
    case EchoCost.ONE_COST:
      return {
        Type: StatType.HP,
        Value: ONE_COST_SECONDARY_STATS_VALUES[StatType.HP],
      }
  }
}

export function GetStatTypeFromName(name: string) {
  for (const [key, value] of Object.entries(STAT_NAMES)) {
    if (value.toLowerCase() === name.toLowerCase()) {
      return key as StatType
    }
  }
  return StatType.NONE
}
