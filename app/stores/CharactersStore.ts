import type { StatType } from '~/Core/Enums/StatType'
import type ICharacter from '~/Core/Interfaces/ICharacter'
import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { TemplateCharacters } from '~/Core/Characters'
import { Character } from '~/Core/Models/Character'

export const CurrentCharactersVersion = '0.0.1'

export const useCharactersStore = defineStore('CharactersStore', () => {
  const Characters = useLocalStorage<ICharacter[]>('Characters', [...TemplateCharacters as ICharacter[]])
  const CharactersVersion = useLocalStorage<string | undefined>('CharactersVersion', undefined)

  const WeaponsStore = useWeaponsStore()

  const CharactersEventBus = useEventBus('CharactersEvents')

  function IsCharacterListed(characterId: number) {
    return Characters.value.findIndex(x => x.Id === characterId) !== -1
  }

  function AddCharacter(character: ICharacter) {
    const idx = Characters.value.findIndex(x => x.Id === character.Id)

    if (idx === -1) {
      Characters.value.push(character)
    }
  }

  function UpdateCharacter(character: ICharacter) {
    const idx = Characters.value.findIndex(x => x.Id === character.Id)

    if (idx === -1) {
      return
    }

    Characters.value[idx] = character as ICharacter
    CharactersEventBus.emit()
  }

  function RemoveCharacter(id: number) {
    const idx = Characters.value.findIndex(x => x.Id === id)

    if (idx === -1) {
      return
    }

    Characters.value.splice(idx, 1)
  }

  function RemoveEcho(characterId: number, echoId: number) {
    const c = Characters.value.find(x => x.Id === characterId)

    if (c === undefined) {
      return
    }

    const echoIndex = c.EquipedEchoes.findIndex(x => x === echoId)
    if (echoIndex !== -1) {
      c.EquipedEchoes.splice(echoIndex, 1)
    }

    UpdateCharacter(c)
  }

  function GetCharacters() {
    return Characters.value.map(c => new Character(c))
  }

  function GetCharacter(characterId: number): Character | undefined {
    const c = Characters.value.find(x => x.Id === characterId)

    if (c === undefined) {
      return undefined
    }

    return new Character(c)
  }

  function GetWeapon(characterId: number | undefined) {
    if (characterId === undefined) {
      return undefined
    }

    return WeaponsStore.GetWeaponByEquipedId(characterId)
  }

  function UpdateEcho(characterId: number, echoId: number, slot: number) {
    const c = Characters.value.find(x => x.Id === characterId)

    if (c === undefined) {
      return
    }

    c.EquipedEchoes[slot] = echoId
    UpdateCharacter(c)
  }

  function UpdateWeapon(characterId: number, weaponId: number) {
    const c = Characters.value.find(x => x.Id === characterId)

    if (c === undefined) {
      return
    }

    c.EquipedWeapon = weaponId
    UpdateCharacter(c)
  }

  function UpdateStatsWeights(characterId: number, weights: { Type: StatType, Value: number }[]) {
    const c = Characters.value.find(x => x.Id === characterId)

    if (c === undefined || c.StatsWeights === undefined) {
      return
    }

    weights.forEach((w) => {
      c.StatsWeights![w.Type] = w.Value
    })

    UpdateCharacter(c)
  }

  function Update() {
    if (CharactersVersion.value !== CurrentCharactersVersion) {
      // This mean we did an update to the ICharater/Character model
      // and need to update the stored models to avoid errors.
      Characters.value = Characters.value.map((character) => {
        // Create a new character instance to ensure all fields are present
        const c = new Character(character) as ICharacter
        const templateCharacter = TemplateCharacters.find(x => x.Id === c.Id)

        if (templateCharacter === undefined) {
          return c
        }

        c.SplashArt = templateCharacter.SplashArt

        return c
      })

      // Update the version to the current one
      CharactersVersion.value = CurrentCharactersVersion
    }

    TemplateCharacters.forEach((templateCharacter) => {
      if (!IsCharacterListed(templateCharacter.Id)) {
        AddCharacter(templateCharacter as ICharacter)
      }
    })
  }

  return {
    Characters,
    CharactersVersion,
    IsCharacterListed,
    AddCharacter,
    RemoveCharacter,
    RemoveEcho,
    GetCharacters,
    GetCharacter,
    GetWeapon,
    UpdateEcho,
    UpdateWeapon,
    UpdateStatsWeights,
    Update,
  }
})
