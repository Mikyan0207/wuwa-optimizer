<script setup lang="ts">
import { domToBlob } from 'modern-screenshot'
import { useCharacterContext } from '~/composables/UseCharacterContext'

const CharacterInfoRef = ref<HTMLElement | null>(null)

const { CurrentCharacter, CurrentEchoes, Score } = useCharacterContext()

if (CurrentCharacter.value === undefined || CurrentCharacter.value === null) {
  await navigateTo('/characters')
}

const ShowScreenShotBackground = ref<boolean>(false)

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
            <ScoringAlgorithmCard v-if="CurrentCharacter !== undefined" :character="CurrentCharacter" />
            <UButton
              color="neutral" variant="soft" icon="solar:camera-broken" :trailing="false"
              :loading="ShowScreenShotBackground" @click.prevent="TakeScreenShotAsync"
            >
              Screenshot
            </UButton>
          </div>
        </div>
      </template>
    </UCard>

    <div v-if="CurrentCharacter !== undefined && Score" class="mt-2">
      <div class="mx-auto my-2">
        <div ref="CharacterInfoRef" class="relative p-0.25">
          <div v-if="ShowScreenShotBackground" class="absolute inset-0">
            <NuxtImg src="/images/main-bg.webp" class="h-full w-full object-cover" />
          </div>
          <div class="grid grid-cols-2 mx-auto w-full gap-2 xl:grid-cols-5">
            <!-- Character Info (Art, Stats, Weapon, Skills) -->
            <CharacterArtCard
              v-if="CurrentCharacter"
              v-motion-slide-left :delay="50"
              :character="CurrentCharacter"
              class="col-span-1 row-span-1 xl:col-span-2"
            />
            <div class="grid col-span-1 grid-cols-1 gap-2 xl:col-span-3 xl:grid-cols-2">
              <!-- Stats -->
              <CharacterStatsCard
                v-motion-pop
                :delay="100"
              />
              <!-- Weapon / Skills -->
              <div class="grid grid-rows-4 gap-2">
                <!-- Weapon -->
                <CharacterWeaponCard
                  v-motion-slide-right
                  :delay="150"
                  class="row-span-1"
                />
                <!-- Skills -->
                <CharacterSkillsCard
                  v-motion-slide-right
                  class="row-span-3"
                  :delay="200"
                />
              </div>
            </div>
          </div>

          <div class="grid grid-cols-3 mt-2 gap-2 xl:grid-cols-5">
            <!-- Echoes -->
            <!-- We can simplify this for sure... -->
            <CharacterEchoCard
              v-for="(echo, idx) in CurrentEchoes"
              :key="idx"
              v-motion-slide-bottom
              :delay="200 + (idx * 25)"
              :echo="echo"
              :echo-slot="echo.EquipedSlot || idx"
              :score="Score.EchoesScores.find(x => x.EchoId === echo.Id)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
