<script setup lang="ts">
import type { Section } from '~/Core/Interfaces/Section'
import ActionCardReadOnly from './ActionCardReadOnly.vue'
import SwapCardReadOnly from './SwapCardReadOnly.vue'

interface Props {
  sections: Section[]
}

const props = defineProps<Props>()

const totalDuration = computed(() => {
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
  <div class="w-full mx-auto xl:max-w-6xl">
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-4">
        <h3 class="text-lg font-semibold text-white flex items-center gap-2">
          <UIcon name="i-carbon-time" class="text-primary-400" />
          Vertical Timeline
        </h3>
        <div class="flex items-center gap-2 text-sm text-neutral-400">
          <span>{{ FormatTime(totalDuration) }}</span>
          <span>•</span>
          <span>{{ props.sections.length }} sections</span>
          <span>•</span>
          <span>{{ props.sections.reduce((acc, s) => acc + s.Actions.length, 0) }} actions</span>
        </div>
      </div>
    </div>

    <div class="w-full space-y-4">
      <div
        v-for="(section, sectionIndex) in props.sections"
        :key="sectionIndex"
        class="w-full"
      >
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
          </div>

          <div class="pl-8">
            <div class="space-y-2">
              <div
                v-for="(action, actionIndex) in section.Actions"
                :key="`${sectionIndex}-${actionIndex}`"
              >
                <ActionCardReadOnly
                  v-if="action && action.Type === 'ACTION'"
                  :section="section"
                  :action="action"
                  :section-index="sectionIndex"
                  :action-index="actionIndex"
                />
                <SwapCardReadOnly
                  v-else-if="action && action.Type === 'SWAP'"
                  :section="section"
                  :action="action"
                  :section-index="sectionIndex"
                  :action-index="actionIndex"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
