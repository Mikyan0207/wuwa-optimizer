<script setup lang="ts">
import type Skill from '~/Core/Interfaces/Skill'

interface SkillIconSeparatorProps {
  skill?: Skill
}

const props = defineProps<SkillIconSeparatorProps>()

const SeparatorClasses = computed(() => {
  const base = 'w-[1px] h-full'
  const color = props.skill?.Unlocked
    ? 'bg-gold-500'
    : 'bg-white/7'

  return `${base} ${color}`
})
</script>

<template>
  <div :class="SeparatorClasses" />
</template>
