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
    class="group relative"
  >
    <EchoDropdownMenu :echo-slot="echoSlot" />
    <UCard
      class="min-h-[26em] h-full w-full"
      :ui="{
        root: 'rounded-none rounded-br-xl border-0',
      }"
    >
      <!-- Echo Details -->
      <template #default>
        <BorderLines />
        <EchoInfo :echo="echo" :echo-slot="echoSlot" :score="score" />
      </template>
    </UCard>
  </div>
</template>
