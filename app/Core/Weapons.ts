import type IWeapon from './Interfaces/IWeapon'
import { Rarity } from './Enums/Rarity'
import { StatType } from './Enums/StatType'
import { WeaponType } from './Enums/WeaponType'

export const TheLastDance: IWeapon = {
  Id: 21030016,
  Name: 'The Last Dance',
  Icon: 'Weapon_The_Last_Dance.webp',
  Level: 90,
  Rarity: Rarity.FIVE_STARS,
  Type: WeaponType.PISTOLS,
  MainStatistic: {
    Type: StatType.ATTACK,
    Value: 500,
  },
  SecondaryStatistic: {
    Type: StatType.CRIT_DMG,
    Value: 72,
  },
}

export const AgesOfHarvest: IWeapon = {
  Id: 21010026,
  Name: 'Ages Of Harvest',
  Icon: 'Weapon_Ages_of_Harvest.webp',
  Level: 90,
  Rarity: Rarity.FIVE_STARS,
  Type: WeaponType.BROADBLADE,
  MainStatistic: {
    Type: StatType.ATTACK,
    Value: 587,
  },
  SecondaryStatistic: {
    Type: StatType.CRIT_RATE,
    Value: 24.3,
  },
}

export const EmeraldOfGenesis: IWeapon = {
  Id: 21020015,
  Name: 'Emerald of Genesis',
  Level: 90,
  Icon: 'Weapon_Emerald_of_Genesis.webp',
  Rarity: Rarity.FIVE_STARS,
  Type: WeaponType.SWORD,
  MainStatistic: {
    Type: StatType.ATTACK,
    Value: 587,
  },
  SecondaryStatistic: {
    Type: StatType.CRIT_RATE,
    Value: 24.3,
  },
}

export const BlazingBrilliance: IWeapon = {
  Id: 21020016,
  Name: 'Blazing Brilliance',
  Level: 90,
  Icon: 'Weapon_Blazing_Brilliance.webp',
  Rarity: Rarity.FIVE_STARS,
  Type: WeaponType.SWORD,
  MainStatistic: {
    Type: StatType.ATTACK,
    Value: 587,
  },
  SecondaryStatistic: {
    Type: StatType.CRIT_DMG,
    Value: 48.6,
  },
}

export const RedSpring: IWeapon = {
  Id: 21020026,
  Name: 'Red Spring',
  Level: 90,
  Icon: 'Weapon_Red_Spring.webp',
  Rarity: Rarity.FIVE_STARS,
  Type: WeaponType.SWORD,
  MainStatistic: {
    Type: StatType.ATTACK,
    Value: 587,
  },
  SecondaryStatistic: {
    Type: StatType.CRIT_RATE,
    Value: 24.3,
  },
}

export const AbyssSurges: IWeapon = {
  Id: 21140015,
  Name: 'Abyss Surges',
  Level: 90,
  Icon: 'Weapon_Abyss_Surges.webp',
  Rarity: Rarity.FIVE_STARS,
  Type: WeaponType.GAUNTLETS,
  MainStatistic: {
    Type: StatType.ATTACK,
    Value: 587,
  },
  SecondaryStatistic: {
    Type: StatType.ATTACK_PERCENTAGE,
    Value: 36.4,
  },
}

export const LustrousRazor: IWeapon = {
  Id: 21010015,
  Name: 'Lustrous Razor',
  Level: 90,
  Icon: 'Weapon_Lustrous_Razor.webp',
  Rarity: Rarity.FIVE_STARS,
  Type: WeaponType.BROADBLADE,
  MainStatistic: {
    Type: StatType.ATTACK,
    Value: 587,
  },
  SecondaryStatistic: {
    Type: StatType.ATTACK_PERCENTAGE,
    Value: 36.4,
  },
}

export const CosmicRipples: IWeapon = {
  Id: 21050015,
  Name: 'Cosmic Ripples',
  Level: 90,
  Icon: 'Weapon_Cosmic_Ripples.webp',
  Rarity: Rarity.FIVE_STARS,
  Type: WeaponType.RECTIFIER,
  MainStatistic: {
    Type: StatType.ATTACK,
    Value: 587,
  },
  SecondaryStatistic: {
    Type: StatType.ATTACK_PERCENTAGE,
    Value: 36.4,
  },
}

export const Weapons: IWeapon[] = [
  TheLastDance,
  AgesOfHarvest,
  EmeraldOfGenesis,
  BlazingBrilliance,
  RedSpring,
  AbyssSurges,
  LustrousRazor,
  CosmicRipples,
]

export const TemplateWeapons = Weapons
