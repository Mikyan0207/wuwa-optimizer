import { defineStore } from 'pinia'
import { consola, LogLevels } from 'consola'

export const useUpdaterStore = defineStore('UpdaterStore', () => {
  const CURRENT_VERSION = '1.0.1'
  const VERSION_KEY = 'wuwa-optimizer-version'
  const Version = useLocalStorage<string>(VERSION_KEY, '')

  const Logger = consola.create({
    level: process.env.NODE_ENV === 'production' ? LogLevels.warn : LogLevels.info,
  })

  function Migrate(): void {
    if (Version.value === CURRENT_VERSION) {
      return
    }

    if (!Version.value || Version.value !== CURRENT_VERSION) {
      ClearAllData()
    }

    Version.value = CURRENT_VERSION

    // TODO: Migrate future versions here
  }

  function ClearAllData(): void {
    localStorage.clear()

    Logger.warn('Migration: Cleared all data for version', CURRENT_VERSION)
  }

  return {
    Migrate,
  }
})
