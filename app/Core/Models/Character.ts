import type { CharacterReleaseState } from '../Enums/CharacterReleaseState'
import type { StatType } from '../Enums/StatType'
import type ICharacter from '../Interfaces/ICharacter'
import type ICharacterSequence from '../Interfaces/ISequence'
import type { ISkill } from '../Interfaces/ISkill'
import type IStatistic from '../Interfaces/IStatistic'
import { CharacterType } from '../Enums/CharacterType'
import { Rarity } from '../Enums/Rarity'
import { WeaponType } from '../Enums/WeaponType'

// TODO: Remove nested objects as much as possible to avoid data duplication and problems when updating weapons/echoes.
// Replace Echoes with EquipedEchoes: number[] (EchoId[])

export class Character {
  Id: number
  ReleaseState?: CharacterReleaseState
  Icon: string
  SplashArt?: string
  Rarity: Rarity
  Type: CharacterType
  WeaponType?: WeaponType
  EquipedWeapon?: number
  Level: number
  Stats: IStatistic[]
  Sequences: ICharacterSequence[]
  Skills?: ISkill[]
  EquipedEchoes: number[]
  StatsWeights?: Record<StatType, number>

  constructor(character: ICharacter) {
    this.Id = character.Id
    this.ReleaseState = character.ReleaseState
    this.Icon = character.Icon
    this.SplashArt = character.SplashArt
    this.Rarity = character.Rarity
    this.Type = character.Type
    this.WeaponType = character.WeaponType
    this.Level = character.Level
    this.Stats = character.Stats
    this.Sequences = character.Sequences
    this.Skills = character.Skills
    this.EquipedEchoes = character.EquipedEchoes
    this.StatsWeights = character.StatsWeights
    this.EquipedWeapon = character.EquipedWeapon
  }

  HasWeapon() {
    return this.EquipedWeapon !== undefined
  }

  GetIcon() {
    return `/images/characters/${this.Id}/${this.Icon}`
  }

  GetRarityIcon() {
    const basePath = '/images/icons/'

    switch (this.Rarity) {
      case Rarity.FIVE_STARS:
        return `${basePath}Icon_5_Stars.webp`
      case Rarity.FOUR_STARS:
        return `${basePath}Icon_4_Stars.webp`
      case Rarity.THREE_STARS:
        return `${basePath}Icon_3_Stars.webp`
      default:
        return `${basePath}Icon_2_Stars.webp`
    }
  }

  GetWeaponTypeIcon() {
    const basePath = '/images/icons/'

    switch (this.WeaponType) {
      case WeaponType.PISTOLS:
        return `${basePath}Icon_Pistols.webp`
      case WeaponType.BROADBLADE:
        return `${basePath}Icon_Broadblade.webp`
      case WeaponType.SWORD:
        return `${basePath}Icon_Sword.webp`
      case WeaponType.RECTIFIER:
        return `${basePath}Icon_Rectifier.webp`
      case WeaponType.GAUNTLETS:
        return `${basePath}Icon_Gauntlets.webp`
    }
  }

  GetSequenceLevel() {
    return this.Sequences.filter(s => s.Unlocked === true).length ?? 0
  }

  GetTypeIcon() {
    const basePath = '/images/icons/'

    switch (this.Type) {
      case CharacterType.GLACIO:
        return `${basePath}Glacio.webp`
      case CharacterType.SPECTRO:
        return `${basePath}Spectro.webp`
      case CharacterType.HAVOC:
        return `${basePath}Havoc.webp`
      case CharacterType.FUSION:
        return `${basePath}Fusion.webp`
      case CharacterType.AERO:
        return `${basePath}Aero.webp`
      case CharacterType.ELECTRO:
        return `${basePath}Electro.webp`
      default:
        return 'None'
    }
  }

  GetSplashArtPath() {
    return `/images/characters/${this.Id}/${this.SplashArt}`
  }
}
