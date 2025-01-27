<script setup lang="ts">
import type IStatistic from '~/Core/Interfaces/IStatistic'
import type { Character } from '~/Core/Models/Character'
import { CharacterStatsSystem } from '~/Core/Systems/CharacterStatsSystem'
import { type ICharacterRatingResult, TOTAL_SCORE_GRADES } from '~/Core/Systems/RatingSystem'

const props = defineProps<{
  character: Character
  score: ICharacterRatingResult
}>()

const CharacterStats = ref<IStatistic[]>([])

const GetCharacterScoreNoteColor = computed(() => {
  return TOTAL_SCORE_GRADES.find(x => x.Grade === props.score.Note)?.Color
})

CharacterStats.value = new CharacterStatsSystem()
  .CalculateTotalStats(props.character)
</script>

<template>
  <div class="">
    <Card class="flex flex-col">
      <div class="flex items-center justify-between gap-4">
        <NuxtImg :src="`${character.GetTypeIcon()}`" class="h-3em w-3em object-contain" fit="contain" />
        <NuxtImg :src="`${character.GetRarityIcon()}`" class="h-auto w-6em object-contain" fit="contain" />
        <NuxtImg :src="`${character.GetWeaponTypeIcon()}`" class="h-3em w-3em object-contain" fit="contain" />
      </div>
      <h1 class="my-2 w-full text-center text-2xl">
        {{ character.Name }}
      </h1>
      <div class="mx-auto max-w-10em flex items-center justify-evenly gap-3">
        <p>Lv. {{ character.Level }}</p>
        <span>·</span>
        <p>S{{ character.GetSequenceLevel() }}</p>
      </div>
      <div class="mx-auto my-3 h-1px w-full rounded-full bg-gray-600" />
      <div class="flex flex-col">
        <div class="w-full flex flex-col items-start gap-1">
          <StatLine v-for="st in CharacterStats" :key="st.Type" :stat="st" />
        </div>
        <div class="mx-auto my-3 h-1px w-full rounded-full bg-gray-600" />
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
