<script setup lang="ts">
interface CardProps {
  padding?: 'default' | 'compact' | 'none' | 'detailed'

  showBorderLines?: boolean
  borderLinesCount?: 1 | 2 | 3

  clickable?: boolean
  animated?: boolean
  draggable?: boolean
}

const props = withDefaults(defineProps<CardProps>(), {
  padding: 'default',
  showBorderLines: true,
  borderLinesCount: 1,
  clickable: false,
  animated: true,
  draggable: false,
})

const CardClasses = computed(() => ({
  'group relative transition-all duration-100': true,
  'cursor-pointer': props.clickable,
  'cursor-grab active:cursor-grabbing': props.draggable,
  'select-none': true,
  'hover:scale-105': props.clickable && props.animated,
}))

const ContentClasses = computed(() => {
  const baseClasses = 'w-full h-full flex flex-col gap-2'

  const paddingClasses = {
    default: 'p-4',
    compact: 'p-2',
    none: 'p-0',
    detailed: 'p-6',
  }

  return `${baseClasses} ${paddingClasses[props.padding]}`
})
</script>

<template>
  <UCard
    :class="CardClasses"
    :ui="{
      body: 'p-0 sm:p-0 w-full h-full',
    }"
  >
    <MBorderLines
      v-if="showBorderLines"
      :count="borderLinesCount"
    />
    <div :class="ContentClasses">
      <slot />
    </div>
  </UCard>
</template>
