<script setup lang="ts">
import type { DropdownAction } from '~/components/Base/MDropdown.vue'
import type Weapon from '~/Core/Interfaces/Weapon'

interface WeaponCardMenuProps {
  weapon: Weapon | undefined
}

const props = defineProps<WeaponCardMenuProps>()

const WeaponsStore = useWeaponsStore()

const Actions = computed(() => [
  {
    label: 'Edit',
    icon: 'solar:pen-new-square-broken',
    disabled: props.weapon === undefined,
  },
  {
    label: 'Create',
    icon: 'solar:add-square-broken',
  },
  {
    label: 'Remove',
    icon: 'solar:notification-remove-broken',
    color: 'error',
    disabled: props.weapon === undefined,
    onExecute: () => {
      if (props.weapon?.Id) {
        WeaponsStore.DeleteById(props.weapon.Id)
      }
    },
  },
] as DropdownAction[])
</script>

<template>
  <MGameCardMenu :item="weapon" :actions="Actions">
    <template #content="{ selectedAction, onClose }">
      <MWeaponForm
        v-if="selectedAction === 0"
        mode="edit"
        :weapon="weapon"
        @close="onClose"
      />
      <MWeaponForm
        v-else-if="selectedAction === 1"
        mode="create"
        :weapon="weapon"
        @close="onClose"
      />
      <!-- <WeaponRemoveForm
        v-else-if="selectedAction === 2"
        @close="onClose"
      /> -->
    </template>
  </MGameCardMenu>
</template>
