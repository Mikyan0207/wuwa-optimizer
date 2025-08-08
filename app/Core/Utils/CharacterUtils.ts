import type Character from '../Interfaces/Character'
import type { AnimatedArt } from '../Interfaces/Character'
import type Sequence from '../Interfaces/Sequence'
import { CharacterType } from '../Enums/CharacterType'
import { Rarity } from '../Enums/Rarity'
import { WeaponType } from '../Enums/WeaponType'

export function GetCharacterIcon(character: Character) {
  return `/images/characters/${character.Id}/${character.Icon}`
}

export function GetRarityIcon(character: Character) {
  const basePath = '/images/icons/'

  switch (character.Rarity) {
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

export function GetCharacterWeaponTypeIcon(character: Character) {
  const basePath = '/images/icons/'

  switch (character.WeaponType) {
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

export function GetSequenceLevel(character: Character) {
  return character.Sequences.filter(s => s.Unlocked === true).length ?? 0
}

export function GetSequenceIcon(character: Character, sequence: Sequence) {
  return `/images/characters/${character.Id}/${sequence.Icon}`
}

export function GetCharacterTypeIcon(character: Character) {
  const basePath = '/images/icons/'

  switch (character.Type) {
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

export function GetSplashArt(character: Character) {
  return `/images/characters/${character.Id}/${character.SplashArt.replace('.webp', '')}.webp`
}

export function GetCharacterBackground(character: Character) {
  return `/images/characters/${character.Id}/Background.webp`
}

export function GetCharacterAnimatedArt(character: Character): AnimatedArt {
  return {
    Skeleton: `/images/characters/${character.Id}/${character.AnimatedArt?.Skeleton}`,
    Atlas: `/images/characters/${character.Id}/${character.AnimatedArt?.Atlas}`,
    OffsetX: character.AnimatedArt?.OffsetX ?? 0,
    OffsetY: character.AnimatedArt?.OffsetY ?? 0,
  }
}

export function HasAnimatedArt(character: Character) {
  return character.AnimatedArt !== undefined
}
