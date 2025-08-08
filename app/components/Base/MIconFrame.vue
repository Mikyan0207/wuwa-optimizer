<script setup lang="ts">
import { UpcomingGameVersion } from '~/Core'
import { ReleaseState } from '~/Core/Enums/ReleaseState'

interface IconFrameProps {
  background?: string
  secondary?: string
  highlight?: string

  releaseStatus?: ReleaseState

  size?: 'sm' | 'md' | 'lg'
  showRarityGlow?: boolean
  showStatusBadge?: boolean
  showBorderLines?: boolean
  clickable?: boolean
  animated?: boolean
}

const props = withDefaults(defineProps<IconFrameProps>(), {
  size: 'md',
  showRarityGlow: true,
  showStatusBadge: true,
  showBorderLines: true,
  clickable: false,
  animated: true,
})

const SizeClasses = computed(() => {
  switch (props.size) {
    case 'sm': return 'min-h-24 w-24'
    case 'lg': return 'min-h-40 w-40'
    default: return 'min-h-32 w-32'
  }
})

const CardClasses = computed(() => ({
  'group relative transition-all duration-100': true,
  'cursor-pointer': props.clickable,
  'select-none': true,
  'hover:scale-105': props.clickable && props.animated,
}))

const ContainerClasses = computed(() => ({
  'relative flex items-center justify-center overflow-clip': true,
  [SizeClasses.value]: true,
}))

// Couleurs par défaut si non fournies
const DefaultBackground = computed(() => props.background || 'bg-neutral-800')
const DefaultSecondary = computed(() => props.secondary || 'bg-neutral-700')
const DefaultHighlight = computed(() => props.highlight || 'bg-neutral-600')
</script>

<template>
  <UCard
    :class="CardClasses"
    :ui="{
      root: 'rounded-none rounded-br-xl border-0',
      body: 'p-0 sm:p-0',
    }"
  >
    <!-- Border Lines -->
    <MBorderLines v-if="showBorderLines" :count="1" />

    <div :class="ContainerClasses">
      <!-- Status Badge (NEW, UPCOMING, etc.) -->
      <div v-if="showStatusBadge && releaseStatus" class="absolute left-1 top-0 z-2">
        <UBadge
          v-if="releaseStatus === ReleaseState.NEW"
          color="error"
          variant="solid"
          size="sm"
          class="rounded-full!"
        >
          NEW
        </UBadge>
        <UBadge
          v-else-if="releaseStatus === ReleaseState.UPCOMING"
          color="warning"
          variant="solid"
          size="sm"
          class="px-2.5 rounded-full!"
        >
          {{ UpcomingGameVersion }}
        </UBadge>
        <UBadge
          v-else-if="releaseStatus === ReleaseState.UNKNOWN"
          color="neutral"
          variant="solid"
          size="sm"
          class="px-2.5 rounded-full!"
        >
          2.X
        </UBadge>
      </div>

      <!-- Type Icon Slot (Character Type, Weapon Type, etc.) -->
      <div class="absolute right-1 top-1 z-2">
        <slot name="type-icon" />
      </div>

      <!-- Sonata Icon Slot (Echoes) -->
      <div class="absolute right-1 top-1 z-2">
        <slot name="sonata-icon" />
      </div>

      <!-- Main Icon Slot -->
      <div class="absolute bottom-0">
        <slot name="main-icon" />
      </div>

      <!-- Rarity Glow -->
      <div v-if="showRarityGlow" class="absolute bottom-0 w-full">
        <div class="relative w-full flex items-center">
          <div class="absolute mt-auto h-4 w-full -bottom-2">
            <div
              class="absolute bottom-0 h-3 w-full blur-lg transition-all duration-200 group-hover:h-4 group-hover:blur"
              :class="DefaultBackground"
            />
            <div
              class="absolute bottom-0 h-2 w-full blur duration-200 group-hover:h-2 group-hover:blur-sm"
              :class="DefaultSecondary"
            />
          </div>
        </div>
        <div class="h-[3px]" :class="DefaultHighlight" />
      </div>
    </div>

    <!-- Name Slot -->
    <div class="py-1 text-center text-xs">
      <slot name="name" />
    </div>
  </UCard>
</template>
