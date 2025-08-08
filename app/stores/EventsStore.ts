import type Event from '~/Core/Interfaces/Event'
import { defineStore } from 'pinia'
import { ReleaseState } from '~/Core/Enums/ReleaseState'
import { Events } from '~/Core/Events'

export const UseEventsStore = defineStore('EventsStore', () => {
  const AllEvents = ref<Event[]>(Events)

  const CurrentEvents = computed(() =>
    AllEvents.value.filter(event => event.ReleaseState === ReleaseState.NEW),
  )

  const UpcomingEvents = computed(() =>
    AllEvents.value.filter(event => event.ReleaseState === ReleaseState.UPCOMING),
  )

  const AvailableEvents = computed(() =>
    AllEvents.value.filter(event => event.ReleaseState === ReleaseState.RELEASED),
  )

  const PastEvents = computed(() =>
    AllEvents.value.filter(event =>
      event.ReleaseState === ReleaseState.RELEASED,
    ),
  )

  function GetEventById(id: string): Event | undefined {
    return AllEvents.value.find(event => event.Id === id)
  }

  function GetEventByCharacterId(characterId: number): Event | undefined {
    return AllEvents.value.find(event => event.CharacterId === characterId)
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
    AllEvents,
    CurrentEvents,
    UpcomingEvents,
    AvailableEvents,
    PastEvents,
    GetEventById,
    GetEventByCharacterId,
    UpdateEventStatuses,
  }
})
