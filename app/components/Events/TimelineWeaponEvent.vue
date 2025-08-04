<script setup lang="ts">
import type Event from '~/Core/Interfaces/Event'
import type Weapon from '~/Core/Interfaces/Weapon'
import { ReleaseState } from '~/Core/Enums/ReleaseState'
import { GetWeaponIcon } from '~/Core/Utils/WeaponUtils'

interface Props {
  event: Event & {
    left: number
    width: number
    top: number
    weapon?: Weapon
    isFirst: boolean
    isLast: boolean
  }
}

defineProps<Props>()
const { t } = useI18n()

function FormatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })
}

function GetRemainingDays(endDate: Date): number {
  const now = new Date()
  const timeDiff = endDate.getTime() - now.getTime()
  return Math.max(0, Math.ceil(timeDiff / (1000 * 3600 * 24)))
}

function OnEventClick(event: Event) {
  if (event.ReleaseState === ReleaseState.RELEASED) {
    navigateTo(`/weapons/${event.WeaponId}`)
  }
}
</script>

<template>
  <div
    class="absolute h-8 overflow-clip shadow-sm border border-neutral-700 bg-neutral-800 cursor-pointer rounded-full transition-all duration-200 hover:shadow-sm z-10"
    :style="{
      left: `${event.left}px`,
      width: `${event.width}px`,
      top: `${event.top}px`,
    }"
    @click="OnEventClick(event)"
  >
    <div class="flex items-center gap-2 h-full">
      <img
        v-if="event.weapon"
        :src="GetWeaponIcon(event.weapon)"
        :alt="t(`${event.WeaponId}_name`)"
        class="w-auto h-full object-cover rounded-full"
      >
      <div class="flex gap-2 items-center w-full">
        <div class="text-sm font-semibold text-neutral-100 truncate">
          {{ event.weapon ? t(`${event.WeaponId}_name`) : '' }}
        </div>
        <div class="text-xs text-neutral-400">
          {{ FormatDate(event.StartDate) }} - {{ FormatDate(event.EndDate) }}
          <span v-if="event.ReleaseState === 'NEW'" class="text-red-400 ml-2">
            ({{ GetRemainingDays(event.EndDate) }} days left)
          </span>
        </div>
        <EventStatusBadge :event="event" class="ml-auto mr-2 rounded-full!" />
      </div>
    </div>
  </div>
</template>
