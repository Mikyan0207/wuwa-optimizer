<script setup lang="ts">
import type { Action } from '~/Core/Interfaces/Action'
import type { Section } from '~/Core/Interfaces/Section'
import { GetCharacterIcon } from '~/Core/Utils/CharacterUtils'

defineProps<{
  section: Section
  action: Action
}>()

const RotationBuilderStore = useRotationBuilderStore()

const { t } = useI18n()
const IsHovered = ref<boolean>(false)
const ShowEditModal = ref<boolean>(false)
</script>

<template>
  <UCard
    v-motion-slide-left
    class="w-full relative"
    :delay="100 * action.Index"
    @mouseenter="IsHovered = true"
    @mouseleave="IsHovered = false"
    @touchstart="IsHovered = true"
    @blur="IsHovered = false"
  >
    <div class="flex items-center w-full gap-8 ">
      <div v-if="IsHovered" class="absolute -top-2 -right-2 p-3 flex items-center gap-2">
        <UButton icon="i-carbon-pen" size="sm" color="success" variant="subtle" @click="ShowEditModal = true" />
        <UButton icon="i-lucide-x" size="sm" color="error" variant="subtle" @click="RotationBuilderStore.RemoveCharacterAction(section.Index, action.Index)" />
      </div>
      <p class="font-bold text-2xl font-noto tracking-tight">
        {{ action.Order }}
      </p>
      <div class="flex items-center w-lg gap-2">
        <NuxtImg
          v-if="action.Character1"
          :src="GetCharacterIcon(action.Character1)"
          class="w-12 h-12 border-2 border-neutral-600 object-cover rounded-full"
        />
        <USkeleton v-else class="w-12 h-12 rounded-full" />
        <p v-if="action.Character1" class="text-lg">
          {{ t(`${action.Character1.Id}_name`) }}
        </p>
        <USkeleton v-else class="w-16 h-2 rounded-xs" />
      </div>
      <div class="flex items-center gap-2 w-full justify-between">
        <div class="flex items-center gap-2">
          <UBadge v-if="action.Skill" color="neutral" variant="subtle" :label="t(`skill_${action.Skill.Id.toLowerCase()}`)" />
          <USkeleton v-else class="w-24 h-3 rounded-xs" />
          <p v-if="action.Character1 && action.Skill">
            {{ t(`${action.Character1.Id}_${action.Skill.Id.toLowerCase()}`) }}
          </p>
          <USkeleton v-else class="w-36 h-3 rounded-xs" />
        </div>
        <p class="text-sm text-gray-300">
          {{ action.Description }}
        </p>
      </div>
    </div>
  </UCard>
  <UModal
    v-model:open="ShowEditModal"
    :overlay="true"
    variant="subtle"
    color="neutral"
    :ui="{
      content: 'xl:min-w-4xl w-5xl min-w-5xl xl:w-4xl rounded-xs border-0 backdrop-blur-none shadow-none! ring-0! ',
    }"
  />
</template>
