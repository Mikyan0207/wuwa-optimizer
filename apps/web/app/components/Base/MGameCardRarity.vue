<script setup lang="ts" generic="T">
import { GetRarityAsNumber } from '~/Core/Utils/RarityUtils'

interface GameCardRarityProps<T> {
  item: T | undefined
  getRarity: (item: T) => any
}

defineProps<GameCardRarityProps<T>>()
</script>

<template>
  <div class="flex items-center gap-1 mb-3">
    <div v-if="item" class="flex items-center">
      <NuxtImg
        v-for="idx in GetRarityAsNumber(getRarity(item))"
        :key="idx"
        src="/images/icons/Icon_StarBig.webp"
        class="h-4 w-4 object-cover"
        fit="cover"
      />
    </div>
    <USkeleton v-else class="h-3 w-20" />
  </div>
</template>
