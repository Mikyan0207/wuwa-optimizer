<script setup lang="ts">
import type { Section } from '~/Core/Interfaces/Section'
import { GetCharacterIcon } from '~/Core/Utils/CharacterUtils'

interface Props {
  sections: Section[]
}

const props = defineProps<Props>()
const { t } = useI18n()

const TotalDuration = computed(() => {
  return props.sections.reduce((total, section) => {
    return total + section.Actions.reduce((sectionTotal, action) => {
      return sectionTotal + (action.Type === 'ACTION' ? 2 : 1.5)
    }, 0)
  }, 0)
})

function FormatTime(seconds: number): string {
  const safeSeconds = seconds || 0
  const mins = Math.floor(safeSeconds / 60)
  const secs = Math.floor(safeSeconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}
</script>

<template>
  <div class="flex items-center justify-between mb-4">
    <div class="flex items-center gap-4">
      <h3 class="text-lg font-semibold text-white flex items-center gap-2">
        <UIcon name="i-carbon-time" class="text-primary-400" />
        Rotation Timeline
      </h3>
      <div class="flex items-center gap-2 text-sm text-neutral-400">
        <span>{{ FormatTime(TotalDuration) }}</span>
      </div>
    </div>
  </div>

  <div class="w-full">
    <div class="grid grid-cols-5 gap-0">
      <template v-for="(section, sectionIndex) in props.sections" :key="`section-${sectionIndex}`">
        <template v-for="(action, actionIndex) in section.Actions" :key="`action-${sectionIndex}-${actionIndex}`">
          <div class="flex flex-col my-1 w-full">
            <div class="h-8 bg-primary-500/20 w-full flex items-center justify-center" :class="[actionIndex === section.Actions.length - 1 ? 'border-r-2 border-gold-500/60' : '']">
              <span v-if="actionIndex === 0" class="text-xs font-semibold text-primary-300 text-center">
                {{ section.Title }}
              </span>
            </div>

            <div class="flex-1">
              <div
                class="h-8 transition-all duration-200 cursor-pointer flex items-center justify-center group relative w-full"
                :class="[
                  action.Type === 'ACTION'
                    ? 'bg-neutral-800/80 border-r border-neutral-600'
                    : 'bg-warning-500/20',
                  actionIndex === section.Actions.length - 1 ? 'border-r-2 border-neutral-400' : '',
                ]"
              >
                <div class="flex items-center gap-1">
                  <div v-if="action.Character1" class="flex items-center gap-2">
                    <NuxtImg
                      :src="GetCharacterIcon(action.Character1)"
                      class="w-6 h-6 rounded-sm border border-neutral-500"
                    />
                    <span v-if="action.Type === 'SWAP' && action.Character2" class="text-xs text-neutral-400">
                      →
                    </span>
                    <NuxtImg
                      v-if="action.Type === 'SWAP' && action.Character2"
                      :src="GetCharacterIcon(action.Character2)"
                      class="w-6 h-6 rounded-sm border border-neutral-500"
                    />
                  </div>

                  <span v-if="action.Type === 'ACTION' && action.Skill" class="text-xs font-medium truncate">
                    {{ action.Skill.Id === 'Echo_Skill' ? 'Echo Skill' : t(`skill_${action.Skill.Id.toLowerCase()}`) }}
                  </span>

                  <span v-if="action.RepeatCount && action.RepeatCount > 1" class="px-1 py-0.5 bg-yellow-600/20 text-yellow-300 text-xs font-medium rounded-sm border border-yellow-500/30">
                    ×{{ action.RepeatCount }}
                  </span>
                </div>

                <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-neutral-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                  {{ action.Character1 ? t(`${action.Character1.Id}_name`) : 'Unknown' }}
                  <span v-if="action.Type === 'SWAP' && action.Character2">
                    → {{ t(`${action.Character2.Id}_name`) }}
                  </span>
                  <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-800" />
                </div>
              </div>
            </div>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>
