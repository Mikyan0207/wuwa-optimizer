import type { StatType } from '~/Core/Enums/StatType'
import type Character from '~/Core/Interfaces/Character'
import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { TemplateCharacters } from '~/Core/Characters'

export const useCharactersStore = defineStore('CharactersStore', () => {
  const Characters = useLocalStorage<Character[]>('Characters', [])
  const WeaponsStore = useWeaponsStore()

  function AddCharacter(character: Character) {
    const idx = Characters.value.findIndex(x => x.Id === character.Id)

    if (idx === -1) {
      Characters.value.push(character)
    }
  }

  function UpdateCharacter(character: Character) {
    const idx = Characters.value.findIndex(x => x.Id === character.Id)

    if (idx === -1) {
      return
    }

    Characters.value[idx] = character
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

  function RemoveWeapon(characterId: number, weaponId: number | undefined) {
    const c = Characters.value.find(x => x.Id === characterId && x.EquipedWeapon === weaponId)

    if (c === undefined) {
      return
    }

    c.EquipedWeapon = undefined
    UpdateCharacter(c)
  }

  function GetCharacters() {
    return Characters.value
  }

  function GetCharacter(characterId: number | undefined): Character | undefined {
    const c = Characters.value.find(x => x.Id === characterId)
    if (c !== undefined) {
      return c
    }

    const ct = TemplateCharacters.find(x => x.Id === characterId)
    if (ct !== undefined) {
      Characters.value.push(ct)
    }

    return Characters.value.find(x => x.Id === characterId)
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

  return {
    Characters,
    AddCharacter,
    RemoveCharacter,
    RemoveEcho,
    RemoveWeapon,
    GetCharacters,
    GetCharacter,
    GetWeapon,
    UpdateEcho,
    UpdateWeapon,
    UpdateStatsWeights,
  }
})
