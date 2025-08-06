<script setup lang="ts">
interface BorderLinesProps {
  count?: 1 | 2 | 3
  color?: string
}

const props = withDefaults(defineProps<BorderLinesProps>(), {
  count: 1,
  color: 'border-gold-600',
})

const ZIndex = 'z-50'

const BorderClasses = computed(() => ({
  Base: `${ZIndex} absolute inset-0 border pointer-events-none`,
  Color: props.color,
}))

const BorderConfigs = computed(() => [
  { Class: 'rounded-br-xl' },
  { Class: 'rounded-br-3xl' },
  { Class: 'rounded-br-[2rem]' },
])

const ActiveBorders = computed(() =>
  BorderConfigs.value.slice(0, props.count),
)
</script>

<template>
  <div
    v-for="(border, index) in ActiveBorders"
    :key="index"
    :class="[BorderClasses.Base, BorderClasses.Color, border.Class]"
  />
</template>
