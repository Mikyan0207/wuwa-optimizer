<script setup lang="ts">
import type { Action } from '~/Core/Interfaces/Action'
import type { Section } from '~/Core/Interfaces/Section'
import { GetCharacterIcon } from '~/Core/Utils/CharacterUtils'

defineProps<{
  section: Section
  action: Action
}>()

const RotationBuilderStore = useRotationBuilderStore()

const IsHovered = ref<boolean>(false)
</script>

<template>
  <USeparator
    v-motion-slide-left
    :delay="100 * action.Index"
    size="sm"
    color="neutral"
    class="relative"
    @mouseenter="IsHovered = true"
    @mouseleave="IsHovered = false"
    @touchstart="IsHovered = true"
    @blur="IsHovered = false"
  >
    <div class="flex items-center w-38 justify-center gap-4 my-4">
      <NuxtImg v-if="action.Character1" :src="GetCharacterIcon(action.Character1)" class="w-12 h-12 object-cover rounded-full" />
      <USkeleton v-else class="w-12 h-12 rounded-full" />
      <UIcon name="carbon:arrow-right" size="xl" class="text-2xl" />
      <NuxtImg v-if="action.Character2" :src="GetCharacterIcon(action.Character2)" class="w-12 h-12 object-cover rounded-full" />
      <USkeleton v-else class="w-12 h-12 rounded-full" />
    </div>
    <div v-if="IsHovered" class="absolute -top-2 -right-2 p-3 flex items-center gap-2">
      <UButton
        icon="i-lucide-x" size="sm" color="error" variant="subtle"
        @click="RotationBuilderStore.RemoveAction(section.Index, action.Index)"
      />
    </div>
  </USeparator>
</template>
