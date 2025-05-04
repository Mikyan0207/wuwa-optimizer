import { Rectangle } from './Rectangle'

export const CHARACTER_NAME_REGION = new Rectangle(55, 15, 450, 75)
export const CHARACTER_LEVEL_REGION = new Rectangle(285, 32, 75, 35)
export const CHARACTER_LEVEL_REGION_ALT = new Rectangle(514, 32, 75, 35)

export const WEAPON_NAME_REGION = new Rectangle(1600, 451, 250, 30)
export const WEAPON_LEVEL_REGION = new Rectangle(1640, 500, 70, 30)

// === Echo 01 ===
export const ECHO_1_ICON_REGION = new Rectangle(20, 650, 186, 186)
export const ECHO_1_COST_REGION = new Rectangle(338, 675, 20, 20)

export const ECHO_1_MAIN_STAT_NAME_REGION = new Rectangle(215, 723, 170, 25)
export const ECHO_1_MAIN_STAT_VALUE_REGION = new Rectangle(245, 753, 145, 35)

export const ECHO_1_STAT_1_NAME_REGION = new Rectangle(62, 881, 235, 41)
export const ECHO_1_STAT_1_VALUE_REGION = new Rectangle(310, 881, 68, 41)

export const ECHO_1_STAT_2_NAME_REGION = new Rectangle(62, 916, 238, 36)
export const ECHO_1_STAT_2_VALUE_REGION = new Rectangle(310, 916, 68, 41)

export const ECHO_1_STAT_3_NAME_REGION = new Rectangle(62, 953, 238, 36)
export const ECHO_1_STAT_3_VALUE_REGION = new Rectangle(310, 953, 68, 41)

export const ECHO_1_STAT_4_NAME_REGION = new Rectangle(62, 984, 238, 41)
export const ECHO_1_STAT_4_VALUE_REGION = new Rectangle(310, 984, 68, 41)

export const ECHO_1_STAT_5_NAME_REGION = new Rectangle(62, 1019, 238, 41)
export const ECHO_1_STAT_5_VALUE_REGION = new Rectangle(310, 1019, 68, 41)

// === Echo 02 ===
export const ECHO_2_ICON_REGION = new Rectangle(398, 650, 186, 186)
export const ECHO_2_COST_REGION = new Rectangle(709, 675, 25, 25)

export const ECHO_2_MAIN_STAT_NAME_REGION = new Rectangle(592, 723, 170, 25)
export const ECHO_2_MAIN_STAT_VALUE_REGION = new Rectangle(650, 753, 145, 35)

export const ECHO_2_STAT_1_NAME_REGION = new Rectangle(440, 881, 235, 41)
export const ECHO_2_STAT_1_VALUE_REGION = new Rectangle(685, 881, 68, 41)

export const ECHO_2_STAT_2_NAME_REGION = new Rectangle(440, 916, 238, 41)
export const ECHO_2_STAT_2_VALUE_REGION = new Rectangle(685, 916, 68, 41)

export const ECHO_2_STAT_3_NAME_REGION = new Rectangle(440, 952, 238, 41)
export const ECHO_2_STAT_3_VALUE_REGION = new Rectangle(685, 950, 68, 41)

export const ECHO_2_STAT_4_NAME_REGION = new Rectangle(440, 984, 238, 41)
export const ECHO_2_STAT_4_VALUE_REGION = new Rectangle(685, 984, 68, 41)

export const ECHO_2_STAT_5_NAME_REGION = new Rectangle(440, 1019, 238, 41)
export const ECHO_2_STAT_5_VALUE_REGION = new Rectangle(685, 1019, 68, 41)

// === Echo 03 ===
export const ECHO_3_ICON_REGION = new Rectangle(770, 651, 186, 186)
export const ECHO_3_COST_REGION = new Rectangle(1084, 675, 25, 30)

export const ECHO_3_MAIN_STAT_NAME_REGION = new Rectangle(966, 723, 170, 25)
export const ECHO_3_MAIN_STAT_VALUE_REGION = new Rectangle(1022, 753, 145, 35)

export const ECHO_3_STAT_1_NAME_REGION = new Rectangle(812, 881, 235, 36)
export const ECHO_3_STAT_1_VALUE_REGION = new Rectangle(1063, 881, 68, 41)

export const ECHO_3_STAT_2_NAME_REGION = new Rectangle(812, 916, 238, 41)
export const ECHO_3_STAT_2_VALUE_REGION = new Rectangle(1063, 916, 68, 41)

export const ECHO_3_STAT_3_NAME_REGION = new Rectangle(812, 951, 238, 41)
export const ECHO_3_STAT_3_VALUE_REGION = new Rectangle(1063, 949, 68, 41)

export const ECHO_3_STAT_4_NAME_REGION = new Rectangle(812, 984, 238, 41)
export const ECHO_3_STAT_4_VALUE_REGION = new Rectangle(1063, 984, 68, 41)

export const ECHO_3_STAT_5_NAME_REGION = new Rectangle(812, 1019, 238, 41)
export const ECHO_3_STAT_5_VALUE_REGION = new Rectangle(1063, 1019, 68, 36)

export const ECHOES_REGIONS: Rectangle[] = [
  // === Echo 01 ===
  ECHO_1_ICON_REGION,
  ECHO_1_COST_REGION,
  ECHO_1_MAIN_STAT_NAME_REGION,
  ECHO_1_MAIN_STAT_VALUE_REGION,
  ECHO_1_STAT_1_NAME_REGION,
  ECHO_1_STAT_1_VALUE_REGION,
  ECHO_1_STAT_2_NAME_REGION,
  ECHO_1_STAT_2_VALUE_REGION,
  ECHO_1_STAT_3_NAME_REGION,
  ECHO_1_STAT_3_VALUE_REGION,
  ECHO_1_STAT_4_NAME_REGION,
  ECHO_1_STAT_4_VALUE_REGION,
  ECHO_1_STAT_5_NAME_REGION,
  ECHO_1_STAT_5_VALUE_REGION,

  // === Echo 02 ===
  ECHO_2_ICON_REGION,
  ECHO_2_COST_REGION,
  ECHO_2_MAIN_STAT_NAME_REGION,
  ECHO_2_MAIN_STAT_VALUE_REGION,
  ECHO_2_STAT_1_NAME_REGION,
  ECHO_2_STAT_1_VALUE_REGION,
  ECHO_2_STAT_2_NAME_REGION,
  ECHO_2_STAT_2_VALUE_REGION,
  ECHO_2_STAT_3_NAME_REGION,
  ECHO_2_STAT_3_VALUE_REGION,
  ECHO_2_STAT_4_NAME_REGION,
  ECHO_2_STAT_4_VALUE_REGION,
  ECHO_2_STAT_5_NAME_REGION,
  ECHO_2_STAT_5_VALUE_REGION,

  // === Echo 03 ===
  ECHO_3_ICON_REGION,
  ECHO_3_COST_REGION,
  ECHO_3_MAIN_STAT_NAME_REGION,
  ECHO_3_MAIN_STAT_VALUE_REGION,
  ECHO_3_STAT_1_NAME_REGION,
  ECHO_3_STAT_1_VALUE_REGION,
  ECHO_3_STAT_2_NAME_REGION,
  ECHO_3_STAT_2_VALUE_REGION,
  ECHO_3_STAT_3_NAME_REGION,
  ECHO_3_STAT_3_VALUE_REGION,
  ECHO_3_STAT_4_NAME_REGION,
  ECHO_3_STAT_4_VALUE_REGION,
  ECHO_3_STAT_5_NAME_REGION,
  ECHO_3_STAT_5_VALUE_REGION,
]
