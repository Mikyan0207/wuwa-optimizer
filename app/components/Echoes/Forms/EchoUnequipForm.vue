<script setup lang="ts">
import type Echo from '~/Core/Interfaces/Echo'
import { GetEchoCostText } from '~/Core/Utils/EchoUtils'

const props = defineProps<{
  echoSlot: number
  open?: boolean
}>()

const emits = defineEmits<{
  close: []
}>()

const { t } = useI18n()
const EchoesStore = useEchoesStore()
const { CurrentCharacter, GetEchoBySlot } = useCharacterContext()
const CurrentEcho = computed<Echo | undefined>(() => GetEchoBySlot(props.echoSlot))

function OnSubmit() {
  if (CurrentEcho.value === undefined || CurrentCharacter.value === undefined) {
    return
  }

  EchoesStore.RemoveEcho(CurrentEcho.value!.Id, CurrentCharacter.value!.Id)
  OnClose()
}

function OnClose() {
  emits('close')
}
</script>

<template>
  <div class="h-full flex flex-col bg-black min-h-0">
    <!-- Header -->
    <div class="sticky top-0 z-10 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div class="flex items-center justify-between px-4 py-3">
        <div class="flex items-center gap-6">
          <h2 class="text-lg font-semibold text-white flex items-center gap-2">
            <UIcon name="i-lucide-trash-2" class="h-5 w-5 text-red-400" />
            Unequip Echo
          </h2>
        </div>
        <UButton icon="i-lucide-x" color="neutral" variant="ghost" size="sm" @click="OnClose" />
      </div>
    </div>

    <!-- Main content -->
    <div class="flex-1 overflow-hidden">
      <div class="h-full flex flex-col overflow-hidden min-h-0">
        <!-- Current Echo Display -->
        <div class="px-4 py-4 border-b border-white/10 bg-white/5">
          <div class="flex items-center gap-4">
            <div class="relative h-20 w-20 flex items-center justify-center overflow-clip rounded-br-lg">
              <NuxtImg
                v-if="CurrentEcho"
                width="80" height="80" :src="`/images/echoes/${CurrentEcho.Icon}`" style="color: transparent;"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex-1">
              <h4 class="text-white font-semibold text-xl mb-2">
                {{ CurrentEcho ? t(`${CurrentEcho.Id}_name`) : 'No Echo' }}
              </h4>
              <div class="flex items-center gap-2 mb-2">
                <UBadge variant="soft" color="warning" size="sm">
                  Slot {{ props.echoSlot + 1 }}
                </UBadge>
                <UBadge v-if="CurrentEcho" variant="soft" color="info" size="sm">
                  Cost {{ GetEchoCostText(CurrentEcho.Cost) }}
                </UBadge>
                <UBadge v-if="CurrentEcho?.IsNightmare" variant="soft" color="warning" size="sm">
                  Nightmare
                </UBadge>
              </div>
              <div class="flex items-center gap-1.5 overflow-hidden">
                <div
                  v-if="CurrentEcho?.Sonata.find(s => s.IsSelected)"
                  class="flex items-center gap-1.5 bg-black/30 border border-white/10 rounded-br-lg px-2 py-1 flex-shrink-0"
                >
                  <NuxtImg :src="`/images/icons/${CurrentEcho.Sonata.find(s => s.IsSelected)?.Icon}`" class="h-4 w-4 object-contain" />
                  <span class="text-xs font-medium text-white/90">{{ CurrentEcho.Sonata.find(s => s.IsSelected)?.Name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="sticky bottom-0 bg-black/80 backdrop-blur-md border-t border-white/10 p-4">
      <div class="flex justify-end items-center gap-3">
        <UButton
          color="neutral"
          variant="outline"
          label="Cancel"
          @click="OnClose"
        />
        <UButton
          color="error"
          variant="solid"
          label="Unequip Echo"
          @click="OnSubmit"
        />
      </div>
    </div>
  </div>
</template>
