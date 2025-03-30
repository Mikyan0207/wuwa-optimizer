import type { Action } from './Action'

export interface Section {
  Index: number
  Title: string
  Actions: Action[]
}
