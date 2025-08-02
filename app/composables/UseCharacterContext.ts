import type Echo from '~/Core/Interfaces/Echo'
import { Empty_Echo } from '~/Core/Echoes'

export function useCharacterContext() {
  const Route = useRoute()
  const CharacterId = computed(() => Number.parseInt(Route.params.id as string))

  const CharactersStore = useCharactersStore()
  const WeaponsStore = useWeaponsStore()
  const EchoesStore = useEchoesStore()

  const StatsCalculator = useStatsCalculator()
  const ScoreCalculator = useScoreCalculator()

  const CurrentCharacter = computed({
    get: () => CharactersStore.Get(CharacterId.value),
    set: val => CharactersStore.Update(CharacterId.value, val),
  })

  const CurrentWeapon = computed({
    get: () => WeaponsStore.GetWeaponByEquipedId(CharacterId.value),
    set: (val) => {
      WeaponsStore.SetEquipedWeapon(CharacterId.value, val?.Id)
    },
  })

  const CurrentEchoes = computed(() => {
    const base = Array.from({ length: 5 }, () => ({ ...Empty_Echo }))

    const ids = CurrentCharacter.value?.EquipedEchoes ?? []
    const equipped = ids
      .map(id => EchoesStore.GetEquipedBy(id, CurrentCharacter.value.Id))
      .filter((e): e is Echo => e !== undefined)

    equipped.forEach((echo, idx) => {
      base[echo.EquipedSlot ?? idx] = echo
    })

    return base
  })

  const Stats = computed(() => {
    return StatsCalculator.CalculateTotalStats(CharacterId.value, CurrentWeapon.value?.Id || -1)
  })

  const Score = computed(() => {
    return ScoreCalculator.GetCharacterScore(CurrentCharacter.value)
  })

  function UpdateEcho(slot: number, echo: Partial<Echo>) {
    echo.EquipedSlot = slot
    echo.EquipedBy = CurrentCharacter.value.Id
    EchoesStore.Update(echo.Id, echo)

    CurrentCharacter.value.EquipedEchoes[slot] = echo.Id!
  }

  function GetEchoBySlot(slot: number) {
    return CurrentEchoes.value.find(x => x.EquipedSlot === slot)
  }

  return {
    CurrentCharacter,
    CurrentWeapon,
    CurrentEchoes,
    Stats,
    Score,
    UpdateEcho,
    GetEchoBySlot,
  }
}
