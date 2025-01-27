import type IEcho from '../Interfaces/IEcho'
import type IStatistic from '../Interfaces/IStatistic'
import type { Character } from '../Models/Character'
import { StatType } from '../Enums/StatType'

export class CharacterStatsSystem {
  // TODO: Calculer les stats du personnage en fonction des Echoes, Armes, Sequences, Compétences,... ahahaha.

  private IsPercentageStat(statType: StatType) {
    return !(statType === StatType.ATTACK
      || statType === StatType.HP
      || statType === StatType.DEF)
  }

  private Is_HP_Percent_ATK_Percent_DEF_Percent(statType: StatType) {
    return statType === StatType.ATTACK_PERCENTAGE
      || statType === StatType.HP_PERCENTAGE
      || statType === StatType.DEF_PERCENTAGE
  }

  CalculateTotalStats(character: Character): IStatistic[] {
    const totalStats: IStatistic[] = JSON.parse(JSON.stringify(character.Stats))

    const addToTotalStats = (stat: IStatistic | undefined) => {
      if (stat) {
        const existingStat = totalStats.find(x => x.Type === stat.Type)
        if (existingStat) {
          if (this.Is_HP_Percent_ATK_Percent_DEF_Percent(stat.Type)) {
            existingStat.Value *= (stat.Value / 100)
          }
          else {
            existingStat.Value += stat.Value
          }
        }
      }
    }

    character.Echoes.forEach((echo: IEcho) => {
      addToTotalStats(echo.MainStatistic)
      echo.Statistics.forEach(addToTotalStats)
    })

    if (character.Weapon) {
      addToTotalStats(character.Weapon.MainStatistic)
      addToTotalStats(character.Weapon.SecondaryStatistic)
    }

    return totalStats
  }
}
