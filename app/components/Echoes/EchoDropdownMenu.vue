<script setup lang="ts">
const props = defineProps<{
  echoSlot: number
}>()

const IsDropdownOpen = ref<boolean>(false)
const SelectedIndex = ref<number | undefined>(undefined)
const IsOpen = ref<boolean>(false)

const EchoesStore = useEchoesStore()
const ActiveStore = useActiveCharacterStore()
const CurrentEcho = computed(() => ActiveStore.GetEchoBySlot(props.echoSlot))

const MenuItems = [
  {
    label: 'Edit',
    icon: 'mdi:pencil-outline',
    onSelect() {
      SelectedIndex.value = 0
      IsOpen.value = true
    },
    disabled: CurrentEcho.value === undefined,
  },
  {
    label: 'Change',
    icon: 'lucide-lab:coins-exchange',
    onSelect() {
      SelectedIndex.value = 1
      IsOpen.value = true
    },
    disabled: EchoesStore.Echoes.length === 0,
  },
  {
    label: 'New',
    icon: 'material-symbols:add-diamond-outline',
    onSelect() {
      SelectedIndex.value = 2
      IsOpen.value = true
    },
  },
  {
    label: 'Unequip',
    icon: 'lucide:x',
    color: 'error' as const,
    onSelect() {
      SelectedIndex.value = 2
      IsOpen.value = true
    },
    disabled: CurrentEcho.value === undefined,
  },
]

function OnClose() {
  IsOpen.value = false
}
</script>

<template>
  <div
    class="absolute right-1 top-1 z-20 transition-all duration-75"
    :class="{
      'hidden group-hover:inline': !IsDropdownOpen,
    }"
  >
    <UDropdownMenu
      :items="MenuItems" arrow :modal="false" :content="{
        align: 'end',
        side: 'bottom',
        sideOffset: 8,
      }"
      @update:open="(v: boolean) => IsDropdownOpen = v"
    >
      <UButton icon="i-lucide-menu" color="neutral" variant="ghost" size="sm" />
    </UDropdownMenu>
  </div>
  <UModal
    v-model:open="IsOpen"
    :overlay="true"
    variant="subtle"
    color="neutral"
    :ui="{
      content: 'xl:min-w-4xl w-5xl min-w-5xl xl:w-4xl bg-transparent border-0 backdrop-blur-none shadow-none! ring-0! ',
    }"
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
    </template>
  </UModal>
</template>
