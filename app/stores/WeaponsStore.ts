import type Weapon from '~/Core/Interfaces/Weapon'
import { TemplateWeapons } from '~/Core/Weapons'

export const useWeaponsStore = defineStore('WeaponsStore', () => {
  const Weapons = ref<Weapon[]>(TemplateWeapons)

  function GetWeapons() {
    return Weapons.value
  }

  function GetWeapon(weaponId: number): Weapon | undefined {
    return Weapons.value.find(x => x.Id === weaponId)
  }

  return {
    Weapons,
    GetWeapons,
    GetWeapon,
  }
})
