<script setup lang="ts">
import type Echo from '~/Core/Interfaces/Echo'

const props = defineProps<{
  echoSlot: number
}>()

const emits = defineEmits(['close'])

const { t } = useI18n()
const EchoesStore = useEchoesStore()
const { GetEchoBySlot } = useCharacterContext()
const CurrentEcho = computed(() => GetEchoBySlot(props.echoSlot))
const SelectedEcho = ref<Echo | undefined>(undefined)

function OnSubmit() {
  if (CurrentEcho.value === undefined || SelectedEcho.value === undefined) {
    return
  }

  const currentEchoSlot = CurrentEcho.value.EquipedSlot
  const selectedEchoSlot = SelectedEcho.value.EquipedSlot

  if (currentEchoSlot === undefined
    || selectedEchoSlot === undefined
    || CurrentEcho.value.EquipedBy === undefined
    || SelectedEcho.value.EquipedBy === undefined) {
    return
  }

  // This is just a swap on the same character.
  if (CurrentEcho.value.EquipedBy === SelectedEcho.value.EquipedBy) {
    EchoesStore.UpdateWithEquipedBy(CurrentEcho.value.Id, CurrentEcho.value.EquipedBy, {
      EquipedSlot: selectedEchoSlot,
    })
    EchoesStore.UpdateWithEquipedBy(SelectedEcho.value.Id, CurrentEcho.value.EquipedBy, {
      EquipedSlot: currentEchoSlot,
    })
  }
  else {
    EchoesStore.UpdateWithEquipedBy(SelectedEcho.value.Id, CurrentEcho.value.EquipedBy, {
      EquipedBy: CurrentEcho.value.EquipedBy,
      EquipedSlot: currentEchoSlot,
    })

    EchoesStore.UpdateWithEquipedBy(CurrentEcho.value.Id, CurrentEcho.value.EquipedBy, {
      EquipedBy: SelectedEcho.value.EquipedBy,
      EquipedSlot: selectedEchoSlot,
    })
  }

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
          <span>Replace</span>
          <span>{{ t(`${CurrentEcho.Id}_name`) }}</span>
        </div>
      </div>
    </template>
    <div class="grid grid-cols-2 w-full p-2 gap-2 h-full divide-x divide-(--ui-border)">
      <div class="col-span-3 p-2 max-h-[26em] xl:max-h-[32em] scrollbar-hidden w-full grid grid-cols-2 items-start gap-2 overflow-y-auto">
        <EquipedEchoCard
          v-for="ec in EchoesStore.Echoes"
          :key="ec.Id"
          :echo="ec"
          class="group"
          :class="{
            'border-gold-600': SelectedEcho?.Id === ec.Id,
          }"
          @click.prevent="SelectedEcho = ec"
        />
      </div>
      <!-- <div class="col-span-1 p-2">
        <EchoInfo v-if="SelectedEcho" :echo="SelectedEcho" :echo-slot="echoSlot" :show-equiped-by="true" />
      </div> -->
    </div>

    <template #footer>
      <div class="w-full flex justify-end">
        <UButtonGroup size="md">
          <UButton color="neutral" variant="outline" label="Cancel" @click.prevent="OnClose()" />
          <UButton color="primary" variant="subtle" label="Swap" @click.prevent="OnSubmit()" />
        </UButtonGroup>
      </div>
    </template>
  </UCard>
</template>
