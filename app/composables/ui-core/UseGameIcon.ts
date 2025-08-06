import type Character from '~/Core/Interfaces/Character'
import type Echo from '~/Core/Interfaces/Echo'
import type Weapon from '~/Core/Interfaces/Weapon'
import { GetCharacterIcon, GetCharacterTypeIcon } from '~/Core/Utils/CharacterUtils'
import { GetEchoIcon, GetSonataIcon } from '~/Core/Utils/EchoUtils'
import { GetTypeIcon, GetWeaponIcon } from '~/Core/Utils/WeaponUtils'

export function useGameIcon(Icon: Character | Weapon | Echo) {
  const { t } = useI18n()

  const IconType = computed(() => {
    if ('Sequences' in Icon)
      return 'character'
    if ('WeaponType' in Icon)
      return 'weapon'
    if ('Sonata' in Icon)
      return 'echo'
    return null
  })

  const MainIcon = computed(() => {
    switch (IconType.value) {
      case 'character': return GetCharacterIcon(Icon as Character)
      case 'weapon': return GetWeaponIcon(Icon as Weapon)
      case 'echo': return GetEchoIcon(Icon as Echo)
      default: return ''
    }
  })

  const TypeIcon = computed(() => {
    if (IconType.value !== 'character')
      return null
    const Character = Icon as Character
    return GetCharacterTypeIcon(Character)
  })

  const WeaponTypeIcon = computed(() => {
    if (IconType.value !== 'weapon')
      return null
    return GetTypeIcon(Icon as Weapon)
  })

  const Name = computed(() => t(`${Icon.Id}_name`))

  const CharacterData = computed(() => {
    if (IconType.value !== 'character')
      return null
    const Character = Icon as Character
    return {
      Type: Character.Type,
      ReleaseState: Character.ReleaseState,
      Level: Character.Level,
      Rarity: Character.Rarity,
    }
  })

  const WeaponData = computed(() => {
    if (IconType.value !== 'weapon')
      return null
    const Weapon = Icon as Weapon
    return {
      Type: Weapon.Type,
      ReleaseState: Weapon.ReleaseState,
      Level: Weapon.Level,
      Rank: Weapon.Rank,
      Rarity: Weapon.Rarity,
    }
  })

  const EchoData = computed(() => {
    if (IconType.value !== 'echo')
      return null
    const Echo = Icon as Echo
    return {
      Level: Echo.Level,
      Cost: Echo.Cost,
      Rarity: Echo.Rarity,
      IsNightmare: Echo.IsNightmare,
      Sonata: Echo.Sonata.find(x => x.IsSelected),
    }
  })

  const Sonata = computed(() => {
    if (IconType.value !== 'echo')
      return null
    const Echo = Icon as Echo
    return Echo.Sonata.find(x => x.IsSelected)
  })

  const SonataIcon = computed(() => {
    if (!Sonata.value)
      return null
    return GetSonataIcon(Sonata.value)
  })

  const IsValid = computed(() => Icon.Id !== -1)
  const HasTypeIcon = computed(() => TypeIcon.value || WeaponTypeIcon.value)
  const HasSonata = computed(() => Sonata.value)

  return {
    IconType,
    IsValid,

    MainIcon,
    TypeIcon,
    WeaponTypeIcon,
    SonataIcon,

    Name,
    CharacterData,
    WeaponData,
    EchoData,
    Sonata,

    HasTypeIcon,
    HasSonata,
  }
}
