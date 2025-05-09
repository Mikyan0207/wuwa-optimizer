<script setup lang="ts">
import type Weapon from '~/Core/Interfaces/Weapon'
import { GetWeaponIcon } from '~/Core/Utils/WeaponUtils'

const emits = defineEmits(['close'])

const { t } = useI18n()
const { CurrentCharacter, CurrentWeapon } = useCharacterContext()
const WeaponsStore = useWeaponsStore()

const SelectedWeaponId = ref<number | undefined>(WeaponsStore.GetWeaponByEquipedId(CurrentCharacter.value?.Id)?.Id || undefined)
const SelectedWeapon = computed<Weapon | undefined>(() => SelectedWeaponId.value
  ? unref(WeaponsStore.GetDefaultWeapon(SelectedWeaponId.value))
  : unref(WeaponsStore.GetWeaponByEquipedId(CurrentCharacter.value?.Id)))
const SelectedWeaponLevel = ref(SelectedWeapon.value?.Level ?? 1)
const SelectedWeaponRank = ref(SelectedWeapon.value?.Rank ?? 1)

function OnSubmit() {
  if (!SelectedWeaponId.value || !SelectedWeapon.value || !CurrentCharacter.value) {
    return
  }

  SelectedWeapon.value.Level = SelectedWeaponLevel.value
  SelectedWeapon.value.Rank = SelectedWeaponRank.value
  SelectedWeapon.value.EquipedBy = CurrentCharacter.value.Id
  CurrentWeapon.value = SelectedWeapon.value
  OnClose()
}

function OnClose() {
  SelectedWeaponId.value = undefined
  emits('close')
}
</script>

<template>
  <UCard>
    <template #header>
      <div class="flex items-center justify-between w-full">
        <div v-if="SelectedWeapon" class="flex items-center gap-1">
          <span>Edit</span>
          <span>{{ t(`${SelectedWeapon.Id}_name`) }}</span>
        </div>
      </div>
    </template>
    <div class="grid cols-1 w-full gap-8">
      <div class="flex flex-col gap-2">
        <UFormField label="Weapon">
          <UInputMenu
            v-model="SelectedWeaponId" class="w-full"
            :items="WeaponsStore.GetDefaultWeapons().filter(weapon => weapon.Type === CurrentCharacter!.WeaponType)"
            option-key="Id" value-key="Id" size="lg"
          >
            <template #leading>
              <div v-if="SelectedWeapon" class="w-full flex items-center justify-between gap-1">
                <div class="w-full flex flex-row items-center gap-2">
                  <NuxtImg :src="`/images/weapons/${SelectedWeapon.Icon}`" class="h-6 w-6 object-cover" />
                  <span :title="SelectedWeapon.Name" class="w-30 text-truncate text-nowrap">
                    {{ SelectedWeapon.Name }}
                  </span>
                </div>
              </div>
            </template>
            <template #item="{ item }">
              <div class="w-full flex items-center justify-between gap-1">
                <div class="w-full flex flex-row items-center gap-2">
                  <NuxtImg :src="GetWeaponIcon(item)" class="h-12 w-12 object-cover" />
                  <span :title="item.Name" class="w-30 text-truncate text-nowrap">{{ item.Name }}</span>
                </div>
              </div>
            </template>
          </UInputMenu>
        </UFormField>
      </div>
      <UCard class="w-full h-20">
        <div class="flex items-center gap-10 justify-between w-full">
          <UFormField class="w-full">
            <template #label>
              <div class="flex items-center gap-2 mb-2">
                <span>{{ t('label_level_full') }}</span>
                <UBadge color="neutral" variant="soft" size="md" :label="`${SelectedWeaponLevel}/90`" />
              </div>
            </template>
            <USlider
              v-if="SelectedWeapon" v-model="SelectedWeaponLevel" class="mb-1 w-full" color="neutral"
              size="xs" :step="1" :default-value="1" :max="90" :min="1"
            />
          </UFormField>
          <UFormField class="w-full">
            <template #label>
              <div class="flex items-center gap-2 mb-2">
                <span>{{ t('label_rank_full') }}</span>
                <UBadge color="neutral" variant="soft" size="md" :label="`${SelectedWeaponRank}/5`" />
              </div>
            </template>
            <USlider
              v-if="SelectedWeapon" v-model="SelectedWeaponRank" class="w-46 mb-1 z-1" color="neutral"
              size="xs" :step="1" :default-value="1" :max="5" :min="1"
            />
          </UFormField>
        </div>
      </UCard>
    </div>
    <template #footer>
      <div class="w-full flex justify-end">
        <UButtonGroup size="md">
          <UButton color="neutral" variant="outline" label="Cancel" @click.prevent="OnClose()" />
          <UButton color="primary" variant="subtle" label="Submit" @click.prevent="OnSubmit()" />
        </UButtonGroup>
      </div>
    </template>
  </UCard>
</template>
