<script setup lang="ts">
import type Echo from '~/Core/Interfaces/Echo'
import type Sonata from '~/Core/Interfaces/Sonata'
import { EchoCost } from '~/Core/Enums/EchoCost'
import { GetEchoCostText } from '~/Core/Utils/EchoUtils'

interface SonataSelectionStepProps {
  displayedEcho: Echo | undefined
  selectedSonataName: string
  errors?: string[]
}

const props = defineProps<SonataSelectionStepProps>()

const emit = defineEmits<{
  selectSonata: [sonata: Sonata]
}>()

const { t } = useI18n()

function HighlightNumbers(text: string) {
  return text.replace(/(\+\d+(?:\.\d+)?%?|\d+(?:\.\d+)?%)/g, '<span class="text-primary-400 font-semibold">$1</span>')
}

function SelectSonata(sonata: Sonata) {
  emit('selectSonata', sonata)
}
</script>

<template>
  <div class="h-full flex flex-col overflow-hidden min-h-0">
    <!-- Affichage des erreurs -->
    <div v-if="props.errors && props.errors.length > 0" class="p-3 bg-red-500/10 border-b border-red-500/20">
      <div class="text-red-400 text-sm">
        <div v-for="error in props.errors" :key="error" class="flex items-center gap-2">
          <UIcon name="i-heroicons-exclamation-triangle" class="h-4 w-4" />
          {{ error }}
        </div>
      </div>
    </div>

    <div class="px-4 py-4 border-b border-white/10">
      <div class="flex items-center space-x-4">
        <NuxtImg :src="`/images/echoes/${props.displayedEcho?.Icon}`" class="w-16 h-16 rounded-lg" />
        <div class="flex-1">
          <h4 class="text-white font-semibold text-lg mb-1">
            {{ t(`${props.displayedEcho?.Id}_name`) }}
          </h4>
          <div class="flex items-center gap-2">
            <UBadge variant="soft" color="info" size="sm">
              Cost {{ GetEchoCostText(props.displayedEcho?.Cost ?? EchoCost.FOUR_COST) }}
            </UBadge>

            <UBadge v-if="props.displayedEcho?.IsNightmare" variant="soft" color="warning" size="sm">
              Nightmare
            </UBadge>
          </div>
        </div>
      </div>
    </div>

    <!-- Sonata Grid -->
    <div class="overflow-y-auto scrollbar-hidden p-4 pb-24 min-h-0" style="height: calc(100vh - 300px);">
      <div class="grid grid-cols-1 gap-2">
        <div
          v-for="sonata in props.displayedEcho?.Sonata"
          :key="sonata.Name"
          class="group cursor-pointer bg-white/5 border border-white/10 rounded-br-lg transition-all duration-200 hover:bg-white/10 hover:border-white/20 relative"
          :class="{ 'bg-primary-500/20 border-primary-500/50 ring-2 ring-primary-500/50': props.selectedSonataName === sonata.Name }"
          @click="SelectSonata(sonata)"
        >
          <div class="p-4">
            <!-- Header: Icon and Title -->
            <div class="flex items-center gap-3 mb-4">
              <div class="relative">
                <NuxtImg :src="`/images/icons/${sonata.Icon}`" class="w-8 h-8 rounded-lg" />
              </div>
              <h3 class="text-lg font-semibold text-white">
                {{ sonata.Name }}
              </h3>
            </div>

            <!-- Effects -->
            <div class="space-y-3">
              <!-- 2pc Effect -->
              <div class="bg-black/30 border border-white/10 rounded-lg p-3">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-medium text-white/50">Bonus 1</span>
                  <UBadge variant="soft" color="primary" size="sm">
                    2pc
                  </UBadge>
                </div>
                <p class="text-sm text-white leading-relaxed" v-html="HighlightNumbers(sonata.Effect1 || 'No effect description')" />
              </div>

              <!-- 5pc Effect -->
              <div class="bg-black/30 border border-white/10 rounded-lg p-3">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-medium text-white/50">Bonus 2</span>
                  <UBadge variant="soft" color="primary" size="sm">
                    5pc
                  </UBadge>
                </div>
                <p class="text-sm text-white leading-relaxed" v-html="HighlightNumbers(sonata.Effect2 || 'No effect description')" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
