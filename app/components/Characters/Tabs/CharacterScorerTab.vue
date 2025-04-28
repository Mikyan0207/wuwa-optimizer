<script setup lang="ts">
import type Echo from '~/Core/Interfaces/Echo'
import { domToBlob } from 'modern-screenshot'
import { useScoreCalculator } from '~/composables/UseScoreCalculator'

const CharacterInfoRef = ref<HTMLElement | null>(null)

const EchoesStore = useEchoesStore()
const ScoreCalculator = useScoreCalculator()

const { ActiveCharacter } = useActiveCharacterStore()
const CharacterScore = computed<ICharacterRatingResult>(() => ScoreCalculator.GetCharacterScore(ActiveCharacter, ActiveCharacter?.EquipedEchoes || []))
const ShowScreenShotBackground = ref<boolean>(false)

if (ActiveCharacter === undefined || ActiveCharacter === null) {
  await navigateTo('/characters')
}

function GetEchoes(): Echo[] {
  if (ActiveCharacter === undefined || ActiveCharacter.EquipedEchoes.length === 0) {
    return []
  }

  return EchoesStore
    .GetEchoesByIds(ActiveCharacter.EquipedEchoes, ActiveCharacter.Id)
    .sort((a, b) => (a.EquipedSlot || 0) - (b.EquipedSlot || 0))
}

async function TakeScreenShotAsync() {
  if (!CharacterInfoRef.value) {
    return
  }

  ShowScreenShotBackground.value = true

  const scale = 1
  const w = CharacterInfoRef.value.clientWidth * scale
  const h = CharacterInfoRef.value.clientHeight * scale

  domToBlob(CharacterInfoRef.value, {
    height: h,
    width: w,
    style: {
      scale: `${scale}`,
    },
    quality: 1,
  }).then((blob) => {
    if (blob === null) {
      ShowScreenShotBackground.value = false
      return
    }

    window.open(URL.createObjectURL(blob), '_blank')

    ShowScreenShotBackground.value = false
  })
}
</script>

<template>
  <div class="mb-14 xl:mb-4">
    <UCard
      v-motion-pop
      :delay="50"
      class="mx-auto w-full text-sm"
      :ui="{
        root: 'rounded-none rounded-br-xl border-0',
      }"
    >
      <template #default>
        <BorderLines :count="1" />
        <div class="flex items-center justify-between">
          <!-- TODO: Detect if there is something to save, etc.. -->
          <!-- <UButton color="white" size="xs" variant="solid" icon="i-mdi-content-save-plus-outline" :trailing="false">
                      Save Build
                    </UButton> -->
          <div class="w-full flex justify-end gap-1">
            <ScoringAlgorithmCard v-if="ActiveCharacter !== undefined" :character="ActiveCharacter" />
            <UButton
              color="neutral" size="xs" variant="subtle" icon="i-carbon:camera" :trailing="false"
              :loading="ShowScreenShotBackground" @click.prevent="TakeScreenShotAsync"
            >
              Screenshot
            </UButton>
          </div>
        </div>
      </template>
    </UCard>

    <div v-if="ActiveCharacter !== undefined && CharacterScore" class="mt-2">
      <div class="mx-auto my-2">
        <div ref="CharacterInfoRef" class="relative p-0.25">
          <div v-if="ShowScreenShotBackground" class="absolute inset-0">
            <NuxtImg src="/images/main-bg.webp" class="h-full w-full object-cover" />
          </div>
          <div class="grid grid-cols-2 mx-auto w-full gap-2 xl:grid-cols-5">
            <!-- Character Info (Art, Stats, Weapon, Skills) -->
            <CharacterArtCard
              v-if="ActiveCharacter"
              v-motion-slide-left :delay="50"
              :character="ActiveCharacter"
              class="col-span-1 row-span-1 xl:col-span-2"
            />
            <div class="grid col-span-1 grid-cols-1 gap-2 xl:col-span-3 xl:grid-cols-2">
              <!-- Stats -->
              <CharacterStatsCard
                v-motion-pop :delay="100"
                :character="ActiveCharacter"
                :score="CharacterScore"
              />
              <!-- Weapon / Skills -->
              <div class="grid grid-rows-4 gap-2">
                <!-- Weapon -->
                <CharacterWeaponCard
                  v-motion-slide-right :delay="150"
                  class="row-span-1"
                />
                <!-- Skills -->
                <CharacterSkillsCard
                  v-motion-slide-right
                  class="row-span-3" :delay="200"
                  :character="ActiveCharacter"
                />
              </div>
            </div>
          </div>

          <div class="grid grid-cols-3 mt-2 gap-2 xl:grid-cols-5">
            <!-- Echoes -->
            <!-- We can simplify this for sure... -->
            <CharacterEchoCard
              v-for="(echo, idx) in GetEchoes()"
              :key="idx" v-motion-slide-bottom
              :delay="200 + (idx * 25)"
              :echo="echo"
              :echo-slot="echo.EquipedSlot || idx"
              :score="CharacterScore.EchoesScores.find(x => x.EchoId === echo.Id)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
