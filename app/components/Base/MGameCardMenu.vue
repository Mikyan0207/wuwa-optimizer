<script setup lang="ts" generic="T">
import type { DropdownAction } from './MDropdown.vue'

interface GameCardMenuProps<T> {
  item: T | undefined
  actions: DropdownAction[]
}

defineProps<GameCardMenuProps<T>>()

const DropdownRef = ref()

function OnClose() {
  DropdownRef.value?.CloseSlideover()
}

defineExpose({
  OnClose,
})
</script>

<template>
  <MDropdown ref="DropdownRef" :actions="actions" @close="OnClose">
    <template #default="{ selectedAction }">
      <slot name="content" :selected-action="selectedAction" :on-close="OnClose" />
    </template>
  </MDropdown>
</template>
