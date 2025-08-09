import type Settings from '~/Core/Interfaces/Settings'
import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

const DefaultSettings: Settings = {
  General: {
    EnableAnimations: true,
  },
  Characters: {
    EnableAnimatedArt: true,
  },
}

export const useSettingsStore = defineStore('SettingsStore', () => {
  const Settings = useLocalStorage<Settings>('Settings', DefaultSettings)

  function GetSetting<T extends keyof Settings>(key: T): Settings[T] {
    return Settings.value[key]
  }

  function UpdateSetting<T extends keyof Settings>(key: T, value: Settings[T]) {
    Settings.value[key] = value
  }

  function ResetSettings() {
    Settings.value = { ...DefaultSettings }
  }

  return {
    Settings,
    GetSetting,
    UpdateSetting,
    ResetSettings,
  }
})
