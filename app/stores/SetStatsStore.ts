import { defineStore } from 'pinia'

export const useSetStatsStore = defineStore('setStats', () => {
  const IncludeSetStats = ref(true)

  return {
    IncludeSetStats,
  }
})