import type ISequence from '../Interfaces/ISequence'

export class Sequence implements ISequence {
  Name: string
  Icon: string
  Unlocked: boolean

  constructor(sequence: ISequence) {
    this.Name = sequence.Name
    this.Icon = sequence.Icon
    this.Unlocked = sequence.Unlocked
  }

  GetIconPath(characterId: number) {
    return `/images/characters/${characterId}/${this.Icon}`
  }
}
