import type Echo from '~/Core/Interfaces/Echo'
import type Sonata from '~/Core/Interfaces/Sonata'

export interface CharacterSet {
  name: string
  count: number
  sonata: Sonata
  effect1Required: number
  effect2Required: number
  effect1Active: boolean
  effect2Active: boolean
  maxRequired: number
}

export function useCharacterSets(echoes: Echo[]) {
  const ActiveSets = computed<CharacterSet[]>(() => {
    const setCounts = new Map<string, { count: number, sonata: Sonata }>()

    echoes.forEach((echo) => {
      if (echo.Sonata) {
        echo.Sonata.forEach((sonata) => {
          if (sonata.IsSelected) {
            const key = sonata.Name
            const existing = setCounts.get(key)

            if (existing) {
              existing.count++
            }
            else {
              setCounts.set(key, { count: 1, sonata })
            }
          }
        })
      }
    })

    return Array.from(setCounts.entries())
      .map(([name, data]) => ({
        name,
        count: data.count,
        sonata: data.sonata,
        effect1Required: data.sonata.Effect1RequiredEchoes ?? 2,
        effect2Required: data.sonata.Effect2RequiredEchoes ?? 5,
        effect1Active: data.count >= (data.sonata.Effect1RequiredEchoes ?? 2),
        effect2Active: data.sonata.Effect2 ? data.count >= (data.sonata.Effect2RequiredEchoes ?? 5) : false,
        maxRequired: data.sonata.Effect2
          ? Math.max(data.sonata.Effect1RequiredEchoes ?? 2, data.sonata.Effect2RequiredEchoes ?? 5)
          : data.sonata.Effect1RequiredEchoes ?? 2,
      }))
      .sort((a, b) => b.count - a.count)
  })

  return {
    ActiveSets,
  }
}
