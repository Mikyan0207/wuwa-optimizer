import type Character from '~/Core/Interfaces/Character'
import type { BaseCharacter, PartialCharacter } from '~/Core/Interfaces/Character'
import type Sequence from '~/Core/Interfaces/Sequence'
import type Skill from '~/Core/Interfaces/Skill'
import { defineStore, skipHydrate } from 'pinia'
import { BaseCharacters } from '~/Core/Characters'

export const useCharactersStore = defineStore('CharactersStore', () => {
  const Characters = useLocalStorage<Record<number, PartialCharacter>>('Characters', {})
  const CachedCharacters = ref<Map<number, Character>>(new Map())

  function GetBaseById(id: number): BaseCharacter {
    return BaseCharacters.find(c => c.Id === id)!
  }

  function GetById(gameId: number): Character {
    if (CachedCharacters.value.has(gameId)) {
      return CachedCharacters.value.get(gameId)!
    }

    const base = GetBaseById(gameId)
    const partial = Characters.value[gameId]

    if (!partial) {
      Characters.value[gameId] = {
        Id: gameId,
        Level: 90,
        Stats: [],
        Sequences: [],
        Skills: [],
        StatsWeights: {},
      }
    }

    const character = Merge(Characters.value[gameId], base)

    CachedCharacters.value.set(gameId, character)

    return character
  }

  function GetAll(): BaseCharacter[] {
    return BaseCharacters
  }

  function UpdateById(characterId: number, data: Partial<PartialCharacter>) {
    const character = GetById(characterId)

    if (character) {
      Characters.value[character.Id] = {
        ...character,
        ...data,
      }
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
