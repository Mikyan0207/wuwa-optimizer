<script setup lang="ts">
import type { Character } from '~/Core/Models/Character'
import type { Echo } from '~/Core/Models/Echo'
import { Rarity } from '~/Core/Enums/Rarity'

const props = defineProps<{
  echo: Echo
  echoSlot: number
  score?: IEchoRatingResult
  character: Character
}>()

function GetEchoRarityBackgroundColor(rarity: Rarity) {
  switch (rarity) {
    case Rarity.FIVE_STARS:
      return 'bg-amber-400'
    case Rarity.FOUR_STARS:
      return 'bg-purple-400'
    case Rarity.THREE_STARS:
      return 'bg-blue-400'
    default:
      return 'bg-gray-400'
  }
}

const IsValidEcho = computed(() => props.echo !== undefined && props.echo.Id !== -1)
</script>

<template>
  <div class="group relative">
    <EchoCreationPanel :echo="echo" :character="character" :echo-slot="echoSlot" />
    <UCard class="h-[21.5em] w-full">
      <!-- Echo Details -->
      <template #default>
        <div class="w-full flex flex-col items-start gap-2">
          <div class="flex flex-row items-center gap-2">
            <div class="flex flex-col items-center gap-2">
              <NuxtImg v-if="IsValidEcho" :src="`/images/echoes/${echo.Icon}`" :class="`h-12 w-12 rounded-full ${GetEchoRarityBackgroundColor(echo.Rarity)}`" />
              <USkeleton v-else class="h-12 w-12 rounded-full" />
            </div>
            <div class="flex flex-col">
              <p v-if="IsValidEcho" class="text-truncate text-nowrap text-white">
                {{ echo.Name }}
              </p>
              <USkeleton v-else class="h-3 w-22" />
              <p v-if="IsValidEcho" class="text-xs text-gray-300">
                +<span>{{ echo.Level }}</span>
              </p>
              <USkeleton v-else class="mt-1 h-2 w-8" />
            </div>
          </div>
          <div class="mx-auto my-2 h-[1px] w-full rounded-full bg-white/14" />
          <!-- Main Stat -->
          <div class="w-full flex flex-row gap-4">
            <div v-if="echo.MainStatistic && IsValidEcho" class="w-full flex items-start justify-between gap-12">
              <StatLine :stat="echo.MainStatistic" />
            </div>
            <div v-else class="w-full flex items-center justify-between gap-12">
              <div class="flex items-center gap-2">
                <USkeleton class="h-6 w-6 rounded-full" />
                <USkeleton class="mt-0.5 h-2 w-18" />
              </div>
              <USkeleton class="mt-0.5 h-2 w-8" />
            </div>
          </div>
          <div class="mx-auto my-2 h-[1px] w-full rounded-full bg-white/14" />
          <!-- Sub Stats -->
          <div v-if="IsValidEcho" class="w-full flex flex-col gap-1">
            <StatLine
              v-for="(stat, idx) in echo.Statistics"
              :key="`stat-${stat.Type}-${idx}`"
              :stat="stat"
              :show-line="true"
            />
          </div>
          <div v-else class="w-full flex flex-col gap-1">
            <div v-for="idx in 5" :key="idx" class="w-full flex items-center justify-between gap-12">
              <div class="flex items-center gap-2">
                <USkeleton class="h-6 w-6 rounded-full" />
                <USkeleton class="mt-0.5 h-2 w-18" />
              </div>
              <USkeleton class="mt-0.5 h-2 w-8" />
            </div>
          </div>
          <div class="mx-auto my-2 h-[1px] w-full rounded-full bg-white/14" />
          <!-- Echo Score -->
          <div class="w-full flex flex-row items-end gap-4">
            <div class="w-full flex items-start justify-between gap-12 text-xs">
              <div class="flex items-center gap-2">
                <p>Score</p>
              </div>
              <div v-if="IsValidEcho" class="w-full flex flex-row items-center justify-end gap-3">
                <p v-if="score">
                  {{ (score.Score * 100).toFixed(1) }}
                </p>
                <p v-if="score">
                  (<EchoScore :value="score.NoteScore" :text="score.Note" class="font-semibold" />)
                </p>
              </div>
              <div v-else class="mt-1 w-full flex flex-row items-center justify-end">
                <USkeleton class="h-2 w-8" />
              </div>
            </div>
          </div>
        </div>
      </template>
    </UCard>
  </div>
</template>
