<script setup lang="ts">
interface ProgressProps {
  value: number
  max: number
  activeColor?: string
  inactiveColor?: string
}

withDefaults(defineProps<ProgressProps>(), {
  activeColor: 'bg-green-700',
  inactiveColor: 'bg-gray-600',
})
</script>

<template>
  <div class="flex gap-0.5 w-full">
    <div
      v-for="index in max"
      :key="index"
      class="h-2 flex-1 transition-all duration-200" :class="[
        index === 1 ? 'rounded-l-full' : '',
        index === max ? 'rounded-r-full' : '',
        index <= value
          ? activeColor
          : inactiveColor,
      ]"
    />
  </div>
</template>
