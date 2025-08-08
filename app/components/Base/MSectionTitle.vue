<script setup lang="ts">
interface SectionTitleProps {
  title: string
  color?: string
}

const props = withDefaults(defineProps<SectionTitleProps>(), {
  color: 'blue',
})

const ColorClass = computed(() => {
  return `bg-${props.color}-400`
})
</script>

<template>
  <div class="flex items-center gap-2">
    <div class="w-8 h-1 rounded-full" :class="ColorClass" />
    <span class="text-xl font-semibold text-neutral-200 uppercase tracking-wide">{{ title }}</span>
  </div>
</template>
