import { defineStore } from 'pinia'

export const useUpdaterStore = defineStore('UpdaterStore', () => {
  const CURRENT_VERSION = '1.0.0'
  const VERSION_KEY = 'wuwa-optimizer-version'
  const Version = useLocalStorage<string>(VERSION_KEY, '')

  function Migrate(): void {
    if (Version.value === CURRENT_VERSION) {
      return
    }

    if (!Version.value) {
      ClearAllData()
    }

    Version.value = CURRENT_VERSION

    // TODO: Migrate future versions here
  }

  function ClearAllData(): void {
    localStorage.clear()

    console.warn('Migration: Cleared all data for version', CURRENT_VERSION)
  }

  return {
    Migrate,
  }
})
