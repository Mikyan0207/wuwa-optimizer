import type IWeapon from '~/Core/Interfaces/IWeapon'
import { Weapon } from '~/Core/Models/Weapon'
import { TemplateWeapons } from '~/Core/Weapons'

export const useWeaponsStore = defineStore('WeaponsStore', () => {
  const Weapons = useLocalStorage<IWeapon[]>('Weapons', [])

  function GetWeapons() {
    if (Weapons.value.length === 0) {
      Weapons.value = [...TemplateWeapons]
    }
    return Weapons.value.map(e => new Weapon(e))
  }

  function GetWeapon(weaponId: number | undefined): Weapon | undefined {
    if (weaponId === undefined) {
      return undefined
    }

    const weapon = Weapons.value.find(x => x.Id === weaponId)

    return weapon !== undefined ? new Weapon(weapon) : undefined
  }

  function GetWeaponByEquipedId(equipedId: number | undefined): Weapon | undefined {
    if (equipedId === undefined) {
      return undefined
    }

    const weapon = Weapons.value.find(x => x.EquipedBy === equipedId)

    return weapon !== undefined ? new Weapon(weapon) : undefined
  }

  function IsWeaponListed(weaponId: number) {
    return Weapons.value.findIndex(x => x.Id === weaponId) !== -1
  }

  function AddWeapon(weapon: IWeapon) {
    if (Weapons.value === undefined) {
      return
    }

    Weapons.value.push(new Weapon(weapon))
  }

  function RemoveWeaponByCharacterId(weaponId: number | undefined, characterId: number) {
    const idx = Weapons.value.findIndex(x => x.Id === weaponId && x.EquipedBy === characterId)

    if (idx === -1) {
      return
    }

    Weapons.value.splice(idx, 1)
  }

  return {
    Weapons,
    GetWeapons,
    GetWeapon,
    GetWeaponByEquipedId,
    IsWeaponListed,
    AddWeapon,
    RemoveWeaponByCharacterId,
  }
})
