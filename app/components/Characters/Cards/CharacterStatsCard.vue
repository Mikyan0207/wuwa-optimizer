<script setup lang="ts">
import type IStatistic from '~/Core/Interfaces/Statistic'
import { GetTotalGradeColor } from '~/composables/UseScoreCalculator'
import { GetSequenceLevel } from '~/Core/Utils/CharacterUtils'
import { GetRarityAsNumber } from '~/Core/Utils/RarityUtils'

const { t } = useI18n()
const { CurrentCharacter, Stats, Score } = useCharacterContext()

const GetCharacterScoreNoteColor = computed(() => {
  return GetTotalGradeColor(Score.value.Note)
})

function GetStatWantedColor(stat: IStatistic) {
  if (CurrentCharacter.value.StatsWeights === undefined) {
    return 'text-gray-400'
  }

  const weightColorMap: Record<number, string> = {
    1.0: 'text-amber-500',
    0.9: 'text-orange-500',
    0.8: 'text-red-500',
    0.7: 'text-purple-500',
    0.6: 'text-indigo-500',
    0.5: 'text-blue-500',
    0.4: 'text-cyan-500',
    0.3: 'text-teal-500',
    0.2: 'text-green-500',
    0.1: 'text-lime-500',
    0.0: 'text-gray-400',
  }

  const w = GetWeight(stat) ?? 0
  const weight = Math.floor(w * 10) / 10

  return weightColorMap[weight] || weightColorMap[0.0]
}

function GetWeight(stat: IStatistic) {
  if (CurrentCharacter.value.StatsWeights === undefined) {
    return 0
  }

  let w = CurrentCharacter.value.StatsWeights[stat.Type]

  if (w === 0) {
    const percentageStatType = GetPercentageStatType(stat.Type)
    if (percentageStatType) {
      const percentageWeight = CurrentCharacter.value.StatsWeights[percentageStatType]
      if (percentageWeight && percentageWeight > 0) {
        w = percentageWeight
      }
    }
  }

  return w
}

function GetPercentageStatType(statType: string): string | null {
  switch (statType) {
    case 'ATTACK':
      return 'ATTACK_PERCENTAGE'
    case 'HP':
      return 'HP_PERCENTAGE'
    case 'DEF':
      return 'DEF_PERCENTAGE'
    default:
      return null
  }
}

function IsStatWantedLine(stat: IStatistic) {
  const w = GetWeight(stat) || 0

  return w >= 0.5
}
</script>

<template>
  <UCard
    class="flex flex-col overflow-clip"
    :ui="{
      root: 'rounded-none rounded-br-xl border-0',
    }"
  >
    <BorderLines />
    <div v-motion-pop :delay="500" class="mx-auto w-full flex items-center justify-center gap-1">
      <NuxtImg v-for="idx in GetRarityAsNumber(CurrentCharacter.Rarity)" :key="idx" src="/images/icons/Icon_StarBig.webp" class="h-6 w-6 object-cover" fit="cover" />
    </div>
    <h1 v-motion-pop :delay="500" class="mt-2 w-full text-center text-2xl">
      {{ t(`${CurrentCharacter.Id}_name`) }}
    </h1>
    <UBadge v-motion-pop :delay="500" color="primary" variant="soft" class="mx-auto text-gray-300 w-min flex items-center gap-1 text-nowrap">
      <p>{{ `${t('label_level')} ${CurrentCharacter.Level}` }}</p>
      <span>·</span>
      <p>S{{ GetSequenceLevel(CurrentCharacter) }}</p>
    </UBadge>

    <div class="mx-auto my-4 h-[1px] w-full rounded-full bg-white/14" />
    <div class="flex flex-col">
      <div class="w-full flex flex-col items-start gap-1 relative">
        <div
          v-for="(st, idx) in Stats"
          :key="`${st.Type}-${st.Value}`"
          v-motion-slide-left
          :delay="500 + (idx * 50)"
          class="w-full"
        >
          <StatLine
            :stat="st"
            :show-line="true"
            :is-wanted-color="GetStatWantedColor(st)"
            :show-wanted-highlight="true"
            :show-wanted-line="IsStatWantedLine(st)"
            :weight="CurrentCharacter.StatsWeights?.[st.Type] ?? 0"
          />
        </div>
      </div>
      <USeparator color="neutral" class="w-full my-4" />
      <div v-motion-slide-bottom :delay="500" class="w-full flex text-lg items-end justify-between">
        <p>
          {{ t('label_character_score') }}
        </p>
        <div class="flex flex-row items-center justify-end">
          <span class="font-semibold">
            {{ Score.Score.toFixed(2) }}
          </span>
          <USeparator color="neutral" orientation="vertical" class="h-4 mx-2" />
          <span :class="GetCharacterScoreNoteColor" class="inline-block font-semibold">
            {{ Score.Note }}
          </span>
        </div>
      </div>
    </div>
  </UCard>
</template>
