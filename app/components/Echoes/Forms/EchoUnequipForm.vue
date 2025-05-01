<script setup lang="ts">
const props = defineProps<{
  echoSlot: number
}>()

const emits = defineEmits(['close'])

const { t } = useI18n()
const EchoesStore = useEchoesStore()
const { CurrentCharacter, GetEchoBySlot } = useCharacterContext()
const CurrentEcho = computed(() => GetEchoBySlot(props.echoSlot)!)

function OnSubmit() {
  if (CurrentEcho.value === undefined || CurrentCharacter.value === undefined) {
    return
  }

  EchoesStore.RemoveEcho(CurrentEcho.value.Id, CurrentCharacter.value.Id)
  OnClose()
}

function OnClose() {
  emits('close')
}
</script>

<template>
  <UCard
    :ui="{
      root: 'rounded-xs border-neutral-700 group',
      body: 'p-0 sm:p-0',
    }"
  >
    <template #header>
      <div class="flex items-center justify-between w-full">
        <div v-if="CurrentEcho" class="flex items-center gap-1">
          <span>Unequip</span>
          <span>{{ t(`${CurrentEcho.Id}_name`) }}</span>
        </div>
      </div>
    </template>
    <div class="w-full flex flex-col gap-4 p-2 h-full divide-x divide-(--ui-border)">
      <div
        class="mx-auto w-lg p-2 max-h-[26em] xl:max-h-[32em] scrollbar-hidden"
      >
        <EquipedEchoCard v-if="CurrentEcho" :echo="CurrentEcho" class="group" />
      </div>
      <UAlert
        color="warning" variant="subtle" title="Are you sure you want to unequip this echo?" description="This action is permanent, and you will not be able to recover it. This means the echo will be deleted."
        icon="i-carbon-warning"
      />
    </div>

    <template #footer>
      <div class="w-full flex justify-end">
        <UButtonGroup size="md">
          <UButton color="neutral" variant="outline" label="Cancel" @click.prevent="OnClose()" />
          <UButton color="error" variant="subtle" label="Unequip" @click.prevent="OnSubmit()" />
        </UButtonGroup>
      </div>
    </template>
  </UCard>
</template>
