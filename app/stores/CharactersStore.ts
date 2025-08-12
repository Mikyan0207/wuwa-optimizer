import type { BaseCharacter, PartialCharacter } from '~/Core/Interfaces/Character'
import type Character from '~/Core/Interfaces/Character'
import type Sequence from '~/Core/Interfaces/Sequence'
import type Skill from '~/Core/Interfaces/Skill'
import { defineStore, skipHydrate } from 'pinia'

export const useCharactersStore = defineStore('CharactersStore', () => {
  const Characters = useLocalStorage<Map<number, PartialCharacter>>('Characters', new Map())
  const BaseCharacters = ref<BaseCharacter[]>([])
  const CachedCharacters = ref<Map<number, Character>>(new Map())

  const PendingRequests = ref<Map<number, Promise<BaseCharacter>>>(new Map())

  async function GetBaseById(id: number): Promise<BaseCharacter> {
    const character = BaseCharacters.value.find(c => c.Id === id)

    if (character) {
      return character
    }

    if (PendingRequests.value.has(id)) {
      return PendingRequests.value.get(id)!
    }

    const promise = $fetch<BaseCharacter>(`/characters/${id}/${id}.json`).then((data) => {
      if (data) {
        BaseCharacters.value.push(data)
      }
      return data
    }).finally(() => {
      PendingRequests.value.delete(id)
    })

    PendingRequests.value.set(id, promise)

    return promise
  }

  async function GetById(gameId: number): Promise<Character> {
    if (CachedCharacters.value.has(gameId)) {
      return CachedCharacters.value.get(gameId)!
    }

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

    const character = Merge(Characters.value.get(gameId), base)

    CachedCharacters.value.set(gameId, character)

    return character
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

  function Merge(partial: PartialCharacter | undefined, base: BaseCharacter): Character {
    return {
      ...base,
      Level: partial?.Level ?? 90,
      Stats: partial?.Stats ?? [],
      Sequences: MergeSequences(partial, base),
      Skills: MergeSkills(partial, base),
      StatsWeights: MergeStatsWeights(partial, base),
    }
  }

  function MergeSequences(partial: PartialCharacter | undefined, base: BaseCharacter): Sequence[] {
    const sequences = base.BaseSequences

    if (partial?.Sequences) {
      partial.Sequences.forEach((sequence) => {
        const baseSequence = sequences.find(s => s.Name === sequence.Name)
        if (baseSequence) {
          sequence.Unlocked = sequence.Unlocked ?? baseSequence.Unlocked
        }
      })
    }

    return sequences
  }

  function MergeStatsWeights(partial: PartialCharacter | undefined, base: BaseCharacter): Record<string, number> {
    const statsWeights = base.BaseStatsWeights

    // if (partial?.StatsWeights) {
    //   Object.keys(partial.StatsWeights).forEach((key) => {
    //     const baseWeight = statsWeights[key]
    //     if (baseWeight) {
    //       statsWeights[key] = partial.StatsWeights[key] ?? baseWeight
    //     }
    //   })
    // }

    return statsWeights
  }

  function MergeSkills(partial: PartialCharacter | undefined, base: BaseCharacter): Skill[] {
    const skills = base.BaseSkills

    if (partial?.Skills) {
      partial.Skills.forEach((skill) => {
        const baseSkill = skills.find(s => s.Id === skill.Id)
        if (baseSkill) {
          skill.Level = baseSkill.Level > skill.Level ? baseSkill.Level : skill.Level
          skill.Unlocked = skill.Unlocked ?? baseSkill.Unlocked
        }
      })
    }

    return skills
  }

  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCharactersStore, import.meta.hot))
  }

  return {
    Characters: skipHydrate(Characters),
    GetAll,
    GetById,
    GetBaseById,
    UpdateById,
  }
})
