import type Statistic from './Statistic'

export default interface Skill {
  Level: number
  Id: string
  Name?: string
  Description?: string
  Icon: string
  Unlocked: boolean
  CanLevelUp?: boolean
  Stat?: Statistic
}
