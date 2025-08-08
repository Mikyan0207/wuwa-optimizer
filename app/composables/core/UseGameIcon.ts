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
    if ('Type' in Icon)
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

  const Name = computed(() => {
    if (IconType.value === 'echo' || IconType.value === 'weapon') {
      return t(`${(Icon as Echo | Weapon).GameId}_name`)
    }

    return t(`${(Icon as Character).Id}_name`)
  })

  const CharacterInfo = computed(() => {
    if (IconType.value !== 'character')
      return null

    const character = Icon as Character

    return {
      Type: character.Type,
      ReleaseState: character.ReleaseState,
      Level: character.Level,
      Rarity: character.Rarity,
    }
  })

  const WeaponInfo = computed(() => {
    if (IconType.value !== 'weapon')
      return null

    const weapon = Icon as Weapon

    return {
      Type: weapon.Type,
      ReleaseState: weapon.ReleaseState,
      Level: weapon.Level,
      Rank: weapon.Rank,
      Rarity: weapon.Rarity,
    }
  })

  const EchoInfo = computed(() => {
    if (IconType.value !== 'echo')
      return null

    const echo = Icon as Echo

    return {
      Level: echo.Level,
      Cost: echo.Cost,
      Rarity: echo.Rarity,
      IsNightmare: echo.IsNightmare,
      Sonata: echo.Sonata.find(x => x.IsSelected),
    }
  })

  const Sonata = computed(() => {
    if (IconType.value !== 'echo')
      return null

    const echo = Icon as Echo

    return echo.Sonata.find(x => x.IsSelected)
  })

  const SonataIcon = computed(() => {
    if (!Sonata.value)
      return null

    return GetSonataIcon(Sonata.value)
  })

  const IsValid = computed(() => {
    return (Icon as Character | Weapon | Echo).Id !== -1
  })
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
    CharacterInfo,
    WeaponInfo,
    EchoInfo,
    Sonata,

    HasTypeIcon,
    HasSonata,
  }
}
