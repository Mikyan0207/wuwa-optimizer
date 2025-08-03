<script setup lang="ts">
import type Character from '~/Core/Interfaces/Character'
import { GetCharacterIcon } from '~/Core/Utils/CharacterUtils'

const props = defineProps<{
  availableCharacters: Character[]
  selectedCharacter?: Character
  label?: string
  allowDeselect?: boolean
}>()

const emit = defineEmits<{
  'update:selectedCharacter': [character: Character | undefined]
}>()

const { t } = useI18n()

function Capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

function GetWeaponTypeIcon(weaponType: string): string {
  const basePath = '/images/icons/'

  switch (weaponType) {
    case 'PISTOLS':
      return `${basePath}Icon_Pistols.webp`
    case 'BROADBLADE':
      return `${basePath}Icon_Broadblade.webp`
    case 'SWORD':
      return `${basePath}Icon_Sword.webp`
    case 'RECTIFIER':
      return `${basePath}Icon_Rectifier.webp`
    case 'GAUNTLETS':
      return `${basePath}Icon_Gauntlets.webp`
    default:
      return `${basePath}${weaponType}.webp`
  }
}

function ToggleCharacterSelection(character: Character) {
  if (props.selectedCharacter?.Id === character.Id && props.allowDeselect) {
    emit('update:selectedCharacter', undefined)
  }
  else {
    emit('update:selectedCharacter', character)
  }
}
</script>

<template>
  <div class="space-y-3">
    <label v-if="label" class="text-sm font-medium text-neutral-300">{{ label }}</label>
    <div class="grid grid-cols-3 gap-3">
      <div
        v-for="character in availableCharacters"
        :key="character.Id"
        class="relative p-3 bg-neutral-800/20 rounded-sm border transition-all duration-200 cursor-pointer"
        :class="{
          'border-primary-500 bg-primary-500/10': selectedCharacter?.Id === character.Id,
          'border-neutral-600/30 hover:border-neutral-500/50': selectedCharacter?.Id !== character.Id,
        }"
        @click="ToggleCharacterSelection(character)"
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
                :src="GetWeaponTypeIcon(character.WeaponType)"
                class="w-3 h-3"
                :alt="character.WeaponType"
              />
              <span class="text-xs font-medium text-white/80">{{ Capitalize(character.WeaponType) }}</span>
            </div>
          </div>
        </div>

        <div v-if="selectedCharacter?.Id === character.Id" class="absolute -top-1 -right-1">
          <div class="w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center">
            <UIcon name="i-carbon-checkmark" class="w-3 h-3 text-white" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
