<script setup lang="ts">
import type Event from '~/Core/Interfaces/Event'
import { computed } from 'vue'
import { ReleaseState } from '~/Core/Enums/ReleaseState'

interface Props {
  event: Event
  variant?: 'solid' | 'soft' | 'outline' | 'subtle'
  size?: 'xs' | 'sm' | 'md'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'solid',
  size: 'sm',
})

const badgeColor = computed(() => {
  if (props.event.ReleaseState === ReleaseState.RELEASED)
    return 'success'
  if (props.event.ReleaseState === ReleaseState.NEW)
    return 'primary'
  if (props.event.ReleaseState === ReleaseState.UPCOMING)
    return 'neutral'

  return 'neutral'
})

const badgeText = computed(() => {
  if (props.event.ReleaseState === ReleaseState.RELEASED)
    return 'Available'
  if (props.event.ReleaseState === ReleaseState.NEW)
    return 'New'
  if (props.event.ReleaseState === ReleaseState.UPCOMING)
    return 'Coming Soon'

  return 'Past'
})
</script>

<template>
  <UBadge
    :color="badgeColor"
    :variant="variant"
    :size="size"
    class="uppercase"
  >
    {{ badgeText }}
  </UBadge>
</template>
