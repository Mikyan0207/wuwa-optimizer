<script setup lang="ts">
import type { TeamPreset } from '~/Core/Data/TeamPresets'
import type Character from '~/Core/Interfaces/Character'
import { TemplateCharacters } from '~/Core/Characters'
import { GetPresetCharacters, TeamPresets } from '~/Core/Data/TeamPresets'
import { GetCharacterIcon } from '~/Core/Utils/CharacterUtils'
import { Capitalize } from '~/Core/Utils/StringUtils'
import { GetWeaponTypeIconByType } from '~/Core/Utils/WeaponUtils'

const props = defineProps<{
  selectedTeam: Character[]
}>()

const emit = defineEmits<{
  'update:selectedTeam': [team: Character[]]
}>()

const { t } = useI18n()

const ShowCharacterSelector = ref(false)
const CurrentTab = ref<'presets' | 'all'>('presets')
const AvailableCharacters = computed(() => TemplateCharacters)
const SelectedCharacters = ref<Set<number>>(new Set())

function ToggleCharacterSelection(character: Character) {
  if (SelectedCharacters.value.has(character.Id)) {
    SelectedCharacters.value.delete(character.Id)
  }
  else if (SelectedCharacters.value.size < 3) {
    SelectedCharacters.value.add(character.Id)
  }
}

function ConfirmSelection() {
  const selectedTeam = TemplateCharacters.filter(c => SelectedCharacters.value.has(c.Id))
  emit('update:selectedTeam', selectedTeam)
  SelectedCharacters.value.clear()
  ShowCharacterSelector.value = false
}

function InitializeSelection() {
  SelectedCharacters.value.clear()
  props.selectedTeam.forEach((character) => {
    SelectedCharacters.value.add(character.Id)
  })
}

function CancelSelection() {
  SelectedCharacters.value.clear()
  ShowCharacterSelector.value = false
}

function RemoveCharacterFromTeam(characterId: number) {
  const newTeam = props.selectedTeam.filter(c => c.Id !== characterId)
  emit('update:selectedTeam', newTeam)
}

function ApplyPreset(preset: TeamPreset) {
  if (IsPresetSelected(preset)) {
    emit('update:selectedTeam', [])
    SelectedCharacters.value.clear()
  }
  else {
    const presetCharacters = GetPresetCharacters(preset)
    emit('update:selectedTeam', presetCharacters)
    SelectedCharacters.value.clear()
    presetCharacters.forEach(char => SelectedCharacters.value.add(char.Id))
  }
}

function IsPresetSelected(preset: TeamPreset): boolean {
  if (props.selectedTeam.length !== preset.characterIds.length) {
    return false
  }

  const selectedIds = new Set(props.selectedTeam.map(c => c.Id))
  const presetIds = new Set(preset.characterIds)

  return selectedIds.size === presetIds.size
    && [...selectedIds].every(id => presetIds.has(id))
}
</script>

<template>
  <UCard class="w-full">
    <div class="flex items-center justify-between mb-4">
      <div class="flex flex-col">
        <h3 class="text-lg font-bold text-white tracking-tight">
          Team
        </h3>
        <span class="text-xs text-neutral-400">
          {{ props.selectedTeam.length }}/3 characters selected
        </span>
      </div>

      <UButton
        icon="i-carbon-add"
        size="sm"
        color="primary"
        variant="outline"
        @click="() => { InitializeSelection(); ShowCharacterSelector = true; }"
      >
        {{ props.selectedTeam.length >= 3 ? 'Edit' : 'Add' }}
      </UButton>
    </div>

    <div class="grid grid-cols-3 gap-3">
      <div
        v-for="character in props.selectedTeam"
        :key="character.Id"
        class="relative p-3 bg-neutral-800/20 rounded-sm border border-neutral-600/30 hover:border-neutral-500/50 transition-all duration-200"
      >
        <div class="flex flex-col items-center gap-2">
          <NuxtImg
            :src="GetCharacterIcon(character)"
            class="w-12 h-12 border border-neutral-600 object-cover rounded-sm"
          />
          <span class="text-sm font-medium text-white text-center">
            {{ t(`${character.Id}_name`) }}
          </span>

          <div class="flex items-center gap-1">
            <div class="bg-black/50 border border-white/10 rounded-md px-2 py-1 flex items-center gap-1">
              <NuxtImg
                :src="`/images/icons/${character.Type}.webp`"
                class="w-3 h-3"
                :alt="character.Type"
              />
              <span class="text-xs font-medium text-white/80">{{ Capitalize(character.Type) }}</span>
            </div>

            <div v-if="character.WeaponType" class="bg-black/50 border border-white/10 rounded-md px-2 py-1 flex items-center gap-1">
              <NuxtImg
                :src="GetWeaponTypeIconByType(character.WeaponType)"
                class="w-3 h-3"
                :alt="character.WeaponType"
              />
              <span class="text-xs font-medium text-white/80">{{ Capitalize(character.WeaponType) }}</span>
            </div>
          </div>
        </div>

        <UButton
          icon="i-lucide-x"
          size="xs"
          color="error"
          variant="ghost"
          class="absolute top-1 right-1"
          @click="RemoveCharacterFromTeam(character.Id)"
        />
      </div>

      <div
        v-for="i in (3 - props.selectedTeam.length)"
        :key="`empty-${i}`"
        class="p-3 bg-neutral-800/10 rounded-sm border border-dashed border-neutral-600/30 flex items-center justify-center"
      >
        <span class="text-sm text-neutral-500">Empty</span>
      </div>
    </div>

    <USlideover
      v-model:open="ShowCharacterSelector"
      :overlay="true"
      variant="subtle"
      color="neutral"
      side="right"
      :transition="true"
      class="w-full md:w-1/2 lg:w-1/3 max-w-full h-full"
      close-icon="i-lucide-arrow-right"
    >
      <template #content>
        <div class="p-6 h-full flex flex-col">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg font-bold text-white">
              Select Characters ({{ SelectedCharacters.size }}/3)
              <span v-if="SelectedCharacters.size === 0" class="text-neutral-500 text-sm font-normal">(No characters selected)</span>
            </h3>
            <div class="flex items-center gap-2">
              <UButton
                size="sm"
                color="neutral"
                variant="outline"
                @click="CancelSelection"
              >
                Cancel
              </UButton>
              <UButton
                size="sm"
                color="primary"
                :disabled="SelectedCharacters.size === 0"
                @click="ConfirmSelection"
              >
                Confirm
              </UButton>
            </div>
          </div>

          <UTabs
            v-model="CurrentTab"
            :items="[
              { label: 'Presets', value: 'presets' },
              { label: 'All Characters', value: 'all' },
            ]"
            class="mb-4"
            :ui="{
              list: 'rounded-none border-neutral-600',
              indicator: 'rounded-none bg-neutral-300',
            }"
          />

          <div class="flex-1 overflow-y-auto scrollbar-hide pr-2">
            <div v-if="CurrentTab === 'presets'" class="space-y-4">
              <div class="space-y-3">
                <h4 class="text-sm font-semibold text-purple-400">
                  Best Teams
                </h4>
                <div class="grid grid-cols-1 gap-3">
                  <UCard
                    v-for="preset in TeamPresets.filter(p => p.category === 'Best')"
                    :key="preset.id"
                    class="cursor-pointer transition-all relative"
                    :class="{
                      'border-primary-500 bg-primary-500/10': IsPresetSelected(preset),
                      'hover:border-neutral-500/50': !IsPresetSelected(preset),
                    }"
                    @click="ApplyPreset(preset)"
                  >
                    <div
                      v-if="IsPresetSelected(preset)"
                      class="absolute -top-1 -right-1 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center"
                    >
                      <UIcon name="i-carbon-checkmark" class="w-3 h-3 text-white" />
                    </div>
                    <div class="flex items-center justify-between mb-2">
                      <h5 class="text-sm font-medium text-white">
                        {{ preset.name }}
                      </h5>
                      <UBadge :color="preset.tier === 'S' ? 'warning' : preset.tier === 'A' ? 'success' : preset.tier === 'B' ? 'info' : 'neutral'" variant="soft" :label="preset.tier" />
                    </div>
                    <p class="text-xs text-neutral-400 mb-3">
                      {{ preset.description }}
                    </p>
                    <div class="flex items-center gap-2">
                      <div
                        v-for="character in GetPresetCharacters(preset)"
                        :key="character.Id"
                        class="flex items-center gap-1"
                      >
                        <NuxtImg
                          :src="GetCharacterIcon(character)"
                          class="w-6 h-6 rounded-full border border-neutral-600"
                        />
                        <span class="text-xs text-neutral-300">{{ t(`${character.Id}_name`) }}</span>
                      </div>
                    </div>
                  </UCard>
                </div>
              </div>

              <div class="space-y-3">
                <h4 class="text-sm font-semibold text-green-400">
                  F2P Teams
                </h4>
                <div class="grid grid-cols-1 gap-3">
                  <UCard
                    v-for="preset in TeamPresets.filter(p => p.category === 'F2P')"
                    :key="preset.id"
                    class="cursor-pointer transition-all relative"
                    :class="{
                      'border-primary-500 bg-primary-500/10': IsPresetSelected(preset),
                      'hover:border-neutral-500/50': !IsPresetSelected(preset),
                    }"
                    @click="ApplyPreset(preset)"
                  >
                    <div
                      v-if="IsPresetSelected(preset)"
                      class="absolute -top-1 -right-1 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center"
                    >
                      <UIcon name="i-carbon-checkmark" class="w-3 h-3 text-white" />
                    </div>
                    <div class="flex items-center justify-between mb-2">
                      <h5 class="text-sm font-medium text-white">
                        {{ preset.name }}
                      </h5>
                      <UBadge :color="preset.tier === 'S' ? 'warning' : preset.tier === 'A' ? 'success' : preset.tier === 'B' ? 'info' : 'neutral'" variant="soft" :label="preset.tier" />
                    </div>
                    <p class="text-xs text-neutral-400 mb-3">
                      {{ preset.description }}
                    </p>
                    <div class="flex items-center gap-2">
                      <div
                        v-for="character in GetPresetCharacters(preset)"
                        :key="character.Id"
                        class="flex items-center gap-1"
                      >
                        <NuxtImg
                          :src="GetCharacterIcon(character)"
                          class="w-6 h-6 rounded-full border border-neutral-600"
                        />
                        <span class="text-xs text-neutral-300">{{ t(`${character.Id}_name`) }}</span>
                      </div>
                    </div>
                  </UCard>
                </div>
              </div>

              <div class="space-y-3">
                <h4 class="text-sm font-semibold text-blue-400">
                  Easy Teams
                </h4>
                <div class="grid grid-cols-1 gap-3">
                  <UCard
                    v-for="preset in TeamPresets.filter(p => p.category === 'Easy')"
                    :key="preset.id"
                    class="cursor-pointer transition-all relative"
                    :class="{
                      'border-primary-500 bg-primary-500/10': IsPresetSelected(preset),
                      'hover:border-neutral-500/50': !IsPresetSelected(preset),
                    }"
                    @click="ApplyPreset(preset)"
                  >
                    <div
                      v-if="IsPresetSelected(preset)"
                      class="absolute -top-1 -right-1 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center"
                    >
                      <UIcon name="i-carbon-checkmark" class="w-3 h-3 text-white" />
                    </div>
                    <div class="flex items-center justify-between mb-2">
                      <h5 class="text-sm font-medium text-white">
                        {{ preset.name }}
                      </h5>
                      <UBadge :color="preset.tier === 'S' ? 'warning' : preset.tier === 'A' ? 'success' : preset.tier === 'B' ? 'info' : 'neutral'" variant="soft" :label="preset.tier" />
                    </div>
                    <p class="text-xs text-neutral-400 mb-3">
                      {{ preset.description }}
                    </p>
                    <div class="flex items-center gap-2">
                      <div
                        v-for="character in GetPresetCharacters(preset)"
                        :key="character.Id"
                        class="flex items-center gap-1"
                      >
                        <NuxtImg
                          :src="GetCharacterIcon(character)"
                          class="w-6 h-6 rounded-full border border-neutral-600"
                        />
                        <span class="text-xs text-neutral-300">{{ t(`${character.Id}_name`) }}</span>
                      </div>
                    </div>
                  </UCard>
                </div>
              </div>

              <div class="space-y-3">
                <h4 class="text-sm font-semibold text-orange-400">
                  Alternative Teams
                </h4>
                <div class="grid grid-cols-1 gap-3">
                  <UCard
                    v-for="preset in TeamPresets.filter(p => p.category === 'Alternative')"
                    :key="preset.id"
                    class="cursor-pointer transition-all relative"
                    :class="{
                      'border-primary-500 bg-primary-500/10': IsPresetSelected(preset),
                      'hover:border-neutral-500/50': !IsPresetSelected(preset),
                    }"
                    @click="ApplyPreset(preset)"
                  >
                    <div
                      v-if="IsPresetSelected(preset)"
                      class="absolute -top-1 -right-1 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center"
                    >
                      <UIcon name="i-carbon-checkmark" class="w-3 h-3 text-white" />
                    </div>
                    <div class="flex items-center justify-between mb-2">
                      <h5 class="text-sm font-medium text-white">
                        {{ preset.name }}
                      </h5>
                      <UBadge :color="preset.tier === 'S' ? 'warning' : preset.tier === 'A' ? 'success' : preset.tier === 'B' ? 'info' : 'neutral'" variant="soft" :label="preset.tier" />
                    </div>
                    <p class="text-xs text-neutral-400 mb-3">
                      {{ preset.description }}
                    </p>
                    <div class="flex items-center gap-2">
                      <div
                        v-for="character in GetPresetCharacters(preset)"
                        :key="character.Id"
                        class="flex items-center gap-1"
                      >
                        <NuxtImg
                          :src="GetCharacterIcon(character)"
                          class="w-6 h-6 rounded-full border border-neutral-600"
                        />
                        <span class="text-xs text-neutral-300">{{ t(`${character.Id}_name`) }}</span>
                      </div>
                    </div>
                  </UCard>
                </div>
              </div>
            </div>

            <div v-else class="grid grid-cols-2 gap-3">
              <div
                v-for="character in AvailableCharacters"
                :key="character.Id"
                class="relative p-2 bg-neutral-800/20 rounded-sm border transition-all duration-200 cursor-pointer"
                :class="{
                  'border-primary-500 bg-primary-500/10': SelectedCharacters.has(character.Id),
                  'border-neutral-600/30 hover:border-neutral-500/50': !SelectedCharacters.has(character.Id),
                  'opacity-50 cursor-not-allowed': !SelectedCharacters.has(character.Id) && SelectedCharacters.size >= 3,
                }"
                @click="ToggleCharacterSelection(character)"
              >
                <div
                  v-if="SelectedCharacters.has(character.Id)"
                  class="absolute -top-1 -right-1 w-5 h-5 bg-primary-500 text-white text-xs font-bold rounded-full flex items-center justify-center"
                >
                  {{ Array.from(SelectedCharacters).indexOf(character.Id) + 1 }}
                </div>

                <div class="flex flex-col items-center gap-1">
                  <NuxtImg
                    :src="GetCharacterIcon(character)"
                    class="w-10 h-10 border border-neutral-600 object-cover rounded-sm"
                  />
                  <span class="text-sm font-medium text-white text-center">
                    {{ t(`${character.Id}_name`) }}
                  </span>

                  <div class="flex items-center gap-1">
                    <div class="bg-black/50 border border-white/10 rounded-md px-2 py-1 flex items-center gap-1">
                      <NuxtImg
                        :src="`/images/icons/${character.Type}.webp`"
                        class="w-3 h-3"
                        :alt="character.Type"
                      />
                      <span class="text-xs font-medium text-white/80">{{ Capitalize(character.Type) }}</span>
                    </div>

                    <div v-if="character.WeaponType" class="bg-black/50 border border-white/10 rounded-md px-2 py-1 flex items-center gap-1">
                      <NuxtImg
                        :src="GetWeaponTypeIconByType(character.WeaponType)"
                        class="w-3 h-3"
                        :alt="character.WeaponType"
                      />
                      <span class="text-xs font-medium text-white/80">{{ Capitalize(character.WeaponType) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </USlideover>
  </UCard>
</template>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
