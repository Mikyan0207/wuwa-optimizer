import type { StatType } from '../Enums/StatType'
import type IStatistic from '../Interfaces/IStatistic'

export class Statistic {
  Type: StatType
  Value: number

  constructor(statistic: IStatistic) {
    this.Type = statistic.Type
    this.Value = statistic.Value
  }
}
