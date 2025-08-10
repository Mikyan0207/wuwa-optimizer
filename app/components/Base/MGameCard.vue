<script setup lang="ts" generic="T">
interface GameCardProps {
  item: T | undefined
  showMenu?: boolean
  showStats?: boolean
}

withDefaults(defineProps<GameCardProps>(), {
  showMenu: true,
  showStats: false,
})
</script>

<template>
  <MCard class="group relative w-full h-full" padding="none" :border-lines-count="3">
    <!-- Optional Menu Dropdown -->
    <slot v-if="showMenu" name="menu" />

    <div class="h-full w-full flex justify-between items-start gap-4">
      <div class="flex flex-col gap-1 flex-1 min-w-0 p-4">
        <!-- Header Slot -->
        <slot name="header" />

        <!-- Rarity Slot -->
        <slot name="rarity" />

        <!-- Stats Slot (optional) -->
        <slot v-if="showStats" name="stats" />
      </div>

      <!-- Image Slot -->
      <slot name="image" />
    </div>
  </MCard>
</template>
