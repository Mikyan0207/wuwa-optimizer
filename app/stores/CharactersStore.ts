import type Character from '~/Core/Interfaces/Character'
import { defineStore } from 'pinia'
import { TemplateCharacters } from '~/Core/Characters'

export const useCharactersStore = defineStore('CharactersStore', () => {
  const Characters = ref<Character[]>(TemplateCharacters)

  function Get(characterId: number): Character {
    return Characters.value.find(x => x.Id === characterId)!
  }

  function Update(characterId: number, data: Partial<Character>) {
    const index = Characters.value.findIndex(c => c.Id === characterId)
    if (index === -1 || Characters.value === undefined)
      return

    Characters.value[index] = {
      ...Characters.value[index],
      ...data,
    } as Character
  }

  function AddOrUpdate(character: Character) {
    if (!Characters.value)
      return

    const exists = Characters.value.some(c => c.Id === character.Id)
    if (exists) {
      return Update(character.Id, character)
    }

    Characters.value.push(character)
  }

  return {
    Characters,
    Get,
    Update,
    AddOrUpdate,
  }
})
