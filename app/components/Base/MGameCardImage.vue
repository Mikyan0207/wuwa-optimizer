<script setup lang="ts" generic="T">
interface GameCardImageProps<T> {
  item: T | undefined
  getImageSrc: (item: T) => string
  getImageAlt: (item: T) => string
}

defineProps<GameCardImageProps<T>>()
</script>

<template>
  <NuxtImg
    v-if="item"
    :src="getImageSrc(item)"
    :alt="getImageAlt(item)"
    fit="cover"
    class="object-contain flex-shrink-0 border-l border-neutral-800 h-full w-auto"
  />
  <USkeleton v-else class="h-full w-[4em] flex-shrink-0" />
</template>
