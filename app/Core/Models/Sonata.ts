import type { ISonata } from '../Interfaces/ISonata'
import type IStatistic from '../Interfaces/IStatistic'

export class Sonata {
  Name: string
  Icon: string
  Effect1: string
  Effect2: string
  IsSelected: boolean
  Effect1Active: boolean
  Effect2Active: boolean
  ExtraStats?: IStatistic[]

  constructor(sonata: ISonata) {
    this.Name = sonata.Name
    this.Icon = sonata.Icon
    this.Effect1 = sonata.Effect1
    this.Effect2 = sonata.Effect2
    this.IsSelected = sonata.IsSelected
    this.Effect1Active = sonata.Effect1Active
    this.Effect2Active = sonata.Effect2Active
    this.ExtraStats = sonata.ExtraStats
  }

  GetIcon() {
    return `/images/icons/${this.Icon}`
  }
}
