<script setup lang="ts">
interface FormContainerProps {
  title: string
  icon?: string
  showCloseButton?: boolean
  showSteps?: boolean
  steps?: Array<{
    title: string
    description: string
    isActive: boolean
    isCompleted: boolean
  }>
}

withDefaults(defineProps<FormContainerProps>(), {
  showCloseButton: true,
  showSteps: false,
})

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <div class="h-full flex flex-col bg-black min-h-0">
    <!-- Header -->
    <div class="sticky top-0 z-10 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div class="flex items-center justify-between px-4 py-3">
        <div class="flex items-center gap-6">
          <h2 class="text-lg font-semibold text-white flex items-center gap-2">
            <UIcon v-if="icon" :name="icon" class="h-5 w-5 text-primary-400" />
            {{ title }}
          </h2>

          <!-- Steps -->
          <div v-if="showSteps && steps" class="flex items-center gap-3">
            <div
              v-for="(step, index) in steps"
              :key="index"
              class="flex items-center gap-2"
            >
              <div
                class="w-2 h-2 rounded-full transition-colors"
                :class="step.isActive ? 'bg-primary-500' : step.isCompleted ? 'bg-primary-400' : 'bg-white/30'"
              />
              <span
                class="text-xs font-medium"
                :class="step.isActive ? 'text-primary-400' : step.isCompleted ? 'text-primary-300' : 'text-white/50'"
              >
                {{ step.title }}
              </span>
              <div v-if="index < steps.length - 1" class="w-3 h-px bg-white/20" />
            </div>
          </div>
        </div>

        <UButton
          v-if="showCloseButton"
          icon="i-lucide-x"
          color="neutral"
          variant="ghost"
          size="sm"
          @click="emit('close')"
        />
      </div>
    </div>

    <div class="flex-1 overflow-hidden">
      <slot />
    </div>

    <div v-if="$slots.footer" class="sticky bottom-0 bg-black/80 backdrop-blur-md border-t border-white/10 p-4">
      <slot name="footer" />
    </div>
  </div>
</template>
