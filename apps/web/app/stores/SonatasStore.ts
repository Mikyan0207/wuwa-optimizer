import type Sonata from '~/Core/Interfaces/Sonata'
import { defineStore } from 'pinia'
import { TemplateSonatas } from '~/Core/Sonatas'

export const useSonatasStore = defineStore('SonatasStore', () => {
  const Sonatas = computed<Sonata[]>(() => TemplateSonatas)

  function GetAll(): Sonata[] {
    return Sonatas.value
  }

  function GetByName(name: string): Sonata | undefined {
    return Sonatas.value.find(s => s.Name === name)
  }

  return {
    GetAll,
    GetByName,
  }
})
