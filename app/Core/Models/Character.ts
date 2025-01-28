import type ICharacter from '../Interfaces/ICharacter'
import type ICharacterSequence from '../Interfaces/ISequence'
import type { ISkill } from '../Interfaces/ISkill'
import type IStatistic from '../Interfaces/IStatistic'
import { CharacterType } from '../Enums/CharacterType'
import { EchoCost } from '../Enums/EchoCost'
import { Rarity } from '../Enums/Rarity'
import { StatType } from '../Enums/StatType'
import { WeaponType } from '../Enums/WeaponType'
import { MAKE_STAT } from '../Statistics'
import { Echo } from './Echo'
import { Weapon } from './Weapon'

export class Character {
  Id: number
  Name: string
  Icon: string
  SplashArt?: string
  SplashArtOffsetY?: string
  SplashArtOffsetX?: string
  Background?: string
  Rarity: Rarity
  Type: CharacterType
  WeaponType?: WeaponType | null | undefined
  Weapon?: Weapon | null | undefined
  Level: number
  Stats: IStatistic[]
  Sequences: ICharacterSequence[]
  Skills?: ISkill[]
  Echoes: Echo[]
  Unlocked: boolean
  StatsWeights?: Record<StatType, number>

  constructor(character: ICharacter) {
    this.Id = character.Id
    this.Name = character.Name
    this.Icon = character.Icon
    this.SplashArt = character.SplashArt
    this.SplashArtOffsetY = character.SplashArtOffsetY
    this.SplashArtOffsetX = character.SplashArtOffsetX
    this.Background = character.Background
    this.Rarity = character.Rarity
    this.Type = character.Type
    this.WeaponType = character.WeaponType
    this.Weapon = null
    this.Level = character.Level
    this.Stats = character.Stats
    this.Sequences = character.Sequences
    this.Skills = character.Skills
    this.Echoes = []
    this.Unlocked = character.Unlocked
    this.StatsWeights = character.StatsWeights

    if (character.Weapon !== undefined && character.Weapon !== null) {
      this.Weapon = new Weapon(character.Weapon)
    }

    if (character.Echoes) {
      for (const e of character.Echoes) {
        this.Echoes.push(new Echo(e))
      }
    }
  }

  HasWeapon() {
    return this.Weapon !== null && this.Weapon !== undefined
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

  GetWeaponIcon() {
    return `/images/weapons/${this.Weapon?.Icon}`
  }

  GetWeaponRarityIcon() {
    return (this.Weapon as Weapon)?.GetRarityIcon()
  }

  GetWeapon() {
    return this.Weapon as Weapon
  }

  GetWeaponName() {
    return this.Weapon?.Name
  }

  GetWeaponLevel() {
    return this.Weapon?.Level
  }

  GetWeaponType() {
    return this.Weapon?.Type
  }

  GetWeaponTypeIcon() {
    if (this.HasWeapon()) {
      return (this.Weapon as Weapon)?.GetTypeIcon()
    }

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
      default:
        return 'None'
    }
  }

  GetSplashArtPath() {
    return `/images/characters/${this.Id}/${this.SplashArt}`
  }

  GetBackground() {
    return this.Background ? `/images/characters/${this.Id}/${this.Background}` : this.GetSplashArtPath()
  }

  GetEchoesWithPlaceHolders() {
    while (this.Echoes.length < 5) {
      this.Echoes.push(new Echo({
        Id: -1,
        Name: '',
        Icon: '',
        Rarity: Rarity.THREE_STARS,
        Cost: EchoCost.ONE_COST,
        Level: 0,
        Sonata: [],
        MainStatistic: MAKE_STAT(StatType.NONE, -1),
        Statistics: [],
      }))
    }

    return this.Echoes
  }
}
