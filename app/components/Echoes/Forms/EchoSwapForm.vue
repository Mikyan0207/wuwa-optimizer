<script setup lang="ts">
import type Echo from '~/Core/Interfaces/Echo'
import type Sonata from '~/Core/Interfaces/Sonata'
import { EchoCost } from '~/Core/Enums/EchoCost'
import { Rarity } from '~/Core/Enums/Rarity'
import { Sonatas_1_0, Sonatas_2_0 } from '~/Core/Sonatas'
import { GetBackgroundColor, GetHighlightColor, GetSecondaryColor } from '~/Core/Utils/ColorUtils'
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
const { GetEchoBySlot } = useCharacterContext()
const CurrentEcho = computed(() => GetEchoBySlot(props.echoSlot))
const SelectedEcho = ref<Echo | undefined>(undefined)
const SearchValue = ref<string>('')
const SelectedCostFilter = ref<EchoCost | undefined>(undefined)
const SelectedSonataEffect = ref<Sonata | undefined>(undefined)
const CurrentStep = ref<number>(0)

const AvailableEchoes = computed(() => {
  return EchoesStore.Echoes
    .filter((echo: Echo) => {
      if (echo.Id === CurrentEcho.value?.Id) {
        return false
      }

      const matchesSearch = t(`${echo.Id}_name`).toLowerCase().includes(SearchValue.value.toLowerCase())
      const matchesCost = SelectedCostFilter.value ? echo.Cost === SelectedCostFilter.value : true
      const matchesSonata = SelectedSonataEffect.value ? echo.Sonata.some(sonata => sonata.Name === SelectedSonataEffect.value?.Name) : true

      return matchesSearch && matchesCost && matchesSonata
    })
})

const IsFormValid = computed(() => {
  return SelectedEcho.value !== undefined
})

function SelectSonataFilter(sonata: Sonata) {
  if (sonata.Name === SelectedSonataEffect.value?.Name) {
    SelectedSonataEffect.value = undefined
  }
  else {
    SelectedSonataEffect.value = sonata
  }
}

function SelectCostFilter(cost: EchoCost | undefined) {
  if (cost === SelectedCostFilter.value) {
    SelectedCostFilter.value = undefined
  }
  else {
    SelectedCostFilter.value = cost
  }
}

function SelectEcho(echo: Echo) {
  SelectedEcho.value = echo
  NextStep()
}

function NextStep() {
  if (CurrentStep.value < 1) {
    CurrentStep.value++
  }
}

function PreviousStep() {
  if (CurrentStep.value > 0) {
    CurrentStep.value--
  }
}

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

function GetRarityText(rarity: Rarity) {
  switch (rarity) {
    case Rarity.FIVE_STARS:
      return '5'
    case Rarity.FOUR_STARS:
      return '4'
    case Rarity.THREE_STARS:
      return '3'
    case Rarity.TWO_STARS:
      return '2'
    default:
      return '2'
  }
}

function GetCharacterEchoesCount(characterId: number) {
  return EchoesStore.Echoes.filter(echo => echo.EquipedBy === characterId).length
}
</script>

<template>
  <div class="h-full flex flex-col bg-black min-h-0">
    <!-- Header with steps -->
    <div class="sticky top-0 z-10 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div class="flex items-center justify-between px-4 py-3">
        <div class="flex items-center gap-6">
          <h2 class="text-lg font-semibold text-white flex items-center gap-2">
            <UIcon name="i-lucide-shuffle" class="h-5 w-5 text-primary-400" />
            Swap Echo
          </h2>
          <!-- Progress Steps -->
          <div class="flex items-center gap-3">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full transition-colors" :class="CurrentStep >= 0 ? 'bg-primary-500' : 'bg-white/30'" />
              <span class="text-xs font-medium" :class="CurrentStep >= 0 ? 'text-primary-400' : 'text-white/50'">Select Echo</span>
            </div>
            <div class="w-3 h-px bg-white/20" />
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full transition-colors" :class="CurrentStep >= 1 ? 'bg-primary-500' : 'bg-white/30'" />
              <span class="text-xs font-medium" :class="CurrentStep >= 1 ? 'text-primary-400' : 'text-white/50'">Confirm Swap</span>
            </div>
          </div>
        </div>
        <UButton icon="i-lucide-x" color="neutral" variant="ghost" size="sm" @click="OnClose" />
      </div>
    </div>

    <!-- Main content -->
    <div class="flex-1 overflow-hidden">
      <!-- Step 1: Echo Selection -->
      <div v-if="CurrentStep === 0" class="h-full flex flex-col overflow-hidden min-h-0">
        <!-- Current Echo Display -->
        <div class="px-4 py-4 border-b border-white/10 bg-white/5">
          <div class="flex items-center gap-3">
            <div class="relative h-16 w-16 flex items-center justify-center overflow-clip rounded-lg">
              <NuxtImg
                v-if="CurrentEcho"
                width="64" height="64" :src="`/images/echoes/${CurrentEcho.Icon}`" style="color: transparent;"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex-1">
              <h4 class="text-white font-semibold text-lg mb-1">
                {{ CurrentEcho ? t(`${CurrentEcho.Id}_name`) : 'No Echo' }}
              </h4>
              <div class="flex items-center gap-2">
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
            </div>
          </div>
        </div>

        <!-- Search and Filters -->
        <div class="px-4 py-3 border-b border-white/10 bg-white/5">
          <!-- Search -->
          <div class="mb-3">
            <UInput v-model="SearchValue" placeholder="Search echoes to swap with..." class="bg-white/10 border-white/20 text-white" />
          </div>
          <!-- Cost Filter -->
          <div class="flex items-center gap-3 mb-3">
            <div class="flex items-center">
              <span class="text-xs font-medium text-white/60 mr-2">Cost</span>
              <div class="flex items-center bg-black/50 border border-white/10 rounded-lg overflow-hidden">
                <button
                  v-for="cost in [EchoCost.ONE_COST, EchoCost.THREE_COST, EchoCost.FOUR_COST]" :key="cost"
                  class="px-3 py-1.5 text-xs font-medium transition-all duration-200" :class="{
                    'bg-primary-500 text-white': cost === SelectedCostFilter,
                    'text-white/60 hover:text-white hover:bg-white/5': cost !== SelectedCostFilter,
                  }" @click.prevent="SelectCostFilter(cost)"
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
              v-for="sonata in Sonatas_1_0" :key="sonata.Name"
              class="group cursor-pointer bg-black/50 border border-white/10 rounded-md px-2 py-1.5 transition-all duration-200 hover:bg-white/10 hover:border-white/20 flex items-center gap-1.5" :class="{
                'bg-primary-500/20 border-primary-500/50 text-primary-300': sonata.Name === SelectedSonataEffect?.Name,
                'text-white/80 hover:text-white': sonata.Name !== SelectedSonataEffect?.Name,
              }" @click.prevent="SelectSonataFilter(sonata)"
            >
              <NuxtImg :src="`/images/icons/${sonata.Icon}`" class="h-4 w-4 object-contain" />
              <span class="text-xs font-medium whitespace-nowrap">{{ sonata.Name }}</span>
            </div>

            <!-- 2.x sonata -->
            <div
              v-for="sonata in Sonatas_2_0" :key="sonata.Name"
              class="group cursor-pointer bg-black/50 border border-white/10 rounded-md px-2 py-1.5 transition-all duration-200 hover:bg-white/10 hover:border-white/20 flex items-center gap-1.5" :class="{
                'bg-primary-500/20 border-primary-500/50 text-primary-300': sonata.Name === SelectedSonataEffect?.Name,
                'text-white/80 hover:text-white': sonata.Name !== SelectedSonataEffect?.Name,
              }" @click.prevent="SelectSonataFilter(sonata)"
            >
              <NuxtImg :src="`/images/icons/${sonata.Icon}`" class="h-4 w-4 object-contain" />
              <span class="text-xs font-medium whitespace-nowrap">{{ sonata.Name }}</span>
            </div>
          </div>
        </div>

        <!-- Echo Grid -->
        <div class="overflow-y-auto scrollbar-hidden p-4 pb-24 min-h-0" style="height: calc(100vh - 300px);">
          <div class="grid grid-cols-2 gap-3">
            <div
              v-for="ec in AvailableEchoes"
              :key="ec.Id"
              class="group cursor-pointer bg-white/5 border border-white/10 rounded-br-lg transition-all duration-200 hover:bg-white/10 hover:border-white/20 relative"
              :class="{ 'bg-primary-500/20 border-primary-500/50 ring-2 ring-primary-500/50': SelectedEcho?.Id === ec.Id }"
              @click="SelectEcho(ec)"
            >
              <div class="flex flex-col">
                <!-- Header with Icon, Name, Cost, Slot -->
                <div class="flex items-center gap-3 border-b border-neutral-700">
                  <!-- Icon / Rarity -->
                  <div class="relative h-16 w-16 flex items-center justify-center overflow-clip">
                    <!-- Icon -->
                    <div class="absolute w-full h-full">
                      <NuxtImg
                        width="64" height="64" :src="`/images/echoes/${ec.Icon}`" style="color: transparent;"
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

                  <!-- Name and Badges -->
                  <div class="flex-1 space-y-1 min-w-0">
                    <!-- Name -->
                    <div class="w-full flex items-center justify-between text-nowrap">
                      <div :title="t(`${ec.Id}_name`)" class="text-truncate font-medium">
                        {{ t(`${ec.Id}_name`) }}
                      </div>
                    </div>

                    <!-- Cost, Slot, Level, Rarity and Nightmare -->
                    <div class="flex items-center gap-1">
                      <UBadge v-if="ec.IsNightmare" variant="soft" color="warning" size="sm">
                        Nightmare
                      </UBadge>
                      <UBadge variant="soft" color="info" size="sm">
                        Cost {{ GetEchoCostText(ec.Cost) }}
                      </UBadge>
                      <UBadge variant="soft" color="primary" size="sm">
                        Slot {{ (ec.EquipedSlot ?? 0) + 1 }}
                      </UBadge>
                      <UBadge variant="soft" color="success" size="sm">
                        +{{ ec.Level }}
                      </UBadge>
                      <UBadge variant="soft" color="warning" size="sm">
                        {{ GetRarityText(ec.Rarity) }}✧
                      </UBadge>
                    </div>
                  </div>
                </div>

                <!-- Stats Content -->
                <div class="p-3 space-y-3 text-sm">
                  <!-- Main and Secondary Stats -->
                  <div v-if="ec.MainStatistic && ec.SecondaryStatistic" class="space-y-2 w-full">
                    <StatLine :stat="ec.MainStatistic" :is-main-stat="true" icon-size="xs" :show-line="true" />
                    <StatLine :stat="ec.SecondaryStatistic" :is-main-stat="false" icon-size="xs" :show-line="true" />
                  </div>

                  <!-- Sub Stats -->
                  <div v-if="ec.Statistics && ec.Statistics.length > 0" class="space-y-2 w-full">
                    <div class="flex items-center gap-1 text-xs">
                      <span class="text-white/60">Sub-stats:</span>
                    </div>
                    <div class="space-y-1">
                      <StatLine
                        v-for="(stat, index) in ec.Statistics"
                        :key="`sub-${index}`"
                        :stat="stat"
                        :is-main-stat="false"
                        icon-size="xs"
                        :show-line="true"
                      />
                    </div>
                  </div>
                </div>

                <!-- Character Global Info -->
                <div class="px-3 pb-3">
                  <div v-if="ec.EquipedBy" class="flex flex-col gap-2 bg-black/50 border border-white/10 rounded-md px-2 py-1">
                    <!-- Character, Set and Equipped Count -->
                    <div class="flex items-center gap-2">
                      <div class="flex items-center gap-1.5">
                        <NuxtImg :src="`/images/characters/${ec.EquipedBy}/${t(`${ec.EquipedBy}_name`)}_Icon.webp`" class="h-4 w-4 object-contain" />
                        <span class="text-xs font-medium text-white/90 truncate">{{ t(`${ec.EquipedBy}_name`) }}</span>
                      </div>
                      <div v-if="ec.Sonata.find(s => s.IsSelected)" class="flex items-center gap-1.5 border-l border-white/20 pl-2">
                        <NuxtImg :src="`/images/icons/${ec.Sonata.find(s => s.IsSelected)?.Icon}`" class="h-4 w-4 object-contain" />
                        <span class="text-xs font-medium text-white/90 truncate">{{ ec.Sonata.find(s => s.IsSelected)?.Name }}</span>
                      </div>
                      <div class="flex items-center gap-1.5 border-l border-white/20 pl-2">
                        <UIcon name="i-lucide-layers" class="h-4 w-4 text-primary-400" />
                        <span class="text-xs font-medium text-primary-400">{{ GetCharacterEchoesCount(ec.EquipedBy) }}/5</span>
                      </div>
                    </div>
                  </div>
                  <div v-else class="bg-black/50 border border-white/10 rounded-md px-2 py-1">
                    <span class="text-xs text-white/60">Unequipped</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 2: Confirm Swap -->
      <div v-if="CurrentStep === 1" class="h-full flex flex-col overflow-hidden min-h-0">
        <!-- Header -->
        <div class="px-4 py-3 border-b border-white/10">
          <h3 class="text-white font-semibold text-xl">
            Confirm Echo Swap
          </h3>
        </div>

        <!-- Main Swap Visualization -->
        <div class="flex-1 overflow-y-auto scrollbar-hidden p-3 pb-24 min-h-0 flex flex-col" style="height: calc(100vh - 300px);">
          <!-- Warning/Info Alert -->
          <div
            v-if="CurrentEcho?.EquipedBy !== SelectedEcho?.EquipedBy"
            class="bg-amber-500/10 border border-amber-500/20 rounded-br-xl p-3 mb-6"
          >
            <div class="flex items-start gap-3">
              <UIcon name="i-lucide-alert-triangle" class="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 class="text-amber-400 font-medium mb-1">
                  Cross-Character Swap
                </h4>
                <p class="text-white/80 text-sm">
                  This swap will move echoes between different characters. Make sure this is the intended action.
                </p>
              </div>
            </div>
          </div>

          <div
            v-else
            class="bg-green-500/10 border border-green-500/20 rounded-br-xl p-3 mb-6"
          >
            <div class="flex items-start gap-3">
              <UIcon name="i-lucide-check-circle" class="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 class="text-green-400 font-medium mb-1">
                  Same Character Swap
                </h4>
                <p class="text-white/80 text-sm">
                  This swap will reorder echoes within the same character. This is a safe operation.
                </p>
              </div>
            </div>
          </div>

          <!-- Swap Animation Preview - Centered Vertically -->
          <div class="flex-1 flex items-center justify-center">
            <div class="relative flex justify-center w-full">
              <!-- Background Animation -->
              <div class="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-primary-500/5 rounded-br-xl animate-pulse max-w-4xl mx-auto" />

              <!-- Swap Cards Container -->
              <div class="relative grid grid-cols-1 lg:grid-cols-3 gap-4 items-center max-w-4xl">
                <!-- Current Echo Card -->
                <div class="group relative">
                  <div class="bg-black/40 border border-white/20 rounded-br-xl p-4 backdrop-blur-sm transition-all duration-300 hover:bg-black/60 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/20">
                    <!-- Card Header -->
                    <div class="flex items-center gap-3 mb-3">
                      <div class="relative">
                        <div class="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                          <UIcon name="i-lucide-arrow-left" class="h-5 w-5 text-primary-400" />
                        </div>
                      </div>
                      <div>
                        <h4 class="text-white font-semibold text-lg">
                          Current Echo
                        </h4>
                        <p class="text-white/60 text-sm">
                          Slot {{ props.echoSlot + 1 }}
                        </p>
                      </div>
                    </div>

                    <!-- Echo Display -->
                    <div v-if="CurrentEcho" class="space-y-3">
                      <!-- Echo Icon with Rarity -->
                      <div class="relative h-20 w-20 mx-auto">
                        <div class="absolute inset-0 rounded-br-lg overflow-hidden">
                          <NuxtImg
                            width="80" height="80"
                            :src="`/images/echoes/${CurrentEcho.Icon}`"
                            class="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <!-- Echo Info -->
                      <div class="text-center space-y-2">
                        <h5 class="text-white font-medium text-sm">
                          {{ t(`${CurrentEcho.Id}_name`) }}
                        </h5>
                        <div class="flex items-center justify-center gap-2">
                          <UBadge variant="soft" color="info" size="sm">
                            Cost {{ GetEchoCostText(CurrentEcho.Cost) }}
                          </UBadge>
                          <UBadge variant="soft" color="success" size="sm">
                            +{{ CurrentEcho.Level }}
                          </UBadge>
                        </div>
                      </div>

                      <!-- Character Info -->
                      <div v-if="CurrentEcho.EquipedBy" class="bg-black/30 border border-white/10 rounded-br-lg p-0">
                        <div class="flex items-center gap-1.5">
                          <NuxtImg
                            :src="`/images/characters/${CurrentEcho.EquipedBy}/${t(`${CurrentEcho.EquipedBy}_name`)}_Icon.webp`"
                            class="h-8 w-8 object-contain"
                          />
                          <span class="text-xs font-medium text-white/90">{{ t(`${CurrentEcho.EquipedBy}_name`) }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Swap Animation Center -->
                <div class="flex flex-col items-center justify-center space-y-3">
                  <!-- Animated Arrow -->
                  <div class="relative">
                    <div class="w-14 h-14 bg-primary-500/20 rounded-full flex items-center justify-center animate-pulse">
                      <UIcon name="i-lucide-arrow-right-left" class="h-7 w-7 text-primary-400 animate-bounce" />
                    </div>
                    <!-- Pulse Rings -->
                    <div class="absolute inset-0 rounded-full border-2 border-primary-400/30 animate-ping" />
                    <div class="absolute inset-0 rounded-full border-2 border-primary-400/20 animate-ping" style="animation-delay: 0.5s;" />
                  </div>

                  <!-- Swap Type Indicator -->
                  <div class="text-center">
                    <p class="text-primary-400 font-medium text-sm">
                      Swapping
                    </p>
                    <p class="text-white/60 text-xs">
                      {{ CurrentEcho?.EquipedBy !== SelectedEcho?.EquipedBy ? 'Between Characters' : 'Same Character' }}
                    </p>
                  </div>
                </div>

                <!-- Selected Echo Card -->
                <div class="group relative">
                  <div class="bg-black/40 border border-white/20 rounded-br-xl p-4 backdrop-blur-sm transition-all duration-300 hover:bg-black/60 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/20">
                    <!-- Card Header -->
                    <div class="flex items-center gap-3 mb-3">
                      <div class="relative">
                        <div class="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                          <UIcon name="i-lucide-arrow-right" class="h-5 w-5 text-primary-400" />
                        </div>
                      </div>
                      <div>
                        <h4 class="text-white font-semibold text-lg">
                          Selected Echo
                        </h4>
                        <p class="text-white/60 text-sm">
                          Slot {{ (SelectedEcho?.EquipedSlot ?? 0) + 1 }}
                        </p>
                      </div>
                    </div>

                    <!-- Echo Display -->
                    <div v-if="SelectedEcho" class="space-y-3">
                      <!-- Echo Icon with Rarity -->
                      <div class="relative h-20 w-20 mx-auto">
                        <div class="absolute inset-0 rounded-br-lg overflow-hidden">
                          <NuxtImg
                            width="80" height="80"
                            :src="`/images/echoes/${SelectedEcho.Icon}`"
                            class="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <!-- Echo Info -->
                      <div class="text-center space-y-2">
                        <h5 class="text-white font-medium text-sm">
                          {{ t(`${SelectedEcho.Id}_name`) }}
                        </h5>
                        <div class="flex items-center justify-center gap-2">
                          <UBadge variant="soft" color="info" size="sm">
                            Cost {{ GetEchoCostText(SelectedEcho.Cost) }}
                          </UBadge>
                          <UBadge variant="soft" color="success" size="sm">
                            +{{ SelectedEcho.Level }}
                          </UBadge>
                        </div>
                      </div>

                      <!-- Character Info -->
                      <div v-if="SelectedEcho.EquipedBy" class="bg-black/30 border border-white/10 rounded-br-lg p-0">
                        <div class="flex items-center gap-1.5">
                          <NuxtImg
                            :src="`/images/characters/${SelectedEcho.EquipedBy}/${t(`${SelectedEcho.EquipedBy}_name`)}_Icon.webp`"
                            class="h-8 w-8 object-contain"
                          />
                          <span class="text-xs font-medium text-white/90">{{ t(`${SelectedEcho.EquipedBy}_name`) }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer with navigation -->
    <div class="sticky bottom-0 bg-black/80 backdrop-blur-md border-t border-white/10 p-4">
      <div class="flex justify-between items-center">
        <UButton
          v-if="CurrentStep > 0"
          color="neutral"
          variant="outline"
          label="Previous"
          @click="PreviousStep"
        />
        <div v-else />

        <UButton
          v-if="CurrentStep === 0"
          color="primary"
          variant="soft"
          label="Next"
          :disabled="!IsFormValid"
          @click="NextStep"
        />
        <UButton
          v-else
          color="primary"
          variant="solid"
          label="Confirm Swap"
          type="submit"
          :disabled="!IsFormValid"
          @click="OnSubmit"
        />
      </div>
    </div>
  </div>
</template>
