<script setup lang="ts" generic="T">
interface GameCardHeaderProps<T> {
  item: T | undefined
  getName: (item: T) => string
  getLevel: (item: T) => number
  getAdditionalInfo?: (item: T) => string
}

defineProps<GameCardHeaderProps<T>>()

const { t } = useI18n()
</script>

<template>
  <div class="flex items-center gap-2">
    <div v-if="item" class="text-lg">
      {{ getName(item) }}
    </div>
    <USkeleton v-else class="h-4 w-26" />

    <UBadge v-if="item" class="text-gray-300" variant="subtle" color="primary">
      {{ `${t('label_level')} ${getLevel(item)}${getAdditionalInfo ? ` · ${getAdditionalInfo(item)}` : ''}` }}
    </UBadge>
    <USkeleton v-else class="h-3 w-10" />
  </div>
</template>
