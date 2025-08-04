import type Echo from '~/Core/Interfaces/Echo'
import { defineStore } from 'pinia'
import { TemplateEchoes } from '~/Core/Echoes'
import { EchoMigrationService } from '~/Core/Services/EchoMigrationService'

export const useEchoesStore = defineStore('EchoesStore', () => {
  const Echoes = useLocalStorage<Echo[]>('Echoes', [])
  const MigrationService = new EchoMigrationService()

  async function Migration() {
    if (MigrationService.NeedsMigration()) {
      try {
        Echoes.value = await MigrationService.MigrateEchoes()
      }
      catch (error) {
        console.error('Echo migration failed:', error)
      }
      finally {
        MigrationService.CleanUp()
      }
    }
  }

  function Get(echoId: number) {
    const e = TemplateEchoes.find(x => x.Id === echoId)

    if (e === undefined) {
      return undefined
    }

    return e
  }

  function GetEquipedBy(echoId: number, characterId: number) {
    return Echoes.value
      .find(e => e.Id === echoId && e.EquipedBy === characterId)
  }

  function GetAllEquipedBy(characterId: number): Echo[] {
    return Echoes.value
      .filter(e => e.EquipedBy === characterId)
  }

  function Update(echoId: number | undefined, data: Partial<Echo>) {
    const index = Echoes.value.findIndex(e => e.Id === echoId)

    if (index !== -1) {
      Echoes.value[index] = {
        ...Echoes.value[index],
        ...data,
      } as Echo
    }
    else {
      Echoes.value.push({ Id: echoId, ...data } as Echo)
    }
  }

  function UpdateWithEquipedBy(echoId: number | undefined, characterId: number, data: Partial<Echo>) {
    const index = Echoes.value.findIndex(e => e.Id === echoId && e.EquipedBy === characterId)

    if (index !== -1) {
      Echoes.value[index] = {
        ...Echoes.value[index],
        ...data,
      } as Echo
    }
    else {
      Echoes.value.push({ Id: echoId, ...data } as Echo)
    }
  }

  function RemoveEcho(echoId: number, characterId: number) {
    Echoes.value = Echoes.value.filter(e => !(e.Id === echoId && e.EquipedBy === characterId))
  }

  function AddOrUpdate(echo: Echo, characterId: number) {
    if (!Echoes.value)
      return

    const exists = Echoes.value.some(c => c.Id === echo.Id && c.EquipedBy === characterId)
    if (exists) {
      return UpdateWithEquipedBy(echo.Id, characterId, echo)
    }

    Echoes.value.push(echo)
  }

  return {
    Echoes,
    Get,
    GetEquipedBy,
    GetAllEquipedBy,
    Update,
    UpdateWithEquipedBy,
    RemoveEcho,
    AddOrUpdate,
    Migration,
  }
})
