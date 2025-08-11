import type { CharacterV2 } from '~/Core/Interfaces/Character'
import type Character from '~/Core/Interfaces/Character'
import { GetCharacterAnimatedArt, HasAnimatedArt } from '~/Core/Utils/CharacterUtils'

export function useCharacter(character?: Character | undefined) {
  const Route = useRoute()
  const CharactersStore = useCharactersStore()

  const CharacterId = computed(() => character?.Id ?? Number.parseInt((Route.params as { id: string }).id))
  const CurrentCharacter = ref<CharacterV2 | undefined>(undefined)

  async function GetCurrentCharacterAsync() {
    if (CharacterId.value) {
      CurrentCharacter.value = await CharactersStore.GetById(CharacterId.value)
    }
  }

  watchEffect(() => {
    CurrentCharacter.value = undefined

    GetCurrentCharacterAsync()
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
