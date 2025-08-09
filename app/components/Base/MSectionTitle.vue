<script setup lang="ts">
interface SectionTitleProps {
  title: string
  color?: string
  orientation?: 'horizontal' | 'vertical'
}

const props = withDefaults(defineProps<SectionTitleProps>(), {
  color: 'blue',
  orientation: 'horizontal',
})

const ColorClass = computed(() => {
  return `bg-${props.color}-400`
})

const OrientationClass = computed(() => {
  return props.orientation === 'vertical' ? 'w-1 h-5' : 'w-8 h-1'
})
</script>

<template>
  <div class="flex items-center gap-2">
    <div
      class="rounded-full"
      :class="[OrientationClass, ColorClass]"
    />
    <span class="text-xl font-semibold text-neutral-200 uppercase tracking-wide">{{ title }}</span>
  </div>
</template>
