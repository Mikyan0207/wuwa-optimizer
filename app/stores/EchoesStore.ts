import type IEcho from '~/Core/Interfaces/IEcho'
import { defineStore } from 'pinia'
import { TemplateEchoes } from '~/Core/Echoes'
import { Echo } from '~/Core/Models/Echo'

export const useEchoesStore = defineStore('EchoesStore', () => {
  const Echoes = useLocalStorage<IEcho[]>('Echoes', [])

  function GetEchoes() {
    return Echoes.value.map(e => new Echo(e))
  }
  function GetEchoesByIds(echoesIds: number[]): Echo[] {
    return Echoes.value
      .filter(e => echoesIds.includes(e.Id))
      .map(e => new Echo(e))
  }

  function GetDefaultEchoes() {
    return TemplateEchoes
      .map(e => new Echo(e))
  }

  function AddEcho(echo: IEcho) {
    if (Echoes.value === undefined) {
      return
    }

    Echoes.value.push(new Echo(echo))
  }

  return {
    Echoes,
    GetEchoesByIds,
    GetDefaultEchoes,
    GetEchoes,
    AddEcho,
  }
})
