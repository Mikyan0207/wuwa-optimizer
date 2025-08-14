import type Echo from '../Interfaces/Echo'
import type Sonata from '../Interfaces/Sonata'
import { EchoCost } from '../Enums/EchoCost'
import { Rarity } from '../Enums/Rarity'

export function GetEchoIcon(echo: Echo) {
  return `/images/echoes/${echo.Icon}`
}

export function GetSonataIcon(sonata: Sonata) {
  return `/images/icons/${sonata.Icon}`
}

export function GetEchoBorderColor(echo: Echo | Echo) {
  switch (echo.Rarity) {
    case Rarity.FIVE_STARS:
      return 'border-gold-500'
    case Rarity.FOUR_STARS:
      return 'border-purple-400'
    case Rarity.THREE_STARS:
      return 'border-blue-400'
    default:
      return 'border-gray-400'
  }
}

export function GetEchoRarityText(rarity: Rarity) {
  switch (rarity) {
    case Rarity.FIVE_STARS:
      return '5'
    case Rarity.FOUR_STARS:
      return '4'
    case Rarity.THREE_STARS:
      return '3'
    case Rarity.TWO_STARS:
      return '2'
    case Rarity.ONE_STAR:
      return '1'
  }
}

export function GetEchoCostText(cost: EchoCost) {
  switch (cost) {
    case EchoCost.ONE_COST:
      return '1'
    case EchoCost.THREE_COST:
      return '3'
    default:
      return '4'
  }
}
