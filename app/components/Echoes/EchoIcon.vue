<script setup lang="ts">
import type { Echo } from '~/Core/Models/Echo'
import { Rarity } from '~/Core/Enums/Rarity'

const props = defineProps<{
  echo: Echo
}>()

const GetBackgroundColor = computed(() => {
  switch (props.echo.Rarity) {
    case Rarity.FIVE_STARS:
      return 'bg-amber-400'
    case Rarity.FOUR_STARS:
      return 'bg-purple-400'
    case Rarity.THREE_STARS:
      return 'bg-blue-400'
    default:
      return 'bg-gray-400'
  }
})

const GetSecondaryColor = computed(() => {
  switch (props.echo.Rarity) {
    case Rarity.FIVE_STARS:
      return 'bg-amber-100'
    case Rarity.FOUR_STARS:
      return 'bg-purple-100'
    case Rarity.THREE_STARS:
      return 'bg-blue-100'
    default:
      return 'bg-gray-100'
  }
})

const GetHighlightColor = computed(() => {
  switch (props.echo.Rarity) {
    case Rarity.FIVE_STARS:
      return 'bg-amber-400'
    case Rarity.FOUR_STARS:
      return 'bg-purple-400'
    case Rarity.THREE_STARS:
      return 'bg-blue-400'
    default:
      return 'bg-gray-400'
  }
})
</script>

<template>
  <UTooltip
    arrow
    :delay-duration="0"
  >
    <template #content>
      <div class="w-64 flex flex-col space-y-3">
        <div class="w-full">
          <div v-if="echo.MainStatistic" class="w-full flex items-start justify-between gap-12">
            <StatLine :stat="echo.MainStatistic" />
          </div>
        </div>
        <USeparator />
        <!-- Sub Stats -->
        <div class="w-full flex flex-col gap-1">
          <StatLine v-for="(stat, idx) in echo.Statistics" :key="`stat-${stat.Type}-${idx}`" :stat="stat" :show-line="true" />
        </div>
      </div>
    </template>
    <div
      class="group relative cursor-pointer border border-white/14 rounded-md bg-black/66"
    >
      <div class="relative min-h-26 w-26 flex items-center justify-center overflow-clip">
        <div class="absolute bottom-1.5 left-0.5 z-1 w-8 flex items-center justify-center border border-white/14 rounded bg-black px-1 text-[10px]">
          +{{ echo.Level }}
        </div>
        <div class="absolute right-1 top-1 z-10 flex items-center justify-center gap-1">
          <NuxtImg :src="echo.Sonata.find(x => x.IsSelected)!.GetIcon()" class="h-6 w-6 object-contain" />
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
      <div :title="echo.Name" class="w-26 truncate text-nowrap border-b border-l border-r border-white/14 rounded-b bg-black/44 px-2 py-0.75 text-center text-xs">
        {{ echo.Name }}
      </div>
    </div>
  </UTooltip>
</template>
