import { Rarity } from '../Enums/Rarity'

export function GetBackgroundColor(rarity: Rarity): string {
  switch (rarity) {
    case Rarity.FIVE_STARS:
      return 'bg-amber-400'
    case Rarity.FOUR_STARS:
      return 'bg-purple-400'
    case Rarity.THREE_STARS:
      return 'bg-blue-400'
    default:
      return 'bg-gray-400'
  }
}

export function GetSecondaryColor(rarity: Rarity) {
  switch (rarity) {
    case Rarity.FIVE_STARS:
      return 'bg-amber-100'
    case Rarity.FOUR_STARS:
      return 'bg-purple-100'
    case Rarity.THREE_STARS:
      return 'bg-blue-100'
    default:
      return 'bg-gray-100'
  }
}

export function GetHighlightColor(rarity: Rarity) {
  switch (rarity) {
    case Rarity.FIVE_STARS:
      return 'bg-amber-400'
    case Rarity.FOUR_STARS:
      return 'bg-purple-400'
    case Rarity.THREE_STARS:
      return 'bg-blue-400'
    default:
      return 'bg-gray-400'
  }
}
