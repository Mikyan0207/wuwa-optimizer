import type IWeapon from './Interfaces/IWeapon'
import { Rarity } from './Enums/Rarity'
import { StatType } from './Enums/StatType'
import { WeaponType } from './Enums/WeaponType'

export const TheLastDance: IWeapon = {
  Id: 0,
  Name: 'The Last Dance',
  Icon: 'Weapon_The_Last_Dance_Full.webp',
  Level: 1,
  Rarity: Rarity.FIVE_STAR,
  Type: WeaponType.PISTOLS,
  MainStatistic: {
    Type: StatType.ATTACK,
    Value: '200',
  },
  SecondaryStatistic: {
    Type: StatType.CRIT_DMG,
    Value: '200',
  },
}

export const AgesOfHarvest: IWeapon = {
  Id: 1,
  Name: 'Ages Of Harvest',
  Icon: 'Weapon_Ages_Of_Harvest_Full.webp',
  Level: 1,
  Rarity: Rarity.FIVE_STAR,
  Type: WeaponType.BROADBLADE,
  MainStatistic: {
    Type: StatType.ATTACK,
    Value: '200',
  },
  SecondaryStatistic: {
    Type: StatType.CRIT_RATE,
    Value: '200',
  },
}

export const Weapons: IWeapon[] = [
  TheLastDance,
  AgesOfHarvest,
]
