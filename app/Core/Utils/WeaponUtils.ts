import type Weapon from '../Interfaces/Weapon'
import { WeaponType } from '../Enums/WeaponType'

export function GetWeaponIcon(weapon: Weapon) {
  return `/images/weapons/${weapon.Icon}`
}

export function GetTypeIcon(weapon: Weapon) {
  const basePath = '/images/icons/'

  switch (weapon.Type) {
    case WeaponType.PISTOLS:
      return `${basePath}Icon_Pistols.webp`
    case WeaponType.BROADBLADE:
      return `${basePath}Icon_Broadblade.webp`
    case WeaponType.SWORD:
      return `${basePath}Icon_Sword.webp`
    case WeaponType.RECTIFIER:
      return `${basePath}Icon_Rectifier.webp`
    case WeaponType.GAUNTLETS:
      return `${basePath}Icon_Gauntlets.webp`
  }
}

export function GetWeaponTypeIconByType(weapon: WeaponType) {
  const basePath = '/images/icons/'

  switch (weapon) {
    case WeaponType.PISTOLS:
      return `${basePath}Icon_Pistols.webp`
    case WeaponType.BROADBLADE:
      return `${basePath}Icon_Broadblade.webp`
    case WeaponType.SWORD:
      return `${basePath}Icon_Sword.webp`
    case WeaponType.RECTIFIER:
      return `${basePath}Icon_Rectifier.webp`
    case WeaponType.GAUNTLETS:
      return `${basePath}Icon_Gauntlets.webp`
  }
}
