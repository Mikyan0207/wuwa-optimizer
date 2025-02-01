<script setup lang="ts">
import type { ISkill } from '~/Core/Interfaces/ISkill'
import { STAT_ICONS, STAT_NAMES } from '~/Core/Statistics'

const props = defineProps<{
  skill?: ISkill
  previousSkill?: ISkill
  nextSkill?: ISkill
}>()

const CurrentSkill = ref<ISkill | undefined>(props.skill)
const PreviousSkill = ref<ISkill | undefined>(props.previousSkill)
const NextSkill = ref<ISkill | undefined>(props.nextSkill)

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
  <UTooltip v-else :popper="{ arrow: true, strategy: 'absolute' }" :ui="{ container: 'z-50! group', base: 'h-auto! p-2 text-xs font-normal' }">
    <template #text>
      <div v-if="CurrentSkill.Stat">
        <div class="flex items-center gap-2">
          <div class="text-xs">
            <div class="flex items-center gap-1">
              <NuxtImg class="h-4 w-4" :src="`/images/icons/${STAT_ICONS[CurrentSkill.Stat.Type]}`" />
              <span>{{ STAT_NAMES[CurrentSkill.Stat.Type] }}</span>
            </div>
          </div>
        </div>
        <p class="mt-4 text-xs text-gray-300">
          {{ STAT_NAMES[CurrentSkill.Stat.Type].replace(' %', '') }} increased by <span class="text-amber-4">{{ CurrentSkill.Stat.Value.toFixed(2) }}%</span>
        </p>
      </div>
    </template>
    <div
      class="min-h-2em min-w-2em cursor-pointer border-2 rounded-full bg-black/66 transition-all duration-150"
      :class="{ 'border-white/75': CurrentSkill.Unlocked, 'border-white/14 hover:border-white/74': !CurrentSkill.Unlocked }"
      @click.prevent="ToggleSkill()"
    >
      <NuxtImg :src="`/images/icons/${CurrentSkill.Icon}`" class="p-1" />
    </div>
  </UTooltip>
</template>
