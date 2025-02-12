import type IEcho from './Interfaces/IEcho'
import { EchoCost } from './Enums/EchoCost'
import { Rarity } from './Enums/Rarity'
import { Celestial_Light, Empyrean_Anthem, Eternal_Radiance, Freezing_Frost, Frosty_Resolve, Lingering_Tunes, Midnight_Veil, Molten_Rift, Moonlit_Clouds, Rejuvenating_Glow, Sierra_Gale, SunSinking_Eclipse, Tidebreaking_Courage, Void_Thunder } from './Sonatas'

export const Empty_Echo: IEcho = {
  Id: -1,
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
