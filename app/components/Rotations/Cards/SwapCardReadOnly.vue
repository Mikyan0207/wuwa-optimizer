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
</script>

<template>
  <div>
    <div
      class="w-full relative group pl-8 py-2 bg-neutral-800/20 rounded-sm border border-neutral-600/40 transition-all duration-200"
    >
      <div class="flex items-center justify-center h-20">
        <div class="flex items-center gap-8">
          <div class="flex items-center">
            <NuxtImg
              v-if="action.Character1"
              :src="GetCharacterIcon(action.Character1)"
              class="w-16 h-16 object-cover rounded-sm border border-neutral-600"
            />
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
