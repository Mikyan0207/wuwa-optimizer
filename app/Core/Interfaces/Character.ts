import type { CharacterType } from '../Enums/CharacterType'
import type { Rarity } from '../Enums/Rarity'
import type { ReleaseState } from '../Enums/ReleaseState'
import type { WeaponType } from '../Enums/WeaponType'
import type Sequence from './Sequence'
import type Skill from './Skill'
import type Statistic from './Statistic'

export default interface Character extends BaseCharacter {
  Level: number
  Stats: Statistic[]
  Sequences: Sequence[]
  Skills: Skill[]
  StatsWeights: Record<string, number>
}

export interface BaseCharacter {
  Id: number
  Icon: string
  SplashArt: string
  AnimatedArt?: AnimatedArt
  Rarity: Rarity
  ReleaseState?: ReleaseState
  Type: CharacterType
  WeaponType: WeaponType
  BaseStats: Statistic[]
  BaseSequences: Sequence[]
  BaseSkills: Skill[]
  BaseStatsWeights: Record<string, number>
}

export interface PartialCharacter {
  Id: number
  Level: number
  Stats: Statistic[]
  Sequences: Sequence[]
  Skills: Skill[]
  StatsWeights: Record<string, number>
}

export interface AnimatedArt {
  Skeleton: string
  Atlas: string
  OffsetX?: number
  OffsetY?: number
  Scale?: number
}
