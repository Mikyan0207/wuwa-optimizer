<script setup lang="ts">
import type { Action } from '~/Core/Interfaces/Action'
import type { Section } from '~/Core/Interfaces/Section'
import { GetCharacterIcon } from '~/Core/Utils/CharacterUtils'

defineProps<{
  section: Section
  action: Action
  sectionIndex: number
  actionIndex: number
}>()

const { t } = useI18n()
</script>

<template>
  <div>
    <div
      class="w-full relative group p-3 pl-8 bg-neutral-800/20 rounded-sm border border-neutral-600/30 transition-all duration-200"
    >
      <div class="flex items-center gap-4">
        <div class="flex-shrink-0">
          <NuxtImg
            v-if="action.Character1"
            :src="GetCharacterIcon(action.Character1)"
            class="w-16 h-16 border border-neutral-600 object-cover rounded-sm"
          />
        </div>

        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-3 mb-2">
            <span v-if="action.Character1" class="font-semibold text-white text-sm">
              {{ t(`${action.Character1.Id}_name`) }}
            </span>
          </div>

          <div class="flex items-center gap-2">
            <span v-if="action.Skill" class="px-3 py-1 bg-neutral-700/50 text-neutral-200 text-xs rounded-sm border border-neutral-600">
              {{ action.Skill.Id === 'Echo_Skill' ? 'Echo Skill' : t(`skill_${action.Skill.Id.toLowerCase()}`) }}
            </span>

            <span v-if="action.RepeatCount && action.RepeatCount > 1" class="px-2 py-1 bg-yellow-600/20 text-yellow-300 text-xs font-medium rounded-sm border border-yellow-500/30">
              ×{{ action.RepeatCount }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
