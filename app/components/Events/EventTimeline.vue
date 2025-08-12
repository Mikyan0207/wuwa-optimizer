<script setup lang="ts">
import type { EventInfo } from '~/stores/EventsStore'
import { computed, onMounted, ref } from 'vue'
import { GetDaysBetween, UseEventsStore } from '~/stores/EventsStore'

const DayWidth = 32
const EventHeight = 30
const EventSpacing = 10

const UserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone

function GetTodayInUserTimezone() {
  const now = new Date()
  const formatter = new Intl.DateTimeFormat('ja-JP', {
    timeZone: UserTimezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })

  const dateString = formatter.format(now)
  return new Date(dateString)
}

const Today = GetTodayInUserTimezone()
const TimelineStart = new Date(Today.getFullYear(), Today.getMonth() - 2, 1)
const TimelineEnd = new Date(Today.getFullYear(), Today.getMonth() + 3, 0)

const TimelineRef = ref<HTMLElement>()
const EventsStore = UseEventsStore()

const TimelineEvents = ref<EventInfo[]>([])

const TimelineMonths = computed(() => {
  const months: Array<{ key: string, name: string, left: number, width: number }> = []
  let currentDate = new Date(TimelineStart)
  let left = 0

  while (currentDate <= TimelineEnd) {
    const monthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
    const daysInMonth = monthEnd.getDate()

    months.push({
      key: `${currentDate.getFullYear()}-${currentDate.getMonth()}`,
      name: currentDate.toLocaleDateString('en-US', { month: 'long', timeZone: UserTimezone }),
      left,
      width: daysInMonth * DayWidth,
    })

    left += daysInMonth * DayWidth
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
  }

  return months
})

const TimelineDays = computed(() => {
  const days: Array<{ key: string, name: string, number: number, left: number }> = []
  let currentDate = new Date(TimelineStart)
  let left = 0

  while (currentDate <= TimelineEnd) {
    days.push({
      key: currentDate.toISOString(),
      name: currentDate.toLocaleDateString('en-US', { weekday: 'short', timeZone: UserTimezone }),
      number: currentDate.getDate(),
      left,
    })

    left += DayWidth
    currentDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000)
  }

  return days
})

const TodayPosition = computed(() => {
  const today = GetTodayInUserTimezone()

  if (today < TimelineStart || today > TimelineEnd)
    return 0

  const daysFromStart = GetDaysBetween(TimelineStart, today)
  const hoursProgress = today.getHours() / 24
  return (daysFromStart + hoursProgress) * DayWidth
})

onMounted(async () => {
  EventsStore.UpdateEventStatuses()

  TimelineEvents.value = await EventsStore.GetEvents(TimelineStart, TimelineEnd)

  if (TimelineRef.value) {
    const scrollTo = TodayPosition.value - (TimelineRef.value.clientWidth / 2)
    TimelineRef.value.scrollLeft = Math.max(0, scrollTo)
  }
})
</script>

<template>
  <div class="w-full">
    <div class="mb-4">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
          <UIcon name="solar:calendar-broken" class="w-5 h-5 text-amber-400" />
        </div>
        <div>
          <h3 class="font-semibold text-gray-100">
            Banners
          </h3>
          <p class="text-xs text-gray-400">
            Track upcoming events
          </p>
        </div>
      </div>
    </div>

    <div class="">
      <div ref="TimelineRef" class="overflow-x-auto custom-scrollbar border border-neutral-700">
        <div class="relative min-w-max">
          <div class="bg-neutral-900 h-12 flex">
            <div
              v-for="month in TimelineMonths"
              :key="month.key"
              class="flex items-center px-2"
              :style="{ width: `${month.width}px` }"
            >
              <span class="font-semibold text-gold-400">{{ month.name }}</span>
            </div>
          </div>

          <div class="bg-neutral-900 flex">
            <div
              v-for="day in TimelineDays"
              :key="day.key"
              class="flex flex-col items-center justify-center"
              :style="{ width: `${DayWidth}px` }"
            >
              <span class="text-xs text-neutral-400 font-medium">{{ day.name }}</span>
              <span class="text-sm font-semibold text-neutral-300">{{ day.number }}</span>
            </div>
          </div>

          <div class="bg-neutral-900 relative" :style="{ height: `${TimelineEvents.length * (EventHeight + EventSpacing) + 50}px` }">
            <!-- Lignes verticales des jours en arrière-plan -->
            <div
              v-for="day in TimelineDays"
              :key="`bg-${day.key}`"
              class="absolute top-0 h-full border-r border-neutral-700/50"
              :style="{ left: `${day.left + DayWidth / 2}px` }"
            />

            <div
              class="absolute top-0 h-full flex flex-col items-center z-20"
              :style="{ left: `${TodayPosition}px` }"
            >
              <div class="w-0.5 h-full bg-primary-400/50" />
            </div>

            <TimelineCharacterEvent
              v-for="event in TimelineEvents.filter(e => e.Type === 'character')"
              :key="event.Id"
              :event="event"
              class="mt-3"
            />
            <TimelineWeaponEvent
              v-for="event in TimelineEvents.filter(e => e.Type === 'weapon')"
              :key="event.Id"
              :event="event"
              class="mt-2"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  height: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgb(38 38 38);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgb(82 82 82);
  border-radius: 4px;
  transition: background 0.2s ease;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgb(115 115 115);
}

.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgb(82 82 82) rgb(38 38 38);
}
</style>
