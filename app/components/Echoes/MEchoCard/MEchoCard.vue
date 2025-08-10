<script setup lang="ts">
import type Echo from '~/Core/Interfaces/Echo'

interface EchoCardProps {
  echo: Echo
  equipedSlot: number
  showScore?: boolean
  showMenu?: boolean
}

withDefaults(defineProps<EchoCardProps>(), {
  showScore: true,
  showMenu: true,
})
</script>

<template>
  <MCard
    class="h-full w-full relative bg-opacity-0"
    :class="{ 'min-h-[22em]': showScore, 'min-h-[20em]': !showScore }"
    :show-border-lines="true"
    :border-lines-count="3"
  >
    <MEchoCardDropdown v-if="showMenu" :echo-slot="equipedSlot" />
    <div class="w-full flex flex-col items-center gap-2">
      <MEchoCardHeader :echo="echo" />
      <MEchoStats :echo="echo" class="mt-4" />
      <USeparator v-if="showScore" class="w-full" />
      <MEchoScore :show="showScore" :score="echo.Score" :note="echo.Note" class="px-2" />
    </div>
  </MCard>
</template>
