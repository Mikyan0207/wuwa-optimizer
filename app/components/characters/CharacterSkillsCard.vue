<script setup lang="ts">
const { CurrentCharacter } = useCharacterContext()
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
