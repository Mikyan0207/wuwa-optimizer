import type { Rarity } from '~/Core/Enums/Rarity'
import type { ReleaseState } from '~/Core/Enums/ReleaseState'

export default interface Event {
  Id: string
  CharacterId?: number
  WeaponId?: number
  Type: 'character' | 'weapon'
  Rarity: Rarity
  StartDate: Date
  EndDate: Date
  ReleaseState: ReleaseState
}
