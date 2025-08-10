<script setup lang="ts" generic="T">
interface GameCardStatsProps<T> {
  item: T | undefined
  getMainStat: (item: T) => any
  getSecondaryStat: (item: T) => any
}

defineProps<GameCardStatsProps<T>>()
</script>

<template>
  <div class="flex flex-col items-start text-gray-300 gap-1">
    <MStatLine
      v-if="item && getMainStat(item)"
      :stat="getMainStat(item)"
      :show-line="true"
      :show-roll-value="true"
      class="p-0!"
    />
    <USkeleton v-else class="mt-4 h-3 w-24" />

    <MStatLine
      v-if="item && getSecondaryStat(item)"
      :stat="getSecondaryStat(item)"
      :show-line="true"
      :show-roll-value="true"
      class="p-0!"
    />
    <USkeleton v-else class="h-3 mt-1 w-24" />
  </div>
</template>
