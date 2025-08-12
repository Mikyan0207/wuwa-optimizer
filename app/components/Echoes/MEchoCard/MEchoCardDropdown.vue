<script setup lang="ts">
import type Echo from '~/Core/Interfaces/Echo'

interface EchoDropdownProps {
  echo: Echo | undefined
  echoSlot: number
}

const props = defineProps<EchoDropdownProps>()

const emits = defineEmits<{
  close: []
}>()

const DropdownRef = ref()

const Actions = computed(() => [
  {
    label: 'Edit',
    icon: 'solar:pen-new-square-broken',
    disabled: props.echo === undefined,
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
    disabled: props.echo === undefined || props.echo.GameId === -1,
    onExecute() {
    },
  },
])

function OnClose() {
  DropdownRef.value?.CloseSlideover()
  emits('close')
}
</script>

<template>
  <MDropdown ref="DropdownRef" :actions="Actions" @close="OnClose">
    <template #default="{ selectedAction }">
      <MEchoForm
        v-if="selectedAction === 0"
        :echo-slot="echoSlot"
        :echo="echo"
        mode="edit"
        @close="OnClose"
      />
      <MEchoForm
        v-else-if="selectedAction === 1"
        :echo-slot="echoSlot"
        :echo="echo"
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
