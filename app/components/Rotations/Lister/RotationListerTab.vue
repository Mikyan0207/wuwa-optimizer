<script setup lang="ts">
const Rotations = ref([])
</script>

<template>
  <div class="w-full max-w-7xl flex items-center gap-2 mt-12">
    <template v-if="Rotations.length === 0">
      <UCard v-motion-pop class="mx-auto w-full text-center">
        No rotations available.
      </UCard>
    </template>
  </div>
</template>
