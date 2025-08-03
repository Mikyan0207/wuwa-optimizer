import type Character from './Character'
import type { Section } from './Section'

export default interface Rotation {
  Id: string
  Title: string
  Steps: Section[]
  Team: Character[]
}
