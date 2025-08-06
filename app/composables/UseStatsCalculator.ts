import type Build from '~/Core/Interfaces/Build'
import type Character from '~/Core/Interfaces/Character'
import type Echo from '~/Core/Interfaces/Echo'
import type Skill from '~/Core/Interfaces/Skill'
import type Statistic from '~/Core/Interfaces/Statistic'
import { StatType } from '~/Core/Enums/StatType'
import { Sonatas } from '~/Core/Sonatas'
import { useSetStatsStore } from '~/stores/SetStatsStore'

export function useStatsCalculator() {
  const CharactersStore = useCharactersStore()
  const EchoesStore = useEchoesStore()
  const WeaponsStore = useWeaponsStore()
  const BuildsStore = useBuildsStore()

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
    // ATK = (Base ATKCharacter + Base ATKWeapon) × (1 + %Bonus ATK) + Flat Bonus ATK
    const totalBase = base + weapon
    const percentMultiplier = 1 + (percent / 100)
    const totalWithPercent = Math.floor(totalBase * percentMultiplier)
    const finalValue = totalWithPercent + flat
    return Math.floor(finalValue)
  }

  function CalculateHealth(base: number, flat: number, percent: number): number {
    // Max HP = Base HP_Character × (1 + % HP Bonus) + HP Flat Bonus
    const percentMultiplier = 1 + (percent / 100)
    const totalWithPercent = Math.floor(base * percentMultiplier)

    return Math.floor(totalWithPercent + flat)
  }

  function CalculateDefense(base: number, flat: number, percent: number): number {
    // DEF = Base DEF × (1 + %Bonus DEF) + Flat Bonus DEF
    const percentMultiplier = 1 + (percent / 100)
    const totalWithPercent = Math.floor(base * percentMultiplier)
    const finalValue = totalWithPercent + flat
    return Math.floor(finalValue)
  }

  function CalculateFlatStats(
    character: Character,
    weaponStats: Statistic[],
    flatStats: Statistic[],
    percentStats: Statistic[],
  ) {
    const GetStatValue = (type: StatType, source: Statistic[]) => source.find(s => s.Type === type)?.Value ?? 0
    const SumStats = (type: StatType, source: Statistic[]) => {
      const stats = source.filter(s => s.Type === type)

      return stats.reduce((acc, s) => acc + s.Value, 0)
    }

    const atk = CalculateAttack(
      GetStatValue(StatType.ATTACK, character.Stats),
      GetStatValue(StatType.ATTACK, weaponStats),
      SumStats(StatType.ATTACK, flatStats),
      SumStats(StatType.ATTACK_PERCENTAGE, percentStats),
    )

    const hp = CalculateHealth(
      GetStatValue(StatType.HP, character.Stats),
      SumStats(StatType.HP, flatStats),
      SumStats(StatType.HP_PERCENTAGE, percentStats),
    )

    const def = CalculateDefense(
      GetStatValue(StatType.DEF, character.Stats),
      SumStats(StatType.DEF, flatStats),
      SumStats(StatType.DEF_PERCENTAGE, percentStats),
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

  function CalculateTotalStats(characterId: number, buildOrBuildId?: Build | string): Statistic[] {
    const character = CharactersStore.Get(characterId)
    let weaponId = -1
    let echoes: Echo[] = []

    if (buildOrBuildId) {
      if (typeof buildOrBuildId === 'string') {
        const build = BuildsStore.GetBuild(buildOrBuildId)
        if (build) {
          weaponId = build.WeaponId || -1
          echoes = build.EchoesData?.filter(echo => echo.Id !== -1) || []
        }
      }
      else {
        weaponId = buildOrBuildId.WeaponId || -1
        echoes = buildOrBuildId.EchoesData?.filter(echo => echo.Id !== -1) || []
      }
    }
    else {
      echoes = EchoesStore.GetAllEquipedBy(characterId)
    }

    const setStatsStore = useSetStatsStore()

    const echoesStats = CalculateEchoesStats(echoes)
    const sonataBonuses = setStatsStore.IncludeSetStats ? CalculateSonataBonuses(echoes) : []
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

  function CalculateEchoesStats(echoes: Echo[]): Statistic[] {
    const stats: Statistic[] = []

    echoes.forEach((echo: Echo) => {
      if (echo.MainStatistic) {
        const existing = stats.find(s => s.Type === echo.MainStatistic!.Type)
        if (existing) {
          existing.Value += echo.MainStatistic.Value
        }
        else {
          stats.push({ ...echo.MainStatistic })
        }
      }
      if (echo.SecondaryStatistic) {
        const existing = stats.find(s => s.Type === echo.SecondaryStatistic!.Type)
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
      weapon.ExtraStatistics?.forEach(stat => extra.push({ ...stat }))
    }

    return { base, extra }
  }

  return {
    CalculateTotalStats,
  }
}
