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
    label: 'Create',
    icon: 'solar:add-square-broken',
    onSelect() {
      SelectedIndex.value = 1
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
  <USlideover
    v-model:open="IsOpen"
    :overlay="true"
    variant="subtle"
    color="neutral"
    side="right"
    :transition="true"
    class="w-full md:w-1/3 lg:w-1/4 max-w-full"
    close-icon="i-lucide-arrow-right"
    @close="SelectedIndex = undefined"
  >
    <template #content>
      <WeaponEditionForm
        v-if="SelectedIndex === 0"
        @close="OnClose()"
      />
      <WeaponCreationForm
        v-if="SelectedIndex === 1"
        @close="OnClose()"
      />
    </template>
  </USlideover>
</template>
