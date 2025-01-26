import type { Rarity } from '../Enums/Rarity'
import type { WeaponType } from '../Enums/WeaponType'
import type IStatistic from './IStatistic'

export default interface IWeapon {
  Id: number
  Name: string
  Level: number
  Icon: string
  Rarity: Rarity
  Type: WeaponType
  MainStatistic: IStatistic
  SecondaryStatistic: IStatistic
}
