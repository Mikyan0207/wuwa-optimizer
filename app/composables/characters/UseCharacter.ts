export function useCharacter() {
  const Route = useRoute()
  const CharacterId = computed(() => Number.parseInt((Route.params as { id: string }).id))

  const CharactersStore = useCharactersStore()

  const CurrentCharacter = computed({
    get: () => CharactersStore.Get(CharacterId.value),
    set: val => CharactersStore.Update(CharacterId.value, val),
  })

  return {
    CharacterId,
    CurrentCharacter,
  }
}
