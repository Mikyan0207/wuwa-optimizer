<script setup lang="ts">
import type { DropdownMenuItem } from '#ui/types'

export interface DropdownAction {
  label: string
  icon: string
  color?: string
  disabled?: boolean
  onExecute?: () => void
}

interface DropdownMenuProps {
  actions: DropdownAction[]
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  showOnHover?: boolean
}

const props = withDefaults(defineProps<DropdownMenuProps>(), {
  position: 'top-right',
  showOnHover: true,
})

const emit = defineEmits<{
  close: []
}>()

const IsDropdownOpen = ref(false)
const IsHovered = ref(false)
const SelectedAction = ref<number>()

const IsSlideoverOpen = computed({
  get: () => SelectedAction.value !== undefined && props.actions[SelectedAction.value]?.onExecute === undefined,
  set: (value) => {
    if (!value)
      SelectedAction.value = undefined
  },
})

function CloseSlideover() {
  SelectedAction.value = undefined
}

defineExpose({
  CloseSlideover,
  SelectedAction,
})

const MenuItems = computed(() =>
  props.actions.map((action, index) => ({
    label: action.label,
    icon: action.icon,
    color: action.color,
    disabled: action.disabled,
    onSelect: () => ExecuteAction(index),
  })) as DropdownMenuItem[],
)

function ExecuteAction(index: number) {
  SelectedAction.value = index

  const action = props.actions[index]

  if (action?.onExecute)
    action.onExecute()
}

function OnClose() {
  IsSlideoverOpen.value = false

  emit('close')
}

watch(IsDropdownOpen, (newValue) => {
  if (newValue) {
    IsHovered.value = true
  }
})
</script>

<template>
  <div
    class="absolute z-20 transition-all duration-75"
    :class="{
      'right-1 top-1': position === 'top-right',
      'left-1 top-1': position === 'top-left',
      'right-1 bottom-1': position === 'bottom-right',
      'left-1 bottom-1': position === 'bottom-left',
      'opacity-0 group-hover:opacity-100': showOnHover,
      'opacity-100': IsDropdownOpen || IsHovered,
    }"
    @mouseenter="IsHovered = true"
    @mouseleave="IsHovered = false"
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
      <UButton
        icon="solar:menu-dots-circle-broken"
        color="primary"
        variant="ghost"
      />
    </UDropdownMenu>
  </div>

  <USlideover
    v-model:open="IsSlideoverOpen"
    :overlay="true"
    variant="subtle"
    color="neutral"
    side="right"
    :transition="true"
    class="w-full md:w-1/2 lg:w-1/3 max-w-full"
    close-icon="i-lucide-arrow-right"
    @close="OnClose"
  >
    <template #content>
      <slot :selected-action="SelectedAction" />
    </template>
  </USlideover>
</template>
