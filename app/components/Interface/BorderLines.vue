<script setup lang="ts">
defineProps<{
  count?: 1 | 2 | 3
}>()
</script>

<template>
  <div
    v-if="count === 1 || count === undefined" class="absolute z-50 inset-0 border border-gold-600 pointer-events-none rounded-br-xl"
  />
  <div v-if="count === undefined" class="absolute z-50 inset-0 border pointer-events-none border-gold-600 rounded-br-3xl" />
  <div v-if="count === undefined" class="absolute z-50 inset-0 border pointer-events-none border-gold-600 rounded-br-[2rem]" />
</template>
