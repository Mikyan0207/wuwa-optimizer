<script setup lang="ts">
const CurrentCharacterStore = useCurrentCharacterStore()

const { CurrentCharacter } = storeToRefs(CurrentCharacterStore)
</script>

<template>
  <MCard
    v-if="CurrentCharacter"
    :border-lines-count="3"
  >
    <MSkillTree
      :character="CurrentCharacter"
    />
  </MCard>
</template>
