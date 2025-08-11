<script setup lang="ts">
import { useCharacter } from '~/composables/characters/UseCharacter'

const { CurrentCharacter } = useCharacter()
</script>

<template>
  <MCard
    v-if="CurrentCharacter"
    :border-lines-count="3"
    class="h-full!"
  >
    <MSkillTree
      class="w-full h-full"
      :character="CurrentCharacter"
    />
  </MCard>
</template>
