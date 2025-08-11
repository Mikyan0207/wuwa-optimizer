<script setup lang="ts">
import type { CharacterV2 } from '~/Core/Interfaces/Character'

interface Props {
  character: CharacterV2
}

const { character: CurrentCharacter } = defineProps<Props>()
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
