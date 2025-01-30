<script setup lang="ts">
import type { Weapon } from '~/Core/Models/Weapon'
import { Rarity } from '~/Core/Enums/Rarity'

const props = defineProps<{
  weapon: Weapon
}>()

const GetBackgroundColor = computed(() => {
  switch (props.weapon.Rarity) {
    case Rarity.FIVE_STARS:
      return 'bg-amber-4'
    case Rarity.FOUR_STARS:
      return 'bg-purple-4'
    case Rarity.THREE_STARS:
      return 'bg-blue-4'
    default:
      return 'bg-gray-4'
  }
})

const GetSecondaryColor = computed(() => {
  switch (props.weapon.Rarity) {
    case Rarity.FIVE_STARS:
      return 'bg-amber-1'
    case Rarity.FOUR_STARS:
      return 'bg-purple-1'
    case Rarity.THREE_STARS:
      return 'bg-blue-1'
    default:
      return 'bg-gray-1'
  }
})

const GetHighlightColor = computed(() => {
  switch (props.weapon.Rarity) {
    case Rarity.FIVE_STARS:
      return 'bg-amber-4'
    case Rarity.FOUR_STARS:
      return 'bg-purple-4'
    case Rarity.THREE_STARS:
      return 'bg-blue-4'
    default:
      return 'bg-gray-4'
  }
})
</script>

<template>
  <div
    class="group relative flex cursor-pointer border border-white/14 rounded bg-black/66"
  >
    <!-- Icon / Rarity -->
    <div class="relative h-26 min-h-26 w-26 flex items-center justify-center overflow-clip">
      <!-- Icon -->
      <div class="absolute bottom-0">
        <NuxtImg
          width="160"
          height="160"
          :src="`/images/weapons/${weapon.Icon}`"
          style="color: transparent;"
          class="rounded-t object-cover"
        />
      </div>
      <!-- Rarity Highlight -->
      <div class="absolute bottom-0 w-full rounded-bl">
        <div class="relative w-full flex items-center">
          <div class="absolute mt-auto h-4 w-full -bottom-2">
            <div
              class="absolute bottom-0 h-3 w-full blur-lg transition-all duration-200 group-hover:h-4 group-hover:blur"
              :class="GetBackgroundColor"
            />
            <div
              class="absolute bottom-0 h-2 w-full blur duration-200 group-hover:h-2 group-hover:blur-sm"
              :class="GetSecondaryColor"
            />
          </div>
        </div>
        <div class="h-[3px] rounded-bl" :class="GetHighlightColor" />
      </div>
    </div>
    <div class="w-46 border-b border-l border-r border-white/14 rounded-b bg-black/44 p-2 text-xs">
      <!-- Name -->
      <div class="w-full flex items-center justify-between">
        <div :title="weapon.Name" class="text-truncate">
          {{ weapon.Name }}
        </div>
      </div>

      <!-- Stats -->
      <div v-if="weapon.MainStatistic && weapon.SecondaryStatistic" class="mt-4 h-min flex flex-col items-start text-gray-300">
        <StatLine :stat="weapon.MainStatistic" icon-size="xs" :show-line="true" />
        <StatLine :stat="weapon.SecondaryStatistic" icon-size="xs" :show-line="true" />
      </div>
    </div>
  </div>
</template>
