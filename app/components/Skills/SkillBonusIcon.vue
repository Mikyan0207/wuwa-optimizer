<script setup lang="ts">
import type Skill from '~/Core/Interfaces/Skill'
import { STAT_ICONS } from '~/Core/Statistics'

const props = defineProps<{
  skill?: Skill
  previousSkill?: Skill
  nextSkill?: Skill
}>()

const { t } = useI18n()

const CurrentSkill = ref<Skill | undefined>(props.skill)
const PreviousSkill = ref<Skill | undefined>(props.previousSkill)
const NextSkill = ref<Skill | undefined>(props.nextSkill)

function ToggleSkill() {
  if (!CurrentSkill.value) {
    return
  }

  CurrentSkill.value.Unlocked = !CurrentSkill.value.Unlocked

  if (!CurrentSkill.value.Unlocked && PreviousSkill.value) {
    PreviousSkill.value.Unlocked = false
  }

  if (!CurrentSkill.value.Unlocked && NextSkill.value && NextSkill.value.Unlocked) {
    NextSkill.value.Unlocked = false
  }

  if (CurrentSkill.value.Unlocked && PreviousSkill.value && !PreviousSkill.value.Unlocked) {
    PreviousSkill.value.Unlocked = true
  }
}
</script>

<template>
  <USkeleton
    v-if="!CurrentSkill" class="min-h-2em min-w-2em rounded-full bg-white/7" :ui="{ base: '' }"
  />
  <UTooltip v-else arrow :delay-duration="0">
    <template #content>
      <div v-if="CurrentSkill.Stat">
        <div class="flex items-center gap-2">
          <div class="text-xs">
            <div class="flex items-center gap-1">
              <NuxtImg class="h-4 w-4" :src="`/images/icons/${STAT_ICONS[CurrentSkill.Stat.Type]}`" />
              <span>{{ t(`label_stat_${CurrentSkill.Stat.Type.toLowerCase()}`) }}</span>
            </div>
          </div>
        </div>
        <p class="mt-4 text-xs text-gray-300">
          <i18n-t keypath="skill_description_template">
            <template #type>
              <span class="text-amber-500">{{ t(`label_stat_${CurrentSkill.Stat.Type.toLowerCase()}`) }}</span>
            </template>
            <template #value>
              <span class="text-amber-500">{{ CurrentSkill.Stat.Value.toFixed(2) }}%</span>
            </template>
          </i18n-t>
        </p>
      </div>
    </template>
    <div
      class="min-h-[2em] min-w-[2em] cursor-pointer border-[1.5px] rounded-full bg-black/66 transition-all duration-150"
      :class="{ 'border-gold-500': CurrentSkill.Unlocked, 'border-white/14 hover:border-white/75': !CurrentSkill.Unlocked }"
      @click.prevent="ToggleSkill()"
    >
      <NuxtImg :src="`/images/icons/${CurrentSkill.Icon}`" class="p-1" />
    </div>
  </UTooltip>
</template>
