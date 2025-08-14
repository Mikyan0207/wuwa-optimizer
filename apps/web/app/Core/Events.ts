import type Event from './Interfaces/Event'
import { Rarity } from './Enums/Rarity'
import { ReleaseState } from './Enums/ReleaseState'

function CreateDateInUserTimezone(dateString: string): Date {
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: userTimezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })

  const tempDate = new Date(dateString)
  const dateStringInTimezone = formatter.format(tempDate)
  return new Date(dateStringInTimezone)
}

export const Events: Event[] = [
  {
    Id: 'event-1-character',
    CharacterId: 1608,
    StartDate: CreateDateInUserTimezone('2025-07-25'),
    EndDate: CreateDateInUserTimezone('2025-08-14'),
    ReleaseState: ReleaseState.NEW,
    Type: 'character',
    Rarity: Rarity.FIVE_STARS,
  },

  {
    Id: 'event-1-weapon',
    WeaponId: 21050066,
    StartDate: CreateDateInUserTimezone('2025-07-25'),
    EndDate: CreateDateInUserTimezone('2025-08-14'),
    ReleaseState: ReleaseState.RELEASED,
    Type: 'weapon',
    Rarity: Rarity.FIVE_STARS,
  },
  {
    Id: 'event-2-character',
    CharacterId: 1607,
    StartDate: CreateDateInUserTimezone('2025-08-14'),
    EndDate: CreateDateInUserTimezone('2025-08-28'),
    ReleaseState: ReleaseState.RELEASED,
    Type: 'character',
    Rarity: Rarity.FIVE_STARS,
  },
  {
    Id: 'event-2-weapon',
    WeaponId: 21050056,
    StartDate: CreateDateInUserTimezone('2025-08-14'),
    EndDate: CreateDateInUserTimezone('2025-08-28'),
    ReleaseState: ReleaseState.RELEASED,
    Type: 'weapon',
    Rarity: Rarity.FIVE_STARS,
  },
  {
    Id: 'event-3-character',
    CharacterId: 9901,
    StartDate: CreateDateInUserTimezone('2025-08-28'),
    EndDate: CreateDateInUserTimezone('2025-09-17'),
    ReleaseState: ReleaseState.RELEASED,
    Type: 'character',
    Rarity: Rarity.FIVE_STARS,
  },
  // {
  //   Id: 'event-3-weapon',
  //   WeaponId: -1,
  //   StartDate: CreateDateInUserTimezone('2025-08-28'),
  //   EndDate: CreateDateInUserTimezone('2025-09-17'),
  //   ReleaseState: ReleaseState.RELEASED,
  //   Type: 'weapon',
  //   Rarity: Rarity.FIVE_STARS,
  // },
  {
    Id: 'event-4-character',
    CharacterId: 9902,
    StartDate: CreateDateInUserTimezone('2025-09-17'),
    EndDate: CreateDateInUserTimezone('2025-10-06'),
    ReleaseState: ReleaseState.RELEASED,
    Type: 'character',
    Rarity: Rarity.FIVE_STARS,
  },
  // {
  //   Id: 'event-4-weapon',
  //   WeaponId: -1,
  //   StartDate: CreateDateInUserTimezone('2025-09-17'),
  //   EndDate: CreateDateInUserTimezone('2025-10-06'),
  //   ReleaseState: ReleaseState.RELEASED,
  //   Type: 'weapon',
  //   Rarity: Rarity.FIVE_STARS,
  // },
]

export function GetCurrentEvents(): Event[] {
  return Events.filter(event => event.ReleaseState === ReleaseState.NEW)
}

export function GetUpcomingEvents(): Event[] {
  return Events.filter(event => event.ReleaseState === ReleaseState.UPCOMING)
}

export function GetAvailableEvents(): Event[] {
  return Events.filter(event => event.ReleaseState === ReleaseState.RELEASED)
}

export function GetEventById(id: string): Event | undefined {
  return Events.find(event => event.Id === id)
}

export function GetEventByCharacterId(characterId: number): Event | undefined {
  return Events.find(event => event.CharacterId === characterId)
}
