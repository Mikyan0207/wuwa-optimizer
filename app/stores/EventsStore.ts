import type { BaseCharacter } from '~/Core/Interfaces/Character'
import type Event from '~/Core/Interfaces/Event'
import type { BaseWeapon } from '~/Core/Interfaces/Weapon'

import { defineStore, skipHydrate } from 'pinia'
import { ReleaseState } from '~/Core/Enums/ReleaseState'
import { Events } from '~/Core/Events'

export interface EventInfo extends Event {
  left: number
  width: number
  top: number
  character?: BaseCharacter
  weapon?: BaseWeapon
  isFirst: boolean
  isLast: boolean
}

export function GetDaysBetween(start: Date, end: Date): number {
  const timeDiff = end.getTime() - start.getTime()
  return Math.floor(timeDiff / (1000 * 3600 * 24))
}

export const UseEventsStore = defineStore('EventsStore', () => {
  const AllEvents = ref<Event[]>(Events)

  const CharactersStore = useCharactersStore()
  const WeaponsStore = useWeaponsStore()

  const DayWidth = 32
  const EventHeight = 30
  const EventSpacing = 10

  async function GetEvents(starTime: Date, endTime: Date): Promise<EventInfo[]> {
    const events = AllEvents.value
      .filter(event => event.StartDate >= starTime && event.EndDate <= endTime)
      .sort((a, b) => a.StartDate.getTime() - b.StartDate.getTime())

    return Promise.all(events.map(async (event, index) => {
      const startOffset = GetDaysBetween(starTime, event.StartDate)
      const duration = GetDaysBetween(event.StartDate, event.EndDate)
      const character = event.Type === 'character' ? await CharactersStore.GetBaseById(event.CharacterId!) : undefined
      const weapon = event.Type === 'weapon' ? await WeaponsStore.GetBaseById(event.WeaponId!) : undefined

      return {
        ...event,
        left: startOffset * DayWidth,
        width: duration * DayWidth,
        top: index * (EventHeight + EventSpacing),
        character,
        weapon,
        isFirst: index === 0,
        isLast: index === events.length - 1,
      }
    }))
  }

  function UpdateEventStatuses() {
    const now = new Date()
    AllEvents.value.forEach((event) => {
      const isCurrent = now >= event.StartDate && now <= event.EndDate
      const isUpcoming = now < event.StartDate
      if (isCurrent) {
        event.ReleaseState = ReleaseState.NEW
      }
      else if (isUpcoming) {
        event.ReleaseState = ReleaseState.UPCOMING
      }
      else {
        event.ReleaseState = ReleaseState.RELEASED
      }
    })
  }

  return {
    AllEvents: skipHydrate(AllEvents),
    UpdateEventStatuses,
    GetEvents,
  }
})
