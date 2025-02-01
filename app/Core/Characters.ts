import type ICharacter from './Interfaces/ICharacter'
import { CharacterType } from './Enums/CharacterType'
import { Rarity } from './Enums/Rarity'
import { StatType } from './Enums/StatType'
import { WeaponType } from './Enums/WeaponType'

// #region 4 Stars

// 1102
export const Sanhua: ICharacter = {
  Id: 1102,
  Name: 'Sanhua',
  Rarity: Rarity.FOUR_STARS,
  Icon: 'Sanhua_Icon.webp',
  SplashArt: 'Sanhua_Full_Sprite.webp',
  Type: CharacterType.GLACIO,
  WeaponType: WeaponType.SWORD,
  Level: 90,
  Stats: [
    {
      Value: 10063,
      Type: StatType.HP,
    },
    {
      Value: 941,
      Type: StatType.DEF,
    },
    {
      Value: 275,
      Type: StatType.ATTACK,
    },
    {
      Value: 5,
      Type: StatType.CRIT_RATE,
    },
    {
      Value: 150,
      Type: StatType.CRIT_DMG,
    },
    {
      Value: 100,
      Type: StatType.ENERGY_REGENERATION,
    },
    {
      Value: 0,
      Type: StatType.HEALING_BONUS,
    },
    {
      Value: 0,
      Type: StatType.BASIC_ATTACK_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.HEAVY_ATTACK_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.RESONANCE_SKILL_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.GLACIO_DMG_BONUS,
    },
  ],
  Sequences: [],
  EquipedEchoes: [],
  Unlocked: false,
}

// 1402
export const Yangyang: ICharacter = {
  Id: 1402,
  Name: 'Yangyang',
  Icon: 'Yangyang_Icon.webp',
  SplashArt: 'Yangyang_Full_Sprite.webp',
  Rarity: Rarity.FOUR_STARS,
  Type: CharacterType.AERO,
  WeaponType: WeaponType.SWORD,
  Level: 90,
  Stats: [
    {
      Value: 10200,
      Type: StatType.HP,
    },
    {
      Value: 1100,
      Type: StatType.DEF,
    },
    {
      Value: 250,
      Type: StatType.ATTACK,
    },
    {
      Value: 5,
      Type: StatType.CRIT_RATE,
    },
    {
      Value: 150,
      Type: StatType.CRIT_DMG,
    },
    {
      Value: 100,
      Type: StatType.ENERGY_REGENERATION,
    },
    {
      Value: 0,
      Type: StatType.HEALING_BONUS,
    },
    {
      Value: 0,
      Type: StatType.BASIC_ATTACK_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.HEAVY_ATTACK_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.RESONANCE_SKILL_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.AERO_DMG_BONUS,
    },
  ],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 1,
    [StatType.CRIT_RATE]: 1,
    [StatType.ATTACK]: 0.5,
    [StatType.ATTACK_PERCENTAGE]: 0.75,
    [StatType.HP]: 0,
    [StatType.HP_PERCENTAGE]: 0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0.25,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0.25,
    [StatType.AERO_DMG_BONUS]: 0.1,
  },
  Sequences: [
    {
      Name: '',
      Icon: 'Yangyang_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Yangyang_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Yangyang_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Yangyang_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Yangyang_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Yangyang_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Skills: [
    {
      Id: 'Basic Attack',
      Level: 1,
      Icon: 'Skill_Sword.webp',
      Unlocked: true,
    },
    {
      Id: 'Basic_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Aero_DMG_Bonus.webp',
      Unlocked: true,
    },
    {
      Id: 'Basic_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Aero_DMG_Bonus.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance Skill',
      Level: 1,
      Icon: 'Yangyang_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Skill_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
    },
    {
      Id: 'Skill_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
    },
    {
      Id: 'Forte Circuit',
      Level: 1,
      Icon: 'Yangyang_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Yangyang_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Yangyang_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance Liberation',
      Level: 1,
      Icon: 'Yangyang_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Liberation_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
    },
    {
      Id: 'Liberation_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro Skill',
      Level: 1,
      Icon: 'Yangyang_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Aero_DMG_Bonus.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Aero_DMG_Bonus.webp',
      Unlocked: true,
    },
    {
      Id: 'Outro Skill',
      Level: 1,
      Icon: 'Yangyang_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
  Unlocked: false,
}

// 1403
export const Aalto: ICharacter = {
  Id: 1403,
  Name: 'Aalto',
  Icon: 'Aalto_Icon.webp',
  SplashArt: 'Aalto_Full_Sprite.webp',
  Rarity: Rarity.FOUR_STARS,
  Type: CharacterType.AERO,
  WeaponType: WeaponType.PISTOLS,
  Level: 90,
  Stats: [
    {
      Value: 9850,
      Type: StatType.HP,
    },
    {
      Value: 1076,
      Type: StatType.DEF,
    },
    {
      Value: 263,
      Type: StatType.ATTACK,
    },
    {
      Value: 5,
      Type: StatType.CRIT_RATE,
    },
    {
      Value: 150,
      Type: StatType.CRIT_DMG,
    },
    {
      Value: 100,
      Type: StatType.ENERGY_REGENERATION,
    },
    {
      Value: 0,
      Type: StatType.HEALING_BONUS,
    },
    {
      Value: 0,
      Type: StatType.BASIC_ATTACK_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.HEAVY_ATTACK_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.RESONANCE_SKILL_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.AERO_DMG_BONUS,
    },
  ],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 1,
    [StatType.CRIT_RATE]: 1,
    [StatType.ATTACK]: 0.5,
    [StatType.ATTACK_PERCENTAGE]: 0.75,
    [StatType.HP]: 0,
    [StatType.HP_PERCENTAGE]: 0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0.5,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.AERO_DMG_BONUS]: 0.1,
  },
  Sequences: [
    {
      Name: '',
      Icon: 'Aalto_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Aalto_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Aalto_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Aalto_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Aalto_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Aalto_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Skills: [
    {
      Id: 'Basic Attack',
      Level: 1,
      Icon: 'Skill_Pistols.webp',
      Unlocked: true,
    },
    {
      Id: 'Basic_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Aero_DMG_Bonus.webp',
      Unlocked: true,
    },
    {
      Id: 'Basic_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Aero_DMG_Bonus.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance Skill',
      Level: 1,
      Icon: 'Aalto_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Skill_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
    },
    {
      Id: 'Skill_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
    },
    {
      Id: 'Forte Circuit',
      Level: 1,
      Icon: 'Aalto_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Aalto_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Aalto_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance Liberation',
      Level: 1,
      Icon: 'Aalto_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Liberation_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
    },
    {
      Id: 'Liberation_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro Skill',
      Level: 1,
      Icon: 'Aalto_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Aero_DMG_Bonus.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Aero_DMG_Bonus.webp',
      Unlocked: true,
    },
    {
      Id: 'Outro Skill',
      Level: 1,
      Icon: 'Aalto_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
  Unlocked: false,
}

// 1602
export const Danjin: ICharacter = {
  Id: 1602,
  Name: 'Danjin',
  Icon: 'Danjin_Icon.webp',
  SplashArt: 'Danjin_Portrait.webp',
  Rarity: Rarity.FOUR_STARS,
  Type: CharacterType.HAVOC,
  WeaponType: WeaponType.SWORD,
  Level: 90,
  Stats: [
    {
      Value: 9438,
      Type: StatType.HP,
    },
    {
      Value: 1149,
      Type: StatType.DEF,
    },
    {
      Value: 263,
      Type: StatType.ATTACK,
    },
    {
      Value: 5,
      Type: StatType.CRIT_RATE,
    },
    {
      Value: 150,
      Type: StatType.CRIT_DMG,
    },
    {
      Value: 100,
      Type: StatType.ENERGY_REGENERATION,
    },
    {
      Value: 0,
      Type: StatType.HEALING_BONUS,
    },
    {
      Value: 0,
      Type: StatType.BASIC_ATTACK_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.HEAVY_ATTACK_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.RESONANCE_SKILL_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.HAVOC_DMG_BONUS,
    },
  ],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 1,
    [StatType.CRIT_RATE]: 1,
    [StatType.ATTACK]: 0.70,
    [StatType.ATTACK_PERCENTAGE]: 0.75,
    [StatType.HP]: 0,
    [StatType.HP_PERCENTAGE]: 0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0.5,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0.5,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0.5,
    [StatType.HAVOC_DMG_BONUS]: 0.1,
  },
  Sequences: [
    {
      Name: '',
      Icon: 'Danjin_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Danjin_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Danjin_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Danjin_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Danjin_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Danjin_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Skills: [
    {
      Id: 'Basic Attack',
      Level: 1,
      Icon: 'Skill_Sword.webp',
      Unlocked: true,
    },
    {
      Id: 'Basic_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Havoc_DMG_Bonus.webp',
      Unlocked: true,
    },
    {
      Id: 'Basic_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Havoc_DMG_Bonus.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance Skill',
      Level: 1,
      Icon: 'Danjin_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Skill_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
    },
    {
      Id: 'Skill_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
    },
    {
      Id: 'Forte Circuit',
      Level: 1,
      Icon: 'Danjin_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Danjin_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Danjin_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance Liberation',
      Level: 1,
      Icon: 'Danjin_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Liberation_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
    },
    {
      Id: 'Liberation_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro Skill',
      Level: 1,
      Icon: 'Danjin_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Havoc_DMG_Bonus.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Havoc_DMG_Bonus.webp',
      Unlocked: true,
    },
    {
      Id: 'Outro Skill',
      Level: 1,
      Icon: 'Danjin_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
  Unlocked: false,
}

// #endregion

// #region 5 Stars

// 1105
export const Zhezhi: ICharacter = {
  Id: 1105,
  Name: 'Zhezhi',
  Icon: 'Zhezhi_Icon.webp',
  SplashArt: 'Zhezhi_Portrait.webp',
  Rarity: Rarity.FIVE_STARS,
  Type: CharacterType.GLACIO,
  WeaponType: WeaponType.RECTIFIER,
  Level: 90,
  Stats: [
    {
      Value: 12250,
      Type: StatType.HP,
    },
    {
      Value: 1198,
      Type: StatType.DEF,
    },
    {
      Value: 375,
      Type: StatType.ATTACK,
    },
    {
      Value: 5,
      Type: StatType.CRIT_RATE,
    },
    {
      Value: 150,
      Type: StatType.CRIT_DMG,
    },
    {
      Value: 100,
      Type: StatType.ENERGY_REGENERATION,
    },
    {
      Value: 0,
      Type: StatType.HEALING_BONUS,
    },
    {
      Value: 0,
      Type: StatType.BASIC_ATTACK_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.HEAVY_ATTACK_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.RESONANCE_SKILL_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.GLACIO_DMG_BONUS,
    },
  ],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 1,
    [StatType.CRIT_RATE]: 1,
    [StatType.ATTACK]: 0.5,
    [StatType.ATTACK_PERCENTAGE]: 0.75,
    [StatType.HP]: 0,
    [StatType.HP_PERCENTAGE]: 0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0.75,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0.25,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.ELECTRO_DMG_BONUS]: 0,
    [StatType.FUSION_DMG_BONUS]: 0,
    [StatType.GLACIO_DMG_BONUS]: 0.1,
    [StatType.HAVOC_DMG_BONUS]: 0,
    [StatType.SPECTRO_DMG_BONUS]: 0,
  },
  Sequences: [
    {
      Name: '',
      Icon: 'Zhezhi_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Zhezhi_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Zhezhi_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Zhezhi_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Zhezhi_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Zhezhi_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Skills: [
    {
      Id: 'Basic Attack',
      Level: 1,
      Icon: 'Skill_Rectifier.webp',
      Unlocked: true,
    },
    {
      Id: 'Basic_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.20,
      },
    },
    {
      Id: 'Basic_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.80,
      },
    },
    {
      Id: 'Resonance Skill',
      Level: 1,
      Icon: 'Zhezhi_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Skill_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.80,
      },
    },
    {
      Id: 'Skill_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.20,
      },
    },
    {
      Id: 'Forte Circuit',
      Level: 1,
      Icon: 'Zhezhi_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Zhezhi_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Zhezhi_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance Liberation',
      Level: 1,
      Icon: 'Zhezhi_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Liberation_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.80,
      },
    },
    {
      Id: 'Liberation_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.20,
      },
    },
    {
      Id: 'Intro Skill',
      Level: 1,
      Icon: 'Zhezhi_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.20,
      },
    },
    {
      Id: 'Intro_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.80,
      },
    },
    {
      Id: 'Outro Skill',
      Level: 1,
      Icon: 'Zhezhi_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
  Unlocked: false,
}

// 1107
export const Carlotta: ICharacter = {
  Id: 1107,
  Name: 'Carlotta',
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Carlotta_Icon.webp',
  SplashArt: 'Carlotta_Portrait.webp',
  // We don't need a background for Carlotta. We already have one with the portrait.
  // Background:
  Type: CharacterType.GLACIO,
  WeaponType: WeaponType.PISTOLS,
  Level: 90,
  Stats: [
    {
      Value: 12450,
      Type: StatType.HP,
    },
    {
      Value: 1198,
      Type: StatType.DEF,
    },
    {
      Value: 463,
      Type: StatType.ATTACK,
    },
    {
      Value: 5,
      Type: StatType.CRIT_RATE,
    },
    {
      Value: 150,
      Type: StatType.CRIT_DMG,
    },
    {
      Value: 100,
      Type: StatType.ENERGY_REGENERATION,
    },
    {
      Value: 0,
      Type: StatType.HEALING_BONUS,
    },
    {
      Value: 0,
      Type: StatType.BASIC_ATTACK_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.HEAVY_ATTACK_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.RESONANCE_SKILL_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.GLACIO_DMG_BONUS,
    },
  ],
  Sequences: [
    {
      Name: '',
      Icon: 'Carlotta_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Carlotta_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Carlotta_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Carlotta_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Carlotta_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Carlotta_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  EquipedEchoes: [],
  Unlocked: false,
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 1,
    [StatType.CRIT_RATE]: 1,
    [StatType.ATTACK]: 0,
    [StatType.ATTACK_PERCENTAGE]: 0.75,
    [StatType.HP]: 0,
    [StatType.HP_PERCENTAGE]: 0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0.5,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0.25,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0.5,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0.5,
    [StatType.ELECTRO_DMG_BONUS]: 0,
    [StatType.FUSION_DMG_BONUS]: 0,
    [StatType.GLACIO_DMG_BONUS]: 0.1,
    [StatType.HAVOC_DMG_BONUS]: 0,
    [StatType.SPECTRO_DMG_BONUS]: 0,
  },
}

// 1205
export const Changli: ICharacter = {
  Id: 1205,
  Name: 'Changli',
  Icon: 'Changli_Icon.webp',
  SplashArt: 'Changli_Portrait.webp',
  // We don't need a background for Changli. We already have one with the portrait.
  // Background: 'Changli_Splash_Art.webp',
  Rarity: Rarity.FIVE_STARS,
  Type: CharacterType.FUSION,
  WeaponType: WeaponType.SWORD,
  Level: 90,
  Stats: [
    {
      Value: 10388,
      Type: StatType.HP,
    },
    {
      Value: 1100,
      Type: StatType.DEF,
    },
    {
      Value: 463,
      Type: StatType.ATTACK,
    },
    {
      Value: 5,
      Type: StatType.CRIT_RATE,
    },
    {
      Value: 150,
      Type: StatType.CRIT_DMG,
    },
    {
      Value: 100,
      Type: StatType.ENERGY_REGENERATION,
    },
    {
      Value: 0,
      Type: StatType.HEALING_BONUS,
    },
    {
      Value: 0,
      Type: StatType.BASIC_ATTACK_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.HEAVY_ATTACK_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.RESONANCE_SKILL_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.FUSION_DMG_BONUS,
    },
  ],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 1,
    [StatType.CRIT_RATE]: 1,
    [StatType.ATTACK]: 0.5,
    [StatType.ATTACK_PERCENTAGE]: 0.75,
    [StatType.HP]: 0,
    [StatType.HP_PERCENTAGE]: 0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0.5,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0.5,
    [StatType.ELECTRO_DMG_BONUS]: 0,
    [StatType.FUSION_DMG_BONUS]: 0.1,
    [StatType.GLACIO_DMG_BONUS]: 0,
    [StatType.HAVOC_DMG_BONUS]: 0,
    [StatType.SPECTRO_DMG_BONUS]: 0,
    [StatType.AERO_DMG_BONUS]: 0,
  },
  Sequences: [
    {
      Name: '',
      Icon: 'Changli_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Changli_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Changli_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Changli_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Changli_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Changli_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Skills: [
    {
      Id: 'Basic Attack',
      Level: 1,
      Icon: 'Skill_Sword.webp',
      Unlocked: true,
    },
    {
      Id: 'Basic_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.20,
      },
    },
    {
      Id: 'Basic_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.80,
      },
    },
    {
      Id: 'Resonance Skill',
      Level: 1,
      Icon: 'Changli_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Skill_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.80,
      },
    },
    {
      Id: 'Skill_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.20,
      },
    },
    {
      Id: 'Forte Circuit',
      Level: 1,
      Icon: 'Changli_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Changli_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Changli_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance Liberation',
      Level: 1,
      Icon: 'Changli_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Liberation_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.80,
      },
    },
    {
      Id: 'Liberation_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.20,
      },
    },
    {
      Id: 'Intro Skill',
      Level: 1,
      Icon: 'Changli_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.20,
      },
    },
    {
      Id: 'Intro_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.80,
      },
    },
    {
      Id: 'Outro Skill',
      Level: 1,
      Icon: 'Changli_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
  Unlocked: false,
}

// 1304
export const Jinhsi: ICharacter = {
  Id: 1304,
  Name: 'Jinhsi',
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Jinhsi_Icon.webp',
  SplashArt: 'Jinhsi_Portrait.webp',
  Background: 'Jinhsi_Splash_Art.webp',
  WeaponType: WeaponType.BROADBLADE,
  Type: CharacterType.SPECTRO,
  Level: 90,
  Stats: [
    {
      Value: 10825,
      Type: StatType.HP,
    },
    {
      Value: 1259,
      Type: StatType.DEF,
    },
    {
      Value: 413,
      Type: StatType.ATTACK,
    },
    {
      Value: 5,
      Type: StatType.CRIT_RATE,
    },
    {
      Value: 150,
      Type: StatType.CRIT_DMG,
    },
    {
      Value: 100,
      Type: StatType.ENERGY_REGENERATION,
    },
    {
      Value: 0,
      Type: StatType.HEALING_BONUS,
    },
    {
      Value: 0,
      Type: StatType.BASIC_ATTACK_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.HEAVY_ATTACK_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.RESONANCE_SKILL_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.SPECTRO_DMG_BONUS,
    },
  ],
  Sequences: [
    {
      Name: '',
      Icon: 'Jinhsi_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Jinhsi_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Jinhsi_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Jinhsi_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Jinhsi_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Jinhsi_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Skills: [
    {
      Id: 'Basic Attack',
      Level: 1,
      Icon: 'Skill_Broadblade.webp',
      Unlocked: true,
    },
    {
      Id: 'Basic_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
    },
    {
      Id: 'Basic_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance Skill',
      Level: 1,
      Icon: 'Jinhsi_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Skill_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
    },
    {
      Id: 'Skill_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
    },
    {
      Id: 'Forte Circuit',
      Level: 1,
      Icon: 'Jinhsi_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Jinhsi_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Jinhsi_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance Liberation',
      Level: 1,
      Icon: 'Jinhsi_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Liberation_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
    },
    {
      Id: 'Liberation_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro Skill',
      Level: 1,
      Icon: 'Jinhsi_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
    },
    {
      Id: 'Outro Skill',
      Level: 1,
      Icon: 'Jinhsi_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
  Unlocked: false,
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 1,
    [StatType.CRIT_RATE]: 1,
    [StatType.ATTACK]: 0,
    [StatType.ATTACK_PERCENTAGE]: 0.75,
    [StatType.HP]: 0,
    [StatType.HP_PERCENTAGE]: 0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0.5,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0.25,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0.25,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0.5,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0.5,
    [StatType.ELECTRO_DMG_BONUS]: 0,
    [StatType.FUSION_DMG_BONUS]: 0,
    [StatType.GLACIO_DMG_BONUS]: 0,
    [StatType.HAVOC_DMG_BONUS]: 0,
    [StatType.SPECTRO_DMG_BONUS]: 0.1,
  },
}

// 1404
export const Jiyan: ICharacter = {
  Id: 1404,
  Name: 'Jiyan',
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Jiyan_Icon.webp',
  SplashArt: 'Jiyan_Portrait.webp',
  Background: 'Jiyan_Splash_Art.webp',
  WeaponType: WeaponType.BROADBLADE,
  Type: CharacterType.AERO,
  Level: 90,
  Stats: [
    {
      Value: 10488,
      Type: StatType.HP,
    },
    {
      Value: 1186,
      Type: StatType.DEF,
    },
    {
      Value: 438,
      Type: StatType.ATTACK,
    },
    {
      Value: 5,
      Type: StatType.CRIT_RATE,
    },
    {
      Value: 150,
      Type: StatType.CRIT_DMG,
    },
    {
      Value: 100,
      Type: StatType.ENERGY_REGENERATION,
    },
    {
      Value: 0,
      Type: StatType.HEALING_BONUS,
    },
    {
      Value: 0,
      Type: StatType.BASIC_ATTACK_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.HEAVY_ATTACK_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.RESONANCE_SKILL_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.AERO_DMG_BONUS,
    },
  ],
  Sequences: [
    {
      Name: '',
      Icon: 'Jiyan_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Jiyan_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Jiyan_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Jiyan_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Jiyan_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Jiyan_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Skills: [
    {
      Id: 'Basic Attack',
      Level: 1,
      Icon: 'Skill_Broadblade.webp',
      Unlocked: true,

    },
    {
      Id: 'Basic_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.20,
      },
    },
    {
      Id: 'Basic_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.80,
      },
    },
    {
      Id: 'Resonance Skill',
      Level: 1,
      Icon: 'Jiyan_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Skill_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.80,
      },
    },
    {
      Id: 'Skill_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.20,
      },
    },
    {
      Id: 'Forte Circuit',
      Level: 1,
      Icon: 'Jiyan_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Jiyan_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Jiyan_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance Liberation',
      Level: 1,
      Icon: 'Jiyan_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Liberation_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.80,
      },

    },
    {
      Id: 'Liberation_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.20,
      },
    },
    {
      Id: 'Intro Skill',
      Level: 1,
      Icon: 'Jiyan_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.20,
      },
    },
    {
      Id: 'Intro_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.80,
      },
    },
    {
      Id: 'Outro Skill',
      Level: 1,
      Icon: 'Jiyan_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
  Unlocked: false,
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 1,
    [StatType.CRIT_RATE]: 1,
    [StatType.ATTACK]: 0,
    [StatType.ATTACK_PERCENTAGE]: 0.75,
    [StatType.HP]: 0,
    [StatType.HP_PERCENTAGE]: 0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0.5,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0.75,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.ELECTRO_DMG_BONUS]: 0,
    [StatType.FUSION_DMG_BONUS]: 0,
    [StatType.GLACIO_DMG_BONUS]: 0,
    [StatType.HAVOC_DMG_BONUS]: 0,
    [StatType.SPECTRO_DMG_BONUS]: 0,
    [StatType.AERO_DMG_BONUS]: 0.1,
  },
}

// 1505
export const ShoreKeeper: ICharacter = {
  Id: 1505,
  Name: 'The Shorekeeper',
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Shorekeeper_Icon.webp',
  SplashArt: 'Shorekeeper_Portrait.webp',
  Background: 'Shorekeeper_Splash_Art.webp',
  Type: CharacterType.SPECTRO,
  WeaponType: WeaponType.RECTIFIER,
  Level: 90,
  Stats: [
    {
      Value: 16713,
      Type: StatType.HP,
    },
    {
      Value: 1100,
      Type: StatType.DEF,
    },
    {
      Value: 288,
      Type: StatType.ATTACK,
    },
    {
      Value: 5,
      Type: StatType.CRIT_RATE,
    },
    {
      Value: 150,
      Type: StatType.CRIT_DMG,
    },
    {
      Value: 100,
      Type: StatType.ENERGY_REGENERATION,
    },
    {
      Value: 0,
      Type: StatType.HEALING_BONUS,
    },
    {
      Value: 0,
      Type: StatType.BASIC_ATTACK_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.HEAVY_ATTACK_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.RESONANCE_SKILL_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.SPECTRO_DMG_BONUS,
    },
  ],
  Sequences: [
    {
      Name: '',
      Icon: 'Shorekeeper_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Shorekeeper_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Shorekeeper_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Shorekeeper_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Shorekeeper_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Shorekeeper_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Skills: [
    {
      Id: 'Basic Attack',
      Level: 1,
      Icon: 'Skill_Rectifier.webp',
      Unlocked: true,
    },
    {
      Id: 'Basic_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Health.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HP_PERCENTAGE,
        Value: 1.80,
      },
    },
    {
      Id: 'Basic_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Health.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HP_PERCENTAGE,
        Value: 4.20,
      },
    },
    {
      Id: 'Resonance Skill',
      Level: 1,
      Icon: 'Shorekeeper_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Skill_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Healing.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Skill_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Healing.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Forte Circuit',
      Level: 1,
      Icon: 'Shorekeeper_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Shorekeeper_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Shorekeeper_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance Liberation',
      Level: 1,
      Icon: 'Shorekeeper_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Liberation_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Healing.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Liberation_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Healing.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Intro Skill',
      Level: 1,
      Icon: 'Shorekeeper_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Health.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HP_PERCENTAGE,
        Value: 1.80,
      },
    },
    {
      Id: 'Intro_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Health.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HP_PERCENTAGE,
        Value: 4.20,
      },
    },
    {
      Id: 'Outro Skill',
      Level: 1,
      Icon: 'Shorekeeper_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
  Unlocked: false,
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 0,
    [StatType.CRIT_RATE]: 0,
    [StatType.ATTACK]: 0,
    [StatType.ATTACK_PERCENTAGE]: 0,
    [StatType.HP]: 0.75,
    [StatType.HP_PERCENTAGE]: 1,
    [StatType.HEALING_BONUS]: 1,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0.75,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.ELECTRO_DMG_BONUS]: 0,
    [StatType.FUSION_DMG_BONUS]: 0,
    [StatType.GLACIO_DMG_BONUS]: 0,
    [StatType.HAVOC_DMG_BONUS]: 0,
    [StatType.SPECTRO_DMG_BONUS]: 0.1,
  },
}

// 1505
export const Phoebe: ICharacter = {
  Id: 1506,
  Name: 'Phoebe',
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Phoebe_Icon.webp',
  SplashArt: 'Phoebe_Full_Sprite.webp',
  // Background: 'Phoebe_Splash_Art.webp',
  Type: CharacterType.SPECTRO,
  WeaponType: WeaponType.RECTIFIER,
  Level: 90,
  Stats: [
    {
      Value: 10825,
      Type: StatType.HP,
    },
    {
      Value: 1259,
      Type: StatType.DEF,
    },
    {
      Value: 413,
      Type: StatType.ATTACK,
    },
    {
      Value: 5,
      Type: StatType.CRIT_RATE,
    },
    {
      Value: 150,
      Type: StatType.CRIT_DMG,
    },
    {
      Value: 100,
      Type: StatType.ENERGY_REGENERATION,
    },
    {
      Value: 0,
      Type: StatType.HEALING_BONUS,
    },
    {
      Value: 0,
      Type: StatType.BASIC_ATTACK_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.HEAVY_ATTACK_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.RESONANCE_SKILL_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.SPECTRO_DMG_BONUS,
    },
  ],
  Sequences: [
    {
      Name: '',
      Icon: 'Phoebe_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Phoebe_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Phoebe_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Phoebe_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Phoebe_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Phoebe_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Skills: [
    {
      Id: 'Basic Attack',
      Level: 1,
      Icon: 'Skill_Rectifier.webp',
      Unlocked: true,
    },
    {
      Id: 'Basic_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 2.40,
      },
    },
    {
      Id: 'Basic_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 5.60,
      },
    },
    {
      Id: 'Resonance Skill',
      Level: 1,
      Icon: 'Phoebe_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Skill_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.80,
      },
    },
    {
      Id: 'Skill_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.20,
      },
    },
    {
      Id: 'Forte Circuit',
      Level: 1,
      Icon: 'Phoebe_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Phoebe_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Phoebe_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance Liberation',
      Level: 1,
      Icon: 'Phoebe_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Liberation_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.80,
      },
    },
    {
      Id: 'Liberation_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.20,
      },
    },
    {
      Id: 'Intro Skill',
      Level: 1,
      Icon: 'Phoebe_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 2.40,
      },
    },
    {
      Id: 'Intro_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 5.60,
      },
    },
    {
      Id: 'Outro Skill',
      Level: 1,
      Icon: 'Phoebe_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
  Unlocked: false,
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 1,
    [StatType.CRIT_RATE]: 1,
    [StatType.ATTACK]: 0.5,
    [StatType.ATTACK_PERCENTAGE]: 0.75,
    [StatType.HP]: 0.75,
    [StatType.HP_PERCENTAGE]: 0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0.75,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.ELECTRO_DMG_BONUS]: 0,
    [StatType.FUSION_DMG_BONUS]: 0,
    [StatType.GLACIO_DMG_BONUS]: 0,
    [StatType.HAVOC_DMG_BONUS]: 0,
    [StatType.SPECTRO_DMG_BONUS]: 0.1,
  },
}

// 1603
export const Camellya: ICharacter = {
  Id: 1603,
  Name: 'Camellya',
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Camellya_Icon.webp',
  SplashArt: 'Camellya_Portrait.webp',
  Type: CharacterType.HAVOC,
  WeaponType: WeaponType.SWORD,
  Level: 90,
  Stats: [
    {
      Value: 10325,
      Type: StatType.HP,
    },
    {
      Value: 1161,
      Type: StatType.DEF,
    },
    {
      Value: 450,
      Type: StatType.ATTACK,
    },
    {
      Value: 5,
      Type: StatType.CRIT_RATE,
    },
    {
      Value: 150,
      Type: StatType.CRIT_DMG,
    },
    {
      Value: 100,
      Type: StatType.ENERGY_REGENERATION,
    },
    {
      Value: 0,
      Type: StatType.HEALING_BONUS,
    },
    {
      Value: 0,
      Type: StatType.BASIC_ATTACK_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.HEAVY_ATTACK_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.RESONANCE_SKILL_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION,
    },
    {
      Value: 0,
      Type: StatType.HAVOC_DMG_BONUS,
    },
  ],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 1,
    [StatType.CRIT_RATE]: 1,
    [StatType.ATTACK]: 0.5,
    [StatType.ATTACK_PERCENTAGE]: 0.75,
    [StatType.HP]: 0,
    [StatType.HP_PERCENTAGE]: 0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0.5,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0.75,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0.5,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0.5,
    [StatType.ELECTRO_DMG_BONUS]: 0,
    [StatType.FUSION_DMG_BONUS]: 0,
    [StatType.GLACIO_DMG_BONUS]: 0,
    [StatType.HAVOC_DMG_BONUS]: 0.1,
    [StatType.SPECTRO_DMG_BONUS]: 0,
  },
  Sequences: [
    {
      Name: '',
      Icon: 'Camellya_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Camellya_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Camellya_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Camellya_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Camellya_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Camellya_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Skills: [
    {
      Id: 'Basic Attack',
      Level: 1,
      Icon: 'Skill_Rectifier.webp',
      Unlocked: true,
    },
    {
      Id: 'Basic_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 2.40,
      },
    },
    {
      Id: 'Basic_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 5.60,
      },
    },
    {
      Id: 'Resonance Skill',
      Level: 1,
      Icon: 'Camellya_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Skill_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.80,
      },
    },
    {
      Id: 'Skill_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.20,
      },
    },
    {
      Id: 'Forte Circuit',
      Level: 1,
      Icon: 'Camellya_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Camellya_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Camellya_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance Liberation',
      Level: 1,
      Icon: 'Camellya_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Liberation_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.80,
      },
    },
    {
      Id: 'Liberation_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.20,
      },
    },
    {
      Id: 'Intro Skill',
      Level: 1,
      Icon: 'Camellya_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 2.40,
      },
    },
    {
      Id: 'Intro_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 5.60,
      },
    },
    {
      Id: 'Outro Skill',
      Level: 1,
      Icon: 'Camellya_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
  Unlocked: false,
}

// #endregion

export const TemplateCharacters: ICharacter[] = [
  Sanhua,
  Yangyang,
  Aalto,
  Danjin,

  Jinhsi,
  Changli,
  Zhezhi,
  ShoreKeeper,
  Camellya,
  Carlotta,
  Jiyan,
  Phoebe,
]
