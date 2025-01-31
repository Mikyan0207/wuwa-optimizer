import type { EchoCost } from '../Enums/EchoCost'
import type { Rarity } from '../Enums/Rarity'
import type IEcho from '../Interfaces/IEcho'
import type IStatistic from '../Interfaces/IStatistic'
import { Sonata } from './Sonata'

export class Echo {
  Id: number
  Name: string
  Icon: string
  Rarity: Rarity
  Cost: EchoCost
  Level: number
  EquipedBy?: number | undefined
  EquipedSlot?: number
  Sonata: Sonata[]
  MainStatistic?: IStatistic
  Statistics: IStatistic[]

  constructor(echo: IEcho) {
    this.Id = echo.Id
    this.Name = echo.Name
    this.Icon = echo.Icon
    this.Rarity = echo.Rarity
    this.Cost = echo.Cost
    this.Level = echo.Level
    this.EquipedBy = echo.EquipedBy
    this.EquipedSlot = echo.EquipedSlot
    this.Sonata = echo.Sonata?.map(s => new Sonata(s)) ?? []
    this.MainStatistic = echo.MainStatistic
    this.Statistics = echo.Statistics
  }

  GetIcon() {
    return `/images/echoes/${this.Icon}`
  }
}
