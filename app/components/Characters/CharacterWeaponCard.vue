<script setup lang="ts">
import type { WeaponType } from '~/Core/Enums/WeaponType'
import type { Weapon } from '~/Core/Models/Weapon'
import { UFormField } from '#components'
import { Rarity } from '~/Core/Enums/Rarity'

const props = defineProps<{
  characterId: number
  characterWeaponType?: WeaponType
  weaponId?: number
}>()

const { t } = useI18n()
const CharactersStore = useCharactersStore()
const WeaponsStore = useWeaponsStore()
const CurrentWeapon = ref<Weapon | undefined>(WeaponsStore.GetWeapon(props.weaponId))

const IsHovered = ref<boolean>(false)
const ShowEditWeaponModal = ref<boolean>(false)
const EditedWeapon = ref<Weapon | undefined>(undefined)

const GetRarityAsNumber = computed(() => {
  if (!CurrentWeapon.value) {
    return 0
  }

  switch (CurrentWeapon.value.Rarity) {
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

  CharactersStore.UpdateWeapon(props.characterId, EditedWeapon.value.Id)
  ShowEditWeaponModal.value = false
  CurrentWeapon.value = WeaponsStore.GetWeapon(EditedWeapon.value.Id)
  EditedWeapon.value = undefined
}
</script>

<template>
  <div>
    <UCard
      class="relative h-full overflow-hidden"
      :ui="{
        root: 'rounded-none rounded-br-xl border-0',
      }"
      @mouseenter="IsHovered = true"
      @mouseleave="IsHovered = false"
    >
      <BorderLines />
      <div v-if="IsHovered" class="absolute right-1 top-1 z-1">
        <UButton color="neutral" variant="outline" label="Edit Weapon" icon="mdi:pencil-outline" @click.prevent="ShowEditWeaponModal = true" />
      </div>
      <div class="relative h-full flex justify-between gap-4">
        <div class="flex flex-col gap-1">
          <!-- Rarity / Level -->
          <div v-if="CurrentWeapon" class="flex items-center gap-2">
            <!-- Rarity -->
            <div class="flex items-center">
              <NuxtImg v-for="idx in GetRarityAsNumber" :key="idx" src="/images/icons/Icon_StarBig.webp" class="h-3 w-3 object-cover" fit="cover" />
            </div>
            <!-- Level -->
            <UBadge class="text-xs text-gray-300" size="xs" variant="soft" color="info">
              Lv. {{ CurrentWeapon.Level }} · R1
            </UBadge>
          </div>
          <USkeleton v-else class="my-2 h-4 w-20" :ui="{ base: '' }" />
          <!-- Name -->
          <div v-if="CurrentWeapon" class="mb-3 text-sm">
            {{ t(`${CurrentWeapon.Id}_name`) }}
          </div>
          <USkeleton v-else class="h-2 w-32" :ui="{ base: '' }" />
          <!-- Stats -->
          <div v-if="CurrentWeapon && CurrentWeapon.MainStatistic && CurrentWeapon.SecondaryStatistic" class="z-2 h-min flex flex-col items-start text-gray-300">
            <StatLine :stat="CurrentWeapon.MainStatistic" icon-size="xs" :show-line="true" />
            <StatLine :stat="CurrentWeapon.SecondaryStatistic" icon-size="xs" :show-line="true" />
          </div>
          <USkeleton v-else class="h-3 w-24" :ui="{ base: '' }" />
        </div>
        <NuxtImg
          v-if="CurrentWeapon"
          :src="`/images/weapons/${CurrentWeapon.Icon}`"
          fit="cover"
          width="160"
          height="160"
          class="absolute z-0 rounded-lg object-contain -right-4 -top-4"
        />
        <USkeleton v-else class="h-4em w-4em" :ui="{ base: '' }" />
      </div>
    </UCard>
    <UModal
      v-model:open="ShowEditWeaponModal"
      title="Edit Weapon"
    >
      <template #body>
        <div class="grid cols-1 w-full gap-8">
          <div class="col-span-2 flex flex-col gap-2">
            <UFormField label="Weapon">
              <UInputMenu
                v-model="EditedWeapon"
                class="w-full"
                :items="WeaponsStore.GetWeapons().filter(weapon => weapon.Type === characterWeaponType)"
                option-attribute="Name"
              >
                <template #item="{ item }">
                  <div class="w-full flex items-center justify-between gap-1">
                    <div class="w-full flex flex-row items-center gap-2">
                      <NuxtImg :src="`/images/weapons/${item.Icon}`" class="h-12 w-12 object-cover" />
                      <span :title="item.Name" class="w-30 text-truncate text-nowrap">{{ item.Name }}</span>
                    </div>
                  </div>
                </template>
              </UInputMenu>
            </UFormField>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="mt-6 w-full flex items-center justify-end gap-2">
          <UButton label="Cancel" color="neutral" variant="outline" size="sm" @click.prevent="ShowEditWeaponModal = false" />
          <UButton label="Submit" color="primary" variant="solid" size="sm" @click.prevent="OnSubmit" />
        </div>
      </template>
    </UModal>
  </div>
</template>
