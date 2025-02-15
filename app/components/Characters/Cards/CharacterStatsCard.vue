<script setup lang="ts">
import type Character from '~/Core/Interfaces/Character'
import type IStatistic from '~/Core/Interfaces/Statistic'
import { GetSequenceLevel } from '~/Core/Utils/CharacterUtils'
import { GetRarityAsNumber } from '~/Core/Utils/RarityUtils'

const props = defineProps<{
  character: Character
  score: ICharacterRatingResult
}>()

const { t } = useI18n()

const StatsCalculator = useStatsCalculatorStore()
const CharacterStats = computed<IStatistic[]>(() => StatsCalculator.CalculateTotalStats(props.character.Id, props.character.EquipedWeapon || -1, props.character.EquipedEchoes))

const GetCharacterScoreNoteColor = computed(() => {
  return TOTAL_SCORE_GRADES.find(x => x.Grade === props.score.Note)?.Color
})

function IsStatWanted(stat: IStatistic) {
  if (props.character.StatsWeights === undefined) {
    return ''
  }

  const w = props.character.StatsWeights[stat.Type]

  if (w === undefined) {
    return ''
  }

  if (w === 0.1) {
    // This is a special case for ELEMENT DMG BONUS
    return 'text-amber-400'
  }

  switch (true) {
    case (w > 0 && w <= 0.25):
      return 'text-green-400'
    case (w > 0.25 && w <= 0.5):
      return 'text-blue-400'
    case (w > 0.5 && w <= 0.75):
      return 'text-purple-400'
    case (w > 0.75 && w <= 1.0):
      return 'text-amber-400'
    default:
      return ''
  }
}
</script>

<template>
  <UCard
    class="flex flex-col"
    :ui="{
      root: 'rounded-none rounded-br-xl border-0',
    }"
  >
    <BorderLines />
    <div class="mx-auto w-full flex items-center justify-center gap-1">
      <NuxtImg v-for="idx in GetRarityAsNumber(character.Rarity)" :key="idx" src="/images/icons/Icon_StarBig.webp" class="h-6 w-6 object-cover" fit="cover" />
    </div>
    <h1 class="mt-2 w-full text-center text-2xl">
      {{ t(`${character.Id}_name`) }}
    </h1>
    <div class="mx-auto w-min flex items-center justify-evenly gap-1 text-nowrap text-xs">
      <p>{{ `${t('label_level')} ${character.Level}` }}</p>
      <span>·</span>
      <p>S{{ GetSequenceLevel(character) }}</p>
    </div>

    <div class="mx-auto my-4 h-[1px] w-full rounded-full bg-white/14" />
    <div class="flex flex-col">
      <div class="w-full flex flex-col items-start gap-1">
        <StatLine
          v-for="st in CharacterStats"
          :key="`${st.Type}-${st.Value}`"
          :stat="st"
          :show-line="true"
          :is-wanted-color="IsStatWanted(st)"
        />
      </div>
      <div class="mx-auto my-3 h-[1px] w-full rounded-full bg-white/14" />
      <div class="w-full flex items-center justify-evenly">
        <p>{{ t('label_character_score') }}</p>
        <div>
          {{ score.Score.toFixed(1) }} (<div :class="GetCharacterScoreNoteColor" class="inline-block font-semibold">
            {{ score.Note }}
          </div>)
        </div>
      </div>
    </div>
  </UCard>
</template>
