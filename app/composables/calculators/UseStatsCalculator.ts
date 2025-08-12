import type Build from '~/Core/Interfaces/Build'
import type Character from '~/Core/Interfaces/Character'
import type Echo from '~/Core/Interfaces/Echo'
import type Skill from '~/Core/Interfaces/Skill'
import type Statistic from '~/Core/Interfaces/Statistic'
import type Weapon from '~/Core/Interfaces/Weapon'
import { StatType } from '~/Core/Enums/StatType'
import { Sonatas } from '~/Core/Sonatas'

export function useStatsCalculator() {
  function CalculateTotalStats(character: Character, weapon: Weapon | undefined, build: Build): Statistic[] {
    if (!character)
      return []

    const echoes = build.Echoes.filter(echo => echo !== undefined && echo.Id !== undefined)

    return [
      ...CalculateMainStats(character, weapon, echoes),
      ...CalculateOtherStats(character, weapon, echoes),
    ]
  }

  function CalculateMainStats(character: Character, weapon: Weapon | undefined, echoes: Echo[]): Statistic[] {
    const allStats = GetAllStats(character, weapon, echoes)

    const baseAtk = character.BaseStats.find(stat => stat.Type === StatType.ATTACK)?.Value || 0
    const weaponAtk = weapon?.MainStatistic?.Value || 0
    const flatAtk = SumStatsByType(allStats, StatType.ATTACK)
    const percentAtk = SumStatsByType(allStats, StatType.ATTACK_PERCENTAGE)

    const baseHp = character.BaseStats.find(stat => stat.Type === StatType.HP)?.Value || 0
    const flatHp = SumStatsByType(allStats, StatType.HP)
    const percentHp = SumStatsByType(allStats, StatType.HP_PERCENTAGE)

    const baseDef = character.BaseStats.find(stat => stat.Type === StatType.DEF)?.Value || 0
    const flatDef = SumStatsByType(allStats, StatType.DEF)
    const percentDef = SumStatsByType(allStats, StatType.DEF_PERCENTAGE)

    return [
      { Type: StatType.HP, Value: CalculateFinalStat(baseHp, flatHp, percentHp) },
      { Type: StatType.ATTACK, Value: CalculateFinalStat(baseAtk + weaponAtk, flatAtk, percentAtk) },
      { Type: StatType.DEF, Value: CalculateFinalStat(baseDef, flatDef, percentDef) },
    ]
  }

  function CalculateOtherStats(character: Character, weapon: Weapon | undefined, echoes: Echo[]): Statistic[] {
    const allStats = GetAllStats(character, weapon, echoes)

    const baseStats = character.BaseStats.filter(stat =>
      ![StatType.HP, StatType.ATTACK, StatType.DEF].includes(stat.Type),
    )

    const otherStats = allStats.filter(stat =>
      ![StatType.ATTACK, StatType.HP, StatType.DEF, StatType.ATTACK_PERCENTAGE, StatType.HP_PERCENTAGE, StatType.DEF_PERCENTAGE].includes(stat.Type),
    )

    return MergeStats(baseStats, otherStats)
  }

  function GetAllStats(character: Character, weapon: Weapon | undefined, echoes: Echo[]): Statistic[] {
    return [
      ...GetSkillStats(character.Skills ?? []),
      ...GetEchoStats(echoes),
      ...GetWeaponExtraStats(weapon),
      ...GetSonataStats(echoes),
    ]
  }

  function CalculateFinalStat(base: number, flat: number, percent: number): number {
    return Math.floor((base * (1 + percent / 100)) + flat)
  }

  function SumStatsByType(stats: Statistic[], type: StatType): number {
    return stats.filter(stat => stat.Type === type).reduce((sum, stat) => sum + stat.Value, 0)
  }

  function MergeStats(baseStats: Statistic[], additionalStats: Statistic[]): Statistic[] {
    const merged = new Map<StatType, number>()

    baseStats.forEach(stat => merged.set(stat.Type, stat.Value))
    additionalStats.forEach((stat) => {
      const existing = merged.get(stat.Type) || 0
      merged.set(stat.Type, existing + stat.Value)
    })

    return Array.from(merged.entries()).map(([type, value]) => ({ Type: type, Value: value }))
  }

  function GetSkillStats(skills: Skill[]): Statistic[] {
    return skills
      .filter(skill => skill.Unlocked && skill.Stat)
      .map(skill => skill.Stat!)
  }

  function GetEchoStats(echoes: Echo[]): Statistic[] {
    return echoes.flatMap(echo => [
      ...(echo.MainStatistic ? [echo.MainStatistic] : []),
      ...(echo.SecondaryStatistic ? [echo.SecondaryStatistic] : []),
      ...echo.Statistics,
      ...(echo.EquipedSlot === 0 && echo.ExtraStatistics ? echo.ExtraStatistics : []),
    ])
  }

  function GetWeaponExtraStats(weapon: Weapon | undefined): Statistic[] {
    if (!weapon)
      return []

    return [
      ...(weapon.SecondaryStatistic ? [weapon.SecondaryStatistic] : []),
      ...(weapon.ExtraStatistics || []),
    ]
  }

  function GetSonataStats(echoes: Echo[]): Statistic[] {
    const setCounts = echoes.reduce<Record<string, number>>((counts, echo) => {
      const sonata = echo.Sonata.find(s => s.IsSelected)
      if (sonata)
        counts[sonata.Name] = (counts[sonata.Name] || 0) + 1
      return counts
    }, {})

    return Object.entries(setCounts).flatMap(([sonataName, count]) => {
      const sonata = Sonatas.find(s => s.Name === sonataName)

      if (!sonata?.ExtraStats)
        return []

      const bonuses = []
      if (count >= 2 && sonata.ExtraStats[0])
        bonuses.push(sonata.ExtraStats[0])
      if (count >= 5 && sonata.ExtraStats[1])
        bonuses.push(sonata.ExtraStats[1])

      return bonuses
    })
  }

  return {
    CalculateTotalStats,
  }
}
