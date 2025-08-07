<script setup lang="ts">
import { useBuild } from '~/composables/builds/UseBuild'
import { GetTotalGradeColor } from '~/composables/calculators/UseScoreCalculator'
import { useCharacter } from '~/composables/characters/UseCharacter'
import { ScoreGrade } from '~/Core/Enums/ScoreGrade'
import { GetSequenceLevel } from '~/Core/Utils/CharacterUtils'
import { GetRarityAsNumber } from '~/Core/Utils/RarityUtils'

const { t } = useI18n()
const { CurrentCharacter } = useCharacter()
const { Stats, DefaultBuild } = useBuild()

const GetCharacterScoreNoteColor = computed(() => {
  return GetTotalGradeColor(DefaultBuild.value.Note || ScoreGrade.F)
})
</script>

<template>
  <UCard
    :ui="{
      root: 'rounded-none rounded-br-xl border-0',
    }"
  >
    <MBorderLines />
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

    <USeparator color="neutral" class="w-full my-4" />
    <MStatList
      :stats="Stats"
      :stats-count="Stats.length"
      :weights="CurrentCharacter.StatsWeights!"
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
          {{ DefaultBuild.Score?.toFixed(2) ?? 0 }}
        </span>
        <USeparator color="neutral" orientation="vertical" class="h-4 mx-2" />
        <span :class="GetCharacterScoreNoteColor" class="inline-block font-semibold">
          {{ DefaultBuild.Note || ScoreGrade.F }}
        </span>
      </div>
    </div>
  </UCard>
</template>
