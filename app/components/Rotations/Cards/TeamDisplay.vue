<script setup lang="ts">
import type Character from '~/Core/Interfaces/Character'
import { GetCharacterIcon } from '~/Core/Utils/CharacterUtils'
import { Capitalize } from '~/Core/Utils/StringUtils'
import { GetWeaponTypeIconByType } from '~/Core/Utils/WeaponUtils'

defineProps<{
  team: Character[]
}>()

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col">
    <div class="flex items-center gap-2 mb-3">
      <UIcon
        name="i-carbon-user-multiple"
        class="w-4 h-4 text-neutral-400"
      />
      <span class="text-sm font-medium text-neutral-300">
        Team ({{ team.length }}/3)
      </span>
    </div>

    <div class="grid grid-cols-3 gap-3">
      <div
        v-for="character in team"
        :key="character.Id"
        class="relative p-3 bg-neutral-800/20 rounded-sm border border-neutral-600/30"
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
      </div>

      <div
        v-for="i in (3 - team.length)"
        :key="`empty-${i}`"
        class="p-3 bg-neutral-800/10 rounded-sm border border-dashed border-neutral-600/30 flex items-center justify-center"
      >
        <span class="text-sm text-neutral-500">Empty</span>
      </div>
    </div>
  </div>
</template>
