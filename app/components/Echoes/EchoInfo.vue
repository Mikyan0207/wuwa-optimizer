<script setup lang="ts">
import type Echo from '~/Core/Interfaces/Echo'
import type Statistic from '~/Core/Interfaces/Statistic'
import { StatType } from '~/Core/Enums/StatType'
import { GetEchoCostText, GetEchoIcon, GetEchoRarityText, GetSonataIcon } from '~/Core/Utils/EchoUtils'

const props = withDefaults(defineProps<{
  echo: Echo
  echoSlot: number
  score?: IEchoRatingResult
  showScore?: boolean
}>(), {
  showScore: true,
})

const { t } = useI18n()
const { CurrentCharacter } = useCharacterContext()

const IsValidEcho = computed(() => props.echo.Id !== -1)
const GetSonata = computed(() => props.echo.Sonata.find(x => x.IsSelected === true))

function IsWantedStat(stat: Statistic) {
  return CurrentCharacter.value?.StatsWeights![stat.Type] !== undefined && CurrentCharacter.value?.StatsWeights![stat.Type]
}
</script>

<template>
  <div class="w-full flex flex-col items-start gap-2 truncate">
    <div class="flex flex-row items-center gap-2">
      <div v-motion-pop :delay="400" class="flex flex-col items-center gap-2 rounded-full border-2 h-12 w-12 border-gold-400/60 overflow-clip">
        <NuxtImg v-if="IsValidEcho" :src="GetEchoIcon(echo)" class="h-12 w-12" />
        <USkeleton v-else class="h-12 w-12 rounded-full" />
      </div>
      <div v-motion-pop :delay="400" class="flex flex-col">
        <div v-if="IsValidEcho" class="text-lg text-white" :title="t(`${echo.Id}_name`)">
          <div class="flex items-center gap-2 w-full">
            <span>{{ t(`${echo.Id}_name`) }}</span>
            <NuxtImg v-if="GetSonata" :src="GetSonataIcon(GetSonata)" class="h-6 w-6" />
          </div>
        </div>
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
      <div
        v-for="idx in [...Array(5).keys()]" :key="`stat-${idx}`"
      >
        <StatLine
          v-if="echo.Statistics[idx]"
          v-motion-slide-left
          :delay="500 + (idx * 100)"
          :stat="echo.Statistics[idx]"
          :weight="CurrentCharacter?.StatsWeights![echo.Statistics[idx].Type] || undefined"
          :show-line="true"
          :show-roll-value="true"
          class="px-2 py-1"
          :class="{ 'bg-neutral-800/75 rounded': IsWantedStat(echo.Statistics[idx]) }"
        />
        <div v-else class="h-8 flex items-center justify-center">
          <USkeleton class="h-1 w-full rounded" />
        </div>
      </div>
    </div>
    <div v-else class="w-full flex flex-col gap-1">
      <div v-for="idx in 5" :key="idx" class="w-full flex items-center justify-between">
        <USkeleton class="h-8 w-full rounded" />
      </div>
    </div>
    <USeparator v-if="showScore === true" color="neutral" />
    <!-- Echo Score -->
    <div v-if="score && showScore === true" class="w-full flex flex-row items-end gap-4 font-semibold">
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
    <USkeleton v-else-if="!score && showScore === true" class="w-full h-5" />
  </div>
</template>
