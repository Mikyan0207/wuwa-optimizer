<script setup lang="ts">
import type { Echo } from '~/Core/Models/Echo'
import { Rarity } from '~/Core/Enums/Rarity'

const props = defineProps<{
  echo: Echo
}>()

const GetBackgroundColor = computed(() => {
  switch (props.echo.Rarity) {
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
  switch (props.echo.Rarity) {
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
  switch (props.echo.Rarity) {
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
    <div class="relative min-h-26 w-26 flex items-center justify-center overflow-clip">
      <div class="absolute bottom-1.5 left-0.5 z-1 w-8 flex items-center justify-center border border-white/14 rounded bg-black px-1 text-10px">
        +{{ echo.Level }}
      </div>
      <div class="absolute right-1 top-1 z-10 flex items-center justify-center gap-1">
        <NuxtImg v-for="s in echo.Sonata" :key="s.Name" :src="s.GetIcon()" class="h-6 w-6 object-contain" />
      </div>
      <div class="absolute bottom-0">
        <NuxtImg
          width="160"
          height="160"
          :src="`${echo.GetIcon()}`"
          style="color: transparent;"
          class="rounded-t"
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
    <div :title="echo.Name" class="w-26 text-truncate border-b border-l border-r border-white/14 rounded-b bg-black/44 px-2 py-0.75 text-center text-xs">
      {{ echo.Name }}
    </div>
  </div>
</template>
