import type IStatistic from './Statistic'

export default interface Sonata {
  Name: string
  Icon: string
  Effect1: string
  Effect2: string
  IsSelected: boolean
  Effect1Active: boolean
  Effect2Active: boolean
  ExtraStats?: IStatistic[]
}
