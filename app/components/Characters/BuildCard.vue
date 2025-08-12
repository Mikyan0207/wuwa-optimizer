<script setup lang="ts">
import type Build from '~/Core/Interfaces/Build'
import type { BuildWithDependencies } from '~/Core/Interfaces/Build'
import type Sonata from '~/Core/Interfaces/Sonata'
import { GetTotalGradeColor } from '~/composables/calculators/UseScoreCalculator'
import { GetSonataIcon } from '~/Core/Utils/EchoUtils'

interface Props {
  build: BuildWithDependencies
}

const props = defineProps<Props>()
const emit = defineEmits<{
  load: [build: Build]
  edit: [build: Build]
  delete: [build: Build]
  setDefault: [build: Build]
  editingChange: [isEditing: boolean]
}>()

const { t } = useI18n()

const ActiveSets = computed(() => {
  const setCounts = new Map<string, { count: number, sonata: Sonata }>()

  props.build.Echoes.forEach((echo) => {
    if (echo.Id !== undefined && echo.Sonata && echo.Sonata.length > 0) {
      const selectedSonata = echo.Sonata.find(s => s.IsSelected) || echo.Sonata[0]
      if (selectedSonata && selectedSonata.Name) {
        const key = selectedSonata.Name
        if (setCounts.has(key)) {
          setCounts.get(key)!.count++
        }
        else {
          setCounts.set(key, { count: 1, sonata: selectedSonata })
        }
      }
    }
  })

  return Array.from(setCounts.entries())
    .map(([name, data]) => ({
      name,
      count: data.count,
      sonata: data.sonata,
      effect1Required: data.sonata.Effect1RequiredEchoes || 2,
      effect2Required: data.sonata.Effect2RequiredEchoes || 5,
    }))
    .sort((a, b) => b.count - a.count)
})

const IsEditingName = ref(false)
const EditedName = ref(props.build.Name)
const NameInput = ref<HTMLInputElement>()

const IsDropdownOpen = ref<boolean>(false)
const IsHovered = ref<boolean>(false)

const GetCharacterScoreNoteColor = computed(() => {
  if (!props.build.Note)
    return 'text-gray-400'

  return GetTotalGradeColor(props.build.Note)
})

watch(IsDropdownOpen, (newValue) => {
  if (newValue) {
    IsHovered.value = true
  }
})

function StartEditingName() {
  IsEditingName.value = true
  EditedName.value = props.build.Name

  emit('editingChange', true)

  nextTick(() => {
    NameInput.value?.focus()
    NameInput.value?.select()
  })
}

function SaveName() {
  if (EditedName.value.trim() && EditedName.value !== props.build.Name) {
    emit('edit', { ...props.build, Name: EditedName.value.trim() })
  }
  IsEditingName.value = false
  emit('editingChange', false)
}

function CancelEdit() {
  EditedName.value = props.build.Name
  IsEditingName.value = false
  emit('editingChange', false)
}
</script>

<template>
  <UCard
    v-motion-pop
    class="group transition-all duration-200 h-full flex flex-col"
    :class="[
      build.IsDefault ? 'ring ring-gold-400/50 bg-neutral-900' : '',
      IsEditingName ? 'cursor-default' : 'cursor-pointer',
    ]"
    :ui="{
      root: 'rounded-xs border-0 h-full',
      body: 'h-full',
    }"
  >
    <div class="flex-1 flex flex-col justify-between h-full">
      <!-- Content -->
      <div class="flex-1 flex flex-col">
        <!-- Header -->
        <div class="space-y-6 mb-2">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2 flex-1 min-w-0">
              <div v-if="!IsEditingName" class="flex-1 min-w-0">
                <h3
                  class="font-semibold text-lg text-gray-100 truncate"
                  @click="StartEditingName"
                >
                  {{ build.Name }}
                </h3>
              </div>
              <div v-else class="flex-1 min-w-0">
                <input
                  ref="NameInput"
                  v-model="EditedName"
                  type="text"
                  class="w-full bg-transparent font-semibold text-gray-100 border-none outline-none focus:ring-0"
                  autofocus
                  @keyup.enter="SaveName"
                  @keyup.esc="CancelEdit"
                  @blur="SaveName"
                >
              </div>
              <UBadge
                v-if="build.IsDefault"
                color="success"
                variant="subtle"
                size="sm"
                class="shrink-0"
              >
                {{ 'Active' }}
              </UBadge>
            </div>

            <!-- Actions for current character builds -->
            <div
              class="transition-all duration-75 opacity-0 group-hover:opacity-100"
              :class="{
                'opacity-100': IsDropdownOpen || IsHovered,
              }"
              @mouseenter="IsHovered = true"
              @mouseleave="IsHovered = false"
            >
              <UDropdownMenu
                :items="[
                  {
                    label: 'Equip',
                    icon: 'i-solar-star-broken',
                    onSelect: () => emit('load', build),
                  },
                  {
                    label: 'Delete',
                    icon: 'i-solar-trash-bin-trash-broken',
                    onSelect: () => emit('delete', build),
                  },
                ]"
                @update:open="(v: boolean) => IsDropdownOpen = v"
              >
                <UButton
                  color="neutral"
                  variant="ghost"
                  icon="i-solar-menu-dots-broken"
                  size="sm"
                  @click.stop
                />
              </UDropdownMenu>
            </div>
          </div>
        </div>

        <!-- Equipment Preview -->
        <div class="space-y-6 flex-1 flex flex-col">
          <!-- Weapon -->
          <div v-if="build.Weapon" class="space-y-2">
            <div class="flex items-center gap-2">
              <div class="w-1 h-4 bg-blue-400 rounded-full" />
              <span class="text-xs font-medium text-gray-400 uppercase tracking-wide">Weapon</span>
            </div>

            <div class="flex items-center gap-3">
              <!-- Weapon Icon Container -->
              <div class="relative shrink-0">
                <!-- Weapon Icon - Cover -->
                <MWeaponIconAlt :weapon="build.Weapon" />
              </div>

              <!-- Weapon Info -->
              <div class="flex-1 min-w-0">
                <div class="text-sm text-gray-200 truncate mb-1">
                  {{ t(`${build.Weapon.GameId}_name`) }}
                </div>
                <div class="flex items-center gap-2 text-xs text-gray-400">
                  <span>Lv.{{ build.Weapon.Level }}</span>
                  <span>•</span>
                  <span>R{{ build.Weapon.Rank }}</span>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="space-y-2">
            <div class="flex items-center gap-2">
              <div class="w-1 h-4 bg-blue-400 rounded-full" />
              <span class="text-xs font-medium text-gray-400 uppercase tracking-wide">Weapon</span>
            </div>

            <div class="flex items-center gap-3">
              <!-- Empty Weapon Icon Container -->
              <div class="w-20 h-20 rounded-sm bg-neutral-800/30 flex items-center justify-center border border-gray-600/50 shrink-0">
                <USkeleton class="w-8 h-8 rounded-sm" />
              </div>

              <!-- No Weapon Info -->
              <div class="flex-1 min-w-0">
                <USkeleton class="h-4 w-20" />
              </div>
            </div>
          </div>

          <!-- Echoes Preview -->
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <div class="w-1 h-4 bg-purple-400 rounded-full" />
              <span class="text-xs font-medium text-gray-400 uppercase tracking-wide">Echoes</span>
            </div>

            <div class="flex flex-wrap gap-3">
              <div
                v-for="slot in 5"
                :key="slot"
                class="relative"
              >
                <MEchoIconAlt v-if="build.Echoes[slot - 1]" :echo="build.Echoes[slot - 1]" />
                <div v-else class="w-full aspect-square rounded-sm bg-neutral-800/30 flex items-center justify-center border border-gray-600/50">
                  <USkeleton class="w-8 h-8 rounded-sm" />
                </div>
              </div>

              <!-- 6th slot (if needed) -->
              <div v-if="build.Echoes.length > 5" class="w-full aspect-square rounded-sm bg-gray-800/20 border border-gray-700/30 flex items-center justify-center">
                <span class="text-xs text-gray-500">+{{ build.Echoes.length - 5 }}</span>
              </div>
            </div>
          </div>

          <!-- Sets Preview -->
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <div class="w-1 h-4 bg-emerald-400 rounded-full" />
              <span class="text-xs font-medium text-gray-400 uppercase tracking-wide">Active Sets</span>
            </div>

            <div v-if="ActiveSets.length > 0" class="grid grid-cols-1 gap-1.5">
              <div
                v-for="set in ActiveSets"
                :key="set.name"
                class="flex items-center justify-between p-2 bg-neutral-800/50 rounded-xs"
              >
                <div class="flex items-center gap-2 flex-1 min-w-0">
                  <NuxtImg
                    :src="GetSonataIcon(set.sonata)"
                    :alt="set.name"
                    class="w-5 h-5 object-contain"
                  />
                  <span class="text-xs text-gray-300 truncate">{{ set.name }}</span>
                </div>
                <div class="flex items-center gap-1 shrink-0">
                  <span class="text-xs font-mono text-gray-400">{{ set.count }}</span>
                  <span class="text-xs text-gray-600">/</span>
                  <span class="text-xs font-mono text-gray-400">{{ set.effect2Required }}</span>
                </div>
              </div>

              <div v-if="ActiveSets.length > 2" class="text-xs text-gray-500 text-center py-1">
                +{{ ActiveSets.length - 2 }} more
              </div>
            </div>

            <!-- Empty sets placeholder -->
            <div v-else class="p-2 bg-neutral-800/50 rounded-xs">
              <USkeleton class="h-4 w-24" />
            </div>
          </div>

          <!-- Spacer to push footer to bottom -->
          <div class="flex-1" />
        </div>
      </div>

      <!-- Footer -->
      <div class="flex items-center justify-between pt-3 border-t border-gray-800/30">
        <div class="flex items-center gap-2">
          <div v-if="build.Score" class="flex items-center gap-1.5">
            <UIcon name="i-solar-calculator-minimalistic-broken" class="w-3.5 h-3.5 text-gray-500" />
            <span class="text-xs font-mono text-gray-400">{{ build.Score?.toFixed(2) || '0.0' }}</span>
            <span class="text-xs" :class="GetCharacterScoreNoteColor">
              ({{ build.Note || 'F' }})
            </span>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-600">{{ new Date(build.UpdatedAt).toLocaleDateString() }}</span>
        </div>
      </div>
    </div>
  </UCard>
</template>
