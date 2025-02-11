<script setup lang="ts">
defineProps<{
  count?: 1 | 2 | 3
}>()
</script>

<template>
  <div
    v-if="count === 1 || count === undefined" class="absolute inset-0 border pointer-events-none rounded-br-xl"
    :class="{
      'border-gold-200/30': count === 1,
      'border-gold-200/15': count === undefined,
    }"
  />
  <div v-if="count === undefined" class="absolute inset-0 border pointer-events-none border-gold-200/15 rounded-br-3xl" />
  <div v-if="count === undefined" class="absolute inset-0 border pointer-events-none border-gold-200/15 rounded-br-[2rem]" />
</template>
