import type { BaseWeapon } from './Interfaces/Weapon'
import { Rarity } from './Enums/Rarity'
import { ReleaseState } from './Enums/ReleaseState'
import { StatType } from './Enums/StatType'
import { WeaponType } from './Enums/WeaponType'

export const Weapons: BaseWeapon[] = [
  {
    GameId: 21010011,
    Name: 'Training Broadblade',
    Type: WeaponType.BROADBLADE,
    Rarity: Rarity.ONE_STAR,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 250.0,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 11.47,
    },
  },
  {
    GameId: 21010012,
    Name: 'Tyro Broadblade',
    Type: WeaponType.BROADBLADE,
    Rarity: Rarity.TWO_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 275.0,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 14.85,
    },
  },
  {
    GameId: 21010013,
    Name: 'Broadblade Of Night',
    Type: WeaponType.BROADBLADE,
    Rarity: Rarity.THREE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 325.0,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 24.3,
    },
  },
  {
    GameId: 21010015,
    Name: 'Lustrous Razor',
    Type: WeaponType.BROADBLADE,
    Rarity: Rarity.FIVE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 587.5,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 36.45,
    },
  },
  {
    GameId: 21010016,
    Name: 'Verdant Summit',
    Type: WeaponType.BROADBLADE,
    Rarity: Rarity.FIVE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 587.5,
    },
    SecondaryStatistic: {
      Type: StatType.CRIT_DMG,
      Value: 48.6,
    },
  },
  {
    GameId: 21010023,
    Name: 'Originite: Type I',
    Type: WeaponType.BROADBLADE,
    Rarity: Rarity.THREE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 300.0,
    },
    SecondaryStatistic: {
      Type: StatType.DEF_PERCENTAGE,
      Value: 38.48,
    },
  },
  {
    GameId: 21010024,
    Name: 'Discord',
    Type: WeaponType.BROADBLADE,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 337.5,
    },
    SecondaryStatistic: {
      Type: StatType.ENERGY_REGENERATION,
      Value: 51.84,
    },
  },
  {
    GameId: 21010026,
    Name: 'Ages Of Harvest',
    Type: WeaponType.BROADBLADE,
    Rarity: Rarity.FIVE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 587.5,
    },
    SecondaryStatistic: {
      Type: StatType.CRIT_RATE,
      Value: 24.3,
    },
  },
  {
    GameId: 21010034,
    Name: 'Broadblade#41',
    Type: WeaponType.BROADBLADE,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 412.5,
    },
    SecondaryStatistic: {
      Type: StatType.ENERGY_REGENERATION,
      Value: 32.4,
    },
  },
  {
    GameId: 21010036,
    Name: 'Wildfire Mark',
    Type: WeaponType.BROADBLADE,
    Rarity: Rarity.FIVE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 587.5,
    },
    SecondaryStatistic: {
      Type: StatType.CRIT_DMG,
      Value: 48.6,
    },
    ExtraStatistics: [
      {
        Type: StatType.ATTACK_PERCENTAGE,
        Value: 12.0,
      },
    ],
  },
  {
    GameId: 21010043,
    Name: 'Broadblade Of Voyager',
    Type: WeaponType.BROADBLADE,
    Rarity: Rarity.THREE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 300.0,
    },
    SecondaryStatistic: {
      Type: StatType.ENERGY_REGENERATION,
      Value: 32.4,
    },
  },
  {
    GameId: 21010044,
    Name: 'Dauntless Evernight',
    Type: WeaponType.BROADBLADE,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 337.5,
    },
    SecondaryStatistic: {
      Type: StatType.DEF_PERCENTAGE,
      Value: 61.56,
    },
  },
  {
    GameId: 21010053,
    Name: 'Guardian Broadblade',
    Type: WeaponType.BROADBLADE,
    Rarity: Rarity.THREE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 325.0,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 24.3,
    },
  },
  {
    GameId: 21010063,
    Name: 'Beguiling Melody',
    Type: WeaponType.BROADBLADE,
    Rarity: Rarity.THREE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 300.0,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 30.38,
    },
  },
  {
    GameId: 21010064,
    Name: 'Helios Cleaver',
    Type: WeaponType.BROADBLADE,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 412.5,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 30.38,
    },
  },
  {
    GameId: 21010074,
    Name: 'Autumntrace',
    Type: WeaponType.BROADBLADE,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 412.5,
    },
    SecondaryStatistic: {
      Type: StatType.CRIT_RATE,
      Value: 20.25,
    },
  },
  {
    GameId: 21010084,
    Name: 'Waning Redshift',
    Type: WeaponType.BROADBLADE,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 462.5,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 18.23,
    },
  },
  {
    GameId: 21010094,
    Name: 'Meditations On Mercy',
    Type: WeaponType.BROADBLADE,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 462.5,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 18.23,
    },
  },
  {
    GameId: 21020011,
    Name: 'Training Sword',
    Type: WeaponType.SWORD,
    Rarity: Rarity.ONE_STAR,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 250.0,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 11.47,
    },
  },
  {
    GameId: 21020012,
    Name: 'Tyro Sword',
    Type: WeaponType.SWORD,
    Rarity: Rarity.TWO_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 275.0,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 14.85,
    },
  },
  {
    GameId: 21020013,
    Name: 'Sword Of Night',
    Type: WeaponType.SWORD,
    Rarity: Rarity.THREE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 325.0,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 24.3,
    },
  },
  {
    GameId: 21020015,
    Name: 'Emerald Of Genesis',
    Type: WeaponType.SWORD,
    Rarity: Rarity.FIVE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 587.5,
    },
    SecondaryStatistic: {
      Type: StatType.CRIT_RATE,
      Value: 24.3,
    },
  },
  {
    GameId: 21020016,
    Name: 'Blazing Brilliance',
    Type: WeaponType.SWORD,
    Rarity: Rarity.FIVE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 587.5,
    },
    SecondaryStatistic: {
      Type: StatType.CRIT_DMG,
      Value: 48.6,
    },
  },
  {
    GameId: 21020017,
    Name: 'Somnoire Anchor',
    Type: WeaponType.SWORD,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 462.5,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 18.23,
    },
  },
  {
    GameId: 21020023,
    Name: 'Originite: Type Ii',
    Type: WeaponType.SWORD,
    Rarity: Rarity.THREE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 325.0,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 24.3,
    },
  },
  {
    GameId: 21020024,
    Name: 'Overture',
    Type: WeaponType.SWORD,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 337.5,
    },
    SecondaryStatistic: {
      Type: StatType.ENERGY_REGENERATION,
      Value: 51.84,
    },
  },
  {
    GameId: 21020026,
    Name: 'Red Spring',
    Type: WeaponType.SWORD,
    Rarity: Rarity.FIVE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 587.5,
    },
    SecondaryStatistic: {
      Type: StatType.CRIT_RATE,
      Value: 24.3,
    },
  },
  {
    GameId: 21020034,
    Name: 'Sword#18',
    Type: WeaponType.SWORD,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 387.5,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 36.45,
    },
  },
  {
    GameId: 21020036,
    Name: 'Unflickering Valor',
    Type: WeaponType.SWORD,
    Rarity: Rarity.FIVE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 412.5,
    },
    SecondaryStatistic: {
      Type: StatType.ENERGY_REGENERATION,
      Value: 77.04,
    },
  },
  {
    GameId: 21020043,
    Name: 'Sword Of Voyager',
    Type: WeaponType.SWORD,
    Rarity: Rarity.THREE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 300.0,
    },
    SecondaryStatistic: {
      Type: StatType.ENERGY_REGENERATION,
      Value: 32.4,
    },
  },
  {
    GameId: 21020044,
    Name: 'Commando Of Conviction',
    Type: WeaponType.SWORD,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 412.5,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 30.38,
    },
  },
  {
    GameId: 21020046,
    Name: 'Bloodpact\'s Pledge',
    Type: WeaponType.SWORD,
    Rarity: Rarity.FIVE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 587.5,
    },
    SecondaryStatistic: {
      Type: StatType.ENERGY_REGENERATION,
      Value: 38.88,
    },
  },
  {
    GameId: 21020053,
    Name: 'Guardian Sword',
    Type: WeaponType.SWORD,
    Rarity: Rarity.THREE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 300.0,
    },
    SecondaryStatistic: {
      Type: StatType.HP_PERCENTAGE,
      Value: 30.38,
    },
  },
  {
    GameId: 21020056,
    Name: 'Defier\'s Thorn',
    Type: WeaponType.SWORD,
    Rarity: Rarity.FIVE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 412.5,
    },
    SecondaryStatistic: {
      Type: StatType.HP_PERCENTAGE,
      Value: 72.23,
    },
  },
  {
    GameId: 21020064,
    Name: 'Lunar Cutter',
    Type: WeaponType.SWORD,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 412.5,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 30.38,
    },
  },
  {
    GameId: 21020074,
    Name: 'Lumingloss',
    Type: WeaponType.SWORD,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 387.5,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 36.45,
    },
  },
  {
    GameId: 21020084,
    Name: 'Endless Collapse',
    Type: WeaponType.SWORD,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 462.5,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 18.23,
    },
  },
  {
    GameId: 21020094,
    Name: 'Fables Of Wisdom',
    Type: WeaponType.SWORD,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 462.5,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 18.23,
    },
  },
  {
    GameId: 21030011,
    Name: 'Training Pistols',
    Type: WeaponType.PISTOLS,
    Rarity: Rarity.ONE_STAR,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 250.0,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 11.47,
    },
  },
  {
    GameId: 21030012,
    Name: 'Tyro Pistols',
    Type: WeaponType.PISTOLS,
    Rarity: Rarity.TWO_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 275.0,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 14.85,
    },
  },
  {
    GameId: 21030013,
    Name: 'Pistols Of Night',
    Type: WeaponType.PISTOLS,
    Rarity: Rarity.THREE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 325.0,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 24.3,
    },
  },
  {
    GameId: 21030015,
    Name: 'Static Mist',
    Type: WeaponType.PISTOLS,
    Rarity: Rarity.FIVE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 587.5,
    },
    SecondaryStatistic: {
      Type: StatType.CRIT_RATE,
      Value: 24.3,
    },
  },
  {
    GameId: 21030016,
    Name: 'The Last Dance',
    Type: WeaponType.PISTOLS,
    Rarity: Rarity.FIVE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 500.0,
    },
    SecondaryStatistic: {
      Type: StatType.CRIT_DMG,
      Value: 72.0,
    },
  },
  {
    GameId: 21030023,
    Name: 'Originite: Type Iii',
    Type: WeaponType.PISTOLS,
    Rarity: Rarity.THREE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 325.0,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 24.3,
    },
  },
  {
    GameId: 21030024,
    Name: 'Cadenza',
    Type: WeaponType.PISTOLS,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 337.5,
    },
    SecondaryStatistic: {
      Type: StatType.ENERGY_REGENERATION,
      Value: 51.84,
    },
  },
  {
    GameId: 21030026,
    Name: 'Woodland Aria',
    Type: WeaponType.PISTOLS,
    Rarity: Rarity.FIVE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 500.0,
    },
    SecondaryStatistic: {
      Type: StatType.CRIT_RATE,
      Value: 36.0,
    },
  },
  {
    GameId: 21030034,
    Name: 'Pistols#26',
    Type: WeaponType.PISTOLS,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 387.5,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 36.45,
    },
  },
  {
    GameId: 21030043,
    Name: 'Pistols Of Voyager',
    Type: WeaponType.PISTOLS,
    Rarity: Rarity.THREE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 300.0,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 30.38,
    },
  },
  {
    GameId: 21030044,
    Name: 'Undying Flame',
    Type: WeaponType.PISTOLS,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 412.5,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 30.38,
    },
  },
  {
    GameId: 21030053,
    Name: 'Guardian Pistols',
    Type: WeaponType.PISTOLS,
    Rarity: Rarity.THREE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 300.0,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 30.38,
    },
  },
  {
    GameId: 21030064,
    Name: 'Novaburst',
    Type: WeaponType.PISTOLS,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 412.5,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 30.38,
    },
  },
  {
    GameId: 21030074,
    Name: 'Thunderbolt',
    Type: WeaponType.PISTOLS,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 387.5,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 36.45,
    },
  },
  {
    GameId: 21030084,
    Name: 'Relativistic Jet',
    Type: WeaponType.PISTOLS,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 462.5,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 18.23,
    },
  },
  {
    GameId: 21030094,
    Name: 'Romance In Farewell',
    Type: WeaponType.PISTOLS,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 462.5,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 18.23,
    },
  },
  {
    GameId: 21040011,
    Name: 'Training Gauntlets',
    Type: WeaponType.GAUNTLETS,
    Rarity: Rarity.ONE_STAR,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 250.0,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 11.47,
    },
  },
  {
    GameId: 21040012,
    Name: 'Tyro Gauntlets',
    Type: WeaponType.GAUNTLETS,
    Rarity: Rarity.TWO_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 275.0,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 14.85,
    },
  },
  {
    GameId: 21040013,
    Name: 'Gauntlets Of Night',
    Type: WeaponType.GAUNTLETS,
    Rarity: Rarity.THREE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 325.0,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 24.3,
    },
  },
  {
    GameId: 21040015,
    Name: 'Abyss Surges',
    Type: WeaponType.GAUNTLETS,
    Rarity: Rarity.FIVE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 587.5,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 36.45,
    },
  },
  {
    GameId: 21040016,
    Name: 'Verity\'s Handle',
    Type: WeaponType.GAUNTLETS,
    Rarity: Rarity.FIVE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 587.5,
    },
    SecondaryStatistic: {
      Type: StatType.CRIT_RATE,
      Value: 24.3,
    },
  },
  {
    GameId: 21040023,
    Name: 'Originite: Type Iv',
    Type: WeaponType.GAUNTLETS,
    Rarity: Rarity.THREE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 300.0,
    },
    SecondaryStatistic: {
      Type: StatType.CRIT_DMG,
      Value: 40.5,
    },
  },
  {
    GameId: 21040024,
    Name: 'Marcato',
    Type: WeaponType.GAUNTLETS,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 337.5,
    },
    SecondaryStatistic: {
      Type: StatType.ENERGY_REGENERATION,
      Value: 51.84,
    },
  },
  {
    GameId: 21040026,
    Name: 'Tragicomedy',
    Type: WeaponType.GAUNTLETS,
    Rarity: Rarity.FIVE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 587.5,
    },
    SecondaryStatistic: {
      Type: StatType.CRIT_RATE,
      Value: 24.3,
    },
  },
  {
    GameId: 21040034,
    Name: 'Gauntlets#21d',
    Type: WeaponType.GAUNTLETS,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 387.5,
    },
    SecondaryStatistic: {
      Type: StatType.ENERGY_REGENERATION,
      Value: 38.88,
    },
  },
  {
    GameId: 21040036,
    Name: 'Blazing Justice',
    Type: WeaponType.GAUNTLETS,
    Rarity: Rarity.FIVE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 587.5,
    },
    SecondaryStatistic: {
      Type: StatType.CRIT_DMG,
      Value: 48.6,
    },
  },
  {
    GameId: 21040043,
    Name: 'Gauntlets Of Voyager',
    Type: WeaponType.GAUNTLETS,
    Rarity: Rarity.THREE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 325.0,
    },
    SecondaryStatistic: {
      Type: StatType.DEF_PERCENTAGE,
      Value: 30.78,
    },
  },
  {
    GameId: 21040044,
    Name: 'Amity Accord',
    Type: WeaponType.GAUNTLETS,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 337.5,
    },
    SecondaryStatistic: {
      Type: StatType.DEF_PERCENTAGE,
      Value: 61.56,
    },
  },
  {
    GameId: 21040053,
    Name: 'Guardian Gauntlets',
    Type: WeaponType.GAUNTLETS,
    Rarity: Rarity.THREE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 300.0,
    },
    SecondaryStatistic: {
      Type: StatType.DEF_PERCENTAGE,
      Value: 38.48,
    },
  },
  {
    GameId: 21040064,
    Name: 'Hollow Mirage',
    Type: WeaponType.GAUNTLETS,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 412.5,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 30.38,
    },
  },
  {
    GameId: 21040074,
    Name: 'Stonard',
    Type: WeaponType.GAUNTLETS,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 412.5,
    },
    SecondaryStatistic: {
      Type: StatType.CRIT_RATE,
      Value: 20.25,
    },
  },
  {
    GameId: 21040084,
    Name: 'Celestial Spiral',
    Type: WeaponType.GAUNTLETS,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 462.5,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 18.23,
    },
  },
  {
    GameId: 21040094,
    Name: 'Legend Of Drunken Hero',
    Type: WeaponType.GAUNTLETS,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 462.5,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 18.23,
    },
  },
  {
    GameId: 21050011,
    Name: 'Training Rectifier',
    Type: WeaponType.RECTIFIER,
    Rarity: Rarity.ONE_STAR,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 250.0,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 11.47,
    },
  },
  {
    GameId: 21050012,
    Name: 'Tyro Rectifier',
    Type: WeaponType.RECTIFIER,
    Rarity: Rarity.TWO_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 275.0,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 14.85,
    },
  },
  {
    GameId: 21050013,
    Name: 'Rectifier Of Night',
    Type: WeaponType.RECTIFIER,
    Rarity: Rarity.THREE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 325.0,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 24.3,
    },
  },
  {
    GameId: 21050015,
    Name: 'Cosmic Ripples',
    Type: WeaponType.RECTIFIER,
    Rarity: Rarity.FIVE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 500.0,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 54.0,
    },
  },
  {
    GameId: 21050016,
    Name: 'Stringmaster',
    Type: WeaponType.RECTIFIER,
    Rarity: Rarity.FIVE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 500.0,
    },
    SecondaryStatistic: {
      Type: StatType.CRIT_RATE,
      Value: 36.0,
    },
  },
  {
    GameId: 21050017,
    Name: 'Call Of The Abyss',
    Type: WeaponType.RECTIFIER,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 337.5,
    },
    SecondaryStatistic: {
      Type: StatType.ENERGY_REGENERATION,
      Value: 51.84,
    },
  },
  {
    GameId: 21050023,
    Name: 'Originite: Type V',
    Type: WeaponType.RECTIFIER,
    Rarity: Rarity.THREE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 300.0,
    },
    SecondaryStatistic: {
      Type: StatType.HP_PERCENTAGE,
      Value: 30.38,
    },
  },
  {
    GameId: 21050024,
    Name: 'Variation',
    Type: WeaponType.RECTIFIER,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 337.5,
    },
    SecondaryStatistic: {
      Type: StatType.ENERGY_REGENERATION,
      Value: 51.84,
    },
  },
  {
    GameId: 21050026,
    Name: 'Rime Draped Sprouts',
    Type: WeaponType.RECTIFIER,
    Rarity: Rarity.FIVE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 500.0,
    },
    SecondaryStatistic: {
      Type: StatType.CRIT_DMG,
      Value: 72.0,
    },
  },
  {
    GameId: 21050027,
    Name: 'Ocean\'s Gift',
    Type: WeaponType.RECTIFIER,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 462.5,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 18.23,
    },
  },
  {
    GameId: 21050034,
    Name: 'Rectifier#25',
    Type: WeaponType.RECTIFIER,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 337.5,
    },
    SecondaryStatistic: {
      Type: StatType.ENERGY_REGENERATION,
      Value: 51.84,
    },
  },
  {
    GameId: 21050036,
    Name: 'Stellar Symphony',
    Type: WeaponType.RECTIFIER,
    Rarity: Rarity.FIVE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 412.5,
    },
    SecondaryStatistic: {
      Type: StatType.ENERGY_REGENERATION,
      Value: 77.04,
    },
    ExtraStatistics: [
      {
        Type: StatType.HP_PERCENTAGE,
        Value: 12.0,
      },
    ],
  },
  {
    GameId: 21050043,
    Name: 'Rectifier Of Voyager',
    Type: WeaponType.RECTIFIER,
    Rarity: Rarity.THREE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 300.0,
    },
    SecondaryStatistic: {
      Type: StatType.ENERGY_REGENERATION,
      Value: 32.4,
    },
  },
  {
    GameId: 21050044,
    Name: 'Jinzhou Keeper',
    Type: WeaponType.RECTIFIER,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 387.5,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 36.45,
    },
  },
  {
    GameId: 21050046,
    Name: 'Luminous Hymn',
    Type: WeaponType.RECTIFIER,
    Rarity: Rarity.FIVE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 500.0,
    },
    SecondaryStatistic: {
      Type: StatType.CRIT_RATE,
      Value: 36.0,
    },
  },
  {
    GameId: 21050053,
    Name: 'Guardian Rectifier',
    Type: WeaponType.RECTIFIER,
    Rarity: Rarity.THREE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 325.0,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 24.3,
    },
  },
  {
    GameId: 21050056,
    Name: 'Whispers Of Sirens',
    Type: WeaponType.RECTIFIER,
    Rarity: Rarity.FIVE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 500.0,
    },
    SecondaryStatistic: {
      Type: StatType.CRIT_DMG,
      Value: 72.0,
    },
  },
  {
    GameId: 21050064,
    Name: 'Comet Flare',
    Type: WeaponType.RECTIFIER,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 412.5,
    },
    SecondaryStatistic: {
      Type: StatType.HP_PERCENTAGE,
      Value: 30.38,
    },
  },
  {
    GameId: 21050066,
    Name: 'Lethean Elegy',
    ReleaseState: ReleaseState.NEW,
    Type: WeaponType.RECTIFIER,
    Rarity: Rarity.FIVE_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 587.5,
    },
    SecondaryStatistic: {
      Type: StatType.CRIT_RATE,
      Value: 24.3,
    },
  },
  {
    GameId: 21050074,
    Name: 'Augment',
    Type: WeaponType.RECTIFIER,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 412.5,
    },
    SecondaryStatistic: {
      Type: StatType.CRIT_RATE,
      Value: 20.25,
    },
  },
  {
    GameId: 21050084,
    Name: 'Fusion Accretion',
    Type: WeaponType.RECTIFIER,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 462.5,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 18.23,
    },
  },
  {
    GameId: 21050094,
    Name: 'Waltz In Masquerade',
    Type: WeaponType.RECTIFIER,
    Rarity: Rarity.FOUR_STARS,
    Level: 0,
    MainStatistic: {
      Type: StatType.ATTACK,
      Value: 462.5,
    },
    SecondaryStatistic: {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 18.23,
    },
  },
]

export const BaseWeapons: BaseWeapon[] = Weapons
