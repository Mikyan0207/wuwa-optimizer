import type Echo from '~/Core/Interfaces/Echo'
import type Skill from '~/Core/Interfaces/Skill'
import type Statistic from '~/Core/Interfaces/Statistic'
import { StatType } from '~/Core/Enums/StatType'

export function useStatsCalculator() {
  const CharactersStore = useCharactersStore()
  const EchoesStore = useEchoesStore()
  const WeaponsStore = useWeaponsStore()

  function CalculateTotalStats(characterId: number, weaponId: number, echoesIds: number[]): Statistic[] {
    const character = CharactersStore.GetCharacter(characterId)
    const echoesStats = CalculateEchoesStats(echoesIds, characterId)
    const weaponStats = CalculateWeaponStats(weaponId)

    if (character === undefined) {
      return []
    }

    // Do we really need to do that...?
    const skillsStats = CalculateSkillsStats(JSON.parse(JSON.stringify(character.Skills)) || [])
    const totalStats: Statistic[] = JSON.parse(JSON.stringify(character.Stats))

    const addToTotalStats = (stat: Statistic) => {
      switch (stat.Type) {
        case StatType.ATTACK_PERCENTAGE: {
          const atkStat = totalStats.find(x => x.Type === StatType.ATTACK)!
          atkStat.Value += Math.round(atkStat.Value * (stat.Value / 100))
          break
        }
        case StatType.HP_PERCENTAGE: {
          const hpStat = totalStats.find(x => x.Type === StatType.HP)!
          hpStat.Value += Math.round(hpStat.Value * (stat.Value / 100))
          break
        }
        case StatType.DEF_PERCENTAGE: {
          const defStat = totalStats.find(x => x.Type === StatType.DEF)!
          defStat.Value += Math.round(defStat.Value * (stat.Value / 100))
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
    skillsStats.forEach(addToTotalStats)
    echoesStats.forEach(addToTotalStats)

    return totalStats
  }

  function CalculateSkillsStats(skills: Skill[]) {
    const stats: Statistic[] = []

    skills.forEach((skill: Skill) => {
      if (skill.Unlocked && skill.Stat) {
        const existingStat = stats.find(s => s.Type === skill.Stat!.Type)
        if (existingStat) {
          existingStat.Value += skill.Stat.Value
        }
        else {
          stats.push(skill.Stat)
        }
      }
    })

    return stats
  }

  function CalculateEchoesStats(echoesIds: number[], characterId: number): Statistic[] {
    // Do we really need to do that...?
    const echoes = JSON.parse(JSON.stringify(EchoesStore.GetEchoesByIds(echoesIds, characterId)))
    const stats: Statistic[] = []

    echoes.forEach((echo: Echo) => {
      if (echo.MainStatistic) {
        const existingStat = stats.find(s => s.Type === echo.MainStatistic!.Type)
        if (existingStat) {
          existingStat.Value += echo.MainStatistic.Value
        }
        else {
          stats.push(echo.MainStatistic)
        }
      }
      echo.Statistics.forEach((stat) => {
        const existingStat = stats.find(s => s.Type === stat.Type)
        if (existingStat) {
          existingStat.Value += stat.Value
        }
        else {
          stats.push(stat)
        }
      })
    })

    return stats
  }

  function CalculateWeaponStats(weaponId: number): Statistic[] {
    const weapon = WeaponsStore.GetWeapon(weaponId)
    const stats: Statistic[] = []

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
}
