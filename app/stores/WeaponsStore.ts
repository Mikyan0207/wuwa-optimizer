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

  function RemoveEquipedWeapons(characterId: number) {
    Weapons.value = Weapons.value.filter(x => x.EquipedBy !== characterId)
  }

  return {
    Weapons,
    GetWeapons,
    GetDefaultWeapons,
    GetWeapon,
    GetDefaultWeapon,
    GetWeaponByEquipedId,
    RemoveEquipedWeapons,
  }
})
