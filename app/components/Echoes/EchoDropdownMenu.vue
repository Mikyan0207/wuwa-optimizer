<script setup lang="ts">
const props = defineProps<{
  echoSlot: number
}>()

const IsDropdownOpen = ref<boolean>(false)
const SelectedIndex = ref<number | undefined>(undefined)
const IsOpen = ref<boolean>(false)

const EchoesStore = useEchoesStore()
const { GetEchoBySlot } = useCharacterContext()
const CurrentEcho = computed(() => GetEchoBySlot(props.echoSlot))

const MenuItems = [
  {
    label: 'Edit',
    icon: 'solar:pen-new-square-broken',
    onSelect() {
      SelectedIndex.value = 0
      IsOpen.value = true
    },
    disabled: CurrentEcho.value === undefined,
  },
  {
    label: 'Change',
    icon: 'solar:square-transfer-vertical-broken',
    onSelect() {
      SelectedIndex.value = 1
      IsOpen.value = true
    },
    disabled: EchoesStore.Echoes.length === 0,
  },
  {
    label: 'New',
    icon: 'solar:add-square-broken',
    onSelect() {
      SelectedIndex.value = 2
      IsOpen.value = true
    },
  },
  {
    label: 'Unequip',
    icon: 'solar:notification-remove-broken',
    color: 'error' as const,
    onSelect() {
      SelectedIndex.value = 3
      IsOpen.value = true
    },
    disabled: CurrentEcho.value === undefined || CurrentEcho.value.Id === -1,
  },
]

function OnClose() {
  IsOpen.value = false
}
</script>

<template>
  <div
    class="absolute right-1 top-1 z-20 transition-all duration-75"
  >
    <UDropdownMenu
      :items="MenuItems" arrow :modal="false" :content="{
        align: 'end',
        side: 'bottom',
        sideOffset: 8,
      }"
      @update:open="(v: boolean) => IsDropdownOpen = v"
    >
      <UButton icon="solar:menu-dots-circle-broken" color="primary" variant="ghost" />
    </UDropdownMenu>
  </div>
  <USlideover
    v-model:open="IsOpen"
    :overlay="true"
    variant="subtle"
    color="neutral"
    side="right"
    :transition="true"
    class="w-full md:w-1/2 lg:w-1/3 max-w-full"
    close-icon="i-lucide-arrow-right"
    @close="SelectedIndex = undefined"
  >
    <template #content>
      <EchoEditionForm
        v-if="SelectedIndex === 0"
        :echo-slot="echoSlot"
        @close="OnClose()"
      />
      <EchoSwapForm
        v-if="SelectedIndex === 1"
        :echo-slot="echoSlot"
        @close="OnClose()"
      />
      <EchoCreationForm
        v-else-if="SelectedIndex === 2"
        :echo-slot="echoSlot"
        @close="OnClose()"
      />
      <EchoUnequipForm
        v-else-if="SelectedIndex === 3"
        :echo-slot="echoSlot"
        @close="OnClose()"
      />
    </template>
  </USlideover>
</template>
