<script setup lang="ts">
import { GetTotalGradeColor } from '~/composables/calculators/UseScoreCalculator'
import { ScoreGrade } from '~/Core/Enums/ScoreGrade'
import { GetRarityAsNumber } from '~/Core/Utils/RarityUtils'

const CurrentCharacterStore = useCurrentCharacterStore()

const { CurrentCharacter, CurrentBuild, CurrentStats, Score, Note } = storeToRefs(CurrentCharacterStore)
const { t } = useI18n()

const GetCharacterScoreNoteColor = computed(() => {
  return GetTotalGradeColor(CurrentBuild.value?.Note || ScoreGrade.F)
})
</script>

<template>
  <MCard
    v-if="CurrentCharacter"
    :border-lines-count="3"
  >
    <div class="flex flex-col gap-1 mb-3">
      <div class="flex justify-center items-center gap-2">
        <h1 v-motion-pop :delay="500" class="text-2xl font-semibold">
          {{ t(`${CurrentCharacter.Id}_name`) }}
        </h1>
      </div>

      <div v-motion-pop :delay="500" class="flex items-center justify-center">
        <NuxtImg v-for="idx in GetRarityAsNumber(CurrentCharacter.Rarity)" :key="idx" src="/images/icons/Icon_StarBig.webp" class="h-4 w-4 object-cover" fit="cover" />
      </div>
    </div>

    <MStatList
      :stats="CurrentStats"
      :stats-count="CurrentStats.length"
      :weights="CurrentCharacter.StatsWeights"
      :show-roll-value="true"
      :show-wanted-highlight="true"
    />

    <USeparator color="neutral" class="w-full my-4" />
    <div v-motion-slide-bottom :delay="500" class="w-full flex text-lg items-end justify-between">
      <p>
        {{ t('label_character_score') }}
      </p>
      <div class="flex flex-row items-center justify-end">
        <span class="font-semibold">
          {{ Score?.toFixed(2) ?? 0 }}
        </span>
        <USeparator color="neutral" orientation="vertical" class="h-4 mx-2" />
        <span :class="GetCharacterScoreNoteColor" class="inline-block font-semibold">
          {{ Note || ScoreGrade.F }}
        </span>
      </div>
    </div>
  </MCard>
</template>
