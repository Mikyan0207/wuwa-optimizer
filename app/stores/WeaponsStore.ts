import type { BaseWeapon, PartialWeapon } from '~/Core/Interfaces/Weapon'
import type Weapon from '~/Core/Interfaces/Weapon'
import { defineStore, skipHydrate } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useWeaponsStore = defineStore('WeaponsStore', () => {
  const Weapons = useLocalStorage<Map<string, PartialWeapon>>('Weapons', new Map())
  const BaseWeapons = ref<BaseWeapon[]>([])
  const CachedWeapons = ref<Map<number, Weapon>>(new Map())

  const PendingRequests = ref<Map<number, Promise<BaseWeapon>>>(new Map())

  async function GetBaseById(id: number): Promise<BaseWeapon> {
    const weapon = BaseWeapons.value.find(w => w.GameId === id)

    if (weapon) {
      return weapon
    }

    if (PendingRequests.value.has(id)) {
      return PendingRequests.value.get(id)!
    }

    const promise = $fetch<BaseWeapon>(`/weapons/${id}/${id}.json`).then((data) => {
      if (data) {
        BaseWeapons.value.push(data)
      }
      return data
    }).finally(() => {
      PendingRequests.value.delete(id)
    })

    PendingRequests.value.set(id, promise)

    return promise
  }

  async function GetById(id: string): Promise<Weapon | undefined> {
    const weapon = Weapons.value.get(id)

    if (!weapon) {
      return undefined
    }

    return Merge(weapon, await GetBaseById(weapon.GameId))
  }

  async function GetByGameId(gameId: number): Promise<BaseWeapon> {
    if (CachedWeapons.value.has(gameId)) {
      return CachedWeapons.value.get(gameId)!
    }

    return GetBaseById(gameId)
  }

  async function GetAll(): Promise<BaseWeapon[]> {
    const data = await $fetch<number[]>('/weapons/weapons.json')

    return Promise.all(data.map(id => GetBaseById(id)))
  }

  async function UpdateById(weaponId: string, data: Partial<PartialWeapon>) {
    const weapon = await GetById(weaponId)

    if (weapon) {
      Weapons.value.set(weaponId, {
        ...weapon,
        ...data,
      })
    }
  }

  function Merge(partial: PartialWeapon | undefined, base: BaseWeapon): Weapon {
    return {
      ...base,
      ...partial,
      Level: partial?.Level ?? 1,
      Rank: partial?.Rank ?? 1,
    }
  }

  function CreateFromGameId(gameId: number): Weapon | undefined {
    const weapon = BaseWeapons.value.find(w => w.GameId === gameId)

    if (!weapon) {
      return undefined
    }

    const weaponToAdd: PartialWeapon = {
      Id: uuidv4(),
      GameId: gameId,
      Level: 90,
      Rank: 1,
    }

    Weapons.value.set(weaponToAdd.Id!, weaponToAdd)

    return Merge(weaponToAdd, weapon)
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
    UpdateById,
    CreateFromGameId,
  }
})
