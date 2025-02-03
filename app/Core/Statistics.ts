import type IStatistic from './Interfaces/IStatistic'
import { EchoCost } from './Enums/EchoCost'
import { StatType } from './Enums/StatType'

export function MAKE_STAT(type: StatType, value: number): IStatistic {
  return {
    Type: type,
    Value: value,
  }
}

export const STAT_NAMES: Record<StatType, string> = {
  [StatType.NONE]: '',
  [StatType.HP]: 'HP',
  [StatType.CRIT_DMG]: 'Crit. DMG',
  [StatType.CRIT_RATE]: 'Crit. Rate',
  [StatType.ATTACK]: 'ATK',
  [StatType.ATTACK_PERCENTAGE]: 'ATK %',
  [StatType.HP_PERCENTAGE]: 'HP %',
  [StatType.HEALING_BONUS]: 'Healing Bonus',
  [StatType.DEF]: 'DEF',
  [StatType.DEF_PERCENTAGE]: 'DEF %',
  [StatType.ENERGY_REGENERATION]: 'Energy Regen.',
  [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 'Basic ATK DMG Bonus',
  [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 'Heavy ATK DMG Bonus',
  [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 'Res. Liberation DMG Bonus',
  [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 'Res. Skill DMG Bonus',
  [StatType.ELECTRO_DMG_BONUS]: 'Electro DMG Bonus',
  [StatType.FUSION_DMG_BONUS]: 'Fusion DMG Bonus',
  [StatType.GLACIO_DMG_BONUS]: 'Glacio DMG Bonus',
  [StatType.HAVOC_DMG_BONUS]: 'Havoc DMG Bonus',
  [StatType.SPECTRO_DMG_BONUS]: 'Spectro DMG Bonus',
  [StatType.AERO_DMG_BONUS]: 'Aero DMG Bonus',
}

export const FOUR_COST_MAIN_STATS_VALUES: Record<StatType, number> = {
  [StatType.NONE]: 0,
  [StatType.CRIT_DMG]: 44.0,
  [StatType.CRIT_RATE]: 22.0,
  [StatType.ATTACK]: 150,
  [StatType.ATTACK_PERCENTAGE]: 33.0,
  [StatType.HP]: 0,
  [StatType.HP_PERCENTAGE]: 33.0,
  [StatType.HEALING_BONUS]: 26.0,
  [StatType.DEF]: 0,
  [StatType.DEF_PERCENTAGE]: 41.5,
  [StatType.ENERGY_REGENERATION]: 0,
  [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0,
  [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0,
  [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
  [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
  [StatType.AERO_DMG_BONUS]: 0.0,
  [StatType.ELECTRO_DMG_BONUS]: 0,
  [StatType.FUSION_DMG_BONUS]: 0,
  [StatType.GLACIO_DMG_BONUS]: 0,
  [StatType.HAVOC_DMG_BONUS]: 0,
  [StatType.SPECTRO_DMG_BONUS]: 0,
}

export const THREE_COST_MAIN_STATS_VALUES: Record<StatType, number> = {
  [StatType.NONE]: 0,
  [StatType.CRIT_DMG]: 0,
  [StatType.CRIT_RATE]: 0,
  [StatType.ATTACK]: 100,
  [StatType.ATTACK_PERCENTAGE]: 30.0,
  [StatType.HP]: 0,
  [StatType.HP_PERCENTAGE]: 30.0,
  [StatType.HEALING_BONUS]: 26.0,
  [StatType.DEF]: 0,
  [StatType.DEF_PERCENTAGE]: 38.0,
  [StatType.ENERGY_REGENERATION]: 32.0,
  [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0,
  [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0,
  [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
  [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
  [StatType.AERO_DMG_BONUS]: 30.0,
  [StatType.ELECTRO_DMG_BONUS]: 30.0,
  [StatType.FUSION_DMG_BONUS]: 30.0,
  [StatType.GLACIO_DMG_BONUS]: 30.0,
  [StatType.HAVOC_DMG_BONUS]: 30.0,
  [StatType.SPECTRO_DMG_BONUS]: 30.0,
}

export const ONE_COST_MAIN_STATS_VALUES: Record<StatType, number> = {
  [StatType.NONE]: 0,
  [StatType.CRIT_DMG]: 0,
  [StatType.CRIT_RATE]: 0,
  [StatType.ATTACK]: 0,
  [StatType.ATTACK_PERCENTAGE]: 18.0,
  [StatType.HP]: 2280,
  [StatType.HP_PERCENTAGE]: 22.8,
  [StatType.HEALING_BONUS]: 0.0,
  [StatType.DEF]: 0,
  [StatType.DEF_PERCENTAGE]: 18.0,
  [StatType.ENERGY_REGENERATION]: 0,
  [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0,
  [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0,
  [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
  [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
  [StatType.AERO_DMG_BONUS]: 0,
  [StatType.ELECTRO_DMG_BONUS]: 0,
  [StatType.FUSION_DMG_BONUS]: 0,
  [StatType.GLACIO_DMG_BONUS]: 0,
  [StatType.HAVOC_DMG_BONUS]: 0,
  [StatType.SPECTRO_DMG_BONUS]: 0,
}

export const SUB_STAT_VALUES: Record<StatType, number[]> = {
  [StatType.NONE]: [],
  [StatType.CRIT_RATE]: [6.3, 6.9, 7.5, 8.1, 8.7, 9.3, 9.9, 10.5],
  [StatType.CRIT_DMG]: [12.6, 13.8, 15.0, 16.2, 17.4, 18.6, 19.8, 21.0],
  [StatType.ATTACK]: [30, 40, 50, 60],
  [StatType.ATTACK_PERCENTAGE]: [6.4, 7.1, 7.9, 8.6, 9.4, 10.1, 10.9, 11.6],
  [StatType.HP]: [320, 360, 390, 430, 470, 510, 540, 580],
  [StatType.HP_PERCENTAGE]: [],
  [StatType.HEALING_BONUS]: [],
  [StatType.DEF]: [],
  [StatType.DEF_PERCENTAGE]: [],
  [StatType.ENERGY_REGENERATION]: [6.8, 7.6, 8.4, 9.2, 10, 10.8, 11.6, 12.4],
  [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: [],
  [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: [],
  [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: [],
  [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: [6.4, 7.1, 7.9, 8.6, 9.4, 10.1, 10.9, 11.6],
  [StatType.FUSION_DMG_BONUS]: [],
  [StatType.GLACIO_DMG_BONUS]: [],
  [StatType.HAVOC_DMG_BONUS]: [],
  [StatType.SPECTRO_DMG_BONUS]: [],
  [StatType.AERO_DMG_BONUS]: [],
  [StatType.ELECTRO_DMG_BONUS]: [],
}

export const STAT_ICONS: Record<StatType, string> = {
  [StatType.NONE]: '',
  [StatType.HP]: 'Icon_Attribute_Health.webp',
  [StatType.CRIT_DMG]: 'Icon_Attribute_Crit_DMG.webp',
  [StatType.CRIT_RATE]: 'Icon_Attribute_Crit_Rate.webp',
  [StatType.ATTACK]: 'Icon_Attribute_Attack.webp',
  [StatType.ATTACK_PERCENTAGE]: 'Icon_Attribute_Attack.webp',
  [StatType.HP_PERCENTAGE]: 'Icon_Attribute_Health.webp',
  [StatType.HEALING_BONUS]: 'Icon_Attribute_Healing.webp',
  [StatType.DEF]: 'Icon_Attribute_Defense.webp',
  [StatType.DEF_PERCENTAGE]: 'Icon_Attribute_Defense.webp',
  [StatType.ENERGY_REGENERATION]: 'Icon_Attribute_Energy_Regen.webp',
  [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 'Icon_Basic_Attack_DMG_Amplification.webp',
  [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 'Icon_Heavy_Attack_DMG_Amplification.webp',
  [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 'Icon_Resonance_Liberation_DMG_Amplification.webp',
  [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 'Icon_Resonance_Skill_DMG_Amplification.webp',
  [StatType.ELECTRO_DMG_BONUS]: 'Icon_Electro_DMG_Bonus.webp',
  [StatType.FUSION_DMG_BONUS]: 'Icon_Fusion_DMG_Bonus.webp',
  [StatType.GLACIO_DMG_BONUS]: 'Icon_Glacio_DMG_Bonus.webp',
  [StatType.HAVOC_DMG_BONUS]: 'Icon_Havoc_DMG_Bonus.webp',
  [StatType.SPECTRO_DMG_BONUS]: 'Icon_Spectro_DMG_Bonus.webp',
  [StatType.AERO_DMG_BONUS]: 'Icon_Aero_DMG_Bonus.webp',
}

export function IsMainStatType(type: StatType, echoCost: EchoCost): boolean {
  switch (echoCost) {
    case EchoCost.FOUR_COST:
      return FOUR_COST_MAIN_STATS_VALUES[type] !== 0
    case EchoCost.THREE_COST:
      return THREE_COST_MAIN_STATS_VALUES[type] !== 0
    case EchoCost.ONE_COST:
      return ONE_COST_MAIN_STATS_VALUES[type] !== 0
    default:
      return false
  }
}

export function IsSubStatType(type: StatType) {
  return SUB_STAT_VALUES[type]?.length !== 0 || false
}
