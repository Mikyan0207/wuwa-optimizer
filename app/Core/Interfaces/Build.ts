import type { IEchoRatingResult } from '~/composables/UseScoreCalculator'
import type Echo from '~/Core/Interfaces/Echo'

interface BuildEcho extends Echo {
  BuildId: number
}

export default interface Build {
  Id: string
  CharacterId: number
  Name: string
  Description?: string
  WeaponId?: number
  EquipedEchoes: number[]
  EchoesData?: BuildEcho[]
  Score?: number
  Note?: string
  EchoesScores?: IEchoRatingResult[]
  CreatedAt: Date
  UpdatedAt: Date
  IsDefault?: boolean
  Order?: number
}
