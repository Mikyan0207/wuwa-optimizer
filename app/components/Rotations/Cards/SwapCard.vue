<script setup lang="ts">
import type { Action } from '~/Core/Interfaces/Action'
import type { Section } from '~/Core/Interfaces/Section'
import { GetCharacterIcon } from '~/Core/Utils/CharacterUtils'

defineProps<{
  section: Section
  action: Action
}>()
</script>

<template>
  <USeparator
    v-motion-slide-left
    :delay="100 * action.Index"
    size="sm"
    color="neutral"
  >
    <div class="flex items-center w-38 justify-center gap-4 my-4">
      <NuxtImg v-if="action.Character1" :src="GetCharacterIcon(action.Character1)" class="w-12 h-12 object-cover rounded-full" />
      <USkeleton v-else class="w-12 h-12 rounded-full" />
      <UIcon name="carbon:arrow-right" size="xl" class="text-2xl" />
      <NuxtImg v-if="action.Character2" :src="GetCharacterIcon(action.Character2)" class="w-12 h-12 object-cover rounded-full" />
      <USkeleton v-else class="w-12 h-12 rounded-full" />
    </div>
  </USeparator>
</template>
