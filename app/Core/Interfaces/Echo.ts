import type { EchoCost } from '../Enums/EchoCost'
import type { Rarity } from '../Enums/Rarity'
import type Sonata from './Sonata'
import type IStatistic from './Statistic'

export default interface Echo {
  Id: number
  Icon: string
  Rarity: Rarity
  Cost: EchoCost
  Level: number
  EquipedBy?: number
  EquipedSlot?: number
  Sonata: Sonata[]
  MainStatistic?: IStatistic
  Statistics: IStatistic[]
  IsNightmare?: boolean
}
