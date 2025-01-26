import type { ISonata } from './Interfaces/ISonata'

export const Frosty_Resolve: ISonata = {
  Name: 'Frosty Resolve',
  Icon: 'Icon_Frosty_Resolve.webp',
  Effect1: 'Resonance Skill DMG +12%.',
  Effect2: 'Casting Resonance Skill grants 22.5% Glacio DMG Bonus for 15s and casting Resonance Liberation increase Resonance Skill DMG by 18%, lasting for 5s. This effect stacks up to 2 times.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
}

export const Celestial_Light: ISonata = {
  Name: 'Celestial Light',
  Icon: 'Icon_Celestial_Light.webp',
  Effect1: 'Spectro DMG +10%.',
  Effect2: 'Spectro DMG +30% for 15s after releasing Intro Skill.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
}

export const Freezing_Frost: ISonata = {
  Name: 'Freezing Frost',
  Icon: 'Icon_Freezing_Frost.webp',
  Effect1: 'Glacio DMG +10%.',
  Effect2: 'Glacio DMG +10% after releasing Basic Attack or Heavy Attack. This effect stacks up to 3 times, each stack lasts 15s.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
}

export const Moonlit_Clouds: ISonata = {
  Name: 'Moonlit Clouds',
  Icon: 'Icon_Moonlit_Clouds.webp',
  Effect1: 'Energy Regen +10%.',
  Effect2: 'After using Outro Skill, increases the ATK of the next Resonator by 22.5% for 15s.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
}

export const Rejuvenating_Glow: ISonata = {
  Name: 'Rejuvenating Glow',
  Icon: 'Icon_Rejuvenating_Glow.webp',
  Effect1: 'Healing Bonus +10%.',
  Effect2: 'Increases the ATK of all party members by 15% for 30s upon healing allies.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
}

export const Void_Thunder: ISonata = {
  Name: 'Void Thunder',
  Icon: 'Icon_Void_Thunder.webp',
  Effect1: 'Electro DMG +10%.',
  Effect2: 'Electro DMG +15% after releasing Heavy Attack or Resonance Skill. This effect stacks up to 2 times, each stack lasts 15s.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
}

export const SunSinking_Eclipse: ISonata = {
  Name: 'Sun-Sinking Eclipse',
  Icon: 'Icon_SunSinking_Eclipse.webp',
  Effect1: 'Havoc DMG +10%.',
  Effect2: 'Havoc DMG +7.5% after releasing Basic Attack or Heavy Attack. This effect stacks up to 4 times, each stack lasts 15s.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
}

export const Molten_Rift: ISonata = {
  Name: 'Molten Rift',
  Icon: 'Icon_Molten_Rift.webp',
  Effect1: 'Fusion DMG +10%.',
  Effect2: 'Fusion DMG +30% for 15s after releasing Resonance Skill.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
}

export const Lingering_Tunes: ISonata = {
  Name: 'Lingering Tunes',
  Icon: 'Icon_Lingering_Tunes.webp',
  Effect1: 'ATK +10%.',
  Effect2: 'While on the field, ATK increases by 5% every 1.5s. This effect stacks up to 4 stacks. Outro Skill DMG +60%.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
}

export const Sierra_Gale: ISonata = {
  Name: 'Sierra Gale',
  Icon: 'Icon_Sierra_Gale.webp',
  Effect1: 'Aero DMG +10%.',
  Effect2: 'Aero DMG +30% for 15s after releasing Intro Skill.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
}

export const Empyrean_Anthem: ISonata = {
  Name: 'Empyrean Anthem',
  Icon: 'Icon_Empyrean_Anthem.webp',
  Effect1: 'Energy Regen +10%.',
  Effect2: 'Increase the Resonator\'s Coordinated Attack DMG by 80%. Upon a critical hit of Coordinated Attack, increase the active Resonator\'s ATK by 20% for 4s.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
}

export const Midnight_Veil: ISonata = {
  Name: 'Midnight Veil',
  Icon: 'Icon_Midnight_Veil.webp',
  Effect1: 'Havoc DMG +10%.',
  Effect2: 'Triggering Outro Skill deals additional 480% Havoc DMG to surrounding enemies, considered Outro Skill DMG and grants the incoming Resonator 15% Havoc DMG Bonus fo 15s.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
}

export const Tidebreaking_Courage: ISonata = {
  Name: 'Tidebreaking Courage',
  Icon: 'Icon_Tidebreaking_Courage.webp',
  Effect1: 'Energy Regen +10%.',
  Effect2: 'Increase the Resonator\'s ATK by 15%. Reaching 250% Energy Regen increases all Attribute DMG by 30% for the Resonator.',
  IsSelected: false,
  Effect1Active: false,
  Effect2Active: false,
}

export const Sonatas: ISonata[] = [
  Frosty_Resolve,
  Celestial_Light,
  Freezing_Frost,
  Moonlit_Clouds,
  Rejuvenating_Glow,
  SunSinking_Eclipse,
  Molten_Rift,
  Lingering_Tunes,
  Sierra_Gale,
  Empyrean_Anthem,
  Midnight_Veil,
  Tidebreaking_Courage,
]
