<script setup lang="ts">
const props = defineProps<{
  rotationName: string
  sectionsCount: number
  actionsCount: number
}>()

const emit = defineEmits<{
  'save': []
  'update:rotationName': [name: string]
}>()

const IsEditing = ref(false)
const EditedName = ref(props.rotationName)
const NameInput = ref<HTMLInputElement>()

function HandleSave() {
  emit('save')
}

function StartEditing() {
  IsEditing.value = true
  EditedName.value = props.rotationName
  nextTick(() => {
    NameInput.value?.focus()
  })
}

function SaveName() {
  if (EditedName.value.trim() !== '') {
    emit('update:rotationName', EditedName.value.trim())
  }
  IsEditing.value = false
}

function CancelEditing() {
  EditedName.value = props.rotationName
  IsEditing.value = false
}

watch(() => props.rotationName, (newName) => {
  EditedName.value = newName
})
</script>

<template>
  <UCard class="w-full">
    <div class="flex items-center justify-between mb-4">
      <div class="flex flex-col">
        <div v-if="!IsEditing" class="flex items-center gap-2">
          <h3 class="text-lg font-bold text-white tracking-tight cursor-pointer hover:text-neutral-300 transition-colors" @click="StartEditing">
            {{ rotationName }}
          </h3>
          <UIcon
            name="i-carbon-edit"
            class="w-4 h-4 text-neutral-400 hover:text-neutral-300 cursor-pointer transition-colors"
            @click="StartEditing"
          />
        </div>
        <div v-else class="flex items-center gap-2">
          <UInput
            ref="NameInput"
            v-model="EditedName"
            class="text-lg font-bold tracking-tight"
            @keyup.enter="SaveName"
            @keyup.esc="CancelEditing"
            @blur="SaveName"
          />
        </div>
      </div>

      <UButton
        icon="i-carbon-save"
        size="sm"
        color="primary"
        variant="outline"
        @click="HandleSave"
      >
        Save
      </UButton>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div class="p-3 bg-neutral-800/20 rounded-sm border border-neutral-600/30">
        <div class="flex items-center gap-2">
          <UIcon
            name="i-carbon-layers"
            class="w-4 h-4 text-neutral-400"
          />
          <div class="flex flex-col">
            <span class="text-sm font-medium text-white">
              {{ sectionsCount }}
            </span>
            <span class="text-xs text-neutral-400">
              Sections
            </span>
          </div>
        </div>
      </div>

      <div class="p-3 bg-neutral-800/20 rounded-sm border border-neutral-600/30">
        <div class="flex items-center gap-2">
          <UIcon
            name="i-carbon-play"
            class="w-4 h-4 text-neutral-400"
          />
          <div class="flex flex-col">
            <span class="text-sm font-medium text-white">
              {{ actionsCount }}
            </span>
            <span class="text-xs text-neutral-400">
              Actions
            </span>
          </div>
        </div>
      </div>
    </div>
  </UCard>
</template>
