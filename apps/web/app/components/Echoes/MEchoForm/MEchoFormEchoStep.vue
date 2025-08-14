<script setup lang="ts">
import type Echo from '~/Core/Interfaces/Echo'
import type Sonata from '~/Core/Interfaces/Sonata'
import { TemplateEchoes } from '~/Core/Echoes'
import { EchoCost } from '~/Core/Enums/EchoCost'
import { Sonatas_1_0, Sonatas_2_0 } from '~/Core/Sonatas'
import { GetBackgroundColor, GetHighlightColor, GetSecondaryColor } from '~/Core/Utils/ColorUtils'
import { GetEchoCostText } from '~/Core/Utils/EchoUtils'

interface EchoSelectionStepProps {
  state: {
    EchoId: number
    Cost: EchoCost
  }
  filters: {
    sonata: Sonata | undefined
    cost: EchoCost | undefined
  }
  errors?: string[]
}

const props = defineProps<EchoSelectionStepProps>()

const emit = defineEmits<{
  'update:state': [state: EchoSelectionStepProps['state']]
  'update:filters': [filters: EchoSelectionStepProps['filters']]
  'selectEcho': [echoId: number, cost: EchoCost]
}>()

const { t } = useI18n()

const FilteredEchoes = computed(() => {
  return TemplateEchoes
    .filter((echo: Echo) => {
      const matchesSonata = props.filters.sonata ? echo.Sonata.some(sonata => sonata.Name === props.filters.sonata?.Name) : true
      const matchesCost = props.filters.cost ? echo.Cost === props.filters.cost : true

      return matchesSonata && matchesCost
    })
})

function SelectSonataFilter(sonata: Sonata) {
  const newFilters = { ...props.filters }
  if (sonata.Name === newFilters.sonata?.Name) {
    newFilters.sonata = undefined
  }
  else {
    newFilters.sonata = sonata
  }
  emit('update:filters', newFilters)
}

function SelectCostFilter(cost: EchoCost | undefined) {
  const newFilters = { ...props.filters }
  if (cost === newFilters.cost) {
    newFilters.cost = undefined
  }
  else {
    newFilters.cost = cost
  }
  emit('update:filters', newFilters)
}

function SelectEcho(echoId: number, cost: EchoCost) {
  emit('update:state', { EchoId: echoId, Cost: cost })
  emit('selectEcho', echoId, cost)
}
</script>

<template>
  <div class="h-full flex flex-col overflow-hidden min-h-0">
    <!-- Affichage des erreurs -->
    <div v-if="errors && errors.length > 0" class="p-3 bg-red-500/10 border-b border-red-500/20">
      <div class="text-red-400 text-sm">
        <div v-for="error in errors" :key="error" class="flex items-center gap-2">
          <UIcon name="i-heroicons-exclamation-triangle" class="h-4 w-4" />
          {{ error }}
        </div>
      </div>
    </div>

    <!-- Filters -->
    <div class="px-4 py-3 border-b border-white/10 bg-white/5">
      <!-- Cost Filter -->
      <div class="flex items-center gap-3 mb-3">
        <div class="flex items-center">
          <span class="text-xs font-medium text-white/60 mr-2">Cost</span>
          <div class="flex items-center bg-black/50 border border-white/10 rounded-lg overflow-hidden">
            <button
              v-for="cost in [EchoCost.ONE_COST, EchoCost.THREE_COST, EchoCost.FOUR_COST]"
              :key="cost"
              class="px-3 py-1.5 text-xs font-medium transition-all duration-200"
              :class="{
                'bg-primary-500 text-white': cost === filters.cost,
                'text-white/60 hover:text-white hover:bg-white/5': cost !== filters.cost,
              }"
              @click.prevent="SelectCostFilter(cost)"
            >
              {{ GetEchoCostText(cost) }}
            </button>
          </div>
        </div>
      </div>

      <!-- Sonata Filters -->
      <div class="flex flex-wrap items-center gap-1.5">
        <!-- 1.x sonata -->
        <div
          v-for="sonata in Sonatas_1_0"
          :key="sonata.Name"
          class="group cursor-pointer bg-black/50 border border-white/10 rounded-md px-2 py-1.5 transition-all duration-200 hover:bg-white/10 hover:border-white/20 flex items-center gap-1.5"
          :class="{
            'bg-primary-500/20 border-primary-500/50 text-primary-300': sonata.Name === filters.sonata?.Name,
            'text-white/80 hover:text-white': sonata.Name !== filters.sonata?.Name,
          }"
          @click.prevent="SelectSonataFilter(sonata)"
        >
          <NuxtImg :src="`/images/icons/${sonata.Icon}`" class="h-4 w-4 object-contain" />
          <span class="text-xs font-medium whitespace-nowrap">{{ sonata.Name }}</span>
        </div>

        <!-- 2.x sonata -->
        <div
          v-for="sonata in Sonatas_2_0"
          :key="sonata.Name"
          class="group cursor-pointer bg-black/50 border border-white/10 rounded-md px-2 py-1.5 transition-all duration-200 hover:bg-white/10 hover:border-white/20 flex items-center gap-1.5"
          :class="{
            'bg-primary-500/20 border-primary-500/50 text-primary-300': sonata.Name === filters.sonata?.Name,
            'text-white/80 hover:text-white': sonata.Name !== filters.sonata?.Name,
          }"
          @click.prevent="SelectSonataFilter(sonata)"
        >
          <NuxtImg :src="`/images/icons/${sonata.Icon}`" class="h-4 w-4 object-contain" />
          <span class="text-xs font-medium whitespace-nowrap">{{ sonata.Name }}</span>
        </div>
      </div>
    </div>

    <!-- Echo Grid -->
    <div class="overflow-y-auto scrollbar-hidden p-4 pb-24 min-h-0" style="height: calc(100vh - 300px);">
      <div class="grid grid-cols-1 gap-2">
        <div
          v-for="ec in FilteredEchoes"
          :key="ec.Id"
          class="group cursor-pointer bg-white/5 border border-white/10 rounded-br-lg transition-all duration-200 hover:bg-white/10 hover:border-white/20 relative"
          :class="{ 'bg-primary-500/20 border-primary-500/50 ring-2 ring-primary-500/50': state.EchoId === ec.GameId }"
          @click="SelectEcho(ec.GameId, ec.Cost)"
        >
          <div class="flex">
            <!-- Icon / Rarity -->
            <div class="relative h-26 min-h-26 w-26 flex items-center justify-center overflow-clip">
              <!-- Icon -->
              <div class="absolute w-full h-full bottom-0">
                <NuxtImg
                  width="160" height="160" :src="`/images/echoes/${ec.Icon}`" style="color: transparent;"
                  class="w-full h-full object-cover"
                />
              </div>
              <!-- Rarity Highlight -->
              <div class="absolute bottom-0 w-full rounded-bl">
                <div class="relative w-full flex items-center">
                  <div class="absolute mt-auto h-4 w-full -bottom-2">
                    <div
                      class="absolute bottom-0 h-3 w-full blur-lg transition-all duration-200 group-hover:h-4 group-hover:blur"
                      :class="GetBackgroundColor(ec.Rarity)"
                    />
                    <div
                      class="absolute bottom-0 h-2 w-full blur duration-200 group-hover:h-2 group-hover:blur-sm"
                      :class="GetSecondaryColor(ec.Rarity)"
                    />
                  </div>
                </div>
                <div class="h-[3px] rounded-bl" :class="GetHighlightColor(ec.Rarity)" />
              </div>
            </div>

            <!-- Content -->
            <div class="border-l border-neutral-700 p-2 space-y-1 text-sm">
              <!-- Name -->
              <div class="w-full flex items-center justify-between text-nowrap">
                <div :title="t(`${ec.GameId}_name`)" class="text-truncate">
                  {{ t(`${ec.GameId}_name`) }}
                </div>
              </div>

              <!-- Cost and Nightmare -->
              <div class="flex items-center gap-1 pt-1">
                <UBadge v-if="ec.IsNightmare" variant="soft" color="warning" size="sm">
                  Nightmare
                </UBadge>
                <UBadge variant="soft" color="info" size="sm">
                  Cost {{ GetEchoCostText(ec.Cost) }}
                </UBadge>
              </div>

              <!-- Sonatas -->
              <div class="flex items-center gap-1.5 pt-1 overflow-hidden">
                <div
                  v-for="sonata in ec.Sonata"
                  :key="`${ec.Id}-${sonata.Name}`"
                  class="flex items-center gap-1.5 bg-black/30 border border-white/10 rounded-md px-2 py-1 flex-shrink-0"
                >
                  <NuxtImg :src="`/images/icons/${sonata.Icon}`" class="h-4 w-4 object-contain" />
                  <span class="text-xs font-medium text-white/90">{{ sonata.Name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
