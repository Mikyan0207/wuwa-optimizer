<script setup lang="ts">
import type Rotation from '~/Core/Interfaces/Rotation'
import { GetCharacterIcon } from '~/Core/Utils/CharacterUtils'

interface Props {
  rotation: Rotation
  onSelect: (rotation: Rotation) => void
}

const props = defineProps<Props>()
const emit = defineEmits<{
  select: [rotation: Rotation]
  delete: [rotation: Rotation]
}>()

const { t } = useI18n()

function HandleSelect() {
  emit('select', props.rotation)
}

function HandleDelete(event: Event) {
  event.stopPropagation() // Empêcher la propagation du clic
  emit('delete', props.rotation)
}
</script>

<template>
  <UCard
    class="cursor-pointer hover:bg-neutral-800/50 transition-colors duration-200 relative group"
    :ui="{ root: 'rounded-none rounded-br-xl' }"
    @click="HandleSelect"
  >
    <!-- Bouton de suppression en haut à droite, visible au hover -->
    <UButton
      icon="i-carbon-trash-can"
      size="sm"
      color="error"
      variant="ghost"
      class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      @click="HandleDelete"
    />

    <div class="flex flex-col gap-3">
      <div class="flex-1">
        <h3 class="text-lg font-semibold text-neutral-100">
          {{ rotation.Title }}
        </h3>
      </div>

      <!-- Team display -->
      <div v-if="rotation.Team && rotation.Team.length > 0" class="flex items-center gap-2">
        <div class="flex items-center gap-2">
          <UTooltip
            v-for="character in rotation.Team"
            :key="character.Id"
            :text="t(`${character.Id}_name`)"
            :arrow="true"
          >
            <NuxtImg
              :src="GetCharacterIcon(character)"
              class="w-10 h-10 border border-neutral-600 object-cover rounded-sm"
              :alt="String(character.Id)"
            />
          </UTooltip>
        </div>
      </div>
    </div>
  </UCard>
</template>
