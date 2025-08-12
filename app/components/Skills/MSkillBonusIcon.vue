<script setup lang="ts">
import type Character from '~/Core/Interfaces/Character'
import type Skill from '~/Core/Interfaces/Skill'
import { STAT_ICONS } from '~/Core/Statistics'

interface SkillBonusIconProps {
  skill?: Skill
  character: Character
}

const props = defineProps<SkillBonusIconProps>()

const emit = defineEmits<{
  skillToggle: [skill: Skill]
}>()

const { t } = useI18n()

const IconPath = computed(() => {
  if (!props.skill?.Stat)
    return ''

  return `/images/icons/${STAT_ICONS[props.skill.Stat.Type]}`
})

const StatName = computed(() => {
  if (!props.skill?.Stat)
    return ''

  return t(`label_stat_${props.skill.Stat.Type.toLowerCase()}`)
})

const StatValue = computed(() => {
  if (!props.skill?.Stat)
    return ''

  return `${props.skill.Stat.Value.toFixed(2)}%`
})

const IconClasses = computed(() => {
  const base = 'min-h-[3em] min-w-[3em] h-[3em] w-[3em] cursor-pointer border-[1.5px] rounded-full bg-black/66 transition-all duration-150'

  if (!props.skill)
    return base

  const border = props.skill.Unlocked
    ? 'border-gold-500'
    : 'border-white/14 hover:border-white/75'

  return `${base} ${border}`
})

function HandleSkillToggle() {
  if (!props.skill)
    return

  emit('skillToggle', props.skill)
}
</script>

<template>
  <USkeleton
    v-if="!skill"
    class="min-h-[3em] min-w-[3em] rounded-full bg-white/7"
    :ui="{ base: '' }"
  />

  <UTooltip
    v-else
    arrow
    :delay-duration="0"
  >
    <template #content>
      <div v-if="skill.Stat">
        <div class="flex items-center gap-1">
          <NuxtImg
            class="h-4 w-4 object-contain"
            :src="IconPath"
          />
          <span class="text-xs">{{ StatName }}</span>
        </div>

        <p class="mt-2 text-xs text-gray-300">
          <i18n-t keypath="skill_description_template" scope="global">
            <template #type>
              <span class="text-amber-500">{{ StatName }}</span>
            </template>
            <template #value>
              <span class="text-amber-500">{{ StatValue }}</span>
            </template>
          </i18n-t>
        </p>
      </div>
    </template>

    <div
      :class="IconClasses"
      @click.prevent="HandleSkillToggle"
    >
      <NuxtImg
        :src="IconPath"
        class="p-1 w-full h-full object-contain"
      />
    </div>
  </UTooltip>
</template>
