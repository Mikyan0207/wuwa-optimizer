<script setup lang="ts">
import { GetEchoGradeColor } from '~/composables/calculators/UseScoreCalculator'
import { ScoreGrade } from '~/Core/Enums/ScoreGrade'

interface EchoScoreProps {
  show?: boolean
  score?: number | undefined
  note?: ScoreGrade | undefined
}

const props = withDefaults(defineProps<EchoScoreProps>(), {
  show: true,
})

const TextColor = computed(() => {
  if (!props.note)
    return ''

  return GetEchoGradeColor(props.note)
})
</script>

<template>
  <div v-if="show" class="w-full flex flex-row items-end gap-4 font-semibold">
    <div class="w-full flex items-center justify-between gap-12">
      <div class="flex items-center gap-2">
        <span>Score</span>
      </div>
      <div class="flex items-center">
        <span>{{ (score ?? 0).toFixed(2) }}</span>
        <USeparator color="neutral" orientation="vertical" class="h-4 mx-2" />
        <span :class="TextColor">{{ note ?? ScoreGrade.F }}</span>
      </div>
    </div>
  </div>
</template>
