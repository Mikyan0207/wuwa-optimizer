import type { BaseCharacter, CharacterV2, PartialCharacter } from '~/Core/Interfaces/Character'
import { defineStore } from 'pinia'

export const useCharactersStore = defineStore('CharactersStore', () => {
  const Characters = useLocalStorage<Map<number, PartialCharacter>>('Characters', new Map())
  const BaseCharacters = ref<BaseCharacter[]>([])

  async function GetBaseById(id: number): Promise<BaseCharacter> {
    const character = BaseCharacters.value.find(c => c.Id === id)

    if (character) {
      return character
    }

    const data = await $fetch<BaseCharacter>(`/characters/${id}/${id}.json`)

    if (data) {
      BaseCharacters.value.push(data)
    }

    return data
  }

  async function GetById(gameId: number): Promise<CharacterV2> {
    const base = await GetBaseById(gameId)
    const partial = Characters.value.get(gameId)

    if (!partial) {
      Characters.value.set(gameId, {
        Id: gameId,
        Level: 90,
        Stats: [],
        Sequences: [],
        Skills: [],
        StatsWeights: {},
      })
    }

    return Merge(Characters.value.get(gameId), base)
  }

  async function GetAll(): Promise<BaseCharacter[]> {
    const data = await $fetch<number[]>('/characters/characters.json')

    return Promise.all(data.map(id => GetBaseById(id)))
  }

  async function UpdateById(characterId: number, data: Partial<PartialCharacter>) {
    const character = await GetById(characterId)

    if (character) {
      Characters.value.set(character.Id, {
        ...character,
        ...data,
      })
    }
  }

  function Merge(partial: PartialCharacter | undefined, base: BaseCharacter): CharacterV2 {
    return {
      ...base,
      Level: partial?.Level ?? 90,
      Stats: partial?.Stats ?? base.BaseStats,
      Sequences: partial?.Sequences ?? base.BaseSequences.map(s => ({ ...s, Unlocked: false })),
      Skills: partial?.Skills ?? base.BaseSkills,
      StatsWeights: partial?.StatsWeights ?? base.BaseStatsWeights,
    }
  }

  return {
    Characters,
    GetAll,
    GetById,
    UpdateById,
  }
})
