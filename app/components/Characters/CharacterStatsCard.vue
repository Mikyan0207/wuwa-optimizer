<script setup lang="ts">
import type IStatistic from '~/Core/Interfaces/IStatistic'
import type { Character } from '~/Core/Models/Character'
import { Rarity } from '~/Core/Enums/Rarity'
import { CharacterStatsSystem } from '~/Core/Systems/CharacterStatsSystem'
import { type ICharacterRatingResult, TOTAL_SCORE_GRADES } from '~/Core/Systems/RatingSystem'

const props = defineProps<{
  character: Character
  score: ICharacterRatingResult
}>()

const StatsCalculator = new CharacterStatsSystem()
const CharacterStats = computed<IStatistic[]>(() => StatsCalculator.CalculateTotalStats(props.character))

const GetCharacterScoreNoteColor = computed(() => {
  return TOTAL_SCORE_GRADES.find(x => x.Grade === props.score.Note)?.Color
})

const GetRarityAsNumber = computed(() => {
  switch (props.character.Rarity) {
    case Rarity.TWO_STARS:
      return 2
    case Rarity.THREE_STARS:
      return 3
    case Rarity.FOUR_STARS:
      return 4
    case Rarity.FIVE_STARS:
      return 5
  }

  return 1
})
</script>

<template>
  <div class="">
    <Card class="flex flex-col">
      <div class="mx-auto flex items-center gap-1">
        <NuxtImg v-for="idx in GetRarityAsNumber" :key="idx" src="/images/icons/Icon_StarBig.webp" class="h-6 w-6 object-cover" fit="cover" />
      </div>
      <h1 class="mt-2 w-full text-center text-2xl">
        {{ character.Name }}
      </h1>
      <div class="mx-auto max-w-10em flex items-center justify-evenly gap-1 text-xs">
        <p>Lv. {{ character.Level }}</p>
        <span>·</span>
        <p>S{{ character.GetSequenceLevel() }}</p>
      </div>
      <!-- <div class="mx-auto w-full flex items-center justify-between gap-2">
        <NuxtImg :src="`${character.GetTypeIcon()}`" class="h-12 w-12 object-cover" fit="cover" />
        <NuxtImg :src="`${character.GetRarityIcon()}`" class="h-auto w-24 object-cover" fit="cover" />
        <NuxtImg :src="`${character.GetWeaponTypeIcon()}`" class="h-12 w-12 object-cover" fit="cover" />
      </div> -->

      <div class="mx-auto my-4 h-1px w-full rounded-full bg-white/14" />
      <div class="flex flex-col">
        <div class="w-full flex flex-col items-start gap-1">
          <StatLine v-for="st in CharacterStats" :key="`${st.Type}-${st.Value}`" :stat="st" :show-line="true" />
        </div>
        <div class="mx-auto my-3 h-1px w-full rounded-full bg-white/14" />
        <div class="w-full flex items-center justify-evenly">
          <p>Character Score</p>
          <div>
            {{ score.Score.toFixed(1) }} (<div :class="GetCharacterScoreNoteColor" class="inline-block font-semibold">
              {{ score.Note }}
            </div>)
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>
