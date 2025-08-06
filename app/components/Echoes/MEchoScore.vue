<script setup lang="ts">
import type { ScoreGrade } from '~/Core/Enums/ScoreGrade'
import { GetEchoGradeColor } from '~/composables/UseScoreCalculator'

const props = defineProps<{
  score: number
  grade: ScoreGrade
}>()

const TextColor = computed(() => {
  return GetEchoGradeColor(props.grade)
})
</script>

<template>
  <div class="w-full flex flex-row items-end gap-4 font-semibold">
    <div class="w-full flex items-center justify-between gap-12">
      <div class="flex items-center gap-2">
        <span>Score</span>
      </div>
      <div class="flex">
        <span>{{ (score).toFixed(2) }}</span>
        <USeparator color="neutral" orientation="vertical" class="h-4 mx-2" />
        <span :class="TextColor">{{ grade }}</span>
      </div>
    </div>
  </div>
</template>
