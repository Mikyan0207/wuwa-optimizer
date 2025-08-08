import type Character from '~/Core/Interfaces/Character'
import { defineStore } from 'pinia'
import { TemplateCharacters } from '~/Core/Characters'

export const useCharactersStore = defineStore('CharactersStore', () => {
  const DefaultCharacters = ref<Character[]>(TemplateCharacters)
  const Characters = useLocalStorage<Map<number, Character>>('Characters', new Map(DefaultCharacters.value.map(x => [x.Id, x])))

  function GetById(gameId: number): Character {
    return Characters.value.get(gameId) ?? DefaultCharacters.value.find(x => x.Id === gameId)!
  }

  function GetByGameId(gameId: number): Character {
    return DefaultCharacters.value.find(x => x.Id === gameId)!
  }

  function UpdateById(characterId: number, data: Partial<Character>) {
    const character = GetById(characterId)

    if (character) {
      Characters.value.set(character.Id, {
        ...character,
        ...data,
      })
    }
  }

  return {
    Characters,
    GetById,
    GetByGameId,
    UpdateById,
  }
})
