<script setup lang="ts">
const { CurrentWeapon } = useCharacterContext()

const IsDropdownOpen = ref<boolean>(false)
const SelectedIndex = ref<number | undefined>(undefined)
const IsOpen = ref<boolean>(false)

const MenuItems = [
  {
    label: 'Edit',
    icon: 'solar:pen-new-square-broken',
    onSelect() {
      SelectedIndex.value = 0
      IsOpen.value = true
    },
  },
  {
    label: 'Remove',
    icon: 'solar:notification-remove-broken',
    color: 'error' as const,
    onSelect() {
      SelectedIndex.value = 3
      IsOpen.value = true
    },
    disabled: CurrentWeapon.value === undefined,
  },
]

function OnClose() {
  IsOpen.value = false
}
</script>

<template>
  <div
    class="absolute right-1 top-1 z-10 transition-all duration-75"
  >
    <UDropdownMenu
      :items="MenuItems"
      arrow
      :modal="false"
      :content="{
        align: 'end',
        side: 'bottom',
        sideOffset: 8,
      }"
      @update:open="(v: boolean) => IsDropdownOpen = v"
    >
      <UButton icon="solar:menu-dots-circle-broken" color="primary" variant="ghost" />
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
      <WeaponEditionForm
        v-if="SelectedIndex === 0"
        @close="OnClose()"
      />
    </template>
  </UModal>
</template>
