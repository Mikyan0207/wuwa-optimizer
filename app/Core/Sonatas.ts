import type Sonata from './Interfaces/Sonata'
import { StatType } from './Enums/StatType'

export const Frosty_Resolve: Sonata = {
  Name: 'Frosty Resolve',
  Icon: 'Icon_Frosty_Resolve.webp',
  Effect1: 'Resonance Skill DMG +12%.',
  Effect2: 'Casting Resonance Skill grants 22.5% Glacio DMG Bonus for 15s and casting Resonance Liberation increase Resonance Skill DMG by 18%, lasting for 5s. This effect stacks up to 2 times.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
  ExtraStats: [
    {
      Type: StatType.RESONANCE_SKILL_DMG_AMPLIFICATION,
      Value: 12.0,
    },
  ],
}

export const Celestial_Light: Sonata = {
  Name: 'Celestial Light',
  Icon: 'Icon_Celestial_Light.webp',
  Effect1: 'Spectro DMG +10%.',
  Effect2: 'Spectro DMG +30% for 15s after releasing Intro Skill.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
  ExtraStats: [
    {
      Type: StatType.SPECTRO_DMG_BONUS,
      Value: 10.0,
    },
  ],
}

export const Havoc_Eclipse: Sonata = {
  Name: 'Havoc Eclipse',
  Icon: 'Icon_Havoc_Eclipse.webp',
  Effect1: 'Havoc DMG +10%.',
  Effect2: 'Havoc DMG +7.5% after releasing Basic Attack or Heavy Attack. This effect stacks up to 4 times, each stack lasts 15s.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
  ExtraStats: [
    {
      Type: StatType.HAVOC_DMG_BONUS,
      Value: 10.0,
    },
  ],
}

export const Freezing_Frost: Sonata = {
  Name: 'Freezing Frost',
  Icon: 'Icon_Freezing_Frost.webp',
  Effect1: 'Glacio DMG +10%.',
  Effect2: 'Glacio DMG +10% after releasing Basic Attack or Heavy Attack. This effect stacks up to 3 times, each stack lasts 15s.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
  ExtraStats: [
    {
      Type: StatType.GLACIO_DMG_BONUS,
      Value: 10.0,
    },
  ],
}

export const Moonlit_Clouds: Sonata = {
  Name: 'Moonlit Clouds',
  Icon: 'Icon_Moonlit_Clouds.webp',
  Effect1: 'Energy Regen +10%.',
  Effect2: 'After using Outro Skill, increases the ATK of the next Resonator by 22.5% for 15s.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
  ExtraStats: [
    {
      Type: StatType.ENERGY_REGENERATION,
      Value: 10.0,
    },
  ],
}

export const Rejuvenating_Glow: Sonata = {
  Name: 'Rejuvenating Glow',
  Icon: 'Icon_Rejuvenating_Glow.webp',
  Effect1: 'Healing Bonus +10%.',
  Effect2: 'Increases the ATK of all party members by 15% for 30s upon healing allies.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
  ExtraStats: [
    {
      Type: StatType.HEALING_BONUS,
      Value: 10.0,
    },
  ],
}

export const Void_Thunder: Sonata = {
  Name: 'Void Thunder',
  Icon: 'Icon_Void_Thunder.webp',
  Effect1: 'Electro DMG +10%.',
  Effect2: 'Electro DMG +15% after releasing Heavy Attack or Resonance Skill. This effect stacks up to 2 times, each stack lasts 15s.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
  ExtraStats: [
    {
      Type: StatType.ELECTRO_DMG_BONUS,
      Value: 10.0,
    },
  ],
}

export const Molten_Rift: Sonata = {
  Name: 'Molten Rift',
  Icon: 'Icon_Molten_Rift.webp',
  Effect1: 'Fusion DMG +10%.',
  Effect2: 'Fusion DMG +30% for 15s after releasing Resonance Skill.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
  ExtraStats: [
    {
      Type: StatType.FUSION_DMG_BONUS,
      Value: 10.0,
    },
  ],
}

export const Lingering_Tunes: Sonata = {
  Name: 'Lingering Tunes',
  Icon: 'Icon_Lingering_Tunes.webp',
  Effect1: 'ATK +10%.',
  Effect2: 'While on the field, ATK increases by 5% every 1.5s. This effect stacks up to 4 stacks. Outro Skill DMG +60%.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
  ExtraStats: [
    {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 10.0,
    },
  ],
}

export const Sierra_Gale: Sonata = {
  Name: 'Sierra Gale',
  Icon: 'Icon_Sierra_Gale.webp',
  Effect1: 'Aero DMG +10%.',
  Effect2: 'Aero DMG +30% for 15s after releasing Intro Skill.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
  ExtraStats: [
    {
      Type: StatType.AERO_DMG_BONUS,
      Value: 10.0,
    },
  ],
}

export const Empyrean_Anthem: Sonata = {
  Name: 'Empyrean Anthem',
  Icon: 'Icon_Empyrean_Anthem.webp',
  Effect1: 'Energy Regen +10%.',
  Effect2: 'Increase the Resonator\'s Coordinated Attack DMG by 80%. Upon a critical hit of Coordinated Attack, increase the active Resonator\'s ATK by 20% for 4s.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
  ExtraStats: [
    {
      Type: StatType.ENERGY_REGENERATION,
      Value: 10.0,
    },
  ],
}

export const Midnight_Veil: Sonata = {
  Name: 'Midnight Veil',
  Icon: 'Icon_Midnight_Veil.webp',
  Effect1: 'Havoc DMG +10%.',
  Effect2: 'Triggering Outro Skill deals additional 480% Havoc DMG to surrounding enemies, considered Outro Skill DMG and grants the incoming Resonator 15% Havoc DMG Bonus fo 15s.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
  ExtraStats: [
    {
      Type: StatType.HAVOC_DMG_BONUS,
      Value: 10.0,
    },
  ],
}

export const Tidebreaking_Courage: Sonata = {
  Name: 'Tidebreaking Courage',
  Icon: 'Icon_Tidebreaking_Courage.webp',
  Effect1: 'Energy Regen +10%.',
  Effect2: 'Increase the Resonator\'s ATK by 15%. Reaching 250% Energy Regen increases all Attribute DMG by 30% for the Resonator.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
  ExtraStats: [
    {
      Type: StatType.ENERGY_REGENERATION,
      Value: 10.0,
    },
    {
      Type: StatType.ATTACK_PERCENTAGE,
      Value: 15.0,
    },
  ],
}

export const Eternal_Radiance: Sonata = {
  Name: 'Eternal Radiance',
  Icon: 'Icon_Eternal_Radiance.webp',
  Effect1: 'Spectro DMG +10%.',
  Effect2: 'Inflicting enemies with Spectro Frazzle increases Crit. Rate by 20% for 15s. Attacking enemies with 10 stacks of Spectro Frazzle grants 15% Spectro DMG Bonus for 15s.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
  ExtraStats: [
    {
      Type: StatType.SPECTRO_DMG_BONUS,
      Value: 10.0,
    },
  ],
}

export const Gusts_of_Welkin: Sonata = {
  Name: 'Gusts of Welkin',
  Icon: 'Icon_Gusts_of_Welkin.webp',
  Effect1: 'Aero DMG +10%.',
  Effect2: 'Inflicting Aero Erosion on enemies increases Aero DMG for all Resonators in the team by 15%, and for the Resonator triggering this effect by an additional 15%, lasting for 20s.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
  ExtraStats: [
    {
      Type: StatType.AERO_DMG_BONUS,
      Value: 10.0,
    },
  ],
}

export const Windward_Pilgrimage: Sonata = {
  Name: 'Windward Pilgrimage',
  Icon: 'Icon_Windward_Pilgrimage.webp',
  Effect1: 'Aero DMG +10%.',
  Effect2: 'Hitting a target with Aero Erosion increases Crit. Rate by 10% and grants 30% Aero DMG Bonus, lasting for 10s.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
  ExtraStats: [
    {
      Type: StatType.AERO_DMG_BONUS,
      Value: 10.0,
    },
  ],
}

export const Flaming_Clawprint: Sonata = {
  Name: 'Flaming Clawprint',
  Icon: 'Icon_Flaming_Clawprint.webp',
  Effect1: 'Fusion DMG +10%.',
  Effect2: 'Casting Resonance Liberation grants all Resonators in the team 15% Fusion DMG Bonus and the caster 20% Resonance Liberation DMG Bonus, lasting for 35s.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
  ExtraStats: [
    {
      Type: StatType.FUSION_DMG_BONUS,
      Value: 10.0,
    },
  ],
}

export const Dream_of_the_Lost: Sonata = {
  Name: 'Dream of the Lost',
  Icon: 'Icon_Dream_of_the_Lost.webp',
  Effect1: 'Holding 0 Resonance Energy increases Crit. Rate by 20% and grants 35% Echo Skill DMG Bonus',
  Effect2: '',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
  ExtraStats: [],
}

export const Sonatas: Sonata[] = [
  Frosty_Resolve,
  Celestial_Light,
  Freezing_Frost,
  Moonlit_Clouds,
  Rejuvenating_Glow,
  Molten_Rift,
  Lingering_Tunes,
  Sierra_Gale,
  Empyrean_Anthem,
  Midnight_Veil,
  Tidebreaking_Courage,
  Eternal_Radiance,
  Gusts_of_Welkin,
  Void_Thunder,
  Havoc_Eclipse,
  Flaming_Clawprint,
  Dream_of_the_Lost,
  Windward_Pilgrimage,
]

export const Sonatas_1_0: Sonata[] = [
  Celestial_Light,
  Freezing_Frost,
  Moonlit_Clouds,
  Rejuvenating_Glow,
  Molten_Rift,
  Lingering_Tunes,
  Sierra_Gale,
]

export const Sonatas_2_0: Sonata[] = [
  Frosty_Resolve,
  Empyrean_Anthem,
  Midnight_Veil,
  Tidebreaking_Courage,
  Eternal_Radiance,
  Gusts_of_Welkin,
  Windward_Pilgrimage,
  Flaming_Clawprint,
  Dream_of_the_Lost,
]
