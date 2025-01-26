import type ICharacter from './Interfaces/ICharacter'
import { CharacterType } from './Enums/CharacterType'
import { Rarity } from './Enums/Rarity'
import { StatType } from './Enums/StatType'
import { WeaponType } from './Enums/WeaponType'
import { TheLastDance } from './Weapons'

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
  Echoes: [],
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
  Stats: [],
  Sequences: [],
  Echoes: [],
  Unlocked: false,
}

// 1602
export const Danjin: ICharacter = {
  Id: 1602,
  Name: 'Danjin',
  Icon: 'Danjin_Icon.webp',
  SplashArt: 'Danjin_Full_Sprite.webp',
  Background: 'Danjin_Background.webp',
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
      Type: StatType.SPECTRO_DMG_BONUS,
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
    [StatType.ELECTRO_DMG_BONUS]: 0,
    [StatType.FUSION_DMG_BONUS]: 0,
    [StatType.GLACIO_DMG_BONUS]: 0,
    [StatType.HAVOC_DMG_BONUS]: 0.1,
    [StatType.SPECTRO_DMG_BONUS]: 0,
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
  Echoes: [],
  Unlocked: false,
}

// #endregion

// #region 5 Stars

// 1304
export const Jinhsi: ICharacter = {
  Id: 1304,
  Name: 'Jinhsi',
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Jinhsi_Icon.webp',
  SplashArt: 'Jinhsi_Splash_Art_Small.webp',
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
  Echoes: [],
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

// 1205
export const Changli: ICharacter = {
  Id: 1205,
  Name: 'Changli',
  Icon: 'Changli_Icon.webp',
  SplashArt: 'Changli_Splash_Art.webp',
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
  Echoes: [],
  Unlocked: false,
}

// 1105
export const ZheZhi: ICharacter = {
  Id: 1105,
  Name: 'ZheZhi',
  Icon: 'ZheZhi_Icon.webp',
  SplashArt: 'ZheZhi_Splash_Art.webp',
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
      Type: StatType.FUSION_DMG_BONUS,
    },
  ],
  StatsWeights: {
    [StatType.NONE]: 0,
    [StatType.CRIT_DMG]: 1,
    [StatType.CRIT_RATE]: 1,
    [StatType.ATTACK]: 0.25,
    [StatType.ATTACK_PERCENTAGE]: 0.5,
    [StatType.HP]: 0,
    [StatType.HP_PERCENTAGE]: 0,
    [StatType.HEALING_BONUS]: 0,
    [StatType.DEF]: 0,
    [StatType.DEF_PERCENTAGE]: 0,
    [StatType.ENERGY_REGENERATION]: 0.5,
    [StatType.BASIC_ATTACK_DMG_AMPLIFICATION]: 0.75,
    [StatType.HEAVY_ATTACK_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION]: 0,
    [StatType.RESONANCE_SKILL_DMG_AMPLIFICATION]: 0,
    [StatType.ELECTRO_DMG_BONUS]: 0,
    [StatType.FUSION_DMG_BONUS]: 0.1,
    [StatType.GLACIO_DMG_BONUS]: 0,
    [StatType.HAVOC_DMG_BONUS]: 0,
    [StatType.SPECTRO_DMG_BONUS]: 0,
  },
  Sequences: [
    {
      Name: '',
      Icon: 'ZheZhi_Sequence_Node_01.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'ZheZhi_Sequence_Node_02.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'ZheZhi_Sequence_Node_03.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'ZheZhi_Sequence_Node_04.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'ZheZhi_Sequence_Node_05.webp',
      Unlocked: false,
    },
    {
      Name: '',
      Icon: 'ZheZhi_Sequence_Node_06.webp',
      Unlocked: false,
    },
  ],
  Echoes: [],
  Unlocked: false,
}

// 1505
export const ShoreKeeper: ICharacter = {
  Id: 1505,
  Name: 'Shore Keeper',
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Shorekeeper_Icon.webp',
  SplashArt: 'Shorekeeper_Splash_Art.webp',
  Type: CharacterType.SPECTRO,
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
  Sequences: [],
  Echoes: [],
  Unlocked: false,
}

// 1603
export const Camellya: ICharacter = {
  Id: 1603,
  Name: 'Camellya',
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Camellya_Icon.webp',
  SplashArt: 'Camellya_Splash_Art.webp',
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
  Echoes: [],
  Unlocked: false,
}

// 1107
export const Carlotta: ICharacter = {
  Id: 1107,
  Name: 'Carlotta',
  Rarity: Rarity.FIVE_STARS,
  Icon: 'Carlotta_Icon.webp',
  SplashArt: 'Carlotta_Splash_Art.webp',
  Type: CharacterType.GLACIO,
  Weapon: TheLastDance,
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
  Echoes: [],
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

// #endregion

export const TemplateCharacters: ICharacter[] = [
  Sanhua,
  Yangyang,
  Danjin,

  Jinhsi,
  Changli,
  ZheZhi,
  ShoreKeeper,
  Camellya,
  Carlotta,
]
