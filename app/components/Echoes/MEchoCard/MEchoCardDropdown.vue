<script setup lang="ts">
import { useBuild } from '~/composables/builds/UseBuild'

interface EchoDropdownProps {
  echoSlot: number
}

const props = defineProps<EchoDropdownProps>()

const { GetEchoBySlot } = useBuild()
const CurrentEcho = computed(() => GetEchoBySlot(props.echoSlot))

const DropdownRef = ref()

const Actions = computed(() => [
  {
    label: 'Edit',
    icon: 'solar:pen-new-square-broken',
    disabled: CurrentEcho.value === undefined,
    onExecute() {
    },
  },
  {
    label: 'New',
    icon: 'solar:add-square-broken',
    onExecute() {
    },
  },
  {
    label: 'Unequip',
    icon: 'solar:notification-remove-broken',
    color: 'error',
    disabled: CurrentEcho.value === undefined || CurrentEcho.value.GameId === -1,
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
      <MEchoForm
        v-if="selectedAction === 0"
        :echo-slot="echoSlot"
        mode="edit"
        @close="OnClose"
      />
      <MEchoForm
        v-else-if="selectedAction === 1"
        :echo-slot="echoSlot"
        @close="OnClose"
      />
      <!-- <EchoUnequipForm
        v-else-if="selectedAction === 2"
        :echo-slot="echoSlot"
        @close="OnClose"
      /> -->
    </template>
  </MDropdown>
</template>
