import type { CharacterReleaseState } from '../Enums/CharacterReleaseState'
import type { CharacterType } from '../Enums/CharacterType'
import type { Rarity } from '../Enums/Rarity'
import type { WeaponType } from '../Enums/WeaponType'
import type Sequence from './Sequence'
import type Skill from './Skill'
import type Statistic from './Statistic'

export default interface Character {
  Id: number
  Icon: string
  SplashArt: string
  Rarity: Rarity
  ReleaseState?: CharacterReleaseState
  Type: CharacterType
  WeaponType?: WeaponType
  EquipedWeapon?: number
  Level: number
  Stats: Statistic[]
  Sequences: Sequence[]
  Skills: Skill[]
  EquipedEchoes: number[]
  StatsWeights?: Record<string, number>
}
