import type Statistic from '../Interfaces/Statistic'
import type { BaseCharacter } from '~/Core/Interfaces/Character'
import type Echo from '~/Core/Interfaces/Echo'
import type { BaseWeapon } from '~/Core/Interfaces/Weapon'

export enum ScannerStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  READY = 'READY',
  DONE = 'DONE',
}

export enum ScannerResultStatus {
  ERROR = 'ERROR',
  INVALID_IMAGE = 'INVALID_IMAGE',
  INVALID_CHARACTER = 'INVALID_CHARACTER',
  INVALID_WEAPON = 'INVALID_WEAPON',
  INVALID_ECHO = 'INVALID_ECHO',
  SUCCESS = 'SUCCESS',
}

export interface ScannerError {
  type: ScannerResultStatus
  message: string
  details?: string
  suggestions?: string[]
  timestamp: Date
  raw?: any
}

export interface ScanResult {
  status: ScannerResultStatus
  character?: BaseCharacter
  weapon?: BaseWeapon
  echoes?: Echo[]
  echoesStats?: Statistic[]
  error?: ScannerError
}
