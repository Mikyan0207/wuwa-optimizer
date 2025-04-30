import type Character from '~/Core/Interfaces/Character'
import type Echo from '~/Core/Interfaces/Echo'
import type Skill from '~/Core/Interfaces/Skill'
import type Statistic from '~/Core/Interfaces/Statistic'
import { StatType } from '~/Core/Enums/StatType'
import { Sonatas } from '~/Core/Sonatas'

export function useStatsCalculator() {
  const CharactersStore = useCharactersStore()
  const EchoesStore = useEchoesStore()
  const WeaponsStore = useWeaponsStore()

  function DeepCloneStats(stats: Statistic[]): Statistic[] {
    return stats.map(s => ({ ...s }))
  }

  function DistributeStats(allStats: Statistic[]) {
    const flatStats: Statistic[] = []
    const percentStats: Statistic[] = []

    allStats.forEach((stat) => {
      switch (stat.Type) {
        case StatType.ATTACK_PERCENTAGE:
        case StatType.HP_PERCENTAGE:
        case StatType.DEF_PERCENTAGE:
          percentStats.push(stat)
          break
        default:
          flatStats.push(stat)
          break
      }
    })

    return { flatStats, percentStats }
  }

  function CalculateAttack(base: number, weapon: number, flat: number, percent: number): number {
    return Math.round((base + weapon) * (1 + percent / 100) + flat)
  }

  function CalculateHealth(base: number, flat: number, percent: number): number {
    return Math.round((base) * (1 + percent / 100) + flat)
  }

  function CalculateDefense(base: number, flat: number, percent: number): number {
    return Math.round((base) * (1 + percent / 100) + flat)
  }

  function CalculateFlatStats(
    character: Character,
    weaponStats: Statistic[],
    flatStats: Statistic[],
    percentStats: Statistic[],
  ) {
    const getStatValue = (type: StatType, source: Statistic[]) => source.find(s => s.Type === type)?.Value ?? 0
    const sumStats = (type: StatType, source: Statistic[]) => source.filter(s => s.Type === type).reduce((acc, s) => acc + s.Value, 0)

    const atk = CalculateAttack(
      getStatValue(StatType.ATTACK, character.Stats),
      getStatValue(StatType.ATTACK, weaponStats),
      sumStats(StatType.ATTACK, flatStats),
      sumStats(StatType.ATTACK_PERCENTAGE, percentStats),
    )

    const hp = CalculateHealth(
      getStatValue(StatType.HP, character.Stats),
      sumStats(StatType.HP, flatStats),
      sumStats(StatType.HP_PERCENTAGE, percentStats),
    )

    const def = CalculateDefense(
      getStatValue(StatType.DEF, character.Stats),
      sumStats(StatType.DEF, flatStats),
      sumStats(StatType.DEF_PERCENTAGE, percentStats),
    )

    return [
      { Type: StatType.HP, Value: hp },
      { Type: StatType.ATTACK, Value: atk },
      { Type: StatType.DEF, Value: def },
    ]
  }

  function CalculateOtherStats(flatStats: Statistic[], percentStats: Statistic[], baseStats: Statistic[]): Statistic[] {
    const stats = DeepCloneStats(baseStats)

    flatStats.forEach((stat) => {
      if (![StatType.ATTACK, StatType.HP, StatType.DEF].includes(stat.Type)) {
        const existing = stats.find(s => s.Type === stat.Type)
        if (existing)
          existing.Value += stat.Value
        else stats.push({ ...stat })
      }
    })

    return stats
  }

  function CalculateTotalStats(characterId: number, weaponId: number, echoesIds: number[]): Statistic[] {
    const character = CharactersStore.Get(characterId)
    const echoesStats = CalculateEchoesStats(echoesIds, characterId)
    const echoes = EchoesStore.GetEchoesByIds(echoesIds, characterId)
    const sonataBonuses = CalculateSonataBonuses(echoes)
    const skillsStats = CalculateSkillsStats(character.Skills || [])
    const baseStats: Statistic[] = character.Stats.filter(s =>
      s.Type !== StatType.ATTACK && s.Type !== StatType.HP && s.Type !== StatType.DEF,
    )
    const { base: weaponBaseStats, extra: weaponExtraStats } = CalculateWeaponStats(weaponId)

    const { flatStats, percentStats } = DistributeStats([
      ...skillsStats,
      ...echoesStats,
      ...weaponExtraStats,
      ...sonataBonuses,
    ])

    const mainStats = CalculateFlatStats(character, weaponBaseStats, flatStats, percentStats)
    const otherStats = CalculateOtherStats(flatStats, percentStats, baseStats)

    return [...mainStats, ...otherStats]
  }

  function CalculateSkillsStats(skills: Skill[]): Statistic[] {
    const stats: Statistic[] = []

    skills.forEach((skill) => {
      if (skill.Unlocked === true && skill.Stat) {
        const existing = stats.find(s => s.Type === skill.Stat!.Type)
        if (existing) {
          existing.Value += skill.Stat.Value
        }
        else {
          stats.push({ ...skill.Stat })
        }
      }
    })

    return stats
  }

  function CalculateEchoesStats(echoesIds: number[], characterId: number): Statistic[] {
    const echoes = EchoesStore.GetEchoesByIds(echoesIds, characterId)
    const stats: Statistic[] = []

    echoes.forEach((echo: Echo) => {
      if (echo.MainStatistic) {
        const existing = stats.find(s => s.Type === echo.MainStatistic.Type)
        if (existing) {
          existing.Value += echo.MainStatistic.Value
        }
        else {
          stats.push({ ...echo.MainStatistic })
        }
      }
      if (echo.SecondaryStatistic) {
        const existing = stats.find(s => s.Type === echo.SecondaryStatistic.Type)
        if (existing) {
          existing.Value += echo.SecondaryStatistic.Value
        }
        else {
          stats.push({ ...echo.SecondaryStatistic })
        }
      }
      echo.Statistics.forEach((stat) => {
        const existing = stats.find(s => s.Type === stat.Type)
        if (existing) {
          existing.Value += stat.Value
        }
        else {
          stats.push({ ...stat })
        }
      })
      // Some echoes gives bonus stats when equiped as the main echo.
      if (echo.EquipedSlot === 0) {
        echo.ExtraStatistics?.forEach((stat) => {
          const existing = stats.find(s => s.Type === stat.Type)
          if (existing) {
            existing.Value += stat.Value
          }
          else {
            stats.push({ ...stat })
          }
        })
      }
    })

    return stats
  }

  function CalculateSonataBonuses(echoes: Echo[]): Statistic[] {
    const setCounts = echoes.reduce<Record<string, number>>((counts, echo) => {
      const sonata = echo.Sonata.find(x => x.IsSelected)
      if (sonata) {
        counts[sonata.Name] = (counts[sonata.Name] || 0) + 1
      }
      return counts
    }, {})

    const bonuses = Object.entries(setCounts).flatMap(([sonataName, count]) => {
      const sonata = Sonatas.find(x => x.Name === sonataName)
      if (!sonata?.ExtraStats)
        return []

      const applicableBonuses = []
      if (count >= 2 && sonata.ExtraStats.length >= 1) {
        applicableBonuses.push(sonata.ExtraStats[0])
      }
      if (count >= 5 && sonata.ExtraStats.length >= 2) {
        applicableBonuses.push(sonata.ExtraStats[1])
      }
      return applicableBonuses
    }) as Statistic[]

    return bonuses
  }

  function CalculateWeaponStats(weaponId: number): { base: Statistic[], extra: Statistic[] } {
    const weapon = WeaponsStore.GetWeapon(weaponId)
    const base: Statistic[] = []
    const extra: Statistic[] = []

    if (weapon) {
      if (weapon.MainStatistic)
        base.push({ ...weapon.MainStatistic })
      if (weapon.SecondaryStatistic)
        extra.push({ ...weapon.SecondaryStatistic })
      if (weapon.ExtraStatistics?.length) {
        weapon.ExtraStatistics.forEach(stat => extra.push({ ...stat }))
      }
    }

    return { base, extra }
  }

  return {
    CalculateTotalStats,
  }
}
