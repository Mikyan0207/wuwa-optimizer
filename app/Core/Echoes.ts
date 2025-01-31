import type IEcho from './Interfaces/IEcho'
import { EchoCost } from './Enums/EchoCost'
import { Rarity } from './Enums/Rarity'
import { Celestial_Light, Empyrean_Anthem, Eternal_Radiance, Freezing_Frost, Frosty_Resolve, Lingering_Tunes, Midnight_Veil, Molten_Rift, Moonlit_Clouds, Rejuvenating_Glow, Sierra_Gale, SunSinking_Eclipse, Tidebreaking_Courage, Void_Thunder } from './Sonatas'

export const Empty_Echo: IEcho = {
  Id: -1,
  Name: '',
  Icon: '',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.FOUR_COST,
  Level: 0,
  Sonata: [],
  Statistics: [],
}

// #region === 4 COST ===
export const Bell_Borne_Geochelone: IEcho = {
  Id: 340000020,
  Name: 'Bell-Borne Geochelone',
  Icon: 'Bell_Borne_Geochelone_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.FOUR_COST,
  Level: 0,
  Sonata: [
    Rejuvenating_Glow,
    Moonlit_Clouds,
  ],
  Statistics: [],
}

export const Mourning_Aix_Echo: IEcho = {
  Id: 330000060,
  Name: 'Mourning Aix',
  Icon: 'Mourning_Aix_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.FOUR_COST,
  Level: 0,
  Sonata: [
    Celestial_Light,
  ],
  Statistics: [],
}

export const Dreamless_Echo: IEcho = {
  Id: 340000070,
  Name: 'Dreamless',
  Icon: 'Dreamless_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.FOUR_COST,
  Level: 0,
  Sonata: [
    SunSinking_Eclipse,
  ],
  Statistics: [],
}

export const Jue_Echo: IEcho = {
  Id: 340000090,
  Name: 'Jué',
  Icon: 'Jue_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.FOUR_COST,
  Level: 0,
  Sonata: [
    Celestial_Light,
  ],
  Statistics: [],
}

export const Hecate_Echo: IEcho = {
  Id: 340000100,
  Name: 'Hecate',
  Icon: 'Hecate_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.FOUR_COST,
  Level: 0,
  Sonata: [
    Empyrean_Anthem,
  ],
  Statistics: [],
}

export const Fallacy_of_No_Return_Echo: IEcho = {
  Id: 330000070,
  Name: 'Fallacy of No Return',
  Icon: 'Fallacy_of_No_Return_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.FOUR_COST,
  Level: 0,
  Sonata: [
    Rejuvenating_Glow,
  ],
  Statistics: [],
}

export const Sentry_Construct_Echo: IEcho = {
  Id: 330000120,
  Name: 'Sentry Construct',
  Icon: 'Sentry_Construct_Icon.webp',
  Level: 0,
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.FOUR_COST,
  Sonata: [
    Frosty_Resolve,
  ],
  Statistics: [],
}

export const Lorelei_Echo: IEcho = {
  Id: 330000110,
  Name: 'Lorelei',
  Icon: 'Lorelei_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.FOUR_COST,
  Level: 0,
  Sonata: [
    Midnight_Veil,
  ],
  Statistics: [],
}

export const Inferno_Rider_Echo: IEcho = {
  Id: 330000020,
  Name: 'Inferno Rider',
  Icon: 'Inferno_Rider_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.FOUR_COST,
  Level: 0,
  Sonata: [
    Molten_Rift,
  ],
  Statistics: [],
}

export const Thundering_Mephis_Echo: IEcho = {
  Id: 340000080,
  Name: 'Thundering Mephis',
  Icon: 'Thundering_Mephis_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.FOUR_COST,
  Level: 0,
  Sonata: [
    Void_Thunder,
  ],
  Statistics: [],
}

export const Tempest_Mephis_Echo: IEcho = {
  Id: 330000010,
  Name: 'Tempest Mephis',
  Icon: 'Tempest_Mephis_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.FOUR_COST,
  Level: 0,
  Sonata: [
    Void_Thunder,
  ],
  Statistics: [],
}

export const Mech_Abomination_Echo: IEcho = {
  Id: 340000060,
  Name: 'Mech Abomination',
  Icon: 'Mech_Abomination_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.FOUR_COST,
  Level: 0,
  Sonata: [
    Lingering_Tunes,
  ],
  Statistics: [],
}

export const Lampylumen_Myriad_Echo: IEcho = {
  Id: 0,
  Name: 'Lampylumen Myriad',
  Icon: 'Lampylumen_Myriad_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.FOUR_COST,
  Level: 0,
  Sonata: [
    Freezing_Frost,
  ],
  Statistics: [],
}

export const Dragon_of_Dirge_Echo: IEcho = {
  Id: 330000130,
  Name: 'Dragon of Dirge',
  Icon: 'Dragon_of_Dirge_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.FOUR_COST,
  Level: 0,
  Sonata: [
    Tidebreaking_Courage,
  ],
  Statistics: [],
}

export const Crownless_Echo: IEcho = {
  Id: 340000010,
  Name: 'Crownless',
  Icon: 'Crownless_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.FOUR_COST,
  Level: 0,
  Sonata: [
    SunSinking_Eclipse,
  ],
  Statistics: [],
}

export const Impermanence_Heron_Echo: IEcho = {
  Id: 330000030,
  Name: 'Impermanence Heron',
  Icon: 'Impermanence_Heron_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.FOUR_COST,
  Level: 0,
  Sonata: [
    Moonlit_Clouds,
    Midnight_Veil,
  ],
  Statistics: [],
}

export const Feilian_Beringal_Echo: IEcho = {
  Id: 330000050,
  Name: 'Feilian Beringal',
  Icon: 'Feilian_Beringal_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.FOUR_COST,
  Level: 0,
  Sonata: [
    Sierra_Gale,
  ],
  Statistics: [],
}
// #endregion

// #region === 3 COST ===
export const Autopuppet_Scout_Echo: IEcho = {
  Id: 320000180,
  Name: 'Autopuppet Scout',
  Icon: 'Autopuppet_Scout_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.THREE_COST,
  Level: 0,
  Sonata: [
    Celestial_Light,
    Freezing_Frost,
  ],
  Statistics: [],
}

export const Cyan_Feathered_Heron_Echo: IEcho = {
  Id: 320000030,
  Name: 'Cyan-Feathered Heron',
  Icon: 'Cyan_Feathered_Heron_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.THREE_COST,
  Level: 0,
  Sonata: [
    Sierra_Gale,
    Celestial_Light,
  ],
  Statistics: [],
}

export const Rocksteady_Guardian_Echo: IEcho = {
  Id: 320000060,
  Name: 'Rocksteady Guardian',
  Icon: 'Rocksteady_Guardian_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.THREE_COST,
  Level: 0,
  Sonata: [
    Rejuvenating_Glow,
    Celestial_Light,
  ],
  Statistics: [],
}

export const Lightcrusher_Echo: IEcho = {
  Id: 320000210,
  Name: 'Lightcrusher',
  Icon: 'Lightcrusher_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.THREE_COST,
  Level: 0,
  Sonata: [
    Celestial_Light,
  ],
  Statistics: [],
}

export const Violet_Feathered_Heron_Echo: IEcho = {
  Id: 320000020,
  Name: 'Violet-Feathered Heron',
  Icon: 'Violet_Feathered_Heron_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.THREE_COST,
  Level: 0,
  Sonata: [
    Molten_Rift,
    Void_Thunder,
  ],
  Statistics: [],
}

export const Viridblaze_Saurian_Echo: IEcho = {
  Id: 320000080,
  Name: 'Viridblaze Saurian',
  Icon: 'Viridblaze_Saurian_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.THREE_COST,
  Level: 0,
  Sonata: [
    Molten_Rift,
    Moonlit_Clouds,
  ],
  Statistics: [],
}

export const Spearback_Echo: IEcho = {
  Id: 320000120,
  Name: 'Spearback',
  Icon: 'Spearback_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.THREE_COST,
  Level: 0,
  Sonata: [
    Moonlit_Clouds,
    Lingering_Tunes,
  ],
  Statistics: [],
}

export const Havoc_Dreadmane_Echo: IEcho = {
  Id: 320000100,
  Name: 'Havoc Dreadmane',
  Icon: 'Havoc_Dreadmane_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.THREE_COST,
  Level: 0,
  Sonata: [
    SunSinking_Eclipse,
    Molten_Rift,
  ],
  Statistics: [],
}

export const Hoochief_Echo: IEcho = {
  Id: 320000110,
  Name: 'Hoochief',
  Icon: 'Hoochief_Cyclone_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.THREE_COST,
  Level: 0,
  Sonata: [
    Sierra_Gale,
    Rejuvenating_Glow,
  ],
  Statistics: [],
}

export const Glacio_Dreadmane_Echo: IEcho = {
  Id: 320000190,
  Name: 'Glacio Dreadmane',
  Icon: 'Glacio_Dreadmane_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.THREE_COST,
  Level: 0,
  Sonata: [
    Freezing_Frost,
    Moonlit_Clouds,
  ],
  Statistics: [],
}

export const Chop_Chop_Echo: IEcho = {
  Id: 320000280,
  Name: 'Chop Chop',
  Icon: 'Chop_Chop_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.THREE_COST,
  Level: 0,
  Sonata: [
    Empyrean_Anthem,
    Tidebreaking_Courage,
  ],
  Statistics: [],
}

export const Cuddle_Wuddle_Echo: IEcho = {
  Id: 320000300,
  Name: 'Cuddle Wuddle',
  Icon: 'Cuddle_Wuddle_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.THREE_COST,
  Level: 0,
  Sonata: [
    Frosty_Resolve,
    Midnight_Veil,
  ],
  Statistics: [],
}

export const Carapace_Echo: IEcho = {
  Id: 320000130,
  Name: 'Carapace',
  Icon: 'Carapace_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.THREE_COST,
  Level: 0,
  Sonata: [
    Sierra_Gale,
    Moonlit_Clouds,
  ],
  Statistics: [],
}

export const Roseshroom_Echo: IEcho = {
  Id: 320000090,
  Name: 'Roseshroom',
  Icon: 'Roseshroom_Icon.webp',
  Rarity: Rarity.TWO_STARS,
  Cost: EchoCost.THREE_COST,
  Level: 0,
  Sonata: [
    Freezing_Frost,
    SunSinking_Eclipse,
  ],
  Statistics: [],
}

export const Stonewall_Bracer_Echo: IEcho = {
  Id: 320000010,
  Name: 'Stonewall Bracer',
  Icon: 'Stonewall_Bracer_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.THREE_COST,
  Level: 0,
  Sonata: [
    Rejuvenating_Glow,
    Moonlit_Clouds,
  ],
  Statistics: [],
}

export const Tambourinist_Echo: IEcho = {
  Id: 320000050,
  Name: 'Tambourinist',
  Icon: 'Tambourinist_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.THREE_COST,
  Level: 0,
  Sonata: [
    Freezing_Frost,
    SunSinking_Eclipse,
  ],
  Statistics: [],
}

export const Flautist_Echo: IEcho = {
  Id: 320000040,
  Name: 'Flautist',
  Icon: 'Flautist_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.THREE_COST,
  Level: 0,
  Sonata: [
    Void_Thunder,
    Lingering_Tunes,
  ],
  Statistics: [],
}
export const Chasm_Guardian_Echo: IEcho = {
  Id: 320000070,
  Name: 'Chasm Guardian',
  Icon: 'Chasm_Guardian_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.THREE_COST,
  Level: 0,
  Sonata: [
    Rejuvenating_Glow,
    Lingering_Tunes,
  ],
  Statistics: [],
}

export const Questless_Knight_Echo: IEcho = {
  Id: 320000220,
  Name: 'Questless Knight',
  Icon: 'Questless_Knight_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.THREE_COST,
  Level: 0,
  Sonata: [
    Frosty_Resolve,
    Midnight_Veil,
  ],
  Statistics: [],
}

export const Diurnus_Knight_Echo: IEcho = {
  Id: 320000230,
  Name: 'Diurnus Knight',
  Icon: 'Diurnus_Knight_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.THREE_COST,
  Level: 0,
  Sonata: [
    Eternal_Radiance,
    Tidebreaking_Courage,
  ],
  Statistics: [],
}

export const Nocturnus_Knight_Echo: IEcho = {
  Id: 320000240,
  Name: 'Nocturnus Knight',
  Icon: 'Nocturnus_Knight_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.THREE_COST,
  Level: 0,
  Sonata: [
    Midnight_Veil,
    Empyrean_Anthem,
  ],
  Statistics: [],
}

export const Abyssal_Patricius_Echo: IEcho = {
  Id: 320000250,
  Name: 'Abyssal Patricius',
  Icon: 'Abyssal_Patricius_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.THREE_COST,
  Level: 0,
  Sonata: [
    Frosty_Resolve,
    Empyrean_Anthem,
  ],
  Statistics: [],
}

export const Abyssal_Gladius_Echo: IEcho = {
  Id: 320000260,
  Name: 'Abyssal Gladius',
  Icon: 'Abyssal_Gladius_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.THREE_COST,
  Level: 0,
  Sonata: [
    Midnight_Veil,
    Tidebreaking_Courage,
  ],
  Statistics: [],
}

export const Abyssal_Mercator_Echo: IEcho = {
  Id: 320000270,
  Name: 'Abyssal Mercator',
  Icon: 'Abyssal_Mercator_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.THREE_COST,
  Level: 0,
  Sonata: [
    Frosty_Resolve,
    Eternal_Radiance,
  ],
  Statistics: [],
}

export const Vitreum_Dancer_Echo: IEcho = {
  Id: 320000291,
  Name: 'Vitreum Dancer',
  Icon: 'Vitreum_Dancer_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.THREE_COST,
  Level: 0,
  Sonata: [
    Eternal_Radiance,
    Empyrean_Anthem,
  ],
  Statistics: [],
}

export const Lumiscale_Construct_Echo: IEcho = {
  Id: 320000200,
  Name: 'Lumiscale Construct',
  Icon: 'Lumiscale_Construct_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.THREE_COST,
  Level: 0,
  Sonata: [
    Void_Thunder,
    Freezing_Frost,
  ],
  Statistics: [],
}
// #endregion

// #region === 1 COST ===
export const Clang_Bang_Echo: IEcho = {
  Id: 310000340,
  Name: 'Clang Bang',
  Icon: 'Clang_Bang_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.ONE_COST,
  Level: 0,
  Sonata: [
    Celestial_Light,
    Freezing_Frost,
  ],
  Statistics: [],
}

export const Cruisewing_Echo: IEcho = {
  Id: 310000180,
  Name: 'Cruisewing',
  Icon: 'Cruisewing_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.ONE_COST,
  Level: 0,
  Sonata: [
    Celestial_Light,
    Rejuvenating_Glow,
    Moonlit_Clouds,
  ],
  Statistics: [],
}

export const Glacio_Predator_Echo: IEcho = {
  Id: 310000040,
  Name: 'Glacio Predator',
  Icon: 'Glacio_Predator_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.ONE_COST,
  Level: 0,
  Sonata: [
    Celestial_Light,
    Freezing_Frost,
  ],
  Statistics: [],
}

export const Gulpuff_Echo: IEcho = {
  Id: 310000120,
  Name: 'Gulpuff',
  Icon: 'Gulpuff_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.ONE_COST,
  Level: 0,
  Sonata: [
    Celestial_Light,
    Freezing_Frost,
  ],
  Statistics: [],
}

export const Havoc_Prism_Echo: IEcho = {
  Id: 310000170,
  Name: 'Havoc Prism',
  Icon: 'Havoc_Prism_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.ONE_COST,
  Level: 0,
  Sonata: [
    Void_Thunder,
    Celestial_Light,
    SunSinking_Eclipse,
  ],
  Statistics: [],
}

export const Havoc_Warrior_Echo: IEcho = {
  Id: 310000070,
  Name: 'Havoc Warrior',
  Icon: 'Havoc_Warrior_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.ONE_COST,
  Level: 0,
  Sonata: [
    Celestial_Light,
    SunSinking_Eclipse,
  ],
  Statistics: [],
}

export const Hoartoise_Echo: IEcho = {
  Id: 310000270,
  Name: 'Hoartoise',
  Icon: 'Hoartoise_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.ONE_COST,
  Level: 0,
  Sonata: [
    Celestial_Light,
    Freezing_Frost,
  ],
  Statistics: [],
}

export const Spectro_Prism_Echo: IEcho = {
  Id: 310000160,
  Name: 'Spectro Prism',
  Icon: 'Spectro_Prism_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.ONE_COST,
  Level: 0,
  Sonata: [
    Molten_Rift,
    Void_Thunder,
    Celestial_Light,
  ],
  Statistics: [],
}

export const ZigZag_Echo: IEcho = {
  Id: 310000090,
  Name: 'Zig Zag',
  Icon: 'Zig_Zag_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.ONE_COST,
  Level: 0,
  Sonata: [
    Celestial_Light,
    Moonlit_Clouds,
    Lingering_Tunes,
  ],
  Statistics: [],
}

// #endregion

export const Echoes: IEcho[] = [
  Mourning_Aix_Echo,
  Bell_Borne_Geochelone,
  Dreamless_Echo,
  Jue_Echo,
  Hecate_Echo,
  Sentry_Construct_Echo,
  Fallacy_of_No_Return_Echo,
  Lorelei_Echo,
  Inferno_Rider_Echo,
  Thundering_Mephis_Echo,
  Tempest_Mephis_Echo,
  Mech_Abomination_Echo,
  Lampylumen_Myriad_Echo,
  Dragon_of_Dirge_Echo,
  Crownless_Echo,
  Impermanence_Heron_Echo,
  Feilian_Beringal_Echo,

  Autopuppet_Scout_Echo,
  Lightcrusher_Echo,
  Cyan_Feathered_Heron_Echo,
  Rocksteady_Guardian_Echo,
  Violet_Feathered_Heron_Echo,
  Viridblaze_Saurian_Echo,
  Spearback_Echo,
  Havoc_Dreadmane_Echo,
  Hoochief_Echo,
  Glacio_Dreadmane_Echo,
  Chop_Chop_Echo,
  Cuddle_Wuddle_Echo,
  Carapace_Echo,
  Roseshroom_Echo,
  Stonewall_Bracer_Echo,
  Tambourinist_Echo,
  Flautist_Echo,
  Chasm_Guardian_Echo,
  Questless_Knight_Echo,
  Diurnus_Knight_Echo,
  Nocturnus_Knight_Echo,
  Abyssal_Patricius_Echo,
  Abyssal_Gladius_Echo,
  Abyssal_Mercator_Echo,
  Vitreum_Dancer_Echo,
  Lumiscale_Construct_Echo,

  Clang_Bang_Echo,
  Cruisewing_Echo,
  Glacio_Predator_Echo,
  Gulpuff_Echo,
  Havoc_Prism_Echo,
  Havoc_Warrior_Echo,
  Hoartoise_Echo,
  Spectro_Prism_Echo,
  ZigZag_Echo,
]

export const TemplateEchoes: IEcho[] = Echoes
