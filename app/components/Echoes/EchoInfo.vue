<script setup lang="ts">
import type Echo from '~/Core/Interfaces/Echo'
import { GetEchoCostText, GetEchoIcon, GetEchoRarityText } from '~/Core/Utils/EchoUtils'

const props = defineProps<{
  echo: Echo
  echoSlot: number
  score?: IEchoRatingResult
}>()

const { t } = useI18n()
const { ActiveCharacter } = useActiveCharacterStore()

const IsValidEcho = computed(() => props.echo.Id !== -1)
</script>

<template>
  <div class="w-full flex flex-col items-start gap-2 truncate">
    <div class="flex flex-row items-center gap-2">
      <div v-motion-pop :delay="400" class="flex flex-col items-center gap-2 rounded-full border-2 h-12 w-12 border-gold-400/60 overflow-clip">
        <NuxtImg v-if="IsValidEcho" :src="GetEchoIcon(echo)" class="h-12 w-12" />
        <USkeleton v-else class="h-12 w-12 rounded-full" />
      </div>
      <div v-motion-pop :delay="400" class="flex flex-col">
        <p v-if="IsValidEcho" class="text-lg text-white" :title="t(`${echo.Id}_name`)">
          {{ t(`${echo.Id}_name`) }}
        </p>
        <USkeleton v-else class="h-4 w-32" />
      </div>
    </div>
    <div v-motion-pop :delay="400" class="flex items-center justify-start w-full gap-1">
      <UBadge v-if="IsValidEcho" class="text-sm text-gray-300" size="xs" variant="soft" color="error">
        {{ `${t('label_level')} ${echo.Level}` }}
      </UBadge>
      <USkeleton v-else class="h-6 w-10" />
      <UBadge v-if="IsValidEcho" class="text-sm text-gray-300" size="xs" variant="soft" color="primary">
        {{ `${GetEchoRarityText(echo.Rarity)}✦` }}
      </UBadge>
      <USkeleton v-else class="h-6 w-10" />
      <UBadge v-if="IsValidEcho" class="text-sm text-gray-300" size="xs" variant="soft" color="info">
        {{ `Cost ${GetEchoCostText(echo.Cost)}` }}
      </UBadge>
      <USkeleton v-else class="h-6 w-10" />
      <UBadge
        v-if="IsValidEcho && echo.IsNightmare === true" class="text-sm ml-auto text-gray-300" size="xs"
        variant="soft" color="warning"
      >
        Nightmare
      </UBadge>
    </div>
    <USeparator color="neutral" />
    <!-- Main / Secondary Stat -->
    <div class="w-full">
      <div v-if="echo.MainStatistic && echo.SecondaryStatistic && IsValidEcho" class="flex flex-col items-center w-full gap-1">
        <StatLine
          v-motion-slide-left
          :delay="450"
          :stat="echo.MainStatistic"
          :show-line="true"
          :is-main-stat="true"
        />
        <StatLine
          v-motion-slide-left
          :delay="450"
          :stat="echo.SecondaryStatistic"
          :show-line="true"
          :is-main-stat="false"
        />
      </div>
      <div v-else class="w-full flex flex-col items-center justify-between gap-1">
        <USkeleton class="h-6 w-full" />
        <USkeleton class="h-6 w-full" />
      </div>
    </div>
    <USeparator color="neutral" />
    <!-- Sub Stats -->
    <div v-if="IsValidEcho" class="w-full flex flex-col gap-1">
      <StatLine
        v-for="(stat, idx) in echo.Statistics"
        :key="`stat-${stat.Type}-${idx}`"
        v-motion-slide-left
        :delay="500 + (idx * 100)"
        :stat="stat"
        :weight="ActiveCharacter?.StatsWeights![stat.Type] || undefined"
        :show-line="true"
        :show-roll-value="true"
        class="px-2 py-1"
        :class="{ 'bg-neutral-800/75 rounded': ActiveCharacter?.StatsWeights![stat.Type] !== undefined && ActiveCharacter?.StatsWeights![stat.Type] || 0 > 0 }"
      />
    </div>
    <div v-else class="w-full flex flex-col gap-1">
      <div v-for="idx in 5" :key="idx" class="w-full flex items-center justify-between">
        <USkeleton class="h-8 w-full rounded" />
      </div>
    </div>
    <USeparator color="neutral" />
    <!-- Echo Score -->
    <div v-if="score" class="w-full flex flex-row items-end gap-4 font-semibold">
      <div class="w-full flex items-center justify-between gap-12">
        <div class="flex items-center gap-2">
          <p>Score</p>
        </div>
        <div v-if="IsValidEcho && score" class="w-full flex flex-row items-center justify-end">
          <p class="mr-2">
            {{ (score.Score).toFixed(1) }}
          </p>
          (<EchoScore :value="score.Score" :text="score.Grade" />)
        </div>
        <div v-else class="mt-1 w-full flex flex-row items-center justify-end">
          <USkeleton class="h-4 w-8" />
        </div>
      </div>
    </div>
    <USkeleton v-else class="w-full h-5" />
  </div>
</template>
