<script setup lang="ts">
import type { Character } from '~/Core/Models/Character'
import type { Weapon } from '~/Core/Models/Weapon'
import { Rarity } from '~/Core/Enums/Rarity'

const props = defineProps<{
  character: Character
}>()

const CharactersStore = useCharactersStore()
const WeaponsStore = useWeaponsStore()

const IsHovered = ref<boolean>(false)
const ShowEditWeaponModal = ref<boolean>(false)
const EditedWeapon = ref<Weapon | undefined>(undefined)

const GetRarityAsNumber = computed(() => {
  if (!props.character.Weapon) {
    return 0
  }
  switch (props.character.Weapon.Rarity) {
    case Rarity.TWO_STARS:
      return 2
    case Rarity.THREE_STARS:
      return 3
    case Rarity.FOUR_STARS:
      return 4
    case Rarity.FIVE_STARS:
      return 5
  }

  return 1
})

function OnSubmit() {
  if (!EditedWeapon.value) {
    ShowEditWeaponModal.value = false
    return
  }

  CharactersStore.UpdateWeapon(props.character.Id, EditedWeapon.value)
  ShowEditWeaponModal.value = false
}
</script>

<template>
  <div>
    <Card class="relative h-full overflow-hidden" @mouseenter="IsHovered = true" @mouseleave="IsHovered = false">
      <div v-if="IsHovered" class="absolute right-1 top-1 z-1" @click.prevent="ShowEditWeaponModal = true">
        <div class="cursor-pointer border border-white/14 rounded-md bg-black/44 px-2 py-1 text-sm text-white">
          <p>
            Edit Weapon
          </p>
        </div>
      </div>
      <div class="relative h-full flex justify-between gap-4">
        <div class="flex flex-col gap-1">
          <!-- Rarity / Level -->
          <div v-if="character.Weapon" class="flex items-center gap-2">
            <!-- Rarity -->
            <div class="flex items-center">
              <NuxtImg v-for="idx in GetRarityAsNumber" :key="idx" src="/images/icons/Icon_StarBig.webp" class="h-3 w-3 object-cover" fit="cover" />
            </div>
            <!-- Level -->
            <UBadge class="text-xs text-gray-300" size="xs" variant="soft" color="blue">
              Lv. {{ character.Weapon.Level }} · R1
            </UBadge>
          </div>
          <USkeleton v-else class="my-2 h-4 w-20" :ui="{ base: '' }" />
          <!-- Name -->
          <div v-if="character.Weapon" class="mb-3 text-sm">
            {{ character.Weapon.Name }}
          </div>
          <USkeleton v-else class="h-2 w-32" :ui="{ base: '' }" />
          <!-- Stats -->
          <div v-if="character.Weapon && character.Weapon.MainStatistic && character.Weapon.SecondaryStatistic" class="z-2 h-min flex flex-col items-start text-gray-300">
            <StatLine :stat="character.Weapon.MainStatistic" icon-size="xs" :show-line="true" />
            <StatLine :stat="character.Weapon.SecondaryStatistic" icon-size="xs" :show-line="true" />
          </div>
          <USkeleton v-else class="h-3 w-24" :ui="{ base: '' }" />
        </div>
        <NuxtImg v-if="character.Weapon" :src="`/images/weapons/${character.Weapon.Icon}`" fit="cover" class="absolute z-0 h-135% rounded-lg object-contain -right-4 -top-4" />
        <USkeleton v-else class="h-4em w-4em" :ui="{ base: '' }" />
      </div>
    </Card>
    <UModal v-model="ShowEditWeaponModal" :ui="{ container: 'flex min-h-full items-center justify-center text-center' }">
      <div class="p-4">
        <div class="grid cols-3 w-full gap-8">
          <div class="col-span-2 flex flex-col gap-2">
            <UFormGroup label="Weapon">
              <UInputMenu v-model="EditedWeapon" placeholder="" :options="WeaponsStore.GetWeapons()" option-attribute="Name">
                <template #option="{ option: o }">
                  <div class="w-full flex items-center justify-between gap-1">
                    <div class="w-full flex flex-row items-center gap-2">
                      <NuxtImg :src="`/images/weapons/${(o as Weapon).Icon}`" class="h-12 w-12 object-cover" />
                      <span :title="(o as Weapon).Name" class="w-30 text-truncate text-nowrap">{{ (o as Weapon).Name }}</span>
                    </div>
                  </div>
                </template>
              </UInputMenu>
            </UFormGroup>
          </div>
          <!-- Equiped By -->
          <div>
            <UFormGroup label="Equiped By">
              <div class="h-auto min-w-full w-full border border-white/14 rounded">
                <NuxtImg :src="character.GetIcon()" class="w-full rounded object-cover" />
              </div>
            </UFormGroup>
          </div>
        </div>
        <div class="mt-6 flex items-center justify-end gap-2">
          <UButton label="Cancel" color="gray" variant="outline" @click.prevent="ShowEditWeaponModal = false" />
          <UButton label="Submit" color="primary" variant="solid" @click.prevent="OnSubmit" />
        </div>
      </div>
    </UModal>
  </div>
</template>
