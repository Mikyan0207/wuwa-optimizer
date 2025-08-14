import type { BaseWeapon, PartialWeapon } from '~/Core/Interfaces/Weapon'
import type Weapon from '~/Core/Interfaces/Weapon'
import { defineStore, skipHydrate } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { BaseWeapons } from '~/Core/Weapons'

export const useWeaponsStore = defineStore('WeaponsStore', () => {
  const Weapons = useLocalStorage<Record<string, PartialWeapon>>('Weapons', {})
  const CachedWeapons = ref<Map<number, Weapon>>(new Map())

  function GetBaseById(id: number): BaseWeapon {
    return BaseWeapons.find(w => w.GameId === id)!
  }

  function GetById(id: string): Weapon | undefined {
    const weapon = Weapons.value[id]

    if (!weapon) {
      return undefined
    }

    return Merge(weapon, GetBaseById(weapon.GameId))
  }

  function GetByGameId(gameId: number): BaseWeapon {
    if (CachedWeapons.value.has(gameId)) {
      return CachedWeapons.value.get(gameId)!
    }

    return GetBaseById(gameId)
  }

  function GetAll(): BaseWeapon[] {
    return BaseWeapons
  }

  function Add(weapon: Weapon) {
    Weapons.value[weapon.Id!] = weapon
  }

  function UpdateById(weaponId: string, data: Partial<PartialWeapon>) {
    const weapon = GetById(weaponId)

    if (weapon) {
      Weapons.value[weaponId] = {
        ...weapon,
        ...data,
      }
    }
  }

  function Merge(partial: PartialWeapon | undefined, base: BaseWeapon): Weapon {
    return {
      ...base,
      Id: partial?.Id,
      Level: partial?.Level ?? base.Level,
      Rank: partial?.Rank ?? 1,
    }
  }

  function CreateFromGameId(gameId: number): Weapon | undefined {
    const base = BaseWeapons.find(w => w.GameId === gameId)

    const weaponToAdd: PartialWeapon = {
      Id: uuidv4(),
      GameId: gameId,
      Level: 90,
      Rank: 1,
    }

    Weapons.value[weaponToAdd.Id!] = weaponToAdd

    return Merge(weaponToAdd, base!)
  }

  function DeleteById(weaponId: string) {
    delete Weapons.value[weaponId]
  }

  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useWeaponsStore, import.meta.hot))
  }

  return {
    Weapons: skipHydrate(Weapons),
    GetAll,
    GetById,
    GetBaseById,
    GetByGameId,
    Add,
    UpdateById,
    CreateFromGameId,
    DeleteById,
  }
})
