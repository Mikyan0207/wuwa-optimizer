<script setup lang="ts">
import type { Action } from '~/Core/Interfaces/Action'
import type { Section } from '~/Core/Interfaces/Section'
import { GetCharacterIcon } from '~/Core/Utils/CharacterUtils'
import SwapEditForm from '../Forms/SwapEditForm.vue'

defineProps<{
  section: Section
  action: Action
  sectionIndex: number
  actionIndex: number
}>()

const RotationBuilderStore = useRotationBuilderStore()
const IsHovered = ref<boolean>(false)
const ShowEditSlideover = ref<boolean>(false)
</script>

<template>
  <div>
    <div
      v-motion-slide-visible-once-left
      :delay="100 * action.Index"
      class="w-full relative cursor-grab active:cursor-grabbing group bg-neutral-800/20 rounded-sm border border-neutral-600/40 hover:border-neutral-500/60 transition-all duration-200"
      draggable="true"
      @mouseenter="IsHovered = true"
      @mouseleave="IsHovered = false"
      @touchstart="IsHovered = true"
      @blur="IsHovered = false"
    >
      <div v-if="IsHovered" class="absolute right-4 top-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <UButton
          icon="i-carbon-pen"
          size="sm"
          color="primary"
          variant="ghost"
          @click="ShowEditSlideover = true"
        />
        <UButton
          icon="i-lucide-x"
          size="sm"
          color="error"
          variant="ghost"
          @click="RotationBuilderStore.RemoveAction(sectionIndex, actionIndex)"
        />
      </div>

      <div class="flex items-center justify-center h-20">
        <div class="flex items-center gap-8">
          <div class="flex items-center">
            <NuxtImg
              v-if="action.Character1"
              :src="GetCharacterIcon(action.Character1)"
              class="w-16 h-16 object-cover rounded-sm border border-neutral-600"
            />
            <USkeleton v-else class="w-16 h-16 rounded-sm" />
          </div>

          <div class="flex items-center">
            <UIcon name="i-carbon-arrow-right" class="text-neutral-400 text-2xl" />
          </div>

          <div class="flex items-center">
            <NuxtImg
              v-if="action.Character2"
              :src="GetCharacterIcon(action.Character2)"
              class="w-16 h-16 object-cover rounded-sm border border-neutral-600"
            />
            <USkeleton v-else class="w-16 h-16 rounded-sm" />
          </div>
        </div>
      </div>
    </div>

    <USlideover
      v-model:open="ShowEditSlideover"
      :overlay="true"
      variant="subtle"
      color="neutral"
      side="right"
      :transition="true"
      class="w-full md:w-1/2 lg:w-1/3 max-w-full"
      close-icon="i-lucide-arrow-right"
    >
      <template #content>
        <SwapEditForm
          :section="section"
          :action="action"
          :section-index="sectionIndex"
          :action-index="actionIndex"
          @close="ShowEditSlideover = false"
        />
      </template>
    </USlideover>
  </div>
</template>
