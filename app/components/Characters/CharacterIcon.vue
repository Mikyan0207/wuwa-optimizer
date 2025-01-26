<script setup lang="ts">
import { Rarity } from '~/Core/Enums/Rarity'

export interface CharacterIconProps {
  name: string
  rarity: Rarity
  icon: string
  unlocked: boolean
}

const Props = defineProps<CharacterIconProps>()

const GetBackgroundColor = computed(() => {
  switch (Props.rarity) {
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
  switch (Props.rarity) {
    case Rarity.FIVE_STARS:
      return 'bg-yellow-1'
    case Rarity.FOUR_STARS:
      return 'bg-purple-1'
    case Rarity.THREE_STARS:
      return 'bg-blue-1'
    default:
      return 'bg-gray-1'
  }
})

const GetHighlightColor = computed(() => {
  switch (Props.rarity) {
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
    class="group relative cursor-pointer border border-white/14 rounded-md bg-black/14"
    :class="{ 'filter-grayscale-100': !unlocked }"
  >
    <div class="relative min-h-32 w-32 flex items-center justify-center overflow-clip rounded-b">
      <div class="absolute bottom-0">
        <NuxtImg
          width="160"
          height="160"
          :src="`${icon}`"
          style="color: transparent;"
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
  </div>
</template>
