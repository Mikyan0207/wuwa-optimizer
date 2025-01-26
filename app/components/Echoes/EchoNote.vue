<script setup lang="ts">
const props = defineProps<{
  value: number
  text: string
}>()

const TextColor = computed(() => {
  if (props.value >= 9.0)
    return 'text-red-4'
  if (props.value >= 8.0)
    return 'text-amber-4'
  if (props.value >= 7.0)
    return 'text-purple-4'
  if (props.value >= 6.0)
    return 'text-blue-4'
  if (props.value >= 5.0)
    return 'text-white'
  return 'text-gray-400'
})
</script>

<template>
  <span :class="TextColor">{{ text }}</span>
</template>
