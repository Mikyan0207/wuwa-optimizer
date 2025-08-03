import type { Action } from '../Interfaces/Action'
import type Character from '../Interfaces/Character'
import type Rotation from '../Interfaces/Rotation'
import type { Section } from '../Interfaces/Section'
import { TemplateCharacters } from '../Characters'

export function ExtractTeamFromRotation(rotation: Rotation): Character[] {
  const usedCharacterIds = new Set<number>()
  const team: Character[] = []

  rotation.Steps.forEach((section: Section) => {
    section.Actions.forEach((action: Action) => {
      if (action.Character1 && !usedCharacterIds.has(action.Character1.Id)) {
        usedCharacterIds.add(action.Character1.Id)
        team.push(action.Character1)
      }

      if (action.Character2 && !usedCharacterIds.has(action.Character2.Id)) {
        usedCharacterIds.add(action.Character2.Id)
        team.push(action.Character2)
      }
    })
  })

  return team
}

export function ExtractTeamFromRotationByIds(rotation: Rotation): Character[] {
  const usedCharacterIds = new Set<number>()

  rotation.Steps.forEach((section: Section) => {
    section.Actions.forEach((action: Action) => {
      if (action.Character1?.Id) {
        usedCharacterIds.add(action.Character1.Id)
      }

      if (action.Character2?.Id) {
        usedCharacterIds.add(action.Character2.Id)
      }
    })
  })

  return TemplateCharacters.filter(character => usedCharacterIds.has(character.Id))
}
