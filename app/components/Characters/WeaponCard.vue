<script setup lang="ts">
import type { Character } from '~/Core/Models/Character'
import type { Weapon } from '~/Core/Models/Weapon'

defineProps<{
  weapon?: Weapon | null | undefined
  character: Character
}>()

const IsHovered = ref<boolean>(false)
const ShowEditWeaponModal = ref<boolean>(false)

const LevelOptions = [[{
  label: '+1',
}]]

const RarityOptions = [[{
  label: '5',
}]]
</script>

<template>
  <div>
    <Card class="relative h-full" @mouseenter="IsHovered = true" @mouseleave="IsHovered = false">
      <div v-if="IsHovered" class="absolute right-1 top-1" @click.prevent="ShowEditWeaponModal = true">
        <div class="cursor-pointer border border-white/14 rounded-md bg-black/44 px-2 py-1 text-sm text-white">
          <p>
            Edit Weapon
          </p>
        </div>
      </div>
      <div class="flex justify-between gap-4">
        <div class="flex flex-col space-y-2">
          <NuxtImg v-if="weapon" :src="`${weapon.GetRarityIcon()}`" class="mb-3 h-auto w-4em object-contain" fit="contain" />
          <USkeleton v-else class="h-4 w-20" :ui="{ base: '' }" />
          <p v-if="weapon">
            {{ weapon.Name }}
          </p>
          <USkeleton v-else class="h-2 w-32" :ui="{ base: '' }" />
          <p v-if="weapon">
            Lv. {{ weapon.Level }} · R1
          </p>
          <USkeleton v-else class="h-2 w-12" :ui="{ base: '' }" />
        </div>
        <NuxtImg v-if="weapon" :src="`/images/weapons/${weapon.Icon}`" fit="cover" class="h-auto w-8em rounded-lg p-2" />
        <USkeleton v-else class="h-4em w-4em" :ui="{ base: '' }" />
      </div>
    </Card>
    <UModal v-model="ShowEditWeaponModal" :ui="{ container: 'flex min-h-full items-center justify-center text-center' }">
      <div class="grid cols-2 w-full gap-8 p-4">
        <div class="flex flex-col gap-2">
          <UFormGroup label="Echo">
            <UInputMenu placeholder="" />
          </UFormGroup>
          <div class="w-full flex flex-row items-center justify-between gap-4">
            <UFormGroup label="Enhance" class="w-full">
              <UDropdown :items="LevelOptions" :popper="{ placement: 'bottom-start' }" class="w-full">
                <UButton color="white" label="+25" class="w-full" block />
              </UDropdown>
            </UFormGroup>
            <UFormGroup label="Rarity">
              <UDropdown :items="RarityOptions" :popper="{ placement: 'bottom-start' }" class="w-18">
                <UButton color="white" label="5" block />
              </UDropdown>
            </UFormGroup>
          </div>
        </div>
        <div>
          <UFormGroup label="Equipped By">
            <div class="h-auto w-full border border-white/14 rounded">
              <NuxtImg :src="character.GetIcon()" />
            </div>
          </UFormGroup>
        </div>
      </div>
    </UModal>
  </div>
</template>
