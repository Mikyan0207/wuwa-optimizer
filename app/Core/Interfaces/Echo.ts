import type { EchoCost } from '../Enums/EchoCost'
import type { Rarity } from '../Enums/Rarity'
import type { ScoreGrade } from '../Enums/ScoreGrade'
import type Sonata from './Sonata'
import type IStatistic from './Statistic'

export default interface Echo {
  Id?: string
  GameId: number
  Icon: string
  Rarity: Rarity
  Cost: EchoCost
  Level: number
  Sonata: Sonata[]
  MainStatistic?: IStatistic
  SecondaryStatistic?: IStatistic
  Statistics: IStatistic[]
  ExtraStatistics?: IStatistic[]
  IsNightmare?: boolean

  // Properties for builds and scorer
  BuildId?: string
  EquipedSlot?: number
  Score?: number
  Note?: ScoreGrade

  // Legacy properties, will be removed in the future
  EquipedBy?: number
}
