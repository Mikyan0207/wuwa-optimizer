import type IStatistic from '../Interfaces/IStatistic'
import type IWeapon from '../Interfaces/IWeapon'
import { Rarity } from '../Enums/Rarity'
import { WeaponType } from '../Enums/WeaponType'

// TODO:
// Add an EquipedBy: number field to know which character is currently using the weapon.
// Could be useful to display additional information on the weapons page.

export class Weapon {
  Id: number
  Name: string
  Level: number
  Icon: string
  Rarity: Rarity
  Type: WeaponType
  MainStatistic: IStatistic
  SecondaryStatistic: IStatistic

  constructor(weapon: IWeapon) {
    this.Id = weapon.Id
    this.Name = weapon.Name
    this.Level = weapon.Level
    this.Icon = weapon.Icon
    this.Rarity = weapon.Rarity
    this.Type = weapon.Type
    this.MainStatistic = weapon.MainStatistic
    this.SecondaryStatistic = weapon.SecondaryStatistic
  }

  GetRarityIcon() {
    const basePath = '/images/icons/'

    switch (this.Rarity) {
      case Rarity.FIVE_STARS:
        return `${basePath}Icon_5_Stars.webp`
      case Rarity.FOUR_STARS:
        return `${basePath}Icon_4_Stars.webp`
      case Rarity.THREE_STARS:
        return `${basePath}Icon_3_Stars.webp`
      default:
        return `${basePath}Icon_2_Stars.webp`
    }
  }

  GetTypeIcon() {
    const basePath = '/images/icons/'

    switch (this.Type) {
      case WeaponType.PISTOLS:
        return `${basePath}Icon_Pistols.webp`
      case WeaponType.BROADBLADE:
        return `${basePath}Icon_Broadblade.webp`
      case WeaponType.SWORD:
        return `${basePath}Icon_Sword.webp`
      case WeaponType.RECTIFIER:
        return `${basePath}Icon_Rectifier.webp`
      case WeaponType.GAUNTLETS:
        return `${basePath}Icon_Gauntlets.webp`
    }
  }
}
