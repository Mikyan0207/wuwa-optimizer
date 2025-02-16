import type Weapon from '~/Core/Interfaces/Weapon'
import { TemplateWeapons } from '~/Core/Weapons'

export const useWeaponsStore = defineStore('WeaponsStore', () => {
  const Weapons = useLocalStorage<Weapon[]>('Weapons', [])

  function GetWeapons() {
    return Weapons.value
  }

  function GetDefaultWeapons() {
    return TemplateWeapons
  }

  function GetWeapon(weaponId: number | undefined): Weapon | undefined {
    return Weapons.value.find(x => x.Id === weaponId)
  }

  function GetDefaultWeapon(weaponId: number | undefined): Weapon | undefined {
    return TemplateWeapons.find(x => x.Id === weaponId)
  }

  function GetWeaponByEquipedId(equipedId: number | undefined): Weapon | undefined {
    return Weapons.value.find(x => x.EquipedBy === equipedId)
  }

  function IsWeaponListed(weaponId: number) {
    return Weapons.value.findIndex(x => x.Id === weaponId) !== -1
  }

  function AddWeapon(weapon: Weapon) {
    Weapons.value.push(weapon)
  }

  function UpdateWeapon(weapon: Weapon, equipedById: number) {
    const idx = Weapons.value.findIndex(x => x.Id === weapon.Id && x.EquipedBy === equipedById)

    if (idx === -1) {
      Weapons.value.push(weapon)
    }
    else {
      Weapons.value[idx] = weapon
    }
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
    GetDefaultWeapons,
    GetWeapon,
    GetDefaultWeapon,
    GetWeaponByEquipedId,
    IsWeaponListed,
    AddWeapon,
    UpdateWeapon,
    RemoveWeaponByCharacterId,
  }
})
