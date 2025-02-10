import type IStatistic from './IStatistic'

export interface ISkill {
  Level: number
  Id: string
  Name?: string
  Description?: string
  Icon: string
  Unlocked: boolean
  Stat?: IStatistic
}
