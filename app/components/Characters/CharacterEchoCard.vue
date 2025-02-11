<script setup lang="ts">
import type { Character } from '~/Core/Models/Character'
import type { Echo } from '~/Core/Models/Echo'
import { EchoCost } from '~/Core/Enums/EchoCost'
import { Rarity } from '~/Core/Enums/Rarity'

const props = defineProps<{
  echo: Echo
  echoSlot: number
  score?: IEchoRatingResult
  character: Character
}>()

const { t } = useI18n()

function GetCostText(cost: EchoCost) {
  switch (cost) {
    case EchoCost.ONE_COST:
      return '1'
    case EchoCost.THREE_COST:
      return '3'
    default:
      return '4'
  }
}

function GetRarityText(rarity: Rarity) {
  switch (rarity) {
    case Rarity.FIVE_STARS:
      return '5'
    case Rarity.FOUR_STARS:
      return '4'
    case Rarity.THREE_STARS:
      return '3'
    case Rarity.TWO_STARS:
      return '2'
    case Rarity.ONE_STAR:
      return '1'
  }
}

const IsValidEcho = computed(() => props.echo !== undefined && props.echo.Id !== -1)
</script>

<template>
  <div class="group relative">
    <EchoCreationPanel :echo="echo" :character="character" :echo-slot="echoSlot" />
    <UCard
      class="min-h-[22em] h-full w-full"
      :ui="{
        root: 'rounded-none rounded-br-xl border-0',
      }"
    >
      <!-- Echo Details -->
      <template #default>
        <BorderLines />
        <div class="w-full flex flex-col items-start gap-2">
          <div class="flex flex-row items-center gap-2">
            <div class="flex flex-col items-center gap-2 rounded-full border-2 h-12 w-12 border-gold-200/45 overflow-clip">
              <NuxtImg v-if="IsValidEcho" :src="`/images/echoes/${echo.Icon}`" />
              <USkeleton v-else class="h-12 w-12 rounded-full" />
            </div>
            <div class="flex flex-col">
              <p v-if="IsValidEcho" class="text-truncate text-nowrap text-white">
                {{ echo.Name }}
              </p>
              <USkeleton v-else class="h-3 w-22" />
              <div class="flex items-center gap-1 mt-1">
                <UBadge v-if="IsValidEcho" class="text-xs text-gray-300" size="xs" variant="soft" color="error">
                  {{ `${t('label_level')} ${echo.Level}` }}
                </UBadge>
                <UBadge v-if="IsValidEcho" class="text-xs text-gray-300" size="xs" variant="soft" color="primary">
                  {{ `${GetRarityText(echo.Rarity)}✦` }}
                </UBadge>
                <UBadge v-if="IsValidEcho" class="text-xs text-gray-300" size="xs" variant="soft" color="info">
                  {{ `Cost ${GetCostText(echo.Cost)}` }}
                </UBadge>
                <USkeleton v-else class="mt-1 h-2 w-8" />
              </div>
            </div>
          </div>
          <div class="mx-auto my-2 h-[1px] w-full rounded-full bg-white/14" />
          <!-- Main Stat -->
          <div class="w-full flex flex-row gap-4">
            <div v-if="echo.MainStatistic && IsValidEcho" class="w-full flex items-start justify-between gap-12">
              <StatLine :stat="echo.MainStatistic" :is-main-stat="true" />
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
              :show-roll-value="true"
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
