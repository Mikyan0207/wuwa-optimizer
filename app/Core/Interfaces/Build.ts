import type { ScoreGrade } from '../Enums/ScoreGrade'
import type Weapon from './Weapon'
import type Echo from '~/Core/Interfaces/Echo'

export default interface Build {
  Id: string
  CharacterId: number
  Name: string
  Description?: string
  WeaponId?: string
  Echoes: Echo[]
  Score?: number
  Note?: ScoreGrade
  CreatedAt: Date
  UpdatedAt: Date
  IsDefault?: boolean
  Order?: number
}

export interface BuildWithDependencies extends Build {
  Weapon?: Weapon
}
