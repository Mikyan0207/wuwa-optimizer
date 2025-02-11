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
  Id: 390080005,
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
  Id: 6000045,
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
  Id: 6000053,
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
  Id: 6000059,
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
  Id: 6000085,
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
  Id: 6000060,
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
  Id: 6000083,
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
  Id: 6000082,
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
  Id: 390080007,
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
  Id: 390080003,
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
  Id: 6000039,
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
  Id: 6000048,
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
  Id: 6000044,
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
  Id: 6000084,
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
  Id: 6000042,
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
  Id: 6000052,
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
  Id: 6000043,
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

export const Nightmare_Mourning_Aix_Echo: IEcho = {
  Id: 6000092,
  Name: 'Nightmare: Mourning Aix',
  Icon: 'Nightmare_Mourning_Aix_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.FOUR_COST,
  Level: 0,
  Sonata: [
    Eternal_Radiance,
  ],
  Statistics: [],
}
// #endregion

// #region === 3 COST ===
export const Autopuppet_Scout_Echo: IEcho = {
  Id: 6000049,
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
  Id: 390077005,
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
  Id: 390077024,
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
  Id: 6000058,
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
  Id: 390077004,
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
  Id: 390077028,
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
  Id: 390077038,
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
  Id: 390077033,
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
  Id: 6000040,
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
  Id: 6000056,
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
  Id: 6000079,
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
  Id: 6000081,
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
  Id: 6000046,
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
  Id: 390077029,
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
  Id: 390077021,
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
  Id: 390077023,
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
  Id: 390077022,
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
  Id: 390077025,
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
  Id: 6000073,
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
  Id: 6000074,
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
  Id: 6000075,
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
  Id: 6000076,
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
  Id: 6000077,
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
  Id: 6000078,
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
  Id: 6000080,
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
  Id: 6000057,
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
  Id: 6000051,
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
  Id: 390070074,
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
  Id: 390070070,
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
  Id: 390070076,
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
  Id: 390077017,
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
  Id: 390070065,
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
  Id: 390070105,
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
  Id: 390077016,
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
  Id: 390070067,
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

export const Whiff_Whaff_Echo: IEcho = {
  Id: 390070068,
  Name: 'Whiff Whaff',
  Icon: 'Whiff_Whaff_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.ONE_COST,
  Level: 0,
  Sonata: [
    Rejuvenating_Glow,
    Moonlit_Clouds,
    Sierra_Gale,
  ],
  Statistics: [],
}

export const Aero_Predator_Echo: IEcho = {
  Id: 390070071,
  Name: 'Aero Predator',
  Icon: 'Aero_Predator_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.ONE_COST,
  Level: 0,
  Sonata: [
    Void_Thunder,
    Sierra_Gale,
  ],
  Statistics: [],
}

export const Baby_Viridblaze_Saurian_Echo: IEcho = {
  Id: 390070078,
  Name: 'Baby Viridblaze Saurian',
  Icon: 'Baby_Viridblaze_Saurian_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.ONE_COST,
  Level: 0,
  Sonata: [
    Molten_Rift,
    Void_Thunder,
    Lingering_Tunes,
  ],
  Statistics: [],
}

export const Chest_Mimic_Echo: IEcho = {
  Id: 6000072,
  Name: 'Chest Mimic',
  Icon: 'Chest_Mimic_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.ONE_COST,
  Level: 0,
  Sonata: [
    Frosty_Resolve,
    Midnight_Veil,
    Empyrean_Anthem,
  ],
  Statistics: [],
}

export const Chop_Chop_Headless_Echo: IEcho = {
  Id: 6000064,
  Name: 'Chop Chop Headless',
  Icon: 'Chop_Chop_Headless_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.ONE_COST,
  Level: 0,
  Sonata: [
    Eternal_Radiance,
    Tidebreaking_Courage,
  ],
  Statistics: [],
}

export const Chop_Chop_Leftless_Echo: IEcho = {
  Id: 6000065,
  Name: 'Chop Chop Leftless',
  Icon: 'Chop_Chop_Leftless_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.ONE_COST,
  Level: 0,
  Sonata: [
    Frosty_Resolve,
    Tidebreaking_Courage,
  ],
  Statistics: [],
}

export const Chop_Chop_Rightless_Echo: IEcho = {
  Id: 6000066,
  Name: 'Chop Chop Rightless',
  Icon: 'Chop_Chop_Rightless_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.ONE_COST,
  Level: 0,
  Sonata: [
    Frosty_Resolve,
    Tidebreaking_Courage,
  ],
  Statistics: [],
}

export const Diamond_Claw_Echo: IEcho = {
  Id: 6000041,
  Name: 'Diamondclaw',
  Icon: 'Diamondclaw_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.ONE_COST,
  Level: 0,
  Sonata: [
    Moonlit_Clouds,
    Lingering_Tunes,
  ],
  Statistics: [],
}

export const Diggy_Duggy_Echo: IEcho = {
  Id: 6000071,
  Name: 'Diggy Duggy',
  Icon: 'Diggy_Duggy_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.ONE_COST,
  Level: 0,
  Sonata: [
    Eternal_Radiance,
    Tidebreaking_Courage,
  ],
  Statistics: [],
}

export const Dwarf_Cassowary_Echo: IEcho = {
  Id: 6000055,
  Name: 'Dwarf Cassowary',
  Icon: 'Dwarf_Cassowary_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.ONE_COST,
  Level: 0,
  Sonata: [
    Sierra_Gale,
    Rejuvenating_Glow,
  ],
  Statistics: [],
}

export const Electro_Predator_Echo: IEcho = {
  Id: 390070053,
  Name: 'Electro Predator',
  Icon: 'Electro_Predator_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.ONE_COST,
  Level: 0,
  Sonata: [
    Molten_Rift,
    Void_Thunder,
  ],
  Statistics: [],
}

export const Excarat_Echo: IEcho = {
  Id: 390070077,
  Name: 'Excarat',
  Icon: 'Excarat_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.ONE_COST,
  Level: 0,
  Sonata: [
    Freezing_Frost,
    SunSinking_Eclipse,
  ],
  Statistics: [],
}

export const Fae_Ignis_Echo: IEcho = {
  Id: 6000067,
  Name: 'Fae Ignis',
  Icon: 'Fae_Ignis_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.ONE_COST,
  Level: 0,
  Sonata: [
    Eternal_Radiance,
    Midnight_Veil,
  ],
  Statistics: [],
}

export const Fission_Junrock_Echo: IEcho = {
  Id: 390070052,
  Name: 'Fission Junrock',
  Icon: 'Fission_Junrock_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.ONE_COST,
  Level: 0,
  Sonata: [
    Void_Thunder,
    Rejuvenating_Glow,
    Moonlit_Clouds,
  ],
  Statistics: [],
}

export const Frostscourge_Stalker_Echo: IEcho = {
  Id: 6000063,
  Name: 'Frostscourge Stalker',
  Icon: 'Frostscourge_Stalker_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.ONE_COST,
  Level: 0,
  Sonata: [
    Eternal_Radiance,
    Midnight_Veil,
  ],
  Statistics: [],
}

export const Fusion_Dreadmane_Echo: IEcho = {
  Id: 390070100,
  Name: 'Fusion Dreadmane',
  Icon: 'Fusion_Dreadmane_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.ONE_COST,
  Level: 0,
  Sonata: [
    Molten_Rift,
    Rejuvenating_Glow,
  ],
  Statistics: [],
}

export const Fusion_Prism_Echo: IEcho = {
  Id: 390077012,
  Name: 'Fusion Prism',
  Icon: 'Fusion_Prism_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.ONE_COST,
  Level: 0,
  Sonata: [
    Molten_Rift,
    Lingering_Tunes,
    Freezing_Frost,
  ],
  Statistics: [],
}

export const Fusion_Warrior_Echo: IEcho = {
  Id: 390070064,
  Name: 'Fusion Warrior',
  Icon: 'Fusion_Warrior_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.ONE_COST,
  Level: 0,
  Sonata: [
    Molten_Rift,
    Void_Thunder,
    Sierra_Gale,
  ],
  Statistics: [],
}

export const Galescourge_Stalker_Echo: IEcho = {
  Id: 6000061,
  Name: 'Galescourge Stalker',
  Icon: 'Galescourge_Stalker_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.ONE_COST,
  Level: 0,
  Sonata: [
    Frosty_Resolve,
    Empyrean_Anthem,
  ],
  Statistics: [],
}

export const Glacio_Prism_Echo: IEcho = {
  Id: 390077013,
  Name: 'Glacio Prism',
  Icon: 'Glacio_Prism_Icon.webp',
  Rarity: Rarity.FIVE_STARS,
  Cost: EchoCost.ONE_COST,
  Level: 0,
  Sonata: [
    Freezing_Frost,
    SunSinking_Eclipse,
    Moonlit_Clouds,
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
  Nightmare_Mourning_Aix_Echo,

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
  Whiff_Whaff_Echo,
  Aero_Predator_Echo,
  Baby_Viridblaze_Saurian_Echo,
  Chest_Mimic_Echo,
  Chop_Chop_Headless_Echo,
  Chop_Chop_Leftless_Echo,
  Chop_Chop_Rightless_Echo,
  Diamond_Claw_Echo,
  Diggy_Duggy_Echo,
  Dwarf_Cassowary_Echo,
  Electro_Predator_Echo,
  Excarat_Echo,
  Fae_Ignis_Echo,
  Fission_Junrock_Echo,
  Frostscourge_Stalker_Echo,
  Fusion_Dreadmane_Echo,
  Fusion_Prism_Echo,
  Fusion_Warrior_Echo,
  Galescourge_Stalker_Echo,
  Glacio_Prism_Echo,
]

export const TemplateEchoes: IEcho[] = Echoes
