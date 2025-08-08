<script setup lang="ts">
import { useBuild } from '~/composables/builds/UseBuild'

const { CurrentWeapon } = useBuild()

const DropdownRef = ref()

const Actions = computed(() => [
  {
    label: 'Edit',
    icon: 'solar:pen-new-square-broken',
    disabled: CurrentWeapon.value === undefined,
    onExecute() {
    },
  },
  {
    label: 'Create',
    icon: 'solar:add-square-broken',
    onExecute() {
    },
  },
  {
    label: 'Remove',
    icon: 'solar:notification-remove-broken',
    color: 'error',
    disabled: CurrentWeapon.value === undefined,
    onExecute() {
    },
  },
])

function OnClose() {
  DropdownRef.value?.CloseSlideover()
}
</script>

<template>
  <MDropdown ref="DropdownRef" :actions="Actions" @close="OnClose">
    <template #default="{ selectedAction }">
      <WeaponEditionForm
        v-if="selectedAction === 0"
        @close="OnClose"
      />
      <WeaponCreationForm
        v-else-if="selectedAction === 1"
        @close="OnClose"
      />
      <!-- <WeaponRemoveForm
        v-else-if="selectedAction === 2"
        @close="OnClose"
      /> -->
    </template>
  </MDropdown>
</template>
