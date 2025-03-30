import type Character from './Character'
import type Skill from './Skill'

export interface Action {
  Index: number
  Type: 'ACTION' | 'SWAP'
  Character1?: Character
  Character2?: Character
  Skill?: Skill
  Order?: number
  Description?: string
}
