import type ICharacter from '~/Core/Interfaces/ICharacter'
import type { Echo } from '~/Core/Models/Echo'
import type { Weapon } from '~/Core/Models/Weapon'
import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { TemplateCharacters } from '~/Core/Characters'
import { Character } from '~/Core/Models/Character'

export const useCharactersStore = defineStore('CharactersStore', () => {
  const Characters = useLocalStorage<ICharacter[]>('Characters', [...TemplateCharacters as ICharacter[]])

  function IsUnlocked(characterId: number) {
    return Characters.value.find(x => x.Id === characterId)?.Unlocked === true
  }

  function HasCharacters() {
    return Characters.value.length !== 0
  }

  function IsCharacterListed(characterId: number) {
    return Characters.value.findIndex(x => x.Id === characterId) !== -1
  }

  function AddCharacter(character: ICharacter) {
    const idx = Characters.value.findIndex(x => x.Id === character.Id)

    if (idx === -1) {
      Characters.value.push(character)
    }
  }

  function UnlockCharacter(characterId: number) {
    if (IsUnlocked(characterId)) {
      return
    }

    const character = GetCharacter(characterId)

    if (character === undefined) {
      return
    }

    character.Unlocked = true
    UpdateCharacter(character as ICharacter)
  }

  function UpdateCharacter(character: ICharacter) {
    const idx = Characters.value.findIndex(x => x.Id === character.Id)

    if (idx === -1) {
      return
    }

    Characters.value[idx] = character as ICharacter
  }

  function RemoveCharacter(id: number) {
    if (!IsUnlocked(id)) {
      return
    }

    const idx = Characters.value.findIndex(x => x.Id === id)

    if (idx === -1) {
      return
    }

    Characters.value.splice(idx, 1)
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

  function UpdateEcho(characterId: number, echo: Echo, slot: number) {
    const c = Characters.value.find(x => x.Id === characterId)

    if (c === undefined) {
      return
    }

    c.Echoes[slot] = echo
    UpdateCharacter(c)
  }

  function UpdateWeapon(characterId: number, weapon: Weapon) {
    const c = Characters.value.find(x => x.Id === characterId)

    if (c === undefined) {
      return
    }

    c.Weapon = weapon
    UpdateCharacter(c)
  }

  return {
    Characters,
    IsCharacterListed,
    IsUnlocked,
    HasCharacters,
    UnlockCharacter,
    AddCharacter,
    RemoveCharacter,
    GetCharacters,
    GetCharacter,
    UpdateEcho,
    UpdateWeapon,
  }
})
