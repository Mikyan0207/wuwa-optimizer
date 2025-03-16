<script setup lang="ts">
import type Weapon from '~/Core/Interfaces/Weapon'
import { GetCharacterIcon } from '~/Core/Utils/CharacterUtils'
import { GetBackgroundColor, GetHighlightColor, GetSecondaryColor } from '~/Core/Utils/ColorUtils'
import { GetTypeIcon } from '~/Core/Utils/WeaponUtils'

const props = defineProps<{
  weapon: Weapon
  characterId?: number
}>()

const { t } = useI18n()
const CharactersStore = useCharactersStore()

const EquipedBy = ref(CharactersStore.GetCharacter(props.characterId))
const BackgroundColor = computed(() => GetBackgroundColor(props.weapon.Rarity))
const SecondaryColor = computed(() => GetSecondaryColor(props.weapon.Rarity))
const HighlightColor = computed(() => GetHighlightColor(props.weapon.Rarity))
</script>

<template>
  <UCard
    class="group relative cursor-pointer"
    :ui="{
      root: 'rounded-none rounded-br-xl border-0 w-full',
      body: 'p-0 sm:p-0',
    }"
  >
    <BorderLines :count="1" />
    <div class="flex w-full">
      <!-- Icon / Rarity -->
      <div class="relative h-32 min-h-32 min-w-32 w-32 flex items-center justify-center overflow-clip">
        <!-- Icon -->
        <div class="absolute bottom-0">
          <NuxtImg
            width="160"
            height="160"
            :src="`/images/weapons/${weapon.Icon}`"
            style="color: transparent;"
            class="rounded-t object-cover"
          />
        </div>
        <!-- Rarity Highlight -->
        <div class="absolute bottom-0 w-full rounded-bl">
          <div class="relative w-full flex items-center">
            <div class="absolute mt-auto h-4 w-full -bottom-2">
              <div
                class="absolute bottom-0 h-3 w-full blur-lg transition-all duration-200 group-hover:h-4 group-hover:blur"
                :class="BackgroundColor"
              />
              <div
                class="absolute bottom-0 h-2 w-full blur duration-200 group-hover:h-2 group-hover:blur-sm"
                :class="SecondaryColor"
              />
            </div>
          </div>
          <div class="h-[4px] rounded-bl" :class="HighlightColor" />
        </div>
      </div>
      <div class="w-full border-l border-white/14 px-4 py-2">
        <!-- Name -->
        <div class="w-full flex items-center justify-between">
          <div :title="weapon.Name" class="text-truncate">
            {{ weapon.Name }}
          </div>
        </div>

        <!-- Equiped By -->
        <div class="absolute top-2 right-2">
          <NuxtImg v-if="EquipedBy" :src="GetCharacterIcon(EquipedBy)" class="w-10 h-10 rounded-full overflow-clip" />
        </div>

        <!-- Weapon Level/Rank -->
        <div>
          <div class="flex items-center gap-1 mt-1 mb-3">
            <UBadge color="error" variant="soft" size="sm" class="text-nowrap">
              {{ `${t(`label_level`)} ${weapon.Level}` }}
            </UBadge>
            <UBadge color="info" variant="soft" size="sm" class="text-nowrap">
              {{ `${t(`label_rank_full`)} ${weapon.Rank || 0}` }}
            </UBadge>
            <UBadge color="neutral" variant="soft" size="sm" class="text-nowrap">
              <NuxtImg :src="`${GetTypeIcon(weapon)}`" width="15" height="12" /> {{ weapon.Type }}
            </UBadge>
          </div>
        </div>

        <!-- Stats -->
        <div v-if="weapon.MainStatistic && weapon.SecondaryStatistic" class="h-min flex flex-col items-start text-gray-300">
          <StatLine :stat="weapon.MainStatistic" icon-size="xs" :show-line="true" />
          <StatLine :stat="weapon.SecondaryStatistic" icon-size="xs" :show-line="true" />
        </div>
      </div>
    </div>
  </UCard>
</template>
