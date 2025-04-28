<script setup lang="ts">
const props = defineProps<{
  value: number
  text: string
}>()

const TextColor = computed(() => {
  return ECHOES_SCORE_GRADES.find(x => x.Grade?.toString() === props.text)?.Color
})
</script>

<template>
  <span :class="TextColor">{{ text }}</span>
</template>
