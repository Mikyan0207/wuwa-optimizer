import type Echo from '~/Core/Interfaces/Echo'
import { defineStore } from 'pinia'
import { TemplateEchoes } from '~/Core/Echoes'
import { EchoCost } from '~/Core/Enums/EchoCost'

export const useEchoesStore = defineStore('EchoesStore', () => {
  const Echoes = useLocalStorage<Echo[]>('Echoes', [])

  function GetEchoes() {
    return Echoes.value
  }

  function GetEchoesByIds(echoesIds: number[], characterId: number): Echo[] {
    return Echoes.value
      .filter(e => echoesIds.includes(e.Id) && e.EquipedBy === characterId)
  }

  function GetDefaultEchoes() {
    return TemplateEchoes
  }

  function GetEchoById(echoId: number) {
    const e = TemplateEchoes.find(x => x.Id === echoId)

    if (e === undefined) {
      return undefined
    }

    return e
  }

  function GetSonataById(echoId: number) {
    return TemplateEchoes
      .find(x => x.Id === echoId)
      ?.Sonata || []
  }

  function GetCostById(echoId: number) {
    if (echoId === -1) {
      return EchoCost.FOUR_COST
    }

    return TemplateEchoes
      .find(x => x.Id === echoId)
      ?.Cost ?? EchoCost.FOUR_COST
  }

  function UpdateEcho(echo: Echo) {
    const idx = Echoes.value.findIndex(x => x.Id === echo.Id)

    if (idx === -1) {
      return
    }

    Echoes.value[idx] = echo as Echo
  }

  function AddEcho(echo: Echo) {
    if (Echoes.value === undefined) {
      return
    }

    Echoes.value.push(echo)
  }

  function RemoveCharacter(echoId: number) {
    const e = GetEchoById(echoId)

    if (e === undefined) {
      return
    }

    e.EquipedBy = undefined
    UpdateEcho(e)
  }

  function RemoveEcho(echoId: number, characterId: number) {
    Echoes.value = Echoes.value.filter(e => !(e.Id === echoId && e.EquipedBy === characterId))
  }

  return {
    Echoes,
    GetEchoesByIds,
    GetDefaultEchoes,
    GetEchoes,
    GetEchoById,
    GetSonataById,
    GetCostById,
    AddEcho,
    RemoveCharacter,
    RemoveEcho,
  }
})
