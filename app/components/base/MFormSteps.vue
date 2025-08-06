<script setup lang="ts">
interface FormStep {
  id: string
  title: string
  description: string
  icon?: string
}

interface FormStepsProps {
  steps: FormStep[]
  currentStep: number
  showNavigation?: boolean
}

const props = withDefaults(defineProps<FormStepsProps>(), {
  showNavigation: true,
})

const emit = defineEmits<{
  stepChange: [step: number]
  next: []
  previous: []
  submit: []
}>()

const CurrentStep = computed({
  get: () => props.currentStep,
  set: value => emit('stepChange', value),
})

function NextStep() {
  if (CurrentStep.value < props.steps.length - 1) {
    emit('stepChange', CurrentStep.value + 1)
  }
}

function PreviousStep() {
  if (CurrentStep.value > 0) {
    emit('stepChange', CurrentStep.value - 1)
  }
}

const IsFormValid = computed(() => {
  return true
})
</script>

<template>
  <div class="h-full flex flex-col">
    <div class="flex-1 overflow-hidden">
      <slot />
    </div>

    <div v-if="showNavigation" class="sticky bottom-0 bg-black/80 backdrop-blur-md border-t border-white/10 p-4">
      <div class="flex justify-between items-center">
        <UButton
          v-if="CurrentStep > 0"
          color="neutral"
          variant="outline"
          label="Previous"
          @click="PreviousStep"
        />
        <div v-else />

        <UButton
          v-if="CurrentStep < steps.length - 1"
          color="primary"
          variant="soft"
          label="Next"
          :disabled="!IsFormValid"
          @click="NextStep"
        />
        <UButton
          v-else
          color="primary"
          variant="solid"
          label="Submit"
          type="submit"
          :disabled="!IsFormValid"
          @click="$emit('submit')"
        />
      </div>
    </div>
  </div>
</template>
