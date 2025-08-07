<script setup lang="ts">
import type { StatType } from '~/Core/Enums/StatType'
import type Echo from '~/Core/Interfaces/Echo'

interface EchoCardProps {
  echo: Echo
  equipedSlot: number
  showScore?: boolean
  weights: Record<StatType, number>
}

withDefaults(defineProps<EchoCardProps>(), {
  showScore: true,
})
</script>

<template>
  <MCard
    class="min-h-[26em] h-full w-full relative"
    :show-border-lines="true"
    :border-lines-count="3"
  >
    <div class="w-full flex flex-col items-center gap-2">
      <MEchoDropdown :echo-slot="equipedSlot" />
      <MEchoCardHeader :echo="echo" />
      <USeparator class="w-full" />
      <MEchoStats :echo="echo" :weights="weights" />
      <USeparator class="w-full" />
      <MEchoScore :show="showScore" :score="echo.Score" :note="echo.Note" />
    </div>
  </MCard>
</template>
