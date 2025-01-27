import type { CharacterType } from '../Enums/CharacterType'
import type { Rarity } from '../Enums/Rarity'
import type { WeaponType } from '../Enums/WeaponType'
import type IEcho from './IEcho'
import type ICharacterSequence from './ISequence'
import type IStatistic from './IStatistic'
import type IWeapon from './IWeapon'

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
  Weapon?: IWeapon
  Level: number
  Stats: IStatistic[]
  Sequences: ICharacterSequence[]
  Echoes: IEcho[]
  Unlocked: boolean
  StatsWeights?: Record<string, number>
}
