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
    class="group relative cursor-pointer border border-white/14 rounded-md bg-black/66"
  >
    <div class="relative h-26 min-h-26 w-26 flex items-center justify-center overflow-clip">
      <div class="absolute bottom-0">
        <NuxtImg
          width="160"
          height="160"
          :src="`/images/weapons/${weapon.Icon}`"
          style="color: transparent;"
          class="rounded-t object-cover"
        />
      </div>
      <div class="absolute bottom-0 w-full">
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
        <div class="h-[3px]" :class="GetHighlightColor" />
      </div>
    </div>
    <div :title="weapon.Name" class="w-26 text-truncate border-b border-l border-r border-white/14 rounded-b bg-black/44 px-2 py-0.75 text-center text-xs">
      {{ weapon.Name }}
    </div>
  </div>
</template>
