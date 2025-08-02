<script setup lang="ts">
import type IStatistic from '~/Core/Interfaces/Statistic'
import { UBadge } from '#components'
import { GetSequenceLevel } from '~/Core/Utils/CharacterUtils'
import { GetRarityAsNumber } from '~/Core/Utils/RarityUtils'

const { t } = useI18n()
const { CurrentCharacter, Stats, Score } = useCharacterContext()

const GetCharacterScoreNoteColor = computed(() => {
  return TOTAL_SCORE_GRADES.find(x => x.Grade === Score.value.Note)?.Color
})

function IsStatWanted(stat: IStatistic) {
  if (CurrentCharacter.value.StatsWeights === undefined) {
    return ''
  }

  const w = CurrentCharacter.value.StatsWeights[stat.Type]

  if (w === undefined) {
    return ''
  }

  switch (true) {
    case (w > 0 && w <= 0.25):
      return 'text-green-500'
    case (w > 0.25 && w <= 0.5):
      return 'text-blue-500'
    case (w > 0.5 && w <= 0.75):
      return 'text-purple-500'
    case (w > 0.75 && w <= 1.0):
      return 'text-amber-500'
    default:
      return ''
  }
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
          class="w-full flex items-center justify-between"
        >
          <StatLine
            :stat="st"
            :show-line="true"
            :is-wanted-color="IsStatWanted(st)"
            :show-wanted-highlight="true"
            class="flex-1 px-2 py-1"
          />
        </div>
      </div>
      <div class="mx-auto my-4 h-[1px] w-full rounded-full bg-white/14" />
      <div v-motion-slide-bottom :delay="500" class="w-full flex text-lg items-center justify-evenly">
        <p>
          {{ t('label_character_score') }}
        </p>
        <div>
          {{ Score.Score.toFixed(2) }} (<div :class="GetCharacterScoreNoteColor" class="inline-block font-semibold">
            {{ Score.Note }}
          </div>)
        </div>
      </div>
    </div>
  </UCard>
</template>
