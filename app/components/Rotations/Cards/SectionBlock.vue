<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
import type { Section } from '~/Core/Interfaces/Section'
import draggable from 'vuedraggable'
import SectionEditForm from '../Forms/SectionEditForm.vue'

const props = defineProps<{
  section: Section
  sectionIndex: number
}>()

const RotationBuilderStore = useRotationBuilderStore()
const ShowEditSlideover = ref(false)

const ActionItems = computed<DropdownMenuItem[]>(() => [
  {
    label: 'Character Action',
    icon: 'i-material-symbols:action-key',
    onSelect: () => RotationBuilderStore.AddCharacterAction(props.sectionIndex),
  },
  {
    label: 'Character Swap',
    icon: 'i-carbon-loop',
    onSelect: () => RotationBuilderStore.AddCharacterSwap(props.sectionIndex),
  },
])

function OnActionMove() {
  nextTick(() => {
    RotationBuilderStore.ReindexAllActions()
  })
}
</script>

<template>
  <div class="w-full">
    <div class="relative">
      <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-500/50 rounded-full" />

      <div class="flex items-center justify-between mb-4 pl-8 bg-neutral-900/40 rounded-sm border border-neutral-700/30 px-3 py-2">
        <div class="flex items-center gap-4">
          <div class="flex flex-col">
            <h3 class="text-lg font-bold text-white tracking-tight">
              {{ section.Title }}
            </h3>
            <div class="flex items-center gap-2">
              <span class="text-xs text-neutral-400">
                Section {{ sectionIndex + 1 }}
              </span>
            </div>
          </div>

          <div class="w-px h-6 bg-neutral-600/50" />

          <div class="flex items-center gap-3">
            <div class="flex flex-col items-center">
              <span class="text-base font-bold text-primary-400">{{ section.Actions.filter(a => a.Type === 'ACTION').length }}</span>
              <span class="text-xs text-neutral-400">Skills</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="text-base font-bold text-neutral-300">{{ section.Actions.filter(a => a.Type === 'SWAP').length }}</span>
              <span class="text-xs text-neutral-400">Swaps</span>
            </div>

            <div class="w-px h-6 bg-neutral-600/50" />

            <div class="flex flex-col items-center">
              <span class="text-base font-bold text-white">{{ section.Actions.length }}</span>
              <span class="text-xs text-neutral-400">Total</span>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <UButton
            icon="i-carbon-pen"
            size="sm"
            color="primary"
            variant="ghost"
            @click="ShowEditSlideover = true"
          />
          <UButton
            icon="i-carbon-trash-can"
            size="sm"
            color="error"
            variant="ghost"
            @click="RotationBuilderStore.RemoveSection(sectionIndex)"
          />
        </div>
      </div>

      <div>
        <draggable
          :list="section.Actions"
          :group="{ name: 'actions', pull: true, put: true }"
          item-key="Index"
          class="space-y-2 min-h-[50px] border-2 border-dashed border-transparent hover:border-neutral-600/30 rounded-sm"
          ghost-class="draggable-ghost"
          chosen-class="draggable-chosen"
          drag-class="draggable-drag"
          @change="OnActionMove"
          @add="OnActionMove"
          @remove="OnActionMove"
        >
          <template #item="{ element: action, index }">
            <ActionCard
              v-if="action && action.Type === 'ACTION'"
              :section="section"
              :action="action"
              :section-index="sectionIndex"
              :action-index="index"
            />
            <SwapCard
              v-else-if="action && action.Type === 'SWAP'"
              :section="section"
              :action="action"
              :section-index="sectionIndex"
              :action-index="index"
            />
          </template>
        </draggable>
      </div>

      <div class="flex justify-center mt-4">
        <UDropdownMenu :items="ActionItems">
          <UButton icon="i-carbon-add" color="primary" variant="outline" size="sm">
            Add Element
          </UButton>
        </UDropdownMenu>
      </div>

      <div class="flex items-center justify-center mt-6">
        <div class="flex items-center gap-4 w-3/4">
          <div class="h-0.5 flex-1 bg-neutral-500/70" />
          <UIcon name="i-carbon-circle-dash" class="text-neutral-400 text-base" />
          <div class="h-0.5 flex-1 bg-neutral-500/70" />
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
        <SectionEditForm
          :section="section"
          :section-index="sectionIndex"
          @close="ShowEditSlideover = false"
        />
      </template>
    </USlideover>
  </div>
</template>
