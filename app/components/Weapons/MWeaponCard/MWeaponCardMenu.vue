<script setup lang="ts">
import type Weapon from '~/Core/Interfaces/Weapon'
import { useBuild } from '~/composables/builds/UseBuild'

interface WeaponCardMenuProps {
  weapon: Weapon | undefined
}

defineProps<WeaponCardMenuProps>()

const { CurrentWeapon } = useBuild()

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
</script>

<template>
  <MGameCardMenu :item="weapon" :actions="Actions">
    <template #content="{ selectedAction, onClose }">
      <WeaponEditionForm
        v-if="selectedAction === 0"
        @close="onClose"
      />
      <WeaponCreationForm
        v-else-if="selectedAction === 1"
        @close="onClose"
      />
      <!-- <WeaponRemoveForm
        v-else-if="selectedAction === 2"
        @close="onClose"
      /> -->
    </template>
  </MGameCardMenu>
</template>
