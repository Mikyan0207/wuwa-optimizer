import type { Rarity } from '../Enums/Rarity'
import type { ReleaseState } from '../Enums/ReleaseState'
import type { WeaponType } from '../Enums/WeaponType'
import type Statistic from './Statistic'

// export default interface Weapon {
//   Id?: string | undefined
//   GameId: number
//   Name: string
//   ReleaseState?: ReleaseState
//   Level: number
//   Rank: number
//   Icon: string
//   EquipedBy?: number
//   Rarity: Rarity
//   Type: WeaponType
//   MainStatistic: Statistic
//   SecondaryStatistic: Statistic
//   ExtraStatistics?: Statistic[]
// }

export default interface Weapon extends BaseWeapon, PartialWeapon {}

export interface BaseWeapon {
  GameId: number
  Name: string
  ReleaseState?: ReleaseState
  Type: WeaponType
  Rarity: Rarity
  Level: number
  MainStatistic: Statistic
  SecondaryStatistic: Statistic
  ExtraStatistics?: Statistic[]
}

export interface PartialWeapon {
  Id?: string
  GameId: number
  Rank: number
  Level: number
}
