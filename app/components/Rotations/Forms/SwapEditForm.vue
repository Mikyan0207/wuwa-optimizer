<script setup lang="ts">
import type { Action } from '~/Core/Interfaces/Action'
import type { Section } from '~/Core/Interfaces/Section'
import CharacterSelectionCard from '../Cards/CharacterSelectionCard.vue'

interface Props {
  section: Section
  action: Action
  sectionIndex: number
  actionIndex: number
}

const props = defineProps<Props>()
const emit = defineEmits<{ close: [] }>()
const RotationBuilderStore = useRotationBuilderStore()

const EditedAction = ref<Action>({
  ...props.action,
  Order: props.action.Order || 1,
})

const AvailableCharacters = computed(() => RotationBuilderStore.SelectedTeam)

function SaveChanges() {
  const section = RotationBuilderStore.Steps[props.sectionIndex]
  if (section && section.Actions[props.actionIndex]) {
    section.Actions[props.actionIndex] = { ...EditedAction.value }
  }
  emit('close')
}

function CancelEditing() {
  emit('close')
}

function DeleteAction() {
  RotationBuilderStore.RemoveAction(props.sectionIndex, props.actionIndex)
  emit('close')
}
</script>

<template>
  <div class="h-full flex flex-col bg-black min-h-0">
    <div class="sticky top-0 z-10 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div class="flex items-center justify-between px-4 py-3">
        <div class="flex items-center gap-3">
          <h2 class="text-lg font-semibold text-white flex items-center gap-2">
            <UIcon name="i-carbon-loop" class="h-5 w-5 text-warning-400" />
            Edit Character Swap
          </h2>
          <UBadge color="warning" variant="subtle" label="Swap" />
        </div>
        <UButton
          icon="i-carbon-close"
          color="neutral"
          variant="ghost"
          size="sm"
          @click="CancelEditing"
        />
      </div>
    </div>

    <div class="flex-1 overflow-y-auto p-4 space-y-6">
      <CharacterSelectionCard
        :available-characters="AvailableCharacters"
        :selected-character="EditedAction.Character1"
        label="From Character"
        :allow-deselect="true"
        @update:selected-character="EditedAction.Character1 = $event"
      />

      <CharacterSelectionCard
        :available-characters="AvailableCharacters"
        :selected-character="EditedAction.Character2"
        label="To Character"
        :allow-deselect="true"
        @update:selected-character="EditedAction.Character2 = $event"
      />
    </div>

    <div class="sticky bottom-0 bg-black/90 backdrop-blur-md border-t border-white/10 p-4">
      <div class="flex items-center justify-between gap-3">
        <UButton
          color="error"
          variant="outline"
          size="sm"
          @click="DeleteAction"
        >
          <UIcon name="i-carbon-trash-can" class="mr-2" />
          Delete
        </UButton>

        <div class="flex gap-2">
          <UButton
            color="neutral"
            variant="outline"
            size="sm"
            @click="CancelEditing"
          >
            Cancel
          </UButton>
          <UButton
            color="primary"
            size="sm"
            @click="SaveChanges"
          >
            <UIcon name="i-carbon-checkmark" class="mr-2" />
            Save
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
