import type { ISonata } from '../Interfaces/ISonata'

export class Sonata {
  Name: string
  Icon: string
  Effect1: string
  Effect2: string
  IsSelected: boolean
  Effect1Active: boolean
  Effect2Active: boolean

  constructor(sonata: ISonata) {
    this.Name = sonata.Name
    this.Icon = sonata.Icon
    this.Effect1 = sonata.Effect1
    this.Effect2 = sonata.Effect2
    this.IsSelected = sonata.IsSelected
    this.Effect1Active = sonata.Effect1Active
    this.Effect2Active = sonata.Effect2Active
  }

  GetIcon() {
    return `/images/icons/${this.Icon}`
  }
}
