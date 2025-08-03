<script setup lang="ts">
import type Build from '~/Core/Interfaces/Build'
import type Sonata from '~/Core/Interfaces/Sonata'
import { TOTAL_SCORE_GRADES } from '~/composables/UseScoreCalculator'
import { GetBackgroundColor, GetHighlightColor, GetSecondaryColor } from '~/Core/Utils/ColorUtils'
import { GetEchoIcon, GetSonataIcon } from '~/Core/Utils/EchoUtils'

interface Props {
  build: Build
  isSelected?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  load: [build: Build]
  edit: [build: Build]
  delete: [build: Build]
  setDefault: [build: Build]
}>()

const WeaponsStore = useWeaponsStore()
const EchoesStore = useEchoesStore()

const weapon = computed(() => {
  if (!props.build.WeaponId)
    return null
  return WeaponsStore.GetWeapon(props.build.WeaponId)
})

const echoes = computed(() => {
  if (props.build.EchoesData && props.build.EchoesData.length > 0) {
    return [...props.build.EchoesData].sort((a, b) => (a.EquipedSlot || 0) - (b.EquipedSlot || 0))
  }

  return props.build.EquipedEchoes
    .map(id => EchoesStore.Get(id))
    .filter((echo): echo is NonNullable<typeof echo> =>
      echo !== undefined && echo.EquipedBy === props.build.CharacterId,
    )
    .sort((a, b) => (a.EquipedSlot || 0) - (b.EquipedSlot || 0))
})

const activeSets = computed(() => {
  const setCounts = new Map<string, { count: number, sonata: Sonata }>()

  echoes.value.forEach((echo) => {
    if (echo.Id !== -1 && echo.Sonata && echo.Sonata.length > 0) {
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

const GetCharacterScoreNoteColor = computed(() => {
  if (!props.build.Note)
    return 'text-gray-400'

  return TOTAL_SCORE_GRADES.find(x => x.Grade === props.build.Note)?.Color
})

function StartEditingName() {
  IsEditingName.value = true
  EditedName.value = props.build.Name
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
}

function CancelEdit() {
  EditedName.value = props.build.Name
  IsEditingName.value = false
}
</script>

<template>
  <UCard
    v-motion-pop-visible-once
    class="group cursor-pointer transition-all duration-200"
    :class="[
      isSelected ? 'ring ring-gold-400/50 bg-neutral-900' : 'hover:bg-neutral-800/65',
    ]"
    :ui="{
      root: 'rounded-xs border-0',
    }"
  >
    <div class="p-4">
      <!-- Header -->
      <div class="flex items-start justify-between mb-4">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-1">
            <div v-if="!IsEditingName" class="flex-1 min-w-0">
              <h3
                class="font-semibold text-gray-100 truncate cursor-pointer hover:text-gray-300 transition-colors"
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
              v-if="build.IsDefault || isSelected"
              color="success"
              variant="subtle"
              size="sm"
              class="shrink-0"
            >
              Active
            </UBadge>
          </div>

          <p v-if="build.Description" class="text-sm text-gray-400 truncate">
            {{ build.Description }}
          </p>
        </div>

        <!-- Score and Actions -->
        <div class="flex items-center gap-2 ml-3 shrink-0">
          <!-- Actions -->
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
          >
            <UButton
              color="neutral"
              variant="ghost"
              icon="i-solar-menu-dots-broken"
              size="sm"
              class="opacity-0 group-hover:opacity-100 transition-opacity"
              @click.stop
            />
          </UDropdownMenu>
        </div>
      </div>

      <!-- Equipment Preview -->
      <div class="space-y-6">
        <!-- Weapon -->
        <div v-if="weapon" class="space-y-2">
          <div class="flex items-center gap-2">
            <div class="w-1 h-4 bg-blue-400 rounded-full" />
            <span class="text-xs font-medium text-gray-400 uppercase tracking-wide">Weapon</span>
          </div>

          <div class="flex items-center gap-3">
            <!-- Weapon Icon Container -->
            <div class="relative shrink-0">
              <div class="w-20 h-20 rounded-sm bg-neutral-800/30 flex items-center justify-center relative overflow-hidden border border-gray-600/50">
                <!-- Weapon Icon - Cover -->
                <NuxtImg
                  :src="`/images/weapons/${weapon.Icon}`"
                  :alt="weapon.Name"
                  class="w-full h-full object-cover"
                />

                <!-- Rarity Border Effect -->
                <div class="absolute inset-0 pointer-events-none">
                  <div class="absolute bottom-0 w-full">
                    <div class="relative w-full flex items-center">
                      <div class="absolute mt-auto h-2 w-full -bottom-1">
                        <div
                          class="absolute bottom-0 h-1.5 w-full blur-sm"
                          :class="GetBackgroundColor(weapon.Rarity)"
                        />
                        <div
                          class="absolute bottom-0 h-1 w-full blur"
                          :class="GetSecondaryColor(weapon.Rarity)"
                        />
                      </div>
                    </div>
                    <div class="h-[2px]" :class="GetHighlightColor(weapon.Rarity)" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Weapon Info -->
            <div class="flex-1 min-w-0">
              <div class="text-sm text-gray-200 truncate mb-1">
                {{ weapon.Name }}
              </div>
              <div class="flex items-center gap-2 text-xs text-gray-400">
                <span>Lv.{{ weapon.Level }}</span>
                <span>•</span>
                <span>R{{ weapon.Rank }}</span>
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
              <UIcon name="i-solar-sword-broken" class="w-8 h-8 text-gray-500" />
            </div>

            <!-- No Weapon Info -->
            <div class="flex-1 min-w-0">
              <div class="text-sm text-gray-500">
                No weapon
              </div>
            </div>
          </div>
        </div>

        <!-- Echoes Preview -->
        <div v-if="echoes.length > 0" class="space-y-2">
          <div class="flex items-center gap-2">
            <div class="w-1 h-4 bg-purple-400 rounded-full" />
            <span class="text-xs font-medium text-gray-400 uppercase tracking-wide">Echoes</span>
          </div>

          <div class="grid grid-cols-3 gap-1.5">
            <div
              v-for="echo in echoes"
              :key="echo.Id"
              class="relative group/echo"
            >
              <div class="w-full aspect-square rounded-sm bg-neutral-800/30 flex items-center justify-center relative overflow-hidden border border-gray-600/50">
                <!-- Echo Icon - Cover -->
                <NuxtImg
                  :src="GetEchoIcon(echo)"
                  :alt="echo.Id.toString()"
                  class="w-full h-full object-cover"
                />

                <!-- Set Icon Overlay - Larger without badge -->
                <div v-if="echo.Sonata && echo.Sonata.length > 0" class="absolute top-1 right-1">
                  <div class="w-6 h-6 rounded-sm bg-black/40 backdrop-blur-sm flex items-center justify-center">
                    <NuxtImg
                      v-if="(echo.Sonata.find(s => s.IsSelected) || echo.Sonata[0])"
                      :src="GetSonataIcon(echo.Sonata.find(s => s.IsSelected) || echo.Sonata[0]!)"
                      :alt="(echo.Sonata.find(s => s.IsSelected) || echo.Sonata[0])!.Name"
                      class="w-4 h-4 object-contain"
                    />
                  </div>
                </div>

                <!-- Level Badge -->
                <div class="absolute bottom-1 left-1">
                  <div class="w-4 h-4 rounded-sm bg-black/60 backdrop-blur-sm flex items-center justify-center">
                    <span class="text-[8px] font-mono text-gray-300">{{ echo.Level }}</span>
                  </div>
                </div>

                <!-- Rarity Border Effect -->
                <div class="absolute inset-0 pointer-events-none">
                  <div class="absolute bottom-0 w-full">
                    <div class="relative w-full flex items-center">
                      <div class="absolute mt-auto h-2 w-full -bottom-1">
                        <div
                          class="absolute bottom-0 h-1.5 w-full blur-sm"
                          :class="GetBackgroundColor(echo.Rarity)"
                        />
                        <div
                          class="absolute bottom-0 h-1 w-full blur"
                          :class="GetSecondaryColor(echo.Rarity)"
                        />
                      </div>
                    </div>
                    <div class="h-[2px]" :class="GetHighlightColor(echo.Rarity)" />
                  </div>
                </div>
              </div>
            </div>

            <div v-if="echoes.length > 6" class="w-full aspect-square rounded-sm bg-gray-800/20 border border-gray-700/30 flex items-center justify-center">
              <span class="text-xs text-gray-500">+{{ echoes.length - 6 }}</span>
            </div>
          </div>
        </div>

        <!-- Sets Preview -->
        <div v-if="activeSets.length > 0" class="space-y-2">
          <div class="flex items-center gap-2">
            <div class="w-1 h-4 bg-emerald-400 rounded-full" />
            <span class="text-xs font-medium text-gray-400 uppercase tracking-wide">Active Sets</span>
          </div>

          <div class="grid grid-cols-1 gap-1.5">
            <div
              v-for="set in activeSets"
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

            <div v-if="activeSets.length > 2" class="text-xs text-gray-500 text-center py-1">
              +{{ activeSets.length - 2 }} more
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="flex items-center justify-between mt-4 pt-3 border-t border-gray-800/30">
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
