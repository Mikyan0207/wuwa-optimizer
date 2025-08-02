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

  function SetEquipedWeapon(characterId: number, weaponId: number | undefined) {
    if (weaponId === undefined) {
      return
    }

    const c = Weapons.value.find(x => x.Id === weaponId)
    if (c === undefined) {
      const ct = TemplateWeapons.find(x => x.Id === weaponId)
      if (ct !== undefined) {
        Weapons.value.push(ct)
      }
    }

    Weapons.value.find(x => x.Id === weaponId)!.EquipedBy = characterId
  }

  function RemoveEquipedWeapons(characterId: number) {
    Weapons.value = Weapons.value.filter(x => x.EquipedBy !== characterId)
  }

  function Update(weaponId: number, characterId: number, data: Partial<Weapon>) {
    const index = Weapons.value.findIndex(c => c.Id === weaponId && c.EquipedBy === characterId)
    if (index === -1 || Weapons.value === undefined)
      return

    Weapons.value[index] = {
      ...Weapons.value[index],
      ...data,
    } as Weapon
  }

  function AddOrUpdate(weapon: Weapon, characterId: number) {
    if (!Weapons.value)
      return

    const exists = Weapons.value.some(c => c.Id === weapon.Id && c.EquipedBy === characterId)
    if (exists) {
      return Update(weapon.Id, characterId, weapon)
    }

    Weapons.value.push(weapon)
  }

  return {
    Weapons,
    GetWeapons,
    GetDefaultWeapons,
    GetWeapon,
    GetDefaultWeapon,
    GetWeaponByEquipedId,
    SetEquipedWeapon,
    RemoveEquipedWeapons,
    Update,
    AddOrUpdate,
  }
})
