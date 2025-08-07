<script setup lang="ts">
import { useCharacter } from '~/composables/characters/UseCharacter'

const { CurrentCharacter } = useCharacter()
</script>

<template>
  <MCard
    :border-lines-count="3"
    class="h-full!"
  >
    <MSkillTree
      :character="CurrentCharacter"
      class="w-full h-full"
    />
  </MCard>
</template>
