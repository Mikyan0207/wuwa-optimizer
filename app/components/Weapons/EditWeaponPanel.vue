<script setup lang="ts">
import type { WeaponType } from '~/Core/Enums/WeaponType'
import type IWeapon from '~/Core/Interfaces/IWeapon'
import type { Weapon } from '~/Core/Models/Weapon'

const props = defineProps<{
  characterId: number
  characterWeaponType?: WeaponType
}>()

const { t } = useI18n()
const CharactersStore = useCharactersStore()
const WeaponsStore = useWeaponsStore()

const IsOpen = ref<boolean>(false)
const IsDropdownOpen = ref<boolean>(false)

const SelectedWeaponId = ref<number | undefined>(WeaponsStore.GetWeaponByEquipedId(props.characterId)?.Id || undefined)
const SelectedWeapon = computed<Weapon | undefined>(() => SelectedWeaponId.value
  ? unref(WeaponsStore.GetWeapon(SelectedWeaponId.value))
  : unref(WeaponsStore.GetWeaponByEquipedId(props.characterId)))
const SelectedWeaponLevel = ref(SelectedWeapon.value?.Level || 1)
const SelectedWeaponRank = ref(SelectedWeapon.value?.Rank || 0)

const MenuItems = [
  {
    label: 'Edit',
    icon: 'mdi:pencil-outline',
    onSelect() { IsOpen.value = true },
  },
  {
    label: 'Remove',
    icon: 'lucide:x',
    color: 'error' as const,
  },
]

function OnSubmit() {
  if (!SelectedWeaponId.value || !SelectedWeapon.value) {
    IsOpen.value = false
    return
  }

  SelectedWeapon.value.Level = SelectedWeaponLevel.value
  SelectedWeapon.value.Rank = SelectedWeaponRank.value
  SelectedWeapon.value.EquipedBy = props.characterId

  CharactersStore.UpdateWeapon(props.characterId, SelectedWeaponId.value)
  WeaponsStore.AddWeapon(SelectedWeapon.value as IWeapon)

  IsOpen.value = false
  SelectedWeaponId.value = undefined
}
</script>

<template>
  <div
    class="absolute right-1 top-1 z-10 transition-all duration-75" :class="{
      'hidden group-hover:inline': !IsDropdownOpen,
    }"
  >
    <UDropdownMenu
      :items="MenuItems" arrow :modal="false" :content="{
        align: 'end',
        side: 'bottom',
        sideOffset: 8,
      }" @update:open="(v: boolean) => IsDropdownOpen = v"
    >
      <UButton icon="i-lucide-menu" color="neutral" variant="ghost" size="sm" />
    </UDropdownMenu>
    <UModal v-model:open="IsOpen" title="Edit Weapon">
      <template #body>
        <div class="grid cols-1 w-full gap-8">
          <div class="flex flex-col gap-2">
            <UFormField label="Weapon">
              <UInputMenu
                v-model="SelectedWeaponId"
                class="w-full"
                :items="WeaponsStore.GetWeapons().filter(weapon => weapon.Type === characterWeaponType)"
                option-key="Id"
                value-key="Id"
                size="lg"
              >
                <template #leading>
                  <div v-if="SelectedWeapon" class="w-full flex items-center justify-between gap-1">
                    <div class="w-full flex flex-row items-center gap-2">
                      <NuxtImg
                        :src="`/images/weapons/${SelectedWeapon.Icon}`"
                        class="h-6 w-6 object-cover"
                      />
                      <span :title="SelectedWeapon.Name" class="w-30 text-truncate text-nowrap">{{
                        SelectedWeapon.Name }}</span>
                    </div>
                  </div>
                </template>
                <template #item="{ item }">
                  <div class="w-full flex items-center justify-between gap-1">
                    <div class="w-full flex flex-row items-center gap-2">
                      <NuxtImg :src="`/images/weapons/${item.Icon}`" class="h-12 w-12 object-cover" />
                      <span :title="item.Name" class="w-30 text-truncate text-nowrap">{{ item.Name
                      }}</span>
                    </div>
                  </div>
                </template>
              </UInputMenu>
            </UFormField>
          </div>
          <UCard class="w-full">
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
                  v-if="SelectedWeapon" v-model="SelectedWeaponRank" class="w-46 mb-1 z-1" color="neutral" size="xs"
                  :step="1" :default-value="0" :max="5" :min="0"
                />
              </UFormField>
            </div>
          </UCard>
        </div>
      </template>
      <template #footer>
        <div class="mt-6 w-full flex items-center justify-end gap-2">
          <UButton
            label="Cancel" color="neutral" variant="outline" size="sm"
            @click.prevent="IsOpen = false"
          />
          <UButton label="Submit" color="primary" variant="solid" size="sm" @click.prevent="OnSubmit" />
        </div>
      </template>
    </UModal>
  </div>
</template>
