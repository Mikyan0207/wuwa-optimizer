import type Character from './Interfaces/Character'
import { CharacterReleaseState } from './Enums/CharacterReleaseState'
import { CharacterType } from './Enums/CharacterType'
import { Rarity } from './Enums/Rarity'
import { StatType } from './Enums/StatType'
import { WeaponType } from './Enums/WeaponType'

// 1102
export const Sanhua: Character = {
  Id: 1102,
  Rarity: Rarity.FOUR_STARS,
  Icon: 'Sanhua_Icon.webp',
  SplashArt: 'Sanhua_Portrait.webp',
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
  Sequences: [
    {
      Name: '',
      Icon: 'Sanhua_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Sanhua_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Sanhua_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Sanhua_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Sanhua_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Sanhua_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Skills: [
    {
      Id: 'Basic_Attack',
      Level: 1,
      Icon: 'Skill_Sword.webp',
      Unlocked: true,
    },
    {
      Id: 'Basic_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Glacio_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.GLACIO_DMG_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Basic_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Glacio_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.GLACIO_DMG_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Sanhua_Resonance_Skill.webp',
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
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Sanhua_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Sanhua_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Sanhua_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Sanhua_Resonance_Liberation.webp',
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
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Sanhua_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Aero_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.GLACIO_DMG_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Intro_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Aero_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.GLACIO_DMG_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Sanhua_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
}

// 1103
export const Baizhi: Character = {
  Id: 1103,
  Rarity: Rarity.FOUR_STARS,
  Icon: 'Baizhi_Icon.webp',
  SplashArt: 'Baizhi_Portrait.webp',
  Type: CharacterType.GLACIO,
  WeaponType: WeaponType.RECTIFIER,
  Level: 90,
  Stats: [
    {
      Value: 12813,
      Type: StatType.HP,
    },
    {
      Value: 1002,
      Type: StatType.DEF,
    },
    {
      Value: 213,
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
      Icon: 'Baizhi_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Baizhi_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Baizhi_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Baizhi_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Baizhi_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Baizhi_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Skills: [
    {
      Id: 'Basic_Attack',
      Level: 1,
      Icon: 'Skill_Rectifier.webp',
      Unlocked: true,
    },
    {
      Id: 'Basic_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Healing.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Basic_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Healing.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Baizhi_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Skill_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Health.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HP_PERCENTAGE,
        Value: 1.80,
      },
    },
    {
      Id: 'Skill_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Health.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HP_PERCENTAGE,
        Value: 4.20,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Baizhi_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Baizhi_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Baizhi_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Baizhi_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Liberation_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Health.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HP_PERCENTAGE,
        Value: 1.80,
      },
    },
    {
      Id: 'Liberation_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Health.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HP_PERCENTAGE,
        Value: 4.20,
      },
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Baizhi_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Healing.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Intro_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Healing.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Baizhi_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 0,
    [StatType.CRIT_RATE]: 0,
    [StatType.ATTACK]: 0,
    [StatType.ATTACK_PERCENTAGE]: 0,
    [StatType.HP]: 0.75,
    [StatType.HP_PERCENTAGE]: 1,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0.5,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.GLACIO_DMG_BONUS]: 0.1,
  },
}

// 1104
export const Lingyang: Character = {
  Id: 1104,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Lingyang_Icon.webp',
  SplashArt: 'Lingyang_Portrait.webp',
  Type: CharacterType.GLACIO,
  WeaponType: WeaponType.GAUNTLETS,
  Level: 90,
  Stats: [
    {
      Value: 10388,
      Type: StatType.HP,
    },
    {
      Value: 1210,
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
      Type: StatType.GLACIO_DMG_BONUS,
    },
  ],
  Sequences: [
    {
      Name: '',
      Icon: 'Lingyang_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Lingyang_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Lingyang_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Lingyang_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Lingyang_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Lingyang_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Skills: [
    {
      Id: 'Basic_Attack',
      Level: 1,
      Icon: 'Skill_Gauntlets.webp',
      Unlocked: true,
    },
    {
      Id: 'Basic_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Glacio_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.GLACIO_DMG_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Basic_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Glacio_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.GLACIO_DMG_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Lingyang_Resonance_Skill.webp',
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
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Lingyang_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Lingyang_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Lingyang_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Lingyang_Resonance_Liberation.webp',
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
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Lingyang_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Glacio_DMG_BOnus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.GLACIO_DMG_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Intro_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Glacio_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.GLACIO_DMG_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Lingyang_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
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
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.GLACIO_DMG_BONUS]: 0.1,
  },
}

// 1105
export const Zhezhi: Character = {
  Id: 1105,
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
      Id: 'Basic_Attack',
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
      Id: 'Resonance_Skill',
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
      Id: 'Forte_Circuit',
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
      Id: 'Resonance_Liberation',
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
      Id: 'Intro_Skill',
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
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Zhezhi_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
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
    [StatType.GLACIO_DMG_BONUS]: 0.1,
  },
}

// 1106
export const Youhu: Character = {
  Id: 1106,
  Rarity: Rarity.FOUR_STARS,
  Icon: 'Youhu_Icon.webp',
  SplashArt: 'Youhu_Portrait.webp',
  Type: CharacterType.GLACIO,
  WeaponType: WeaponType.GAUNTLETS,
  Level: 90,
  Stats: [
    {
      Value: 9975,
      Type: StatType.HP,
    },
    {
      Value: 1051,
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
      Type: StatType.GLACIO_DMG_BONUS,
    },
  ],
  Sequences: [
    {
      Name: '',
      Icon: 'Youhu_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Youhu_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Youhu_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Youhu_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Youhu_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Youhu_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Skills: [
    {
      Id: 'Basic_Attack',
      Level: 1,
      Icon: 'Skill_Gauntlets.webp',
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
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Youhu_Resonance_Skill.webp',
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
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Youhu_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Youhu_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Youhu_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Youhu_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Liberation_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK,
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
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Youhu_Intro_Skill.webp',
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
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Youhu_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 0,
    [StatType.CRIT_RATE]: 0,
    [StatType.ATTACK]: 0.75,
    [StatType.ATTACK_PERCENTAGE]: 1,
    [StatType.HP]: 0,
    [StatType.HP_PERCENTAGE]: 0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 1,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.GLACIO_DMG_BONUS]: 0.1,
  },
}

// 1107
export const Carlotta: Character = {
  Id: 1107,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Carlotta_Icon.webp',
  SplashArt: 'Carlotta_Portrait.webp',
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
  Skills: [
    {
      Id: 'Basic_Attack',
      Level: 1,
      Icon: 'Skill_Pistols.webp',
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
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Carlotta_Resonance_Skill.webp',
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
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Carlotta_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Carlotta_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Carlotta_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Carlotta_Resonance_Liberation.webp',
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
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Carlotta_Intro_Skill.webp',
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
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Carlotta_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
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
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0.5,
    [StatType.GLACIO_DMG_BONUS]: 0.1,
  },
}

// 1202
export const Chixia: Character = {
  Id: 1202,
  Icon: 'Chixia_Icon.webp',
  SplashArt: 'Chixia_Portrait.webp',
  Rarity: Rarity.FOUR_STARS,
  Type: CharacterType.FUSION,
  WeaponType: WeaponType.PISTOLS,
  Level: 90,
  Stats: [
    {
      Value: 9088,
      Type: StatType.HP,
    },
    {
      Value: 953,
      Type: StatType.DEF,
    },
    {
      Value: 300,
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
  Sequences: [
    {
      Name: '',
      Icon: 'Chixia_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Chixia_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Chixia_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Chixia_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Chixia_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Chixia_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Skills: [
    {
      Id: 'Basic_Attack',
      Level: 1,
      Icon: 'Skill_Pistols.webp',
      Unlocked: true,
    },
    {
      Id: 'Basic_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Fusion_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Basic_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Fusion_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Chixia_Resonance_Skill.webp',
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
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Chixia_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Chixia_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Chixia_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Chixia_Resonance_Liberation.webp',
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
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Chixia_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Fusion_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Intro_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Fusion_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Chixia_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
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
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0.25,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0.25,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.FUSION_DMG_BONUS]: 0.1,
  },
}

// 1203
export const Encore: Character = {
  Id: 1203,
  Icon: 'Encore_Icon.webp',
  SplashArt: 'Encore_Portrait.webp',
  Rarity: Rarity.FIVE_STARS,
  Type: CharacterType.FUSION,
  WeaponType: WeaponType.RECTIFIER,
  Level: 90,
  Stats: [
    {
      Value: 10513,
      Type: StatType.HP,
    },
    {
      Value: 1247,
      Type: StatType.DEF,
    },
    {
      Value: 425,
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
  Sequences: [
    {
      Name: '',
      Icon: 'Encore_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Encore_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Encore_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Encore_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Encore_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Encore_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Skills: [
    {
      Id: 'Basic_Attack',
      Level: 1,
      Icon: 'Skill_Pistols.webp',
      Unlocked: true,
    },
    {
      Id: 'Basic_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Fusion_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Basic_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Fusion_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Encore_Resonance_Skill.webp',
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
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Encore_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Encore_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Encore_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Encore_Resonance_Liberation.webp',
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
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Encore_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Fusion_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Intro_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Fusion_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Encore_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
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
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0.75,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0.25,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.FUSION_DMG_BONUS]: 0.1,
  },
}

// 1204
export const Mortefi: Character = {
  Id: 1204,
  Icon: 'Mortefi_Icon.webp',
  SplashArt: 'Mortefi_Portrait.webp',
  Rarity: Rarity.FOUR_STARS,
  Type: CharacterType.FUSION,
  WeaponType: WeaponType.PISTOLS,
  Level: 90,
  Stats: [
    {
      Value: 10025,
      Type: StatType.HP,
    },
    {
      Value: 1137,
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
      Type: StatType.FUSION_DMG_BONUS,
    },
  ],
  Sequences: [
    {
      Name: '',
      Icon: 'Mortefi_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Mortefi_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Mortefi_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Mortefi_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Mortefi_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Mortefi_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Skills: [
    {
      Id: 'Basic_Attack',
      Level: 1,
      Icon: 'Skill_Pistols.webp',
      Unlocked: true,
    },
    {
      Id: 'Basic_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Fusion_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Basic_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Fusion_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Mortefi_Resonance_Skill.webp',
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
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Mortefi_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Mortefi_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Mortefi_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Mortefi_Resonance_Liberation.webp',
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
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Mortefi_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Fusion_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Intro_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Fusion_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Mortefi_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
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
    [StatType.FUSION_DMG_BONUS]: 0.1,
  },
}

// 1205
export const Changli: Character = {
  Id: 1205,
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
      Id: 'Basic_Attack',
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
      Id: 'Resonance_Skill',
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
      Id: 'Forte_Circuit',
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
      Id: 'Resonance_Liberation',
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
      Id: 'Intro_Skill',
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
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Changli_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
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
    [StatType.FUSION_DMG_BONUS]: 0.1,
  },
}

// 1206
export const Brant: Character = {
  Id: 1206,
  ReleaseState: CharacterReleaseState.NEW,
  Icon: 'Brant_Icon.webp',
  SplashArt: 'Brant_Portrait.webp',
  Rarity: Rarity.FIVE_STARS,
  Type: CharacterType.FUSION,
  WeaponType: WeaponType.SWORD,
  Level: 90,
  Stats: [
    {
      Value: 11675,
      Type: StatType.HP,
    },
    {
      Value: 1308,
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
      Type: StatType.FUSION_DMG_BONUS,
    },
  ],
  Sequences: [
    {
      Name: '',
      Icon: 'Brant_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Brant_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Brant_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Brant_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Brant_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Brant_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Skills: [
    {
      Id: 'Basic_Attack',
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
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Brant_Resonance_Skill.webp',
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
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Brant_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Brant_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Brant_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Brant_Resonance_Liberation.webp',
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
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Brant_Intro_Skill.webp',
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
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Brant_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
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
    [StatType.FUSION_DMG_BONUS]: 0.1,
  },
}

// 1301
export const Calcharo: Character = {
  Id: 1301,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Calcharo_Icon.webp',
  SplashArt: 'Calcharo_Portrait.webp',
  WeaponType: WeaponType.BROADBLADE,
  Type: CharacterType.ELECTRO,
  Level: 90,
  Stats: [
    {
      Value: 10500,
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
      Type: StatType.ELECTRO_DMG_BONUS,
    },
  ],
  Sequences: [
    {
      Name: '',
      Icon: 'Calcharo_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Calcharo_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Calcharo_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Calcharo_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Calcharo_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Calcharo_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Skills: [
    {
      Id: 'Basic_Attack',
      Level: 1,
      Icon: 'Skill_Broadblade.webp',
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
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Calcharo_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Skill_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK,
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
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Calcharo_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Calcharo_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Calcharo_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Calcharo_Resonance_Liberation.webp',
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
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Calcharo_Intro_Skill.webp',
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
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Calcharo_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
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
    [StatType.ELECTRO_DMG_BONUS]: 0.1,
  },
}

// 1302
export const Yinlin: Character = {
  Id: 1302,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Yinlin_Icon.webp',
  SplashArt: 'Yinlin_Portrait.webp',
  WeaponType: WeaponType.RECTIFIER,
  Type: CharacterType.ELECTRO,
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
      Type: StatType.ELECTRO_DMG_BONUS,
    },
  ],
  Sequences: [
    {
      Name: '',
      Icon: 'Yinlin_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Yinlin_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Yinlin_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Yinlin_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Yinlin_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Yinlin_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Skills: [
    {
      Id: 'Basic_Attack',
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
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Yinlin_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Skill_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK,
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
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Yinlin_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Yinlin_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Yinlin_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Yinlin_Resonance_Liberation.webp',
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
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Yinlin_Intro_Skill.webp',
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
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Yinlin_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
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
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0.5,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.ELECTRO_DMG_BONUS]: 0.1,
  },
}

// 1303
export const Yuanwu: Character = {
  Id: 1303,
  Icon: 'Yuanwu_Icon.webp',
  SplashArt: 'Yuanwu_Portrait.webp',
  Rarity: Rarity.FOUR_STARS,
  Type: CharacterType.ELECTRO,
  WeaponType: WeaponType.GAUNTLETS,
  Level: 90,
  Stats: [
    {
      Value: 8525,
      Type: StatType.HP,
    },
    {
      Value: 1638,
      Type: StatType.DEF,
    },
    {
      Value: 225,
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
      Type: StatType.ELECTRO_DMG_BONUS,
    },
  ],
  Sequences: [
    {
      Name: '',
      Icon: 'Yuanwu_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Yuanwu_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Yuanwu_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Yuanwu_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Yuanwu_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Yuanwu_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Skills: [
    {
      Id: 'Basic_Attack',
      Level: 1,
      Icon: 'Skill_Gauntlets.webp',
      Unlocked: true,
    },
    {
      Id: 'Basic_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Electro_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ELECTRO_DMG_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Basic_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Electro_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ELECTRO_DMG_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Yuanwu_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Skill_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Defense.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.DEF_PERCENTAGE,
        Value: 2.28,
      },
    },
    {
      Id: 'Skill_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Defense.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.DEF_PERCENTAGE,
        Value: 5.32,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Yuanwu_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Yuanwu_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Yuanwu_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Yuanwu_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Liberation_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Defense.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.DEF_PERCENTAGE,
        Value: 2.28,
      },
    },
    {
      Id: 'Liberation_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Defense.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.DEF_PERCENTAGE,
        Value: 5.32,
      },
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Yuanwu_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Electro_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ELECTRO_DMG_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Intro_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Electro_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ELECTRO_DMG_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Yuanwu_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 1,
    [StatType.CRIT_RATE]: 1,
    [StatType.ATTACK]: 0,
    [StatType.ATTACK_PERCENTAGE]: 0,
    [StatType.HP]: 0,
    [StatType.HP_PERCENTAGE]: 0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0.5,
    [StatType.DEF_PERCENTAGE]: 0.65,
    [StatType.ENERGY_REGENERATION]: 0.75,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.ELECTRO_DMG_BONUS]: 0.1,
  },
}

// 1304
export const Jinhsi: Character = {
  Id: 1304,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Jinhsi_Icon.webp',
  SplashArt: 'Jinhsi_Portrait.webp',
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
      Id: 'Basic_Attack',

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
      Id: 'Resonance_Skill',

      Level: 1,
      Icon: 'Jinhsi_Resonance_Skill.webp',
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
      Id: 'Forte_Circuit',

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
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Jinhsi_Resonance_Liberation.webp',
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
        Value: 2.80,
      },
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Jinhsi_Intro_Skill.webp',
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
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Jinhsi_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
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
    [StatType.SPECTRO_DMG_BONUS]: 0.1,
  },
}

// 1305
export const Xiangli_Yao: Character = {
  Id: 1305,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Xiangli_Yao_Icon.webp',
  SplashArt: 'Xiangli_Yao_Portrait.webp',
  WeaponType: WeaponType.GAUNTLETS,
  Type: CharacterType.ELECTRO,
  Level: 90,
  Stats: [
    {
      Value: 10625,
      Type: StatType.HP,
    },
    {
      Value: 1222,
      Type: StatType.DEF,
    },
    {
      Value: 425,
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
      Type: StatType.ELECTRO_DMG_BONUS,
    },
  ],
  Sequences: [
    {
      Name: '',
      Icon: 'Xiangli_Yao_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Xiangli_Yao_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Xiangli_Yao_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Xiangli_Yao_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Xiangli_Yao_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Xiangli_Yao_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Skills: [
    {
      Id: 'Basic_Attack',
      Level: 1,
      Icon: 'Skill_Gauntlets.webp',
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
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Xiangli_Yao_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Skill_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK,
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
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Xiangli_Yao_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Xiangli_Yao_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Xiangli_Yao_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Xiangli_Yao_Resonance_Liberation.webp',
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
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Xiangli_Yao_Intro_Skill.webp',
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
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Xiangli_Yao_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
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
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0.5,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.ELECTRO_DMG_BONUS]: 0.1,
  },
}

// 1402
export const Yangyang: Character = {
  Id: 1402,
  Icon: 'Yangyang_Icon.webp',
  SplashArt: 'Yangyang_Portrait.webp',
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
      Id: 'Basic_Attack',
      Level: 1,
      Icon: 'Skill_Sword.webp',
      Unlocked: true,
    },
    {
      Id: 'Basic_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Aero_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.AERO_DMG_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Basic_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Aero_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.AERO_DMG_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Yangyang_Resonance_Skill.webp',
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
      Id: 'Forte_Circuit',
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
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Yangyang_Resonance_Liberation.webp',
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
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Yangyang_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Aero_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.AERO_DMG_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Intro_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Aero_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.AERO_DMG_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Yangyang_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
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
}

// 1403
export const Aalto: Character = {
  Id: 1403,
  Icon: 'Aalto_Icon.webp',
  SplashArt: 'Aalto_Portrait.webp',
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
      Id: 'Basic_Attack',
      Level: 1,
      Icon: 'Skill_Sword.webp',
      Unlocked: true,
    },
    {
      Id: 'Basic_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Aero_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.AERO_DMG_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Basic_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Aero_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.AERO_DMG_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Aalto_Resonance_Skill.webp',
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
      Id: 'Forte_Circuit',
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
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Aalto_Resonance_Liberation.webp',
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
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Aalto_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Aero_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.AERO_DMG_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Intro_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Aero_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.AERO_DMG_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Aalto_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
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
}

// 1404
export const Jiyan: Character = {
  Id: 1404,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Jiyan_Icon.webp',
  SplashArt: 'Jiyan_Portrait.webp',
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
      Id: 'Basic_Attack',
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
      Id: 'Resonance_Skill',
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
      Id: 'Forte_Circuit',
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
      Id: 'Resonance_Liberation',
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
      Id: 'Intro_Skill',
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
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Jiyan_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
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
    [StatType.AERO_DMG_BONUS]: 0.1,
  },
}

// 1405
export const Jianxin: Character = {
  Id: 1405,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Jianxin_Icon.webp',
  SplashArt: 'Jianxin_Portrait.webp',
  WeaponType: WeaponType.GAUNTLETS,
  Type: CharacterType.AERO,
  Level: 90,
  Stats: [
    {
      Value: 14113,
      Type: StatType.HP,
    },
    {
      Value: 1124,
      Type: StatType.DEF,
    },
    {
      Value: 338,
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
      Icon: 'Jianxin_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Jianxin_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Jianxin_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Jianxin_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Jianxin_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Jianxin_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Skills: [
    {
      Id: 'Basic_Attack',
      Level: 1,
      Icon: 'Skill_Gauntlets.webp',
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
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Jianxin_Resonance_Skill.webp',
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
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Jianxin_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Jianxin_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Jianxin_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Jianxin_Resonance_Liberation.webp',
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
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Jianxin_Intro_Skill.webp',
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
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Jianxin_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
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
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0.25,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0.25,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.AERO_DMG_BONUS]: 0.1,
  },
}

// 1502
export const Rover_Spectro: Character = {
  Id: 1502,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Rover_Icon.webp',
  SplashArt: 'Rover_Portrait.webp',
  WeaponType: WeaponType.SWORD,
  Type: CharacterType.SPECTRO,
  Level: 90,
  Stats: [
    {
      Value: 11400,
      Type: StatType.HP,
    },
    {
      Value: 1369,
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
      Type: StatType.SPECTRO_DMG_BONUS,
    },
  ],
  Sequences: [
    {
      Name: '',
      Icon: 'Rover_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Rover_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Rover_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Rover_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Rover_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Rover_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Skills: [
    {
      Id: 'Basic_Attack',
      Level: 1,
      Icon: 'Skill_Sword.webp',
      Unlocked: true,
    },
    {
      Id: 'Basic_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.80,
      },
    },
    {
      Id: 'Basic_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.20,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Rover_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Skill_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Spectro_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.SPECTRO_DMG_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Skill_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Spectro_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.SPECTRO_DMG_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Rover_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Rover_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Rover_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Rover_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Liberation_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Spectro_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.SPECTRO_DMG_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Liberation_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Spectro_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.SPECTRO_DMG_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Rover_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.80,
      },
    },
    {
      Id: 'Intro_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.20,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Rover_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
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
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.SPECTRO_DMG_BONUS]: 0.1,
  },
}

// 1503
export const Verina: Character = {
  Id: 1503,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Verina_Icon.webp',
  SplashArt: 'Verina_Portrait.webp',
  Type: CharacterType.SPECTRO,
  WeaponType: WeaponType.RECTIFIER,
  Level: 90,
  Stats: [
    {
      Value: 14238,
      Type: StatType.HP,
    },
    {
      Value: 1100,
      Type: StatType.DEF,
    },
    {
      Value: 338,
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
      Icon: 'Verina_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Verina_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Verina_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Verina_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Verina_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Verina_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Skills: [
    {
      Id: 'Basic_Attack',
      Level: 1,
      Icon: 'Skill_Rectifier.webp',
      Unlocked: true,
    },
    {
      Id: 'Basic_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Healing.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Basic_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Healing.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Verina_Resonance_Skill.webp',
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
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Verina_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Verina_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Verina_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Verina_Resonance_Liberation.webp',
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
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Verina_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Healing.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Intro_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Healing.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Verina_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 0,
    [StatType.CRIT_RATE]: 0,
    [StatType.ATTACK]: 0.75,
    [StatType.ATTACK_PERCENTAGE]: 1,
    [StatType.HP]: 0,
    [StatType.HP_PERCENTAGE]: 0.1,
    [StatType.HEALING_BONUS]: 0.1,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 1,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.SPECTRO_DMG_BONUS]: 0.1,
  },
}

// 1504
export const Lumi: Character = {
  Id: 1504,
  Icon: 'Lumi_Icon.webp',
  SplashArt: 'Lumi_Portrait.webp',
  Rarity: Rarity.FOUR_STARS,
  Type: CharacterType.ELECTRO,
  WeaponType: WeaponType.BROADBLADE,
  Level: 90,
  Stats: [
    {
      Value: 8500,
      Type: StatType.HP,
    },
    {
      Value: 880,
      Type: StatType.DEF,
    },
    {
      Value: 338,
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
      Type: StatType.ELECTRO_DMG_BONUS,
    },
  ],
  Sequences: [
    {
      Name: '',
      Icon: 'Lumi_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Lumi_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Lumi_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Lumi_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Lumi_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Lumi_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Skills: [
    {
      Id: 'Basic_Attack',
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
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Lumi_Resonance_Skill.webp',
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
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Lumi_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Lumi_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Lumi_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Lumi_Resonance_Liberation.webp',
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
        Value: 5.20,
      },
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Lumi_Intro_Skill.webp',
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
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Lumi_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
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
    [StatType.ELECTRO_DMG_BONUS]: 0.1,
  },
}

// 1505
export const ShoreKeeper: Character = {
  Id: 1505,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Shorekeeper_Icon.webp',
  SplashArt: 'Shorekeeper_Portrait.webp',
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
      Id: 'Basic_Attack',
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
      Id: 'Resonance_Skill',
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
      Id: 'Forte_Circuit',
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
      Id: 'Resonance_Liberation',
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
      Id: 'Intro_Skill',
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
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Shorekeeper_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
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
    [StatType.SPECTRO_DMG_BONUS]: 0.1,
  },
}

// 1506
export const Phoebe: Character = {
  Id: 1506,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Phoebe_Icon.webp',
  SplashArt: 'Phoebe_Portrait.webp',
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
      Id: 'Basic_Attack',
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
      Id: 'Resonance_Skill',
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
      Id: 'Forte_Circuit',
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
      Id: 'Resonance_Liberation',
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
      Id: 'Intro_Skill',
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
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Phoebe_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
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
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0.75,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.SPECTRO_DMG_BONUS]: 0.1,
  },
}

// 1601
export const Taoqi: Character = {
  Id: 1601,
  Icon: 'Taoqi_Icon.webp',
  SplashArt: 'Taoqi_Portrait.webp',
  Rarity: Rarity.FOUR_STARS,
  Type: CharacterType.HAVOC,
  WeaponType: WeaponType.BROADBLADE,
  Level: 90,
  Stats: [
    {
      Value: 8950,
      Type: StatType.HP,
    },
    {
      Value: 1564,
      Type: StatType.DEF,
    },
    {
      Value: 225,
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
  Sequences: [
    {
      Name: '',
      Icon: 'Taoqi_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Taoqi_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Taoqi_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Taoqi_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Taoqi_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Taoqi_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Skills: [
    {
      Id: 'Basic_Attack',
      Level: 1,
      Icon: 'Skill_Broadblade.webp',
      Unlocked: true,
    },
    {
      Id: 'Basic_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Havoc_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Basic_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Havoc_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Taoqi_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Skill_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Defense.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.DEF_PERCENTAGE,
        Value: 1.80,
      },
    },
    {
      Id: 'Skill_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Defense.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Taoqi_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Taoqi_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Taoqi_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Taoqi_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Liberation_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Defense.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.DEF_PERCENTAGE,
        Value: 1.80,
      },
    },
    {
      Id: 'Liberation_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Defense.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.DEF_PERCENTAGE,
        Value: 4.20,
      },
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Taoqi_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Havoc_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Intro_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Havoc_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Taoqi_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 0,
    [StatType.CRIT_RATE]: 0,
    [StatType.ATTACK]: 0,
    [StatType.ATTACK_PERCENTAGE]: 0,
    [StatType.HP]: 0,
    [StatType.HP_PERCENTAGE]: 0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 1,
    [StatType.DEF_PERCENTAGE]: 1,
    [StatType.ENERGY_REGENERATION]: 0.75,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.HAVOC_DMG_BONUS]: 0.1,
  },
}

// 1602
export const Danjin: Character = {
  Id: 1602,
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
      Id: 'Basic_Attack',
      Level: 1,
      Icon: 'Skill_Sword.webp',
      Unlocked: true,
    },
    {
      Id: 'Basic_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Havoc_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Basic_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Havoc_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Danjin_Resonance_Skill.webp',
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
      Id: 'Forte_Circuit',
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
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Danjin_Resonance_Liberation.webp',
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
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Danjin_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Havoc_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Intro_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Havoc_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Danjin_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
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
}

// 1603
export const Camellya: Character = {
  Id: 1603,
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
      Id: 'Basic_Attack',
      Level: 1,
      Icon: 'Skill_Sword.webp',
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
      Id: 'Resonance_Skill',
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
      Id: 'Forte_Circuit',
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
      Id: 'Resonance_Liberation',
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
      Id: 'Intro_Skill',
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
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Camellya_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
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
    [StatType.HAVOC_DMG_BONUS]: 0.1,
  },
}

// 1604
export const Rover_Havoc: Character = {
  Id: 1604,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Rover_Icon.webp',
  SplashArt: 'Rover_Portrait.webp',
  WeaponType: WeaponType.SWORD,
  Type: CharacterType.HAVOC,
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
      Icon: 'Rover_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Rover_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Rover_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Rover_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Rover_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Rover_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Skills: [
    {
      Id: 'Basic_Attack',
      Level: 1,
      Icon: 'Skill_Sword.webp',
      Unlocked: true,
    },
    {
      Id: 'Basic_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.80,
      },
    },
    {
      Id: 'Basic_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.20,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Rover_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Skill_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Havoc_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Skill_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Havoc_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Rover_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Rover_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Rover_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Rover_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Liberation_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Havoc_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 1.80,
      },
    },
    {
      Id: 'Liberation_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Havoc_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 4.20,
      },
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Rover_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Stat_Bonus_1',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.80,
      },
    },
    {
      Id: 'Intro_Stat_Bonus_2',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.20,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Rover_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
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
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.SPECTRO_DMG_BONUS]: 0.1,
  },
}

// 1606
export const Roccia: Character = {
  Id: 1606,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Roccia_Icon.webp',
  SplashArt: 'Roccia_Portrait.webp',
  Type: CharacterType.HAVOC,
  WeaponType: WeaponType.GAUNTLETS,
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
      Type: StatType.HAVOC_DMG_BONUS,
    },
  ],
  Sequences: [
    {
      Name: '',
      Icon: 'Roccia_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Roccia_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Roccia_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Roccia_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Roccia_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Roccia_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Skills: [
    {
      Id: 'Basic_Attack',
      Level: 1,
      Icon: 'Skill_Gauntlets.webp',
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
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Roccia_Resonance_Skill.webp',
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
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Roccia_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_1',
      Level: 1,
      Icon: 'Roccia_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_2',
      Level: 1,
      Icon: 'Roccia_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Roccia_Resonance_Liberation.webp',
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
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Roccia_Intro_Skill.webp',
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
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Roccia_Outro_Skill.webp',
      Unlocked: true,
    },
  ],
  EquipedEchoes: [],
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
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0.75,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0.25,
    [StatType.HAVOC_DMG_BONUS]: 0.1,
  },
}

export const TemplateCharacters: Character[] = [
  Sanhua,
  Baizhi,
  Lingyang,
  Zhezhi,
  Youhu,
  Carlotta,
  Chixia,
  Encore,
  Mortefi,
  Changli,
  Brant,
  Calcharo,
  Yinlin,
  Yuanwu,
  Jinhsi,
  Xiangli_Yao,
  Yangyang,
  Aalto,
  Jiyan,
  Jianxin,
  Rover_Spectro,
  Verina,
  Lumi,
  ShoreKeeper,
  Phoebe,
  Taoqi,
  Danjin,
  Camellya,
  Rover_Havoc,
  Roccia,
]
