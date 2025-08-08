import type Character from '~/Core/Interfaces/Character'
import { GetCharacterAnimatedArt, HasAnimatedArt } from '~/Core/Utils/CharacterUtils'

export function useCharacter(character?: Character | undefined) {
  const Route = useRoute()
  const CharacterId = computed(() => character?.Id ?? Number.parseInt((Route.params as { id: string }).id))

  const CharactersStore = useCharactersStore()

  const CurrentCharacter = computed({
    get: () => CharactersStore.GetById(CharacterId.value),
    set: val => CharactersStore.UpdateById(CharacterId.value, val),
  })

  const StatsWeights = computed(() =>
    CurrentCharacter.value?.StatsWeights || {},
  )

  function CanUnlockSequence(sequenceIndex: number): boolean {
    if (!CurrentCharacter.value)
      return false

    const sequence = CurrentCharacter.value.Sequences[sequenceIndex]
    if (!sequence)
      return false

    if (sequence.Unlocked)
      return true

    if (sequenceIndex === 0)
      return true

    const previousSequence = CurrentCharacter.value.Sequences[sequenceIndex - 1]
    return previousSequence?.Unlocked === true
  }

  function ToggleSequence(sequenceIndex: number) {
    if (!CurrentCharacter.value) {
      return
    }

    const sequence = CurrentCharacter.value.Sequences[sequenceIndex]
    if (!sequence) {
      return
    }

    if (CanUnlockSequence(sequenceIndex)) {
      sequence.Unlocked = !sequence.Unlocked

      if (!sequence.Unlocked) {
        for (let i = sequenceIndex + 1; i < CurrentCharacter.value.Sequences.length; i++) {
          const nextSequence = CurrentCharacter.value.Sequences[i]
          if (nextSequence) {
            nextSequence.Unlocked = false
          }
        }
      }

      CurrentCharacter.value = { ...CurrentCharacter.value }
    }
  }

  function GetAnimatedArt() {
    if (!CurrentCharacter.value)
      return undefined

    if (HasAnimatedArt(CurrentCharacter.value)) {
      return GetCharacterAnimatedArt(CurrentCharacter.value)
    }

    const character = CharactersStore.GetByGameId(CurrentCharacter.value.Id)

    if (HasAnimatedArt(character)) {
      return GetCharacterAnimatedArt(character)
    }

    return undefined
  }

  return {
    CharacterId,
    CurrentCharacter,
    StatsWeights,
    CanUnlockSequence,
    ToggleSequence,
    GetAnimatedArt,
  }
}
