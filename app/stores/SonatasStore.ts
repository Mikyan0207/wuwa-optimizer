import type Sonata from '~/Core/Interfaces/Sonata'
import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { SonataMigrationService } from '~/Core/Services/SonataMigrationService'
import { Sonatas } from '~/Core/Sonatas'

export const useSonatasStore = defineStore('SonatasStore', () => {
  const StoredSonatas = useLocalStorage<Sonata[]>('Sonatas', [])
  const MigrationService = new SonataMigrationService()

  async function Migration() {
    if (MigrationService.NeedsMigration()) {
      try {
        StoredSonatas.value = await MigrationService.MigrateSonatas()
      }
      catch (error) {
        console.error('Sonata migration failed:', error)
      }
      finally {
        MigrationService.CleanUp()
      }
    }
  }

  function GetAll(): Sonata[] {
    if (StoredSonatas.value.length === 0) {
      StoredSonatas.value = [...Sonatas]
    }
    return StoredSonatas.value
  }

  function GetByName(name: string): Sonata | undefined {
    return StoredSonatas.value.find(s => s.Name === name)
  }

  function UpdateByName(name: string, data: Partial<Sonata>) {
    const index = StoredSonatas.value.findIndex(s => s.Name === name)
    if (index === -1 || StoredSonatas.value === undefined)
      return

    StoredSonatas.value[index] = {
      ...StoredSonatas.value[index],
      ...data,
    } as Sonata
  }

  function AddOrUpdate(sonata: Sonata) {
    if (!StoredSonatas.value)
      return

    const exists = StoredSonatas.value.some(s => s.Name === sonata.Name)
    if (exists) {
      return UpdateByName(sonata.Name, sonata)
    }

    StoredSonatas.value.push(sonata)
  }

  function ResetToTemplates() {
    StoredSonatas.value = [...Sonatas]
  }

  return {
    StoredSonatas,
    GetAll,
    GetByName,
    UpdateByName,
    AddOrUpdate,
    ResetToTemplates,
    Migration,
  }
})
