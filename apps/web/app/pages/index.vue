<script setup lang="ts">
import type Character from "~/Core/Interfaces/Character"
import type { BaseCharacter } from "~/Core/Interfaces/Character"
import type Weapon from "~/Core/Interfaces/Weapon"
import { ReleaseState } from "~/Core/Enums/ReleaseState"
import { ScorerGameVersion } from "~/Core/Versions"

definePageMeta({
  layout: "default",
})

useSeoMeta({
  title: "Wuthering Waves Optimizer",
  ogTitle: "Wuthering Waves Optimizer",
  description: "The ultimate Wuthering Waves optimizer tool. Calculate character builds, evaluate echoes, maximize your damage with our comprehensive calculator.",
  ogDescription: "The ultimate Wuthering Waves optimizer tool. Calculate character builds, evaluate echoes, maximize your damage with our comprehensive calculator.",
  ogImage: "/images/wuwa-optimizer-showcase-00.webp",
  twitterCard: "summary_large_image",
})

const CharactersStore = useCharactersStore()
const WeaponsStore = useWeaponsStore()

function OnCharacterClicked(characterId: number | undefined) {
  navigateTo(`/characters/${characterId}`)
}

const AddedCharacters = computed(() => CharactersStore.GetAll().filter(x => x.ReleaseState === ReleaseState.NEW))
const UpcomingCharacters = computed(() => CharactersStore.GetAll().filter(x => x.ReleaseState === ReleaseState.UPCOMING || x.ReleaseState === ReleaseState.UNKNOWN))
const AddedWeapons = computed(() => WeaponsStore.GetAll().filter(x => x.ReleaseState === ReleaseState.NEW))
const UpcomingWeapons = computed(() => WeaponsStore.GetAll().filter(x => x.ReleaseState === ReleaseState.UPCOMING))

function IsCharacterAvailable(character: BaseCharacter) {
  return character.ReleaseState === ReleaseState.RELEASED || character.ReleaseState === ReleaseState.NEW
}
</script>

<template>
  <div class="flex flex-col mx-auto gap-2 mb-12 px-8 x:px-0 xl:container">
    <!-- Hero Section -->
    <UCard
      v-motion-pop
      :delay="50"
      class="col-span-3"
      :ui="{
        root: 'rounded-none rounded-br-xl border-0 relative overflow-clip',
        body: 'p-0 sm:p-0 h-full',
      }"
    >
      <NuxtImg v-motion-slide-right :delay="200" src="/characters/1506/images/Phoebe_Full_Sprite.webp" class="absolute -top-10 -right-55 object-cover" />
      <div v-motion-slide-top :delay="250" class="flex justify-between gap-6 xl:gap-8 flex-col p-4 h-full">
        <div class="flex flex-col">
          <h1 class="text-xl xl:text-3xl font-semibold tracking-tight text-gold-500">
            <span class="text-gray-300 mr-2 font-bold">||</span>Wuthering Waves Optimizer
          </h1>
          <p class="text-xs xl:text-sm max-w-2xl text-gray-300">
            Optimize your builds, evaluate your echoes and maximize your characters' performance.
          </p>
        </div>
        <div class="flex w-full flex-wrap items-center gap-1">
          <MCharacterIcon
            v-for="c in AddedCharacters"
            :key="c.Id"
            v-motion-pop
            :delay="250"
            :character="c as Character"
            :class="{ 'cursor-pointer': IsCharacterAvailable(c) }"
            @click.prevent="IsCharacterAvailable(c) ? OnCharacterClicked(c.Id) : null"
          />
          <MWeaponIcon
            v-for="w in AddedWeapons"
            :key="w.GameId"
            v-motion-pop
            :weapon="w as Weapon"
            class="cursor-default"
          />
          <MCharacterIcon
            v-for="c in UpcomingCharacters"
            :key="c.Id"
            v-motion-pop
            :delay="250"
            :character="c as Character"
            :class="{ 'cursor-pointer': IsCharacterAvailable(c) }"
            @click.prevent="IsCharacterAvailable(c) ? OnCharacterClicked(c.Id) : null"
          />
          <MWeaponIcon
            v-for="w in UpcomingWeapons"
            :key="w.GameId"
            v-motion-pop
            :weapon="w as Weapon"
            class="cursor-default"
          />
        </div>
      </div>
    </UCard>

    <div class="grid grid-cols-3 gap-2">
      <!-- Import Section -->
      <UCard
        v-motion-pop
        :delay="100"
        :ui="{
          root: 'rounded-none rounded-br-xl border-0',
          body: 'p-4 sm:p-4',
        }"
      >
        <div class="flex flex-col gap-4 h-full">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
              <UIcon name="solar:import-broken" class="w-5 h-5 text-primary-400" />
            </div>
            <div>
              <h3 class="font-semibold text-gray-100">
                Auto Import
              </h3>
              <p class="text-xs text-gray-400">
                Scan your characters
              </p>
            </div>
          </div>

          <p class="text-xs text-gray-300 flex-1">
            Automatically import your characters, weapons and echoes directly from a generated Wuthering Waves screenshot using our OCR scanner.
          </p>

          <div class="space-y-2">
            <div class="flex items-center gap-2 text-xs text-gray-400">
              <UIcon name="i-solar-check-circle-broken" class="w-3 h-3 text-green-400" />
              <span>OCR-powered screenshot scanning</span>
            </div>
            <div class="flex items-center gap-2 text-xs text-gray-400">
              <UIcon name="i-solar-check-circle-broken" class="w-3 h-3 text-green-400" />
              <span>Automatic character & weapon detection</span>
            </div>
            <div class="flex items-center gap-2 text-xs text-gray-400">
              <UIcon name="i-solar-check-circle-broken" class="w-3 h-3 text-green-400" />
              <span>Echo set & stats recognition</span>
            </div>
          </div>

          <UButton
            to="/imports"
            color="primary"
            variant="subtle"
            class="w-fit"
            leading-icon="solar:import-broken"
          >
            Start Import
          </UButton>
        </div>
      </UCard>

      <!-- Characters Section -->
      <UCard
        v-motion-pop
        :delay="150"
        :ui="{
          root: 'rounded-none rounded-br-xl border-0',
          body: 'p-4 sm:p-4',
        }"
      >
        <div class="flex flex-col gap-4 h-full">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <UIcon name="solar:soundwave-circle-broken" class="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 class="font-semibold text-gray-100">
                Character Management
              </h3>
              <p class="text-xs text-gray-400">
                Optimize your builds
              </p>
            </div>
          </div>

          <p class="text-xs text-gray-300 flex-1">
            Create and compare builds for each character. Analyze performance and optimize your equipment.
          </p>

          <div class="space-y-2">
            <div class="flex items-center gap-2 text-xs text-gray-400">
              <UIcon name="i-solar-check-circle-broken" class="w-3 h-3 text-green-400" />
              <span>Character-specific scoring system</span>
            </div>
            <div class="flex items-center gap-2 text-xs text-gray-400">
              <UIcon name="i-solar-check-circle-broken" class="w-3 h-3 text-green-400" />
              <span>Multiple build comparison</span>
            </div>
            <div class="flex items-center gap-2 text-xs text-gray-400">
              <UIcon name="i-solar-check-circle-broken" class="w-3 h-3 text-green-400" />
              <span>Builds optimization tools</span>
            </div>
          </div>

          <UButton
            to="/characters"
            color="secondary"
            variant="subtle"
            leading-icon="solar:soundwave-circle-broken"
            class="w-fit"
          >
            View Characters
          </UButton>
        </div>
      </UCard>

      <!-- Echoes Section -->
      <UCard
        v-motion-pop
        :delay="200"
        :ui="{
          root: 'rounded-none rounded-br-xl border-0',
          body: 'p-4 sm:p-4',
        }"
      >
        <div class="flex flex-col gap-4 h-full">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
              <UIcon name="game-icons:squid-head" class="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 class="font-semibold text-gray-100">
                Echo Management
              </h3>
              <p class="text-xs text-gray-400">
                Analyze your collection
              </p>
            </div>
          </div>

          <p class="text-xs text-gray-300 flex-1">
            View all your echoes, their stats and scores. Identify the best equipment for each character.
          </p>

          <div class="space-y-2">
            <div class="flex items-center gap-2 text-xs text-gray-400">
              <UIcon name="i-solar-check-circle-broken" class="w-3 h-3 text-green-400" />
              <span>Complete echo collection overview</span>
            </div>
            <div class="flex items-center gap-2 text-xs text-gray-400">
              <UIcon name="i-solar-check-circle-broken" class="w-3 h-3 text-green-400" />
              <span>Advanced filtering & sorting options</span>
            </div>
            <div class="flex items-center gap-2 text-xs text-gray-400">
              <UIcon name="i-solar-check-circle-broken" class="w-3 h-3 text-green-400" />
              <span>Individual stat modification</span>
            </div>
          </div>

          <UButton
            to="/echoes"
            color="success"
            variant="subtle"
            leading-icon="game-icons:squid-head"
            class="w-fit"
          >
            View Echoes
          </UButton>
        </div>
      </UCard>
    </div>
    <!-- Character Banners Timeline -->
    <UCard
      v-motion-pop
      class="col-span-6"
      :delay="250"
      :ui="{
        root: 'rounded-none rounded-br-xl border-0 h-full relative',
        body: 'p-4 sm:p-4 h-full',
      }"
    >
      <EventTimeline />
    </UCard>

    <!-- Scoring System Section -->
    <UCard
      v-motion-pop
      class="col-span-6"
      :delay="300"
      :ui="{
        root: 'rounded-none rounded-br-xl border-0',
        body: 'p-4 sm:p-4',
      }"
    >
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center">
            <UIcon name="solar:calculator-minimalistic-broken" class="w-5 h-5 text-gold-400" />
          </div>
          <div class="flex items-center gap-3">
            <div>
              <h3 class="font-semibold text-gray-100">
                Scoring System
              </h3>
              <p class="text-xs text-gray-400">
                Character-specific evaluation
              </p>
            </div>
            <UBadge
              v-motion-pop
              :delay="350"
              color="success"
              variant="soft"
              size="sm"
              icon="i-heroicons-check-badge"
            >
              v{{ ScorerGameVersion }}
            </UBadge>
          </div>
        </div>

        <NuxtImg
          v-motion-pop
          src="/images/wuwa-optimizer-showcase-01.png"
          class="w-full mx-auto rounded-br-xl"
        />
      </div>
    </UCard>
  </div>
</template>
