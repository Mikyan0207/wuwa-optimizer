<script setup lang="ts" generic="T">
interface GameCardMenuProps<T> {
  item: T | undefined
  actions: Array<{
    label: string
    icon: string
    color?: string
    disabled?: boolean
    onExecute: () => void
  }>
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
