<script setup lang="ts">
import { RatingSystem } from '~/Core/Systems/RatingSystem'

const Route = useRoute()

const CharactersStore = useCharactersStore()
const SelectedCharacter = computed(() => CharactersStore.GetCharacter(Number.parseInt(Route.params.id)))

if (SelectedCharacter.value === undefined || SelectedCharacter.value === null) {
  await navigateTo('/characters')
}

const CharacterScore = computed(() => new RatingSystem().GetCharacterScore(SelectedCharacter.value!))
</script>

<template>
  <div>
    <div class="w-full flex items-center gap-2 border-b border-white/14 bg-black/44 p-4 text-sm">
      <div class="mx-4 h-8 w-1px bg-white/14" />
      <NuxtLink to="/characters" class="underline">
        Resonators
      </NuxtLink>
      <span> / </span>
      <span v-if="SelectedCharacter !== undefined">{{ SelectedCharacter.Name }}</span>
    </div>
    <div v-if="SelectedCharacter !== undefined">
      <div class="mx-auto my-8 h-min w-85% flex justify-center gap-2 lg:w-75%">
        <!-- Character Info -->
        <div class="grid grid-cols-2 h-656px gap-2">
          <!-- Character Art -->
          <div>
            <div class="relative h-full overflow-hidden border border-white/14 rounded-md bg-black/66">
              <NuxtImg
                fit="cover"
                :src="`${SelectedCharacter.GetSplashArtPath()}`"
                class="absolute top--25% z-0 h-200% w-200% rotate-180 object-cover blur-lg"
              />
              <!-- Sequences -->
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
          <div>
            <!-- Stats -->
            <div class="w-18em">
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
                    <p>{{ (CharacterScore.Score * 100).toFixed(1) }} ({{ CharacterScore.Note }})</p>
                  </div>
                </div>
              </Card>
            </div>
            <!-- Weapon -->
            <div>
              <WeaponCard :weapon="SelectedCharacter.Weapon" :character="SelectedCharacter" />
            </div>
          </div>
        </div>

        <div class="grid auto-rows-min grid-cols-2 items-center gap-2 rounded-lg">
          <EchoCard
            v-for="(echo, idx) in SelectedCharacter.GetEchoesWithPlaceHolders()"
            :key="idx"
            :echo="echo"
            :echo-slot="idx"
            :score="CharacterScore.EchoesScores[idx]"
            :character="SelectedCharacter"
            class="border border-white/14 rounded-md bg-black/66"
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
