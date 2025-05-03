<script setup lang="ts">
import type Character from '~/Core/Interfaces/Character'
import { GetCharacterIcon } from '~/Core/Utils/CharacterUtils'

defineProps<{
  character: Character
}>()
</script>

<template>
  <UCard
    :ui="{
      root: 'rounded-none rounded-br-xl border-0',
      body: 'p-0 sm:p-0',
    }"
  >
    <template #default>
      <BorderLines :count="1" />
      <NuxtImg width="120" height="120" :src="`${GetCharacterIcon(character)}`" style="color: transparent;" />
    </template>
  </UCard>
</template>
