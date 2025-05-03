import { Rectangle } from './Rectangle'

export const CHARACTER_NAME_REGION = new Rectangle(55, 15, 450, 75)
export const CHARACTER_LEVEL_REGION = new Rectangle(285, 32, 75, 35)

export const WEAPON_NAME_REGION = new Rectangle(1600, 451, 250, 30)
export const WEAPON_LEVEL_REGION = new Rectangle(1640, 500, 70, 30)

// === Echoes ===
export const ECHO_1_ICON_REGION = new Rectangle(20, 650, 186, 186)
export const ECHO_1_COST_REGION = new Rectangle(338, 675, 20, 20)
export const ECHO_1_MAIN_STAT_NAME_REGION = new Rectangle(215, 723, 170, 25)
export const ECHO_1_MAIN_STAT_VALUE_REGION = new Rectangle(245, 753, 145, 35)

export const ECHO_1_STAT_1_NAME_REGION = new Rectangle(65, 881, 235, 41)
export const ECHO_1_STAT_1_VALUE_REGION = new Rectangle(310, 881, 68, 41)

export const ECHOES_REGIONS: Rectangle[] = [
  ECHO_1_ICON_REGION,
  ECHO_1_COST_REGION,
  ECHO_1_MAIN_STAT_NAME_REGION,
  ECHO_1_MAIN_STAT_VALUE_REGION,
  ECHO_1_STAT_1_NAME_REGION,
  ECHO_1_STAT_1_VALUE_REGION,
]
