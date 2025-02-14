import type { Character } from '~/Core/Models/Character'
import type { Echo } from '~/Core/Models/Echo'
import type { Weapon } from '~/Core/Models/Weapon'

export const useActiveCharacterStore = defineStore('ActiveCharacterStore', () => {
  const ActiveCharacter = ref<Character | undefined>(undefined)
  const ActiveEchoes = ref<Echo[]>([])
  const ActiveWeapon = ref<Weapon | undefined>(undefined)

  const CharactersStore = useCharactersStore()
  const EchoesStore = useEchoesStore()
  const WeaponsStore = useWeaponsStore()

  function Set(characterId: number | undefined) {
    if (characterId === undefined) {
      return
    }

    ActiveCharacter.value = CharactersStore.GetCharacter(characterId)

    if (ActiveCharacter.value === undefined) {
      return
    }

    ActiveEchoes.value = EchoesStore.GetEchoesByIds(ActiveCharacter.value.EquipedEchoes, ActiveCharacter.value.Id)
    ActiveWeapon.value = WeaponsStore.GetWeaponByEquipedId(ActiveCharacter.value.Id)
  }

  function GetEchoBySlot(echoSlot: number): Echo | undefined {
    return ActiveEchoes.value.find(x => x.EquipedSlot === echoSlot)
  }

  function Reset() {
    ActiveCharacter.value = undefined
    ActiveEchoes.value = []
    ActiveWeapon.value = undefined
  }

  return {
    ActiveCharacter,
    ActiveEchoes,
    ActiveWeapon,
    Set,
    GetEchoBySlot,
    Reset,
  }
})
