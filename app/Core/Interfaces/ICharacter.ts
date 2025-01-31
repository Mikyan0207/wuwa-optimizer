import type { CharacterType } from '../Enums/CharacterType'
import type { Rarity } from '../Enums/Rarity'
import type { WeaponType } from '../Enums/WeaponType'
import type ICharacterSequence from './ISequence'
import type { ISkill } from './ISkill'
import type IStatistic from './IStatistic'

export default interface ICharacter {
  Id: number
  Name: string
  Icon: string
  SplashArt: string
  SplashArtOffsetY?: string
  SplashArtOffsetX?: string
  Background?: string
  Rarity: Rarity
  Type: CharacterType
  WeaponType?: WeaponType
  EquipedWeapon?: number
  Level: number
  Stats: IStatistic[]
  Sequences: ICharacterSequence[]
  Skills?: ISkill[]
  EquipedEchoes: number[]
  Unlocked: boolean
  StatsWeights?: Record<string, number>
}
