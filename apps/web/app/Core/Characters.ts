import type { BaseCharacter } from "./Interfaces/Character"
import { CharacterType } from "./Enums/CharacterType"
import { Rarity } from "./Enums/Rarity"
import { ReleaseState } from "./Enums/ReleaseState"
import { StatType } from "./Enums/StatType"
import { WeaponType } from "./Enums/WeaponType"

// 1102
export const Sanhua: BaseCharacter = {
  Id: 1102,
  Rarity: Rarity.FOUR_STARS,
  Icon: "Sanhua_Icon.webp",
  SplashArt: "Sanhua_Portrait.webp",
  WeaponType: WeaponType.SWORD,
  Type: CharacterType.GLACIO,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Sanhua_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Sanhua_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Sanhua_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Sanhua_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Sanhua_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Sanhua_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Sword.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Glacio_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.GLACIO_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Glacio_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.GLACIO_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Sanhua_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Sanhua_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Sanhua_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Sanhua_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Glacio_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.GLACIO_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Glacio_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.GLACIO_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Sanhua_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Sanhua_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Sanhua_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Baizhi: BaseCharacter = {
  Id: 1103,
  Rarity: Rarity.FOUR_STARS,
  Icon: "Baizhi_Icon.webp",
  SplashArt: "Baizhi_Portrait.webp",
  WeaponType: WeaponType.RECTIFIER,
  Type: CharacterType.GLACIO,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Baizhi_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Baizhi_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Baizhi_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Baizhi_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Baizhi_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Baizhi_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Rectifier.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Healing_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Healing_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Baizhi_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Baizhi_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Baizhi_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Baizhi_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Healing_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Healing_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Baizhi_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Baizhi_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.0,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 4.0,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Baizhi_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.0,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 4.0,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Lingyang: BaseCharacter = {
  Id: 1104,
  Rarity: Rarity.FIVE_STARS,
  Icon: "Lingyang_Icon.webp",
  SplashArt: "Lingyang_Portrait.webp",
  WeaponType: WeaponType.GAUNTLETS,
  Type: CharacterType.GLACIO,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Lingyang_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Lingyang_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Lingyang_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Lingyang_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Lingyang_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Lingyang_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Gauntlets.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Glacio_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.GLACIO_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Glacio_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.GLACIO_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Lingyang_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Lingyang_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Lingyang_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Lingyang_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Glacio_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.GLACIO_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Glacio_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.GLACIO_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Lingyang_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Lingyang_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Lingyang_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Zhezhi: BaseCharacter = {
  Id: 1105,
  Rarity: Rarity.FIVE_STARS,
  Icon: "Zhezhi_Icon.webp",
  SplashArt: "Zhezhi_Portrait.webp",
  AnimatedArt: {
    Skeleton: "zhezhi.skel",
    Atlas: "zhezhi.atlas",
    OffsetY: 425,
    Scale: 2,
  },
  WeaponType: WeaponType.RECTIFIER,
  Type: CharacterType.GLACIO,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Zhezhi_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Zhezhi_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Zhezhi_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Zhezhi_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Zhezhi_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Zhezhi_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Rectifier.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Zhezhi_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Zhezhi_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Zhezhi_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Zhezhi_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Zhezhi_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Zhezhi_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Zhezhi_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Youhu: BaseCharacter = {
  Id: 1106,
  Rarity: Rarity.FOUR_STARS,
  Icon: "Youhu_Icon.webp",
  SplashArt: "Youhu_Portrait.webp",
  WeaponType: WeaponType.GAUNTLETS,
  Type: CharacterType.GLACIO,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Youhu_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Youhu_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Youhu_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Youhu_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Youhu_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Youhu_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Gauntlets.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Youhu_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Youhu_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Youhu_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Youhu_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Youhu_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Youhu_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Youhu_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Carlotta: BaseCharacter = {
  Id: 1107,
  Rarity: Rarity.FIVE_STARS,
  Icon: "Carlotta_Icon.webp",
  SplashArt: "Carlotta_Portrait.webp",
  AnimatedArt: {
    Skeleton: "kelaita.skel",
    Atlas: "kelaita.atlas",
    OffsetX: 125,
    OffsetY: 350,
    Scale: 2.25,
  },
  WeaponType: WeaponType.PISTOLS,
  Type: CharacterType.GLACIO,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Carlotta_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Carlotta_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Carlotta_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Carlotta_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Carlotta_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Carlotta_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Pistols.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Carlotta_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Carlotta_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Carlotta_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Carlotta_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Carlotta_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Carlotta_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Carlotta_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Chixia: BaseCharacter = {
  Id: 1202,
  Rarity: Rarity.FOUR_STARS,
  Icon: "Chixia_Icon.webp",
  SplashArt: "Chixia_Portrait.webp",
  WeaponType: WeaponType.PISTOLS,
  Type: CharacterType.FUSION,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Chixia_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Chixia_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Chixia_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Chixia_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Chixia_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Chixia_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Pistols.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Fusion_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Fusion_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Chixia_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Chixia_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Chixia_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Chixia_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Fusion_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Fusion_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Chixia_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Chixia_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Chixia_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Encore: BaseCharacter = {
  Id: 1203,
  Rarity: Rarity.FIVE_STARS,
  Icon: "Encore_Icon.webp",
  SplashArt: "Encore_Portrait.webp",
  WeaponType: WeaponType.RECTIFIER,
  Type: CharacterType.FUSION,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Encore_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Encore_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Encore_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Encore_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Encore_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Encore_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Rectifier.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Fusion_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Fusion_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Encore_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Encore_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Encore_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Encore_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Fusion_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Fusion_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Encore_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Encore_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Encore_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Mortefi: BaseCharacter = {
  Id: 1204,
  Rarity: Rarity.FOUR_STARS,
  Icon: "Mortefi_Icon.webp",
  SplashArt: "Mortefi_Portrait.webp",
  WeaponType: WeaponType.PISTOLS,
  Type: CharacterType.FUSION,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Mortefi_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Mortefi_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Mortefi_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Mortefi_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Mortefi_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Mortefi_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Pistols.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Fusion_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Fusion_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Mortefi_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Mortefi_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Mortefi_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Mortefi_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Fusion_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Fusion_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.FUSION_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Mortefi_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Mortefi_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Mortefi_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Changli: BaseCharacter = {
  Id: 1205,
  Rarity: Rarity.FIVE_STARS,
  Icon: "Changli_Icon.webp",
  SplashArt: "Changli_Portrait.webp",
  AnimatedArt: {
    Skeleton: "changli.skel",
    Atlas: "changli.atlas",
    Scale: 2.30,
  },
  WeaponType: WeaponType.SWORD,
  Type: CharacterType.FUSION,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Changli_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Changli_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Changli_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Changli_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Changli_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Changli_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Sword.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Changli_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Changli_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Changli_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Changli_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Changli_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Changli_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Changli_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Brant: BaseCharacter = {
  Id: 1206,
  Rarity: Rarity.FIVE_STARS,
  Icon: "Brant_Icon.webp",
  SplashArt: "Brant_Portrait.webp",
  AnimatedArt: {
    Skeleton: "bulante.skel",
    Atlas: "bulante.atlas",
    OffsetY: 87,
    OffsetX: 7,
    Scale: 1.73,
  },
  WeaponType: WeaponType.SWORD,
  Type: CharacterType.FUSION,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Brant_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Brant_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Brant_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Brant_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Brant_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Brant_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Sword.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Brant_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Brant_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Brant_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Brant_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Brant_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Brant_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Brant_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Lupa: BaseCharacter = {
  Id: 1207,
  Rarity: Rarity.FIVE_STARS,
  Icon: "Lupa_Icon.webp",
  SplashArt: "Lupa_Portrait.webp",
  AnimatedArt: {
    Skeleton: "lupa.skel",
    Atlas: "lupa.atlas",
  },
  WeaponType: WeaponType.BROADBLADE,
  Type: CharacterType.FUSION,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Lupa_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Lupa_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Lupa_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Lupa_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Lupa_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Lupa_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Broadblade.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Lupa_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Lupa_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Lupa_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Lupa_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Lupa_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Lupa_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Lupa_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Calcharo: BaseCharacter = {
  Id: 1301,
  Rarity: Rarity.FIVE_STARS,
  Icon: "Calcharo_Icon.webp",
  SplashArt: "Calcharo_Portrait.webp",
  WeaponType: WeaponType.BROADBLADE,
  Type: CharacterType.ELECTRO,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Calcharo_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Calcharo_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Calcharo_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Calcharo_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Calcharo_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Calcharo_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Broadblade.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_DMG.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 2.4,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_DMG.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 5.6,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Calcharo_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Calcharo_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Calcharo_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Calcharo_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_DMG.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 2.4,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_DMG.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 5.6,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Calcharo_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Calcharo_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Calcharo_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Yinlin: BaseCharacter = {
  Id: 1302,
  Rarity: Rarity.FIVE_STARS,
  Icon: "Yinlin_Icon.webp",
  SplashArt: "Yinlin_Portrait.webp",
  AnimatedArt: {
    Skeleton: "yinlin.skel",
    Atlas: "yinlin.atlas",
    OffsetY: 100,
  },
  WeaponType: WeaponType.RECTIFIER,
  Type: CharacterType.ELECTRO,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Yinlin_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Yinlin_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Yinlin_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Yinlin_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Yinlin_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Yinlin_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Rectifier.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Yinlin_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Yinlin_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Yinlin_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Yinlin_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Yinlin_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Yinlin_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Yinlin_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Yuanwu: BaseCharacter = {
  Id: 1303,
  Rarity: Rarity.FOUR_STARS,
  Icon: "Yuanwu_Icon.webp",
  SplashArt: "Yuanwu_Portrait.webp",
  WeaponType: WeaponType.GAUNTLETS,
  Type: CharacterType.ELECTRO,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Yuanwu_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Yuanwu_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Yuanwu_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Yuanwu_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Yuanwu_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Yuanwu_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Gauntlets.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Electro_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ELECTRO_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Electro_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ELECTRO_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Yuanwu_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Yuanwu_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Yuanwu_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Yuanwu_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Electro_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ELECTRO_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Electro_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ELECTRO_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Yuanwu_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Yuanwu_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.0,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 4.0,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Yuanwu_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.0,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 4.0,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Jinhsi: BaseCharacter = {
  Id: 1304,
  Rarity: Rarity.FIVE_STARS,
  Icon: "Jinhsi_Icon.webp",
  SplashArt: "Jinhsi_Portrait.webp",
  AnimatedArt: {
    Skeleton: "jinxi.skel",
    Atlas: "jinxi.atlas",
    OffsetY: 475,
    OffsetX: 10,
    Scale: 1.95,
  },
  WeaponType: WeaponType.BROADBLADE,
  Type: CharacterType.SPECTRO,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Jinhsi_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Jinhsi_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Jinhsi_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Jinhsi_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Jinhsi_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Jinhsi_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Broadblade.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Jinhsi_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Jinhsi_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Jinhsi_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Jinhsi_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Jinhsi_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Jinhsi_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Jinhsi_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Xiangli_Yao: BaseCharacter = {
  Id: 1305,
  Rarity: Rarity.FIVE_STARS,
  Icon: "Xiangli_Yao_Icon.webp",
  SplashArt: "Xiangli_Yao_Portrait.webp",
  AnimatedArt: {
    Skeleton: "xiangliyao.skel",
    Atlas: "xiangliyao.atlas",
    Scale: 1.75,
  },
  WeaponType: WeaponType.GAUNTLETS,
  Type: CharacterType.ELECTRO,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Xiangli_Yao_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Xiangli_Yao_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Xiangli_Yao_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Xiangli_Yao_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Xiangli_Yao_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Xiangli_Yao_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Gauntlets.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_DMG.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 2.4,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_DMG.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 5.6,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Xiangli_Yao_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Xiangli_Yao_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Xiangli_Yao_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Xiangli_Yao_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_DMG.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 2.4,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_DMG.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 5.6,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Xiangli_Yao_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Xiangli_Yao_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Xiangli_Yao_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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

// 1306
export const Augusta: BaseCharacter = {
  Id: 1306,
  Rarity: Rarity.FIVE_STARS,
  ReleaseState: ReleaseState.UPCOMING,
  Icon: "Augusta_Icon.webp",
  SplashArt: "Augusta_Portrait.webp",
  AnimatedArt: {
    Skeleton: "aogusita.skel",
    Atlas: "aogusita.atlas",
    OffsetX: 50,
  },
  WeaponType: WeaponType.BROADBLADE,
  Type: CharacterType.ELECTRO,
  BaseStats: [
    {
      Value: 10300.0,
      Type: StatType.HP,
    },
    {
      Value: 1112.2202,
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
      Type: StatType.ELECTRO_DMG_BONUS,
    },
  ],
  BaseSequences: [],
  BaseSkills: [],
  BaseStatsWeights: {},
}

// 1402
export const Yangyang: BaseCharacter = {
  Id: 1402,
  Rarity: Rarity.FOUR_STARS,
  Icon: "Yangyang_Icon.webp",
  SplashArt: "Yangyang_Portrait.webp",
  WeaponType: WeaponType.SWORD,
  Type: CharacterType.AERO,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Yangyang_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Yangyang_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Yangyang_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Yangyang_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Yangyang_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Yangyang_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Sword.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Aero_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.AERO_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Aero_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.AERO_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Yangyang_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Yangyang_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Yangyang_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Yangyang_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Aero_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.AERO_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Aero_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.AERO_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Yangyang_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Yangyang_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Yangyang_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Aalto: BaseCharacter = {
  Id: 1403,
  Rarity: Rarity.FOUR_STARS,
  Icon: "Aalto_Icon.webp",
  SplashArt: "Aalto_Portrait.webp",
  WeaponType: WeaponType.PISTOLS,
  Type: CharacterType.AERO,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Aalto_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Aalto_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Aalto_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Aalto_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Aalto_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Aalto_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Pistols.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Aero_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.AERO_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Aero_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.AERO_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Aalto_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Aalto_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Aalto_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Aalto_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Aero_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.AERO_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Aero_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.AERO_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Aalto_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Aalto_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Aalto_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Jiyan: BaseCharacter = {
  Id: 1404,
  Rarity: Rarity.FIVE_STARS,
  Icon: "Jiyan_Icon.webp",
  SplashArt: "Jiyan_Portrait.webp",
  WeaponType: WeaponType.BROADBLADE,
  Type: CharacterType.AERO,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Jiyan_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Jiyan_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Jiyan_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Jiyan_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Jiyan_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Jiyan_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Broadblade.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Jiyan_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Jiyan_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Jiyan_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Jiyan_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Jiyan_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Jiyan_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Jiyan_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Jianxin: BaseCharacter = {
  Id: 1405,
  Rarity: Rarity.FIVE_STARS,
  Icon: "Jianxin_Icon.webp",
  SplashArt: "Jianxin_Portrait.webp",
  WeaponType: WeaponType.GAUNTLETS,
  Type: CharacterType.AERO,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Jianxin_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Jianxin_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Jianxin_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Jianxin_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Jianxin_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Jianxin_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Gauntlets.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Jianxin_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Jianxin_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Jianxin_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Jianxin_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Jianxin_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Jianxin_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Jianxin_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Ciaccona: BaseCharacter = {
  Id: 1407,
  Rarity: Rarity.FIVE_STARS,
  Icon: "Ciaccona_Icon.webp",
  SplashArt: "Ciaccona_Portrait.webp",
  WeaponType: WeaponType.PISTOLS,
  Type: CharacterType.AERO,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Ciaccona_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Ciaccona_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Ciaccona_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Ciaccona_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Ciaccona_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Ciaccona_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Pistols.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_DMG.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 2.4,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_DMG.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 5.6,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Ciaccona_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Ciaccona_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Ciaccona_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Ciaccona_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_DMG.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 2.4,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_DMG.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 5.6,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Ciaccona_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Ciaccona_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Ciaccona_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Rover_Aero: BaseCharacter = {
  Id: 1408,
  Rarity: Rarity.FIVE_STARS,
  Icon: "Rover_Aero_Icon.webp",
  SplashArt: "Rover_Aero_Portrait.webp",
  WeaponType: WeaponType.SWORD,
  Type: CharacterType.AERO,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Rover_Aero_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Rover_Aero_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Rover_Aero_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Rover_Aero_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Rover_Aero_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Rover_Aero_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Sword.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Healing_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Healing_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Rover_Aero_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Rover_Aero_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Rover_Aero_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Rover_Aero_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Healing_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Healing_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Rover_Aero_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Rover_Aero_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Rover_Aero_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Cartethyia: BaseCharacter = {
  Id: 1409,
  Rarity: Rarity.FIVE_STARS,
  Icon: "Cartethyia_Icon.webp",
  SplashArt: "Cartethyia_Portrait.webp",
  AnimatedArt: {
    Skeleton: "katixiya.skel",
    Atlas: "katixiya.atlas",
    OffsetX: 0,
    OffsetY: 0,
    Scale: 2.5,
  },
  WeaponType: WeaponType.SWORD,
  Type: CharacterType.AERO,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Cartethyia_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Cartethyia_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Cartethyia_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Cartethyia_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Cartethyia_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Cartethyia_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Sword.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.8,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Cartethyia_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Cartethyia_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Cartethyia_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Cartethyia_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.8,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Cartethyia_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Cartethyia_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Health.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HP_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Health.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HP_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Cartethyia_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Health.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HP_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Health.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HP_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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

// 1410
export const Iuno: BaseCharacter = {
  Id: 1410,
  Rarity: Rarity.FIVE_STARS,
  ReleaseState: ReleaseState.UPCOMING,
  Icon: "Iuno_Icon.webp",
  SplashArt: "Iuno_Portrait.webp",
  AnimatedArt: {
    Skeleton: "younuo.skel",
    Atlas: "younuo.atlas",
    OffsetY: 100,
  },
  WeaponType: WeaponType.GAUNTLETS,
  Type: CharacterType.AERO,
  BaseStats: [
    {
      Value: 10525.0,
      Type: StatType.HP,
    },
    {
      Value: 1124.4424,
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
      Type: StatType.AERO_DMG_BONUS,
    },
  ],
  BaseSequences: [],
  BaseSkills: [],
  BaseStatsWeights: {},
}

// 1502
export const Rover_Spectro: BaseCharacter = {
  Id: 1502,
  Rarity: Rarity.FIVE_STARS,
  Icon: "Rover_Spectro_Icon.webp",
  SplashArt: "Rover_Spectro_Portrait.webp",
  WeaponType: WeaponType.SWORD,
  Type: CharacterType.SPECTRO,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Rover_Spectro_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Rover_Spectro_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Rover_Spectro_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Rover_Spectro_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Rover_Spectro_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Rover_Spectro_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Sword.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Spectro_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.SPECTRO_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Spectro_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.SPECTRO_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Rover_Spectro_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Rover_Spectro_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Rover_Spectro_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Rover_Spectro_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Spectro_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.SPECTRO_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Spectro_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.SPECTRO_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Rover_Spectro_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Rover_Spectro_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Rover_Spectro_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Verina: BaseCharacter = {
  Id: 1503,
  Rarity: Rarity.FIVE_STARS,
  Icon: "Verina_Icon.webp",
  SplashArt: "Verina_Portrait.webp",
  WeaponType: WeaponType.RECTIFIER,
  Type: CharacterType.SPECTRO,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Verina_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Verina_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Verina_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Verina_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Verina_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Verina_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Rectifier.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Healing_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Healing_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Verina_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Verina_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Verina_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Verina_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Healing_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Healing_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Verina_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Verina_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Verina_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Lumi: BaseCharacter = {
  Id: 1504,
  Rarity: Rarity.FOUR_STARS,
  Icon: "Lumi_Icon.webp",
  SplashArt: "Lumi_Portrait.webp",
  WeaponType: WeaponType.BROADBLADE,
  Type: CharacterType.ELECTRO,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Lumi_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Lumi_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Lumi_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Lumi_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Lumi_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Lumi_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Broadblade.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Lumi_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Lumi_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Lumi_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Lumi_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Lumi_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Lumi_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Lumi_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Shorekeeper: BaseCharacter = {
  Id: 1505,
  Rarity: Rarity.FIVE_STARS,
  Icon: "Shorekeeper_Icon.webp",
  SplashArt: "Shorekeeper_Portrait.webp",
  AnimatedArt: {
    Skeleton: "shouanren.skel",
    Atlas: "shouanren.atlas",
    OffsetX: 0,
    OffsetY: 100,
    Scale: 2.15,
  },
  WeaponType: WeaponType.RECTIFIER,
  Type: CharacterType.SPECTRO,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Shorekeeper_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Shorekeeper_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Shorekeeper_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Shorekeeper_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Shorekeeper_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Shorekeeper_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Rectifier.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Healing_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Healing_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Shorekeeper_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Shorekeeper_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Shorekeeper_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Shorekeeper_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Healing_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Healing_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HEALING_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Shorekeeper_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Shorekeeper_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Health.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HP_PERCENTAGE,
        Value: 1.80,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Health.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HP_PERCENTAGE,
        Value: 4.20,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Shorekeeper_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Health.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HP_PERCENTAGE,
        Value: 1.80,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Health.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HP_PERCENTAGE,
        Value: 4.20,
      },
    },
  ],
  BaseStatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 0.3,
    [StatType.CRIT_RATE]: 0.3,
    [StatType.ATTACK]: 0.2,
    [StatType.ATTACK_PERCENTAGE]: 0.4,
    [StatType.HP]: 0.8,
    [StatType.HP_PERCENTAGE]: 1.0,
    [StatType.HEALING_BONUS]: 1.0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 1.0,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.SPECTRO_DMG_BONUS]: 0.1,
  },
}

// 1506
export const Phoebe: BaseCharacter = {
  Id: 1506,
  Rarity: Rarity.FIVE_STARS,
  Icon: "Phoebe_Icon.webp",
  SplashArt: "Phoebe_Portrait.webp",
  AnimatedArt: {
    Skeleton: "feibi.skel",
    Atlas: "feibi.atlas",
    OffsetY: 295,
    Scale: 2.15,
  },
  WeaponType: WeaponType.RECTIFIER,
  Type: CharacterType.SPECTRO,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Phoebe_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Phoebe_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Phoebe_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Phoebe_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Phoebe_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Phoebe_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Rectifier.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_DMG.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 2.4,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_DMG.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 5.6,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Phoebe_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Phoebe_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Phoebe_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Phoebe_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_DMG.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 2.4,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_DMG.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 5.6,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Phoebe_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Phoebe_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Phoebe_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Zani: BaseCharacter = {
  Id: 1507,
  Rarity: Rarity.FIVE_STARS,
  Icon: "Zani_Icon.webp",
  SplashArt: "Zani_Portrait.webp",
  AnimatedArt: {
    Skeleton: "zanni.skel",
    Atlas: "zanni.atlas",
    OffsetY: 125,
    Scale: 2.0,
  },
  WeaponType: WeaponType.GAUNTLETS,
  Type: CharacterType.SPECTRO,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Zani_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Zani_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Zani_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Zani_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Zani_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Zani_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Gauntlets.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Zani_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Zani_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Zani_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Zani_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Zani_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Zani_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Zani_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Taoqi: BaseCharacter = {
  Id: 1601,
  Rarity: Rarity.FOUR_STARS,
  Icon: "Taoqi_Icon.webp",
  SplashArt: "Taoqi_Portrait.webp",
  WeaponType: WeaponType.BROADBLADE,
  Type: CharacterType.HAVOC,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Taoqi_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Taoqi_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Taoqi_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Taoqi_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Taoqi_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Taoqi_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Broadblade.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Havoc_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Havoc_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Taoqi_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Taoqi_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Taoqi_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Taoqi_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Havoc_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Havoc_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Taoqi_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Taoqi_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.0,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 4.0,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Taoqi_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.0,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 4.0,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Danjin: BaseCharacter = {
  Id: 1602,
  Rarity: Rarity.FOUR_STARS,
  Icon: "Danjin_Icon.webp",
  SplashArt: "Danjin_Portrait.webp",
  WeaponType: WeaponType.SWORD,
  Type: CharacterType.HAVOC,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Danjin_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Danjin_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Danjin_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Danjin_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Danjin_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Danjin_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Sword.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Havoc_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Havoc_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Danjin_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Danjin_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Danjin_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Danjin_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Havoc_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Havoc_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Danjin_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Danjin_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Danjin_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Camellya: BaseCharacter = {
  Id: 1603,
  Rarity: Rarity.FIVE_STARS,
  Icon: "Camellya_Icon.webp",
  SplashArt: "Camellya_Portrait.webp",
  WeaponType: WeaponType.SWORD,
  Type: CharacterType.HAVOC,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Camellya_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Camellya_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Camellya_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Camellya_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Camellya_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Camellya_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Sword.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_DMG.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 2.4,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_DMG.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 5.6,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Camellya_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Camellya_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Camellya_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Camellya_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_DMG.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 2.4,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_DMG.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 5.6,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Camellya_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Camellya_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Camellya_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Rover_Havoc: BaseCharacter = {
  Id: 1604,
  Rarity: Rarity.FIVE_STARS,
  Icon: "Rover_Havoc_Icon.webp",
  SplashArt: "Rover_Havoc_Portrait.webp",
  WeaponType: WeaponType.SWORD,
  Type: CharacterType.HAVOC,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Rover_Havoc_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Rover_Havoc_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Rover_Havoc_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Rover_Havoc_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Rover_Havoc_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Rover_Havoc_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Sword.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Havoc_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Havoc_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Rover_Havoc_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Rover_Havoc_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Rover_Havoc_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Rover_Havoc_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Havoc_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 1.8,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Havoc_DMG_Bonus.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.HAVOC_DMG_BONUS,
        Value: 4.2,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Rover_Havoc_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Rover_Havoc_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Rover_Havoc_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Roccia: BaseCharacter = {
  Id: 1606,
  Rarity: Rarity.FIVE_STARS,
  Icon: "Roccia_Icon.webp",
  SplashArt: "Roccia_Portrait.webp",
  WeaponType: WeaponType.GAUNTLETS,
  Type: CharacterType.HAVOC,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Roccia_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Roccia_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Roccia_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Roccia_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Roccia_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Roccia_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Gauntlets.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_DMG.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 2.4,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_DMG.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 5.6,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Roccia_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Roccia_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Roccia_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Roccia_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_DMG.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 2.4,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_DMG.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_DMG,
        Value: 5.6,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Roccia_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Roccia_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Roccia_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Cantarella: BaseCharacter = {
  Id: 1607,
  Rarity: Rarity.FIVE_STARS,
  Icon: "Cantarella_Icon.webp",
  SplashArt: "Cantarella_Portrait.webp",
  WeaponType: WeaponType.RECTIFIER,
  Type: CharacterType.HAVOC,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Cantarella_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Cantarella_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Cantarella_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Cantarella_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Cantarella_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Cantarella_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Rectifier.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Cantarella_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Cantarella_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Cantarella_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Cantarella_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Cantarella_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Cantarella_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Cantarella_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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
export const Phrolova: BaseCharacter = {
  Id: 1608,
  Rarity: Rarity.FIVE_STARS,
  ReleaseState: ReleaseState.NEW,
  Icon: "Phrolova_Icon.webp",
  SplashArt: "Phrolova_Portrait",
  AnimatedArt: {
    Skeleton: "fuluoluo.skel",
    Atlas: "fuluoluo.atlas",
    Scale: 2.5,
  },
  WeaponType: WeaponType.RECTIFIER,
  Type: CharacterType.HAVOC,
  BaseStats: [
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
  BaseSequences: [
    {
      Name: "",
      Icon: "Phrolova_Sequence_Node_01.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Phrolova_Sequence_Node_02.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Phrolova_Sequence_Node_03.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Phrolova_Sequence_Node_04.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Phrolova_Sequence_Node_05.webp",
      Unlocked: false,
    },
    {
      Name: "",
      Icon: "Phrolova_Sequence_Node_06.webp",
      Unlocked: false,
    },
  ],
  BaseSkills: [
    {
      Id: "Basic_Attack",
      Level: 10,
      Icon: "Skill_Rectifier.webp",
      Unlocked: true,
    },
    {
      Id: "Basic_Attack_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: "Basic_Attack_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Forte_Circuit",
      Level: 10,
      Icon: "Phrolova_Forte_Circuit.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_01",
      Level: 10,
      Icon: "Phrolova_Inherent_Skill_01.webp",
      Unlocked: true,
    },
    {
      Id: "Inherent_Skill_02",
      Level: 10,
      Icon: "Phrolova_Inherent_Skill_02.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill",
      Level: 10,
      Icon: "Phrolova_Intro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Intro_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 1.2,
      },
    },
    {
      Id: "Intro_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Crit_Rate.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.CRIT_RATE,
        Value: 2.8,
      },
    },
    {
      Id: "Outro_Skill",
      Level: 10,
      Icon: "Phrolova_Outro_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation",
      Level: 10,
      Icon: "Phrolova_Resonance_Liberation.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Liberation_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
    {
      Id: "Resonance_Skill",
      Level: 10,
      Icon: "Phrolova_Resonance_Skill.webp",
      Unlocked: true,
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_01",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 1.8,
      },
    },
    {
      Id: "Resonance_Skill_Bonus_Stat_02",
      Level: 10,
      Icon: "Icon_Attribute_Attack.webp",
      Unlocked: true,
      Stat: {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 4.2,
      },
    },
  ],
  BaseStatsWeights: {
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

// 9903
export const Galbrena: BaseCharacter = {
  Id: 9903,
  Rarity: Rarity.FIVE_STARS,
  ReleaseState: ReleaseState.UNKNOWN,
  Icon: "Galbrena_Icon.webp",
  SplashArt: "Galbrena_Portrait.webp",
  WeaponType: WeaponType.GAUNTLETS,
  Type: CharacterType.NONE,
  BaseStats: [
  ],
  BaseSequences: [
  ],
  BaseSkills: [
  ],
  BaseStatsWeights: {
  },
}

// 9904
export const Qiuyuan: BaseCharacter = {
  Id: 9904,
  Rarity: Rarity.FIVE_STARS,
  ReleaseState: ReleaseState.UNKNOWN,
  Icon: "Qiuyuan_Icon.webp",
  SplashArt: "Qiuyuan_Portrait.webp",
  WeaponType: WeaponType.NONE,
  Type: CharacterType.NONE,
  BaseStats: [
  ],
  BaseSequences: [
  ],
  BaseSkills: [
  ],
  BaseStatsWeights: {
  },
}

// 9905
export const Chisa: BaseCharacter = {
  Id: 9905,
  Rarity: Rarity.FIVE_STARS,
  ReleaseState: ReleaseState.UNKNOWN,
  Icon: "Chisa_Icon.webp",
  SplashArt: "Chisa_Portrait.webp",
  WeaponType: WeaponType.NONE,
  Type: CharacterType.NONE,
  BaseStats: [
  ],
  BaseSequences: [
  ],
  BaseSkills: [
  ],
  BaseStatsWeights: {
  },
}

export const BaseCharacters: BaseCharacter[] = [
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
  Augusta,
  Iuno,
  Galbrena,
  Qiuyuan,
  Chisa,
]
