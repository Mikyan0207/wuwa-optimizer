<script setup lang="ts">
import type { Action } from '~/Core/Interfaces/Action'
import type { Section } from '~/Core/Interfaces/Section'
import { GetCharacterIcon } from '~/Core/Utils/CharacterUtils'
import ActionEditForm from '../Forms/ActionEditForm.vue'

defineProps<{
  section: Section
  action: Action
  sectionIndex: number
  actionIndex: number
}>()

const RotationBuilderStore = useRotationBuilderStore()
const { t } = useI18n()
const IsHovered = ref<boolean>(false)
const ShowEditModal = ref<boolean>(false)
</script>

<template>
  <div>
    <div
      v-motion-slide-visible-once-left
      class="w-full relative cursor-grab active:cursor-grabbing group pl-8 py-2 bg-neutral-800/20 rounded-sm border border-neutral-600/30 hover:border-neutral-500/50 transition-all duration-200"
      :delay="100 * action.Index"
      draggable="true"
      @mouseenter="IsHovered = true"
      @mouseleave="IsHovered = false"
      @touchstart="IsHovered = true"
      @blur="IsHovered = false"
    >
      <div class="flex items-center gap-4">
        <div class="flex-shrink-0">
          <NuxtImg
            v-if="action.Character1"
            :src="GetCharacterIcon(action.Character1)"
            class="w-16 h-16 border border-neutral-600 object-cover rounded-sm"
          />
          <USkeleton v-else class="w-16 h-16 rounded-sm" />
        </div>

        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-3 mb-2">
            <span v-if="action.Character1" class="font-semibold text-white text-sm">
              {{ t(`${action.Character1.Id}_name`) }}
            </span>
            <USkeleton v-else class="w-20 h-4 rounded-sm" />
          </div>

          <div class="flex items-center gap-2">
            <span v-if="action.Skill" class="px-3 py-1 bg-neutral-700/50 text-neutral-200 text-xs rounded-sm border border-neutral-600">
              {{ action.Skill.Id === 'Echo_Skill' ? 'Echo Skill' : t(`skill_${action.Skill.Id.toLowerCase()}`) }}
            </span>
            <USkeleton v-else class="w-24 h-5 rounded-sm" />

            <span v-if="action.RepeatCount && action.RepeatCount > 1" class="px-2 py-1 bg-yellow-600/20 text-yellow-300 text-xs font-medium rounded-sm border border-yellow-500/30">
              ×{{ action.RepeatCount }}
            </span>
          </div>

          <p v-if="action.Description" class="text-xs text-neutral-400 truncate mt-1">
            {{ action.Description }}
          </p>
        </div>

        <div v-if="IsHovered" class="flex-shrink-0 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <UButton
            icon="i-carbon-pen"
            size="xs"
            color="primary"
            variant="ghost"
            @click="ShowEditModal = true"
          />
          <UButton
            icon="i-lucide-x"
            size="xs"
            color="error"
            variant="ghost"
            @click="RotationBuilderStore.RemoveAction(sectionIndex, actionIndex)"
          />
        </div>
      </div>
    </div>

    <USlideover
      v-model:open="ShowEditModal"
      :overlay="true"
      variant="subtle"
      color="neutral"
      side="right"
      :transition="true"
      class="w-full md:w-1/2 lg:w-1/3 max-w-full"
      close-icon="i-lucide-arrow-right"
    >
      <template #content>
        <ActionEditForm
          :section="section"
          :action="action"
          :section-index="sectionIndex"
          :action-index="actionIndex"
          @close="ShowEditModal = false"
        />
      </template>
    </USlideover>
  </div>
</template>
