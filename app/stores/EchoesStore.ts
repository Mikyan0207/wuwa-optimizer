import type IEcho from '~/Core/Interfaces/IEcho'
import { defineStore } from 'pinia'
import { TemplateEchoes } from '~/Core/Echoes'
import { EchoCost } from '~/Core/Enums/EchoCost'
import { Echo } from '~/Core/Models/Echo'
import { Sonata } from '~/Core/Models/Sonata'

export const useEchoesStore = defineStore('EchoesStore', () => {
  const Echoes = useLocalStorage<IEcho[]>('Echoes', [])

  function GetEchoes() {
    return Echoes.value.map(e => new Echo(e))
  }

  function GetEchoesByIds(echoesIds: number[], characterId: number): Echo[] {
    return Echoes.value
      .filter(e => echoesIds.includes(e.Id) && e.EquipedBy === characterId)
      .map(e => new Echo(e))
  }

  function GetDefaultEchoes() {
    return TemplateEchoes
      .map(e => new Echo(e))
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
      ?.Sonata
      .map(s => new Sonata(s)) || []
  }

  function GetCostById(echoId: number) {
    if (echoId === -1) {
      return EchoCost.FOUR_COST
    }

    return TemplateEchoes
      .find(x => x.Id === echoId)
      ?.Cost ?? EchoCost.FOUR_COST
  }

  function UpdateEcho(echo: IEcho) {
    const idx = Echoes.value.findIndex(x => x.Id === echo.Id)

    if (idx === -1) {
      return
    }

    Echoes.value[idx] = echo as IEcho
  }

  function AddEcho(echo: IEcho) {
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
  }
})
