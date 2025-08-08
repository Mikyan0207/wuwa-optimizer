<script setup lang="ts">
import type Echo from '~/Core/Interfaces/Echo'

defineProps<{
  echo: Echo
}>()
</script>

<template>
  <UCard
    class="min-h-[20em] h-full w-full"
    :ui="{
      root: 'rounded-none rounded-br-xl border-0',
    }"
  >
    <template #default>
      <MBorderLines :count="1" />
      <EchoInfo :echo="echo" :echo-slot="echo.EquipedSlot || 0" :show-score="false" />
    </template>
  </UCard>
</template>
