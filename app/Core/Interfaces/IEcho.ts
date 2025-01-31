import type { EchoCost } from '../Enums/EchoCost'
import type { Rarity } from '../Enums/Rarity'
import type { ISonata } from './ISonata'
import type IStatistic from './IStatistic'

export default interface IEcho {
  Id: number
  Name: string
  Icon: string
  Rarity: Rarity
  Cost: EchoCost
  Level: number
  EquipedBy?: number
  EquipedSlot?: number
  Sonata: ISonata[]
  MainStatistic?: IStatistic
  Statistics: IStatistic[]
}
