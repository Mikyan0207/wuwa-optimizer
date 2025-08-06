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
  <div class="flex">
    <p>
      {{ (score).toFixed(2) }}
    </p>
    <USeparator color="neutral" orientation="vertical" class="h-4 mx-2" />
    <span :class="TextColor">{{ grade }}</span>
  </div>
</template>
