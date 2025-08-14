import { Rarity } from '../Enums/Rarity'

export function GetRarityAsNumber(rarity: Rarity) {
  switch (rarity) {
    case Rarity.ONE_STAR:
      return 1
    case Rarity.TWO_STARS:
      return 2
    case Rarity.THREE_STARS:
      return 3
    case Rarity.FOUR_STARS:
      return 4
    case Rarity.FIVE_STARS:
      return 5
    default:
      return 0
  }
}
