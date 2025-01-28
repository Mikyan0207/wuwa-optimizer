<script setup lang="ts">
import type { ICharacterRatingResult } from '~/Core/Systems/RatingSystem'
import * as htmlToImage from 'html-to-image'
import { RatingSystem } from '~/Core/Systems/RatingSystem'

definePageMeta({
  layout: 'default',
})

const Route = useRoute()

const CharacterInfoRef = ref<HTMLElement | null>(null)

const CharactersStore = useCharactersStore()
const SelectedCharacter = computed(() => CharactersStore.GetCharacter(Number.parseInt(Route.params.id)))
const CharacterScore = ref<ICharacterRatingResult>()

if (SelectedCharacter.value === undefined || SelectedCharacter.value === null) {
  await navigateTo('/characters')
}

CharacterScore.value = new RatingSystem()
  .GetCharacterScore(SelectedCharacter.value!)

async function TakeScreenShotAsync() {
  if (!CharacterInfoRef.value) {
    return
  }

  const scale = 1
  const w = 1280 * scale
  const h = 904 * scale

  htmlToImage.toBlob(CharacterInfoRef.value, {
    pixelRatio: 1,
    height: h,
    canvasHeight: h,
    width: w,
    canvasWidth: w,
    skipAutoScale: true,
    backgroundColor: '#333333',
    style: {
      zoom: `${scale}`,
    },
  })
    .then((blob) => {
      if (blob === null) {
        return
      }
      const fileURL = URL.createObjectURL(blob)
      window.open(fileURL, '_blank')
    })
}
</script>

<template>
  <div>
    <div class="w-full flex items-center justify-between gap-2 border-b border-white/14 bg-black/44 p-4 text-sm">
      <div class="flex items-center gap-2">
        <div class="mx-4 h-8 w-1px bg-white/14" />
        <NuxtLink to="/characters" class="underline">
          Resonators
        </NuxtLink>
        <span> / </span>
        <span v-if="SelectedCharacter !== undefined">{{ SelectedCharacter.Name }}</span>
      </div>
      <div class="flex items-center gap-2">
        <WeightsCard v-if="SelectedCharacter !== undefined" :character="SelectedCharacter" />
        <UButton color="white" variant="solid" icon="i-carbon:camera" :trailing="false" @click.prevent="TakeScreenShotAsync">
          Screenshot
        </UButton>
      </div>
    </div>

    <div v-if="SelectedCharacter !== undefined && CharacterScore">
      <div class="mx-auto my-8 max-w-7xl">
        <div ref="CharacterInfoRef" class="grid grid-cols-5 mx-auto w-full gap-2">
          <!-- Character Info (Art, Stats, Weapon, Skills) -->
          <CharacterArtCard v-if="SelectedCharacter" :character="SelectedCharacter" class="col-span-2" />
          <div class="grid col-span-3 grid-cols-2 gap-2">
            <!-- Stats -->
            <CharacterStatsCard :character="SelectedCharacter" :score="CharacterScore" />
            <!-- Weapon / Skills -->
            <div class="grid grid-rows-4 gap-2">
              <!-- Weapon -->
              <WeaponCard :weapon="SelectedCharacter.Weapon" :character="SelectedCharacter" />
              <!-- Skills -->
              <CharacterSkillsCard class="row-span-3" :character="SelectedCharacter" />
            </div>
          </div>

          <!-- Echoes -->
          <EchoCard
            v-for="(echo, idx) in SelectedCharacter.GetEchoesWithPlaceHolders()"
            :key="idx"
            :echo="echo"
            :echo-slot="idx"
            :score="CharacterScore.EchoesScores[idx]"
            :character="SelectedCharacter"
            class="relative border border-white/14 rounded-md bg-black/66"
          />
        </div>
        <!-- <div class="grid grid-cols-4 grid-rows-3 mx-auto w-75% justify-center gap-2 p-4">
          <div class="col-span-1 row-span-2 h-full">
            <div class="relative h-full overflow-hidden border border-white/14 rounded-md bg-black/66">
              <NuxtImg
                fit="cover"
                :src="`${SelectedCharacter.GetSplashArtPath()}`"
                class="absolute top--25% z-0 h-200% w-200% rotate-180 object-cover blur-lg"
              />
              <div class="absolute left-2 top-2 z-20">
                <div class="flex flex-col gap-3">
                  <div
                    v-for="s in SelectedCharacter?.Sequences"
                    :key="s.Name"
                    class="relative h-12 w-12 border border-white rounded-full bg-gray-700 p-1"
                  >
                    <div class="absolute inset-0 rounded-full" />
                    <div v-if="s.Unlocked === false" class="absolute inset-0 rounded-full bg-black/50" />
                    <NuxtImg :src="`/images/characters/${SelectedCharacter.Id}/${s.Icon}`" />
                  </div>
                </div>
              </div>
              <NuxtImg
                :src="`${SelectedCharacter.GetSplashArtPath()}`"
                class="absolute z-10 h-125% w-auto object-cover"
                fit="cover"
              />
            </div>
          </div>

          <div class="col-span-1 row-span-2">
            <Card class="flex flex-col">
              <div class="flex items-center justify-between gap-4">
                <NuxtImg :src="`${SelectedCharacter.GetTypeIcon()}`" class="h-3em w-3em object-contain" fit="contain" />
                <NuxtImg :src="`${SelectedCharacter.GetRarityIcon()}`" class="h-auto w-6em object-contain" fit="contain" />
                <NuxtImg :src="`${SelectedCharacter.GetWeaponTypeIcon()}`" class="h-3em w-3em object-contain" fit="contain" />
              </div>
              <h1 class="my-2 w-full text-center text-2xl">
                {{ SelectedCharacter.Name }}
              </h1>
              <div class="mx-auto max-w-10em flex items-center justify-evenly gap-3">
                <p>Lv. {{ SelectedCharacter.Level }}</p>
                <span>·</span>
                <p>S{{ SelectedCharacter.GetSequenceLevel() }}</p>
              </div>
              <div class="mx-auto my-3 h-1px w-full rounded-full bg-gray-600" />
              <div class="flex flex-col">
                <CharacterStats :stats="SelectedCharacter.Stats" />
                <div class="mx-auto my-3 h-1px w-full rounded-full bg-gray-600" />
                <div class="w-full flex items-center justify-evenly">
                  <p>Character Score</p>
                  <p>0 (F)</p>
                </div>
              </div>
            </Card>
            <WeaponCard :weapon="SelectedCharacter.Weapon" :character="SelectedCharacter" />
          </div>

          <div class="grid col-span-2 row-span-3 grid-cols-2 h-auto items-start gap-2 rounded-lg">
            <EchoCard
              v-for="(echo, idx) in SelectedCharacter.GetEchoesWithPlaceHolders()"
              :key="idx"
              :echo="echo"
              :echo-slot="idx"
              :character="SelectedCharacter"
              class="border border-white/14 rounded-md bg-black/66"
            />
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
