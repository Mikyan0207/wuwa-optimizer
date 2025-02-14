<script setup lang="ts">
import type { Echo } from '~/Core/Models/Echo'

const props = defineProps<{
  echoSlot: number
}>()

const emits = defineEmits(['close'])

const { t } = useI18n()
const EchoesStore = useEchoesStore()
const ActiveCharacterStore = useActiveCharacterStore()
const CurrentEcho = computed(() => ActiveCharacterStore.GetEchoBySlot(props.echoSlot))
const SelectedEcho = ref<Echo | undefined>(undefined)

function OnSubmit() {

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
          v-for="ec in EchoesStore.GetEchoes()"
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
