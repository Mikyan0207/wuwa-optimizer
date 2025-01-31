import type IEcho from '~/Core/Interfaces/IEcho'
import type IStatistic from '~/Core/Interfaces/IStatistic'
import { StatType } from '~/Core/Enums/StatType'

export const useStatsCalculatorStore = defineStore('StatsCalculatorStore', () => {
  const CharactersStore = useCharactersStore()
  const EchoesStore = useEchoesStore()
  const WeaponsStore = useWeaponsStore()

  function CalculateTotalStats(characterId: number, weaponId: number, echoesIds: number[]): IStatistic[] {
    const character = CharactersStore.GetCharacter(characterId)
    const echoesStats = CalculateEchoesStats(echoesIds)
    const weaponStats = CalculateWeaponStats(weaponId)

    if (character === undefined) {
      return []
    }

    // Do we really need to do that...?
    const totalStats: IStatistic[] = JSON.parse(JSON.stringify(character.Stats))

    const addToTotalStats = (stat: IStatistic) => {
      switch (stat.Type) {
        case StatType.ATTACK_PERCENTAGE: {
          const atkStat = totalStats.find(x => x.Type === StatType.ATTACK)!
          atkStat.Value += atkStat.Value * (stat.Value / 100)
          break
        }
        case StatType.HP_PERCENTAGE: {
          const hpStat = totalStats.find(x => x.Type === StatType.HP)!
          hpStat.Value += hpStat.Value * (stat.Value / 100)
          break
        }
        case StatType.DEF_PERCENTAGE: {
          const defStat = totalStats.find(x => x.Type === StatType.DEF)!
          defStat.Value += defStat.Value * (stat.Value / 100)
          break
        }
        default: {
          const existingStat = totalStats.find(x => x.Type === stat.Type)

          if (existingStat) {
            existingStat.Value += stat.Value
          }
          break
        }
      }
    }

    weaponStats.forEach(addToTotalStats)
    echoesStats.forEach(addToTotalStats)

    return totalStats
  }

  function CalculateEchoesStats(echoesIds: number[]): IStatistic[] {
    const echoes = EchoesStore.GetEchoesByIds(echoesIds)
    const stats: IStatistic[] = []

    echoes.forEach((echo: IEcho) => {
      if (echo.MainStatistic) {
        stats.push(echo.MainStatistic)
      }
      echo.Statistics.forEach(stat => stats.push(stat))
    })

    return stats
  }

  function CalculateWeaponStats(weaponId: number): IStatistic[] {
    const weapon = WeaponsStore.GetWeapon(weaponId)
    const stats: IStatistic[] = []

    if (weapon) {
      if (weapon.MainStatistic) {
        stats.push(weapon.MainStatistic)
      }
      if (weapon.SecondaryStatistic) {
        stats.push(weapon.SecondaryStatistic)
      }
    }

    return stats
  }

  return {
    CalculateTotalStats,
  }
})
