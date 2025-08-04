<script setup lang="ts">
import type Echo from '~/Core/Interfaces/Echo'

defineProps<{
  echo: Echo
  echoSlot: number
  score?: IEchoRatingResult
}>()
</script>

<template>
  <div
    class="group relative cursor-grab active:cursor-grabbing"
  >
    <EchoDropdownMenu :echo-slot="echoSlot" />
    <UCard
      class="min-h-[26em] h-full w-full relative"
      :ui="{
        root: 'rounded-none rounded-br-xl border-0',
      }"
    >
      <template #default>
        <!-- Bordure colorée pour le set principal -->
        <div
          v-if="echo.Sonata && echo.Sonata.length > 0"
          class="absolute inset-0 rounded-br-xl pointer-events-none z-10"
        />
        <BorderLines />
        <EchoInfo :echo="echo" :echo-slot="echoSlot" :score="score" />
      </template>
    </UCard>
  </div>
</template>
