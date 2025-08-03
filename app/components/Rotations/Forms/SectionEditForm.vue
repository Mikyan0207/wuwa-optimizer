<script setup lang="ts">
import type { Section } from '~/Core/Interfaces/Section'

interface Props {
  section: Section
  sectionIndex: number
}

const props = defineProps<Props>()
const emit = defineEmits<{ close: [] }>()
const RotationBuilderStore = useRotationBuilderStore()

const EditedSection = ref<Section>({
  ...props.section,
})

function SaveChanges() {
  const section = RotationBuilderStore.Steps[props.sectionIndex]
  if (section) {
    section.Title = EditedSection.value.Title
  }
  emit('close')
}

function CancelEditing() {
  emit('close')
}

function DeleteSection() {
  RotationBuilderStore.Steps.splice(props.sectionIndex, 1)
  RotationBuilderStore.Steps.forEach((section, index) => {
    section.Index = index
  })
  emit('close')
}
</script>

<template>
  <div class="h-full flex flex-col bg-black min-h-0">
    <div class="sticky top-0 z-10 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div class="flex items-center justify-between px-4 py-3">
        <div class="flex items-center gap-3">
          <h2 class="text-lg font-semibold text-white flex items-center gap-2">
            <UIcon name="i-carbon-edit" class="h-5 w-5 text-primary-400" />
            Edit Section
          </h2>
          <UBadge color="info" variant="subtle" label="Section" />
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
      <div class="space-y-2">
        <label class="text-sm font-medium text-neutral-300">Section Title</label>
        <UInput
          v-model="EditedSection.Title"
          placeholder="Enter section title..."
          class="w-full"
        />
      </div>

      <div class="space-y-4">
        <div class="p-4 bg-neutral-800/50 rounded-lg border border-neutral-600/30">
          <h3 class="text-sm font-medium text-neutral-300 mb-3">
            Section Information
          </h3>
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span class="text-neutral-400">Actions:</span>
              <span class="text-white ml-2">{{ section.Actions.length }}</span>
            </div>
            <div>
              <span class="text-neutral-400">Index:</span>
              <span class="text-white ml-2">{{ section.Index }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-2">
        <label class="text-sm font-medium text-neutral-300">Actions in this section</label>
        <div class="space-y-2">
          <div
            v-for="(action, index) in section.Actions"
            :key="index"
            class="p-3 bg-neutral-800/30 rounded-lg border border-neutral-600/20"
          >
            <div class="flex items-center gap-3">
              <UBadge
                :color="action.Type === 'ACTION' ? 'success' : 'warning'"
                variant="subtle"
                :label="action.Type"
                size="xs"
              />
              <span class="text-sm text-neutral-300">
                {{ action.Type === 'ACTION' ? 'Character Action' : 'Character Swap' }}
              </span>
              <span v-if="action.Order" class="text-xs text-neutral-400 ml-auto">
                Order: {{ action.Order }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sticky bottom-0 bg-black/90 backdrop-blur-md border-t border-white/10 p-4">
      <div class="flex items-center justify-between gap-3">
        <UButton
          color="error"
          variant="outline"
          size="sm"
          @click="DeleteSection"
        >
          <UIcon name="i-carbon-trash-can" class="mr-2" />
          Delete Section
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
