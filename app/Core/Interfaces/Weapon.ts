import type { Rarity } from '../Enums/Rarity'
import type { ReleaseState } from '../Enums/ReleaseState'
import type { WeaponType } from '../Enums/WeaponType'
import type Statistic from './Statistic'

export default interface Weapon {
  Id: number
  Name: string
  ReleaseState?: ReleaseState
  Level: number
  Rank: number
  Icon: string
  EquipedBy?: number
  Rarity: Rarity
  Type: WeaponType
  MainStatistic: Statistic
  SecondaryStatistic: Statistic
  ExtraStatistics?: Statistic[]
}
