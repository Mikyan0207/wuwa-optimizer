import type Character from './Interfaces/Character'
import { CharacterType } from './Enums/CharacterType'
import { Rarity } from './Enums/Rarity'
import { ReleaseState } from './Enums/ReleaseState'
import { StatType } from './Enums/StatType'
import { WeaponType } from './Enums/WeaponType'

// 1102
export const Sanhua: Character = {
  Id: 1102,
  Rarity: Rarity.FOUR_STARS,
  Icon: 'Sanhua_Icon.webp',
  SplashArt: 'Sanhua_Portrait.webp',
  WeaponType: WeaponType.SWORD,
  Type: CharacterType.GLACIO,
  Level: 90,
  Stats: [
    {
      Value: 10062.5,
      Type: StatType.HP,
    },
    {
      Value: 941.1094,
      Type: StatType.DEF,
    },
    {
      Value: 275.0,
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Glacio_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.GLACIO_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Glacio_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.GLACIO_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Sanhua_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Sanhua_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Sanhua_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Sanhua_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Glacio_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.GLACIO_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Glacio_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.GLACIO_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Sanhua_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Sanhua_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Sanhua_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  EquipedEchoes: [],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 1.0,
    [StatType.CRIT_RATE]: 1.0,
    [StatType.ATTACK]: 0,
    [StatType.ATTACK_PERCENTAGE]: 0.8,
    [StatType.HP]: 0,
    [StatType.HP_PERCENTAGE]: 0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0.8,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0.6,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.GLACIO_DMG_BONUS]: 1.0,
  },
}

// 1103
export const Baizhi: Character = {
  Id: 1103,
  Rarity: Rarity.FOUR_STARS,
  Icon: 'Baizhi_Icon.webp',
  SplashArt: 'Baizhi_Portrait.webp',
  WeaponType: WeaponType.RECTIFIER,
  Type: CharacterType.GLACIO,
  Level: 90,
  Stats: [
    {
      Value: 12812.5,
      Type: StatType.HP,
    },
    {
      Value: 1002.2204,
      Type: StatType.DEF,
    },
    {
      Value: 212.5,
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Healing_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Healing_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Baizhi_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Baizhi_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Baizhi_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Baizhi_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Healing_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Healing_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Baizhi_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Baizhi_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.0,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 4.0,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Baizhi_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.0,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 4.0,
      },
    },
  ],
  EquipedEchoes: [],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 0,
    [StatType.CRIT_RATE]: 0.3,
    [StatType.ATTACK]: 0.2,
    [StatType.ATTACK_PERCENTAGE]: 0.4,
    [StatType.HP]: 0.6,
    [StatType.HP_PERCENTAGE]: 0.8,
    [StatType.HEALING_BONUS]: 1.0,
    [StatType.DEF]: 0.3,
    [StatType.DEF_PERCENTAGE]: 0.5,
    [StatType.ENERGY_REGENERATION]: 0.9,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0.2,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0.2,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.GLACIO_DMG_BONUS]: 0.4,
  },
}

// 1104
export const Lingyang: Character = {
  Id: 1104,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Lingyang_Icon.webp',
  SplashArt: 'Lingyang_Portrait.webp',
  WeaponType: WeaponType.GAUNTLETS,
  Type: CharacterType.GLACIO,
  Level: 90,
  Stats: [
    {
      Value: 10387.5,
      Type: StatType.HP,
    },
    {
      Value: 1209.9978,
      Type: StatType.DEF,
    },
    {
      Value: 437.5,
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Glacio_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.GLACIO_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Glacio_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.GLACIO_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Lingyang_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Lingyang_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Lingyang_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Lingyang_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Glacio_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.GLACIO_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Glacio_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.GLACIO_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Lingyang_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Lingyang_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Lingyang_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  EquipedEchoes: [],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 1.0,
    [StatType.CRIT_RATE]: 1.0,
    [StatType.ATTACK]: 0,
    [StatType.ATTACK_PERCENTAGE]: 0.8,
    [StatType.HP]: 0,
    [StatType.HP_PERCENTAGE]: 0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0.7,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0.3,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0.4,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0.6,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0.9,
    [StatType.GLACIO_DMG_BONUS]: 1.0,
  },
}

// 1105
export const Zhezhi: Character = {
  Id: 1105,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Zhezhi_Icon.webp',
  SplashArt: 'Zhezhi_Portrait.webp',
  WeaponType: WeaponType.RECTIFIER,
  Type: CharacterType.GLACIO,
  Level: 90,
  Stats: [
    {
      Value: 12250.0,
      Type: StatType.HP,
    },
    {
      Value: 1197.7756,
      Type: StatType.DEF,
    },
    {
      Value: 375.0,
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Zhezhi_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Zhezhi_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Zhezhi_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Zhezhi_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Zhezhi_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Zhezhi_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Zhezhi_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  EquipedEchoes: [],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 1.0,
    [StatType.CRIT_RATE]: 1.0,
    [StatType.ATTACK]: 0,
    [StatType.ATTACK_PERCENTAGE]: 0.8,
    [StatType.HP]: 0,
    [StatType.HP_PERCENTAGE]: 0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0.6,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0.4,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0.5,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0.7,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0.6,
    [StatType.GLACIO_DMG_BONUS]: 1.0,
  },
}

// 1106
export const Youhu: Character = {
  Id: 1106,
  Rarity: Rarity.FOUR_STARS,
  Icon: 'Youhu_Icon.webp',
  SplashArt: 'Youhu_Portrait.webp',
  WeaponType: WeaponType.GAUNTLETS,
  Type: CharacterType.GLACIO,
  Level: 90,
  Stats: [
    {
      Value: 9975.0,
      Type: StatType.HP,
    },
    {
      Value: 1051.1092,
      Type: StatType.DEF,
    },
    {
      Value: 262.5,
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Youhu_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Youhu_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Youhu_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Youhu_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Youhu_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Youhu_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Youhu_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  EquipedEchoes: [],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 1.0,
    [StatType.CRIT_RATE]: 1.0,
    [StatType.ATTACK]: 0,
    [StatType.ATTACK_PERCENTAGE]: 0.8,
    [StatType.HP]: 0,
    [StatType.HP_PERCENTAGE]: 0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0.8,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0.6,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.GLACIO_DMG_BONUS]: 1.0,
  },
}

// 1107
export const Carlotta: Character = {
  Id: 1107,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Carlotta_Icon.webp',
  SplashArt: 'Carlotta_Portrait.webp',
  WeaponType: WeaponType.PISTOLS,
  Type: CharacterType.GLACIO,
  Level: 90,
  Stats: [
    {
      Value: 12450.0,
      Type: StatType.HP,
    },
    {
      Value: 1197.7756,
      Type: StatType.DEF,
    },
    {
      Value: 462.5,
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Carlotta_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Carlotta_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Carlotta_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Carlotta_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Carlotta_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Carlotta_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Carlotta_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  EquipedEchoes: [],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 1.0,
    [StatType.CRIT_RATE]: 1.0,
    [StatType.ATTACK]: 0,
    [StatType.ATTACK_PERCENTAGE]: 0.8,
    [StatType.HP]: 0,
    [StatType.HP_PERCENTAGE]: 0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0.7,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0.3,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0.4,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0.6,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0.9,
    [StatType.GLACIO_DMG_BONUS]: 1.0,
  },
}

// 1202
export const Chixia: Character = {
  Id: 1202,
  Rarity: Rarity.FOUR_STARS,
  Icon: 'Chixia_Icon.webp',
  SplashArt: 'Chixia_Portrait.webp',
  WeaponType: WeaponType.PISTOLS,
  Type: CharacterType.FUSION,
  Level: 90,
  Stats: [
    {
      Value: 9087.5,
      Type: StatType.HP,
    },
    {
      Value: 953.3316,
      Type: StatType.DEF,
    },
    {
      Value: 300.0,
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Fusion_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Fusion_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Chixia_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Chixia_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Chixia_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Chixia_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Fusion_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Fusion_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Chixia_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Chixia_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Chixia_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  EquipedEchoes: [],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 1.0,
    [StatType.CRIT_RATE]: 1.0,
    [StatType.ATTACK]: 0,
    [StatType.ATTACK_PERCENTAGE]: 0.8,
    [StatType.HP]: 0,
    [StatType.HP_PERCENTAGE]: 0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0.8,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0.6,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.FUSION_DMG_BONUS]: 1.0,
  },
}

// 1203
export const Encore: Character = {
  Id: 1203,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Encore_Icon.webp',
  SplashArt: 'Encore_Portrait.webp',
  WeaponType: WeaponType.RECTIFIER,
  Type: CharacterType.FUSION,
  Level: 90,
  Stats: [
    {
      Value: 10512.5,
      Type: StatType.HP,
    },
    {
      Value: 1246.6644,
      Type: StatType.DEF,
    },
    {
      Value: 425.0,
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
      Icon: 'Skill_Rectifier.webp',
      Unlocked: true,
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Fusion_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Fusion_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Encore_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Encore_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Encore_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Encore_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Fusion_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Fusion_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Encore_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Encore_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Encore_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  EquipedEchoes: [],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 1.0,
    [StatType.CRIT_RATE]: 1.0,
    [StatType.ATTACK]: 0,
    [StatType.ATTACK_PERCENTAGE]: 0.8,
    [StatType.HP]: 0,
    [StatType.HP_PERCENTAGE]: 0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0.7,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0.3,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0.4,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0.6,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0.9,
    [StatType.FUSION_DMG_BONUS]: 1.0,
  },
}

// 1204
export const Mortefi: Character = {
  Id: 1204,
  Rarity: Rarity.FOUR_STARS,
  Icon: 'Mortefi_Icon.webp',
  SplashArt: 'Mortefi_Portrait.webp',
  WeaponType: WeaponType.PISTOLS,
  Type: CharacterType.FUSION,
  Level: 90,
  Stats: [
    {
      Value: 10025.0,
      Type: StatType.HP,
    },
    {
      Value: 1136.6646,
      Type: StatType.DEF,
    },
    {
      Value: 250.0,
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Fusion_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Fusion_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Mortefi_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Mortefi_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Mortefi_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Mortefi_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Fusion_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Fusion_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Mortefi_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Mortefi_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Mortefi_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  EquipedEchoes: [],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 1.0,
    [StatType.CRIT_RATE]: 1.0,
    [StatType.ATTACK]: 0,
    [StatType.ATTACK_PERCENTAGE]: 0.8,
    [StatType.HP]: 0,
    [StatType.HP_PERCENTAGE]: 0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0.8,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0.2,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0.3,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0.9,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0.6,
    [StatType.FUSION_DMG_BONUS]: 1.0,
  },
}

// 1205
export const Changli: Character = {
  Id: 1205,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Changli_Icon.webp',
  SplashArt: 'Changli_Portrait.webp',
  WeaponType: WeaponType.SWORD,
  Type: CharacterType.FUSION,
  Level: 90,
  Stats: [
    {
      Value: 10387.5,
      Type: StatType.HP,
    },
    {
      Value: 1099.998,
      Type: StatType.DEF,
    },
    {
      Value: 462.5,
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Changli_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Changli_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Changli_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Changli_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Changli_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Changli_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Changli_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  EquipedEchoes: [],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 1.0,
    [StatType.CRIT_RATE]: 1.0,
    [StatType.ATTACK]: 0,
    [StatType.ATTACK_PERCENTAGE]: 0.8,
    [StatType.HP]: 0,
    [StatType.HP_PERCENTAGE]: 0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0.8,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0.6,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.FUSION_DMG_BONUS]: 1.0,
  },
}

// 1206
export const Brant: Character = {
  Id: 1206,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Brant_Icon.webp',
  SplashArt: 'Brant_Portrait.webp',
  WeaponType: WeaponType.SWORD,
  Type: CharacterType.FUSION,
  Level: 90,
  Stats: [
    {
      Value: 11675.0,
      Type: StatType.HP,
    },
    {
      Value: 1307.7754,
      Type: StatType.DEF,
    },
    {
      Value: 375.0,
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Brant_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Brant_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Brant_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Brant_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Brant_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Brant_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Brant_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  EquipedEchoes: [],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 0.4,
    [StatType.CRIT_RATE]: 0.4,
    [StatType.ATTACK]: 0,
    [StatType.ATTACK_PERCENTAGE]: 0.5,
    [StatType.HP]: 0.7,
    [StatType.HP_PERCENTAGE]: 0.9,
    [StatType.HEALING_BONUS]: 0.8,
    [StatType.DEF]: 0.4,
    [StatType.DEF_PERCENTAGE]: 0.6,
    [StatType.ENERGY_REGENERATION]: 0.9,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0.2,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0.2,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0.4,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0.4,
    [StatType.FUSION_DMG_BONUS]: 0.5,
  },
}

// 1207
export const Lupa: Character = {
  Id: 1207,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Lupa_Icon.webp',
  SplashArt: 'Lupa_Portrait.webp',
  WeaponType: WeaponType.BROADBLADE,
  Type: CharacterType.FUSION,
  Level: 90,
  Stats: [
    {
      Value: 11912.5,
      Type: StatType.HP,
    },
    {
      Value: 1185.5534,
      Type: StatType.DEF,
    },
    {
      Value: 387.5,
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
      Icon: 'Lupa_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Lupa_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Lupa_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Lupa_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Lupa_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Lupa_Sequence_Node_06.webp',
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Lupa_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Lupa_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Lupa_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Lupa_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Lupa_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Lupa_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Lupa_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
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
    [StatType.FUSION_DMG_BONUS]: 1.0,
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
      Value: 10500.0,
      Type: StatType.HP,
    },
    {
      Value: 1185.5534,
      Type: StatType.DEF,
    },
    {
      Value: 437.5,
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 2.4,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 5.6,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Calcharo_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Calcharo_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Calcharo_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Calcharo_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 2.4,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 5.6,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Calcharo_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Calcharo_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Calcharo_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  EquipedEchoes: [],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 1.0,
    [StatType.CRIT_RATE]: 1.0,
    [StatType.ATTACK]: 0,
    [StatType.ATTACK_PERCENTAGE]: 0.8,
    [StatType.HP]: 0,
    [StatType.HP_PERCENTAGE]: 0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0.6,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0.5,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0.7,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0.8,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0.6,
    [StatType.ELECTRO_DMG_BONUS]: 1.0,
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
      Value: 11000.0,
      Type: StatType.HP,
    },
    {
      Value: 1283.331,
      Type: StatType.DEF,
    },
    {
      Value: 400.0,
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Yinlin_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Yinlin_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Yinlin_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Yinlin_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Yinlin_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Yinlin_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Yinlin_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  EquipedEchoes: [],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 1.0,
    [StatType.CRIT_RATE]: 1.0,
    [StatType.ATTACK]: 0,
    [StatType.ATTACK_PERCENTAGE]: 0.8,
    [StatType.HP]: 0,
    [StatType.HP_PERCENTAGE]: 0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0.8,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0.6,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.ELECTRO_DMG_BONUS]: 1.0,
  },
}

// 1303
export const Yuanwu: Character = {
  Id: 1303,
  Rarity: Rarity.FOUR_STARS,
  Icon: 'Yuanwu_Icon.webp',
  SplashArt: 'Yuanwu_Portrait.webp',
  WeaponType: WeaponType.GAUNTLETS,
  Type: CharacterType.ELECTRO,
  Level: 90,
  Stats: [
    {
      Value: 8525.0,
      Type: StatType.HP,
    },
    {
      Value: 1637.7748,
      Type: StatType.DEF,
    },
    {
      Value: 225.0,
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Electro_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ELECTRO_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Electro_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ELECTRO_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Yuanwu_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Yuanwu_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Yuanwu_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Yuanwu_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Electro_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ELECTRO_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Electro_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ELECTRO_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Yuanwu_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Yuanwu_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.0,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 4.0,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Yuanwu_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.0,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 4.0,
      },
    },
  ],
  EquipedEchoes: [],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 0.4,
    [StatType.CRIT_RATE]: 0.4,
    [StatType.ATTACK]: 0,
    [StatType.ATTACK_PERCENTAGE]: 0.5,
    [StatType.HP]: 0.7,
    [StatType.HP_PERCENTAGE]: 0.9,
    [StatType.HEALING_BONUS]: 0.8,
    [StatType.DEF]: 0.4,
    [StatType.DEF_PERCENTAGE]: 0.6,
    [StatType.ENERGY_REGENERATION]: 0.9,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0.2,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0.2,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0.4,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0.4,
    [StatType.ELECTRO_DMG_BONUS]: 0.5,
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
      Value: 10825.0,
      Type: StatType.HP,
    },
    {
      Value: 1258.8866,
      Type: StatType.DEF,
    },
    {
      Value: 412.5,
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Jinhsi_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Jinhsi_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Jinhsi_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Jinhsi_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Jinhsi_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Jinhsi_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Jinhsi_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  EquipedEchoes: [],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 1.0,
    [StatType.CRIT_RATE]: 1.0,
    [StatType.ATTACK]: 0,
    [StatType.ATTACK_PERCENTAGE]: 0.8,
    [StatType.HP]: 0,
    [StatType.HP_PERCENTAGE]: 0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0.8,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0.2,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0.3,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0.9,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0.6,
    [StatType.SPECTRO_DMG_BONUS]: 1.0,
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
      Value: 10625.0,
      Type: StatType.HP,
    },
    {
      Value: 1222.22,
      Type: StatType.DEF,
    },
    {
      Value: 425.0,
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 2.4,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 5.6,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Xiangli_Yao_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Xiangli_Yao_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Xiangli_Yao_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Xiangli_Yao_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 2.4,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 5.6,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Xiangli_Yao_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Xiangli_Yao_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Xiangli_Yao_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  EquipedEchoes: [],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 1.0,
    [StatType.CRIT_RATE]: 1.0,
    [StatType.ATTACK]: 0,
    [StatType.ATTACK_PERCENTAGE]: 0.8,
    [StatType.HP]: 0,
    [StatType.HP_PERCENTAGE]: 0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0.8,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0.6,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.ELECTRO_DMG_BONUS]: 1.0,
  },
}

// 1402
export const Yangyang: Character = {
  Id: 1402,
  Rarity: Rarity.FOUR_STARS,
  Icon: 'Yangyang_Icon.webp',
  SplashArt: 'Yangyang_Portrait.webp',
  WeaponType: WeaponType.SWORD,
  Type: CharacterType.AERO,
  Level: 90,
  Stats: [
    {
      Value: 10200.0,
      Type: StatType.HP,
    },
    {
      Value: 1099.998,
      Type: StatType.DEF,
    },
    {
      Value: 250.0,
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Aero_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.AERO_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Aero_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.AERO_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Yangyang_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Yangyang_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Yangyang_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Yangyang_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Aero_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.AERO_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Aero_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.AERO_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Yangyang_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Yangyang_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Yangyang_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  EquipedEchoes: [],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 0.4,
    [StatType.CRIT_RATE]: 0.4,
    [StatType.ATTACK]: 0,
    [StatType.ATTACK_PERCENTAGE]: 0.5,
    [StatType.HP]: 0.7,
    [StatType.HP_PERCENTAGE]: 0.9,
    [StatType.HEALING_BONUS]: 0.8,
    [StatType.DEF]: 0.4,
    [StatType.DEF_PERCENTAGE]: 0.6,
    [StatType.ENERGY_REGENERATION]: 0.9,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0.2,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0.2,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0.4,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0.4,
    [StatType.AERO_DMG_BONUS]: 0.5,
  },
}

// 1403
export const Aalto: Character = {
  Id: 1403,
  Rarity: Rarity.FOUR_STARS,
  Icon: 'Aalto_Icon.webp',
  SplashArt: 'Aalto_Portrait.webp',
  WeaponType: WeaponType.PISTOLS,
  Type: CharacterType.AERO,
  Level: 90,
  Stats: [
    {
      Value: 9850.0,
      Type: StatType.HP,
    },
    {
      Value: 1075.5536,
      Type: StatType.DEF,
    },
    {
      Value: 262.5,
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
      Icon: 'Skill_Pistols.webp',
      Unlocked: true,
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Aero_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.AERO_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Aero_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.AERO_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Aalto_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Aalto_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Aalto_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Aalto_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Aero_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.AERO_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Aero_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.AERO_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Aalto_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Aalto_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Aalto_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
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
    [StatType.AERO_DMG_BONUS]: 1.0,
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
      Value: 10487.5,
      Type: StatType.HP,
    },
    {
      Value: 1185.5534,
      Type: StatType.DEF,
    },
    {
      Value: 437.5,
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Jiyan_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Jiyan_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Jiyan_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Jiyan_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Jiyan_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Jiyan_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Jiyan_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  EquipedEchoes: [],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 1.0,
    [StatType.CRIT_RATE]: 1.0,
    [StatType.ATTACK]: 0,
    [StatType.ATTACK_PERCENTAGE]: 0.8,
    [StatType.HP]: 0,
    [StatType.HP_PERCENTAGE]: 0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0.6,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0.4,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0.7,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0.8,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0.6,
    [StatType.AERO_DMG_BONUS]: 1.0,
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
      Value: 14112.5,
      Type: StatType.HP,
    },
    {
      Value: 1124.4424,
      Type: StatType.DEF,
    },
    {
      Value: 337.5,
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Jianxin_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Jianxin_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Jianxin_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Jianxin_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Jianxin_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Jianxin_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Jianxin_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  EquipedEchoes: [],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 1.0,
    [StatType.CRIT_RATE]: 1.0,
    [StatType.ATTACK]: 0,
    [StatType.ATTACK_PERCENTAGE]: 0.8,
    [StatType.HP]: 0,
    [StatType.HP_PERCENTAGE]: 0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0.8,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0.6,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.AERO_DMG_BONUS]: 1.0,
  },
}

// 1407
export const Ciaccona: Character = {
  Id: 1407,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Ciaccona_Icon.webp',
  SplashArt: 'Ciaccona_Portrait.webp',
  WeaponType: WeaponType.PISTOLS,
  Type: CharacterType.AERO,
  Level: 90,
  Stats: [
    {
      Value: 12237.5,
      Type: StatType.HP,
    },
    {
      Value: 1197.7756,
      Type: StatType.DEF,
    },
    {
      Value: 375.0,
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
      Icon: 'Ciaccona_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Ciaccona_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Ciaccona_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Ciaccona_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Ciaccona_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Ciaccona_Sequence_Node_06.webp',
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 2.4,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 5.6,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Ciaccona_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Ciaccona_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Ciaccona_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Ciaccona_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 2.4,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 5.6,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Ciaccona_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Ciaccona_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Ciaccona_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
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
    [StatType.AERO_DMG_BONUS]: 1.0,
  },
}

// 1408
export const Rover_Aero: Character = {
  Id: 1408,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Rover_Aero_Icon.webp',
  SplashArt: 'Rover_Aero_Portrait.webp',
  WeaponType: WeaponType.SWORD,
  Type: CharacterType.AERO,
  Level: 90,
  Stats: [
    {
      Value: 10775.0,
      Type: StatType.HP,
    },
    {
      Value: 1136.6646,
      Type: StatType.DEF,
    },
    {
      Value: 437.5,
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
      Icon: 'Rover_Aero_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Rover_Aero_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Rover_Aero_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Rover_Aero_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Rover_Aero_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Rover_Aero_Sequence_Node_06.webp',
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Healing_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Healing_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Rover_Aero_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Rover_Aero_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Rover_Aero_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Rover_Aero_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Healing_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Healing_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Rover_Aero_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Rover_Aero_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Rover_Aero_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
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
    [StatType.AERO_DMG_BONUS]: 1.0,
  },
}

// 1409
export const Cartethyia: Character = {
  Id: 1409,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Cartethyia_Icon.webp',
  SplashArt: 'Cartethyia_Portrait.webp',
  WeaponType: WeaponType.SWORD,
  Type: CharacterType.AERO,
  Level: 90,
  Stats: [
    {
      Value: 14800.0,
      Type: StatType.HP,
    },
    {
      Value: 611.11,
      Type: StatType.DEF,
    },
    {
      Value: 312.5,
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
      Icon: 'Cartethyia_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Cartethyia_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Cartethyia_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Cartethyia_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Cartethyia_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Cartethyia_Sequence_Node_06.webp',
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Cartethyia_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Cartethyia_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Cartethyia_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Cartethyia_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Cartethyia_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Cartethyia_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Health.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HP_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Health.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HP_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Cartethyia_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Health.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HP_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Health.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HP_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  EquipedEchoes: [],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 0.8,
    [StatType.CRIT_RATE]: 0.8,
    [StatType.ATTACK]: 0.2,
    [StatType.ATTACK_PERCENTAGE]: 0.4,
    [StatType.HP]: 0.8,
    [StatType.HP_PERCENTAGE]: 1.0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0.7,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0.6,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0.2,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0.6,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.AERO_DMG_BONUS]: 1.0,
  },
}

// 1502
export const Rover_Spectro: Character = {
  Id: 1502,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Rover_Spectro_Icon.webp',
  SplashArt: 'Rover_Spectro_Portrait.webp',
  WeaponType: WeaponType.SWORD,
  Type: CharacterType.SPECTRO,
  Level: 90,
  Stats: [
    {
      Value: 11400.0,
      Type: StatType.HP,
    },
    {
      Value: 1368.8864,
      Type: StatType.DEF,
    },
    {
      Value: 375.0,
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
      Icon: 'Rover_Spectro_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Rover_Spectro_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Rover_Spectro_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Rover_Spectro_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Rover_Spectro_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Rover_Spectro_Sequence_Node_06.webp',
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Spectro_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.SPECTRO_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Spectro_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.SPECTRO_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Rover_Spectro_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Rover_Spectro_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Rover_Spectro_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Rover_Spectro_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Spectro_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.SPECTRO_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Spectro_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.SPECTRO_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Rover_Spectro_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Rover_Spectro_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Rover_Spectro_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
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
    [StatType.SPECTRO_DMG_BONUS]: 1.0,
  },
}

// 1503
export const Verina: Character = {
  Id: 1503,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Verina_Icon.webp',
  SplashArt: 'Verina_Portrait.webp',
  WeaponType: WeaponType.RECTIFIER,
  Type: CharacterType.SPECTRO,
  Level: 90,
  Stats: [
    {
      Value: 14237.5,
      Type: StatType.HP,
    },
    {
      Value: 1099.998,
      Type: StatType.DEF,
    },
    {
      Value: 337.5,
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Healing_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Healing_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Verina_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Verina_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Verina_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Verina_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Healing_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Healing_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Verina_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Verina_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Verina_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  EquipedEchoes: [],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 0,
    [StatType.CRIT_RATE]: 0.3,
    [StatType.ATTACK]: 0.2,
    [StatType.ATTACK_PERCENTAGE]: 0.4,
    [StatType.HP]: 0.6,
    [StatType.HP_PERCENTAGE]: 0.8,
    [StatType.HEALING_BONUS]: 1.0,
    [StatType.DEF]: 0.3,
    [StatType.DEF_PERCENTAGE]: 0.5,
    [StatType.ENERGY_REGENERATION]: 0.9,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0.2,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0.2,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.SPECTRO_DMG_BONUS]: 0.4,
  },
}

// 1504
export const Lumi: Character = {
  Id: 1504,
  Rarity: Rarity.FOUR_STARS,
  Icon: 'Lumi_Icon.webp',
  SplashArt: 'Lumi_Portrait.webp',
  WeaponType: WeaponType.BROADBLADE,
  Type: CharacterType.ELECTRO,
  Level: 90,
  Stats: [
    {
      Value: 8500.0,
      Type: StatType.HP,
    },
    {
      Value: 879.9984,
      Type: StatType.DEF,
    },
    {
      Value: 337.5,
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Lumi_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Lumi_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Lumi_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Lumi_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Lumi_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Lumi_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Lumi_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
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
    [StatType.ELECTRO_DMG_BONUS]: 1.0,
  },
}

// 1505
export const Shorekeeper: Character = {
  Id: 1505,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Shorekeeper_Icon.webp',
  SplashArt: 'Shorekeeper_Portrait.webp',
  WeaponType: WeaponType.RECTIFIER,
  Type: CharacterType.SPECTRO,
  Level: 90,
  Stats: [
    {
      Value: 16712.5,
      Type: StatType.HP,
    },
    {
      Value: 1099.998,
      Type: StatType.DEF,
    },
    {
      Value: 287.5,
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Healing_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Healing_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Shorekeeper_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Shorekeeper_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Shorekeeper_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Shorekeeper_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Healing_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Healing_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Shorekeeper_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Shorekeeper_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.0,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 4.0,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Shorekeeper_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.0,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 4.0,
      },
    },
  ],
  EquipedEchoes: [],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 0,
    [StatType.CRIT_RATE]: 0.3,
    [StatType.ATTACK]: 0.2,
    [StatType.ATTACK_PERCENTAGE]: 0.4,
    [StatType.HP]: 0.6,
    [StatType.HP_PERCENTAGE]: 0.8,
    [StatType.HEALING_BONUS]: 1.0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0.9,
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
  WeaponType: WeaponType.RECTIFIER,
  Type: CharacterType.SPECTRO,
  Level: 90,
  Stats: [
    {
      Value: 10825.0,
      Type: StatType.HP,
    },
    {
      Value: 1258.8866,
      Type: StatType.DEF,
    },
    {
      Value: 412.5,
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 2.4,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 5.6,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Phoebe_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Phoebe_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Phoebe_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Phoebe_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 2.4,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 5.6,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Phoebe_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Phoebe_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Phoebe_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
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
    [StatType.SPECTRO_DMG_BONUS]: 1.0,
  },
}

// 1507
export const Zani: Character = {
  Id: 1507,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Zani_Icon.webp',
  SplashArt: 'Zani_Portrait.webp',
  WeaponType: WeaponType.GAUNTLETS,
  Type: CharacterType.SPECTRO,
  Level: 90,
  Stats: [
    {
      Value: 10775.0,
      Type: StatType.HP,
    },
    {
      Value: 1136.6646,
      Type: StatType.DEF,
    },
    {
      Value: 437.5,
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
      Icon: 'Zani_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Zani_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Zani_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Zani_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Zani_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Zani_Sequence_Node_06.webp',
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Zani_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Zani_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Zani_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Zani_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Zani_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Zani_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Zani_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
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
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0.2,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 1.0,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0.5,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.SPECTRO_DMG_BONUS]: 1.0,
  },
}

// 1601
export const Taoqi: Character = {
  Id: 1601,
  Rarity: Rarity.FOUR_STARS,
  Icon: 'Taoqi_Icon.webp',
  SplashArt: 'Taoqi_Portrait.webp',
  WeaponType: WeaponType.BROADBLADE,
  Type: CharacterType.HAVOC,
  Level: 90,
  Stats: [
    {
      Value: 8950.0,
      Type: StatType.HP,
    },
    {
      Value: 1564.4416,
      Type: StatType.DEF,
    },
    {
      Value: 225.0,
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Havoc_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Havoc_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Taoqi_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Taoqi_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Taoqi_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Taoqi_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Havoc_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Havoc_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Taoqi_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Taoqi_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.0,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 4.0,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Taoqi_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.0,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 4.0,
      },
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
    [StatType.HAVOC_DMG_BONUS]: 1.0,
  },
}

// 1602
export const Danjin: Character = {
  Id: 1602,
  Rarity: Rarity.FOUR_STARS,
  Icon: 'Danjin_Icon.webp',
  SplashArt: 'Danjin_Portrait.webp',
  WeaponType: WeaponType.SWORD,
  Type: CharacterType.HAVOC,
  Level: 90,
  Stats: [
    {
      Value: 9437.5,
      Type: StatType.HP,
    },
    {
      Value: 1148.8868,
      Type: StatType.DEF,
    },
    {
      Value: 262.5,
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Havoc_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Havoc_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Danjin_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Danjin_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Danjin_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Danjin_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Havoc_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Havoc_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Danjin_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Danjin_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Danjin_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
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
    [StatType.HAVOC_DMG_BONUS]: 1.0,
  },
}

// 1603
export const Camellya: Character = {
  Id: 1603,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Camellya_Icon.webp',
  SplashArt: 'Camellya_Portrait.webp',
  WeaponType: WeaponType.SWORD,
  Type: CharacterType.HAVOC,
  Level: 90,
  Stats: [
    {
      Value: 10325.0,
      Type: StatType.HP,
    },
    {
      Value: 1161.109,
      Type: StatType.DEF,
    },
    {
      Value: 450.0,
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 2.4,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 5.6,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Camellya_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Camellya_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Camellya_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Camellya_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 2.4,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 5.6,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Camellya_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Camellya_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Camellya_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
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
    [StatType.HAVOC_DMG_BONUS]: 1.0,
  },
}

// 1604
export const Rover_Havoc: Character = {
  Id: 1604,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Rover_Havoc_Icon.webp',
  SplashArt: 'Rover_Havoc_Portrait.webp',
  WeaponType: WeaponType.SWORD,
  Type: CharacterType.HAVOC,
  Level: 90,
  Stats: [
    {
      Value: 10825.0,
      Type: StatType.HP,
    },
    {
      Value: 1258.8866,
      Type: StatType.DEF,
    },
    {
      Value: 412.5,
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
      Icon: 'Rover_Havoc_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Rover_Havoc_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Rover_Havoc_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Rover_Havoc_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Rover_Havoc_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Rover_Havoc_Sequence_Node_06.webp',
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Havoc_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Havoc_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Rover_Havoc_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Rover_Havoc_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Rover_Havoc_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Rover_Havoc_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Havoc_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Havoc_DMG_Bonus.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Rover_Havoc_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Rover_Havoc_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Rover_Havoc_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
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
    [StatType.HAVOC_DMG_BONUS]: 1.0,
  },
}

// 1606
export const Roccia: Character = {
  Id: 1606,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Roccia_Icon.webp',
  SplashArt: 'Roccia_Portrait.webp',
  WeaponType: WeaponType.GAUNTLETS,
  Type: CharacterType.HAVOC,
  Level: 90,
  Stats: [
    {
      Value: 12250.0,
      Type: StatType.HP,
    },
    {
      Value: 1197.7756,
      Type: StatType.DEF,
    },
    {
      Value: 375.0,
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 2.4,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 5.6,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Roccia_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Roccia_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Roccia_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Roccia_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 2.4,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_DMG.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 5.6,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Roccia_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Roccia_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Roccia_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
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
    [StatType.HAVOC_DMG_BONUS]: 1.0,
  },
}

// 1607
export const Cantarella: Character = {
  Id: 1607,
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Cantarella_Icon.webp',
  SplashArt: 'Cantarella_Portrait.webp',
  WeaponType: WeaponType.RECTIFIER,
  Type: CharacterType.HAVOC,
  Level: 90,
  Stats: [
    {
      Value: 11600.0,
      Type: StatType.HP,
    },
    {
      Value: 1099.998,
      Type: StatType.DEF,
    },
    {
      Value: 400.0,
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
      Icon: 'Cantarella_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Cantarella_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Cantarella_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Cantarella_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Cantarella_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Cantarella_Sequence_Node_06.webp',
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Cantarella_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Cantarella_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Cantarella_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Cantarella_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Cantarella_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Cantarella_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Cantarella_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
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
    [StatType.HAVOC_DMG_BONUS]: 1.0,
  },
}

// 1608
export const Phrolova: Character = {
  Id: 1608,
  Rarity: Rarity.FIVE_STARS,
  ReleaseState: ReleaseState.NEW,
  Icon: 'Phrolova_Icon.webp',
  SplashArt: 'Phrolova_Portrait.webp',
  WeaponType: WeaponType.RECTIFIER,
  Type: CharacterType.HAVOC,
  Level: 90,
  Stats: [
    {
      Value: 10775.0,
      Type: StatType.HP,
    },
    {
      Value: 1136.6646,
      Type: StatType.DEF,
    },
    {
      Value: 437.5,
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
      Icon: 'Phrolova_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Phrolova_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Phrolova_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Phrolova_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Phrolova_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'Phrolova_Sequence_Node_06.webp',
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
      Id: 'Basic_Attack_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: 'Basic_Attack_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: 'Forte_Circuit',
      Level: 1,
      Icon: 'Phrolova_Forte_Circuit.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_01',
      Level: 1,
      Icon: 'Phrolova_Inherent_Skill_01.webp',
      Unlocked: true,
    },
    {
      Id: 'Inherent_Skill_02',
      Level: 1,
      Icon: 'Phrolova_Inherent_Skill_02.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill',
      Level: 1,
      Icon: 'Phrolova_Intro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: 'Intro_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Crit_Rate.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: 'Outro_Skill',
      Level: 1,
      Icon: 'Phrolova_Outro_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation',
      Level: 1,
      Icon: 'Phrolova_Resonance_Liberation.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Liberation_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: 'Resonance_Skill',
      Level: 1,
      Icon: 'Phrolova_Resonance_Skill.webp',
      Unlocked: true,
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_01',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: 'Resonance_Skill_Bonus_Stat_02',
      Level: 1,
      Icon: 'Icon_Attribute_Attack.webp',
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
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
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0.5,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0.6,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.HAVOC_DMG_BONUS]: 1.0,
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
  Lupa,
  Calcharo,
  Yinlin,
  Yuanwu,
  Jinhsi,
  Xiangli_Yao,
  Yangyang,
  Aalto,
  Jiyan,
  Jianxin,
  Ciaccona,
  Rover_Aero,
  Cartethyia,
  Rover_Spectro,
  Verina,
  Lumi,
  Shorekeeper,
  Phoebe,
  Zani,
  Taoqi,
  Danjin,
  Camellya,
  Rover_Havoc,
  Roccia,
  Cantarella,
  Phrolova,
]
