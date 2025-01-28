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

  function IsWeaponListed(weaponId: number) {
    return Weapons.value.findIndex(x => x.Id === weaponId) !== -1
  }

  function AddWeapon(echo: IWeapon) {
    if (Weapons.value === undefined) {
      return
    }

    Weapons.value.push(new Weapon(echo))
  }

  return {
    Weapons,
    GetWeapons,
    IsWeaponListed,
    AddWeapon,
  }
})
