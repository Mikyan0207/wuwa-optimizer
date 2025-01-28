import type IWeapon from './Interfaces/IWeapon'
import { Rarity } from './Enums/Rarity'
import { StatType } from './Enums/StatType'
import { WeaponType } from './Enums/WeaponType'

export const TheLastDance: IWeapon = {
  Id: 21030016,
  Name: 'The Last Dance',
  Icon: 'Weapon_The_Last_Dance.webp',
  IconFull: 'Weapon_The_Last_Dance_Full.webp',
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
  Icon: 'Weapon_Ages_Of_Harvest.webp',
  IconFull: 'Weapon_Ages_Of_Harvest_Full.webp',
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

export const BlazingBrilliance: IWeapon = {
  Id: 21020016,
  Name: 'Blazing Brilliance',
  Level: 90,
  Icon: 'Weapon_Blazing_Brilliance.webp',
  IconFull: 'Weapon_Blazing_Brilliance_Full.webp',
  Rarity: Rarity.FIVE_STARS,
  Type: WeaponType.SWORD,
  MainStatistic: {
    Type: StatType.ATTACK,
    Value: 587,
  },
  SecondaryStatistic: {
    Type: StatType.NONE,
    Value: 48.6,
  },
}

export const Weapons: IWeapon[] = [
  TheLastDance,
  AgesOfHarvest,
  BlazingBrilliance,
]

export const TemplateWeapons = Weapons
