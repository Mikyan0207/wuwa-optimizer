<script setup lang="ts">
import type { Echo } from '~/Core/Models/Echo'
import { Rarity } from '~/Core/Enums/Rarity'

export interface CharacterIconProps {
  echo: Echo
}

const Props = defineProps<CharacterIconProps>()

const GetBackgroundColor = computed(() => {
  switch (Props.echo.Rarity) {
    case Rarity.FIVE_STAR:
      return 'bg-yellow-500'
    case Rarity.FOUR_STAR:
      return 'bg-purple-400'
    default:
      return 'bg-blue-400'
  }
})

const GetSecondaryColor = computed(() => {
  switch (Props.echo.Rarity) {
    case Rarity.FIVE_STAR:
      return 'bg-yellow-100'
    case Rarity.FOUR_STAR:
      return 'bg-purple-100'
    default:
      return 'bg-blue-100'
  }
})

const GetHighlightColor = computed(() => {
  switch (Props.echo.Rarity) {
    case Rarity.FIVE_STAR:
      return 'bg-amber-4'
    case Rarity.FOUR_STAR:
      return 'bg-purple-4'
    default:
      return 'bg-blue-4'
  }
})
</script>

<template>
  <div
    class="group relative cursor-pointer border border-white/14 rounded-md bg-black/14"
  >
    <div class="relative min-h-26 w-26 flex items-center justify-center overflow-clip">
      <div class="absolute right-1 top-1 z-1 w-8 flex items-center justify-center border border-white/14 rounded bg-black px-1 text-10px">
        +{{ echo.Level }}
      </div>
      <div class="absolute bottom-2 right-2 flex items-center justify-center gap-1">
        <NuxtImg v-for="s in echo.Sonata" :key="s.Name" :src="s.GetIcon()" class="h-6 w-6 object-contain" />
      </div>
      <div class="absolute bottom-0">
        <NuxtImg
          width="160"
          height="160"
          :src="`${echo.GetIcon()}`"
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
    <div class="text-truncate border-b border-l border-r border-white/14 rounded-b bg-black/44 px-2 py-0.75 text-center text-xs">
      {{ echo.Name }}
    </div>
  </div>
</template>
