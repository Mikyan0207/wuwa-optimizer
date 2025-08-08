import type Weapon from '~/Core/Interfaces/Weapon'
import { v4 as uuidv4 } from 'uuid'
import { TemplateWeapons } from '~/Core/Weapons'

export const useWeaponsStore = defineStore('WeaponsStore', () => {
  const DefaultWeapons = ref<Weapon[]>(TemplateWeapons)
  const Weapons = useLocalStorage<Weapon[]>('Weapons', [])

  function GetById(weaponId: string | undefined): Weapon | undefined {
    return Weapons.value.find(x => x.Id === weaponId)
  }

  function GetByGameId(gameId: number): Weapon | undefined {
    return Weapons.value.find(x => x.GameId === gameId) ?? DefaultWeapons.value.find(x => x.GameId === gameId)
  }

  function CreateFromGameId(gameId: number | undefined): Weapon | undefined {
    if (!gameId)
      return undefined

    const weapon = GetByGameId(gameId)

    if (!weapon)
      return undefined

    const weaponId = uuidv4()
    const weaponToAdd = {
      ...weapon,
      Id: weaponId,
    } as Weapon

    Weapons.value.push(weaponToAdd)

    return weaponToAdd
  }

  return {
    Weapons,
    GetById,
    GetByGameId,
    CreateFromGameId,
  }
})
