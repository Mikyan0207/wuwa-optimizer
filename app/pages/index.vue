<script setup lang="ts">
import { TemplateCharacters } from '~/Core/Characters'
import { ReleaseState } from '~/Core/Enums/ReleaseState'
import { TemplateWeapons } from '~/Core/Weapons'

definePageMeta({
  layout: 'default',
})

const ActiveCharacterStore = useActiveCharacterStore()

function OnCharacterClicked(characterId: number | undefined) {
  ActiveCharacterStore.Set(characterId)
  navigateTo(`/characters/${characterId}`)
}

const AddedCharacters = computed(() => TemplateCharacters.filter(x => x.ReleaseState === ReleaseState.NEW))
const UpcomingCharacters = computed(() => TemplateCharacters.filter(x => x.ReleaseState === ReleaseState.UPCOMING))
const AddedWeapons = computed(() => TemplateWeapons.filter(x => x.ReleaseState === ReleaseState.NEW))
const UpcomingWeapons = computed(() => TemplateWeapons.filter(x => x.ReleaseState === ReleaseState.UPCOMING))
</script>

<template>
  <div class="grid grid-cols-6 mx-auto gap-2 mb-12 px-8 x:px-0 xl:container">
    <UCard
      v-motion-pop
      :delay="50"
      class="col-span-6"
      :ui="{
        root: 'rounded-none rounded-br-xl border-0 relative overflow-clip',
        body: 'p-0 sm:p-0 h-full',
      }"
    >
      <NuxtImg v-motion-slide-right :delay="200" src="/images/characters/1506/Phoebe_Full_Sprite.webp" class="w-[50%] absolute -right-25 -top-10" />
      <div v-motion-slide-top :delay="250" class="flex justify-between gap-12 flex-col p-4 h-full">
        <div class="flex flex-col gap-2">
          <h1 class="text-3xl font-semibold tracking-tight text-gold-500">
            <span class="text-gray-300 mr-2 font-bold">||</span>Wuthering Waves Optimizer
          </h1>
          <p class="max-w-2xl text-gray-300">
            Evaluate and compare your Echoes instantly. Find your best pieces, fast.
          </p>
        </div>
        <div class="flex items-center gap-1">
          <CharacterIcon
            v-for="c in AddedCharacters"
            :key="c.Id"
            v-motion-pop
            :delay="250"
            :character="c"
            @click.prevent="OnCharacterClicked(c.Id)"
          />
          <SmallWeaponIcon
            v-for="w in AddedWeapons"
            :key="w.Id"
            v-motion-pop
            :delay="250"
            :weapon="w"
          />
          <CharacterIcon v-for="c in UpcomingCharacters" :key="c.Id" v-motion-pop :delay="250" :character="c" />
          <SmallWeaponIcon v-for="w in UpcomingWeapons" :key="w.Id" v-motion-pop :delay="250" :weapon="w" />
        </div>
        <div v-motion-slide-bottom class="flex items-center gap-2" :delay="500">
          <UButton to="/characters" leading-icon="i-tabler:target-arrow" variant="subtle">
            Start Scoring
          </UButton>
          <UBadge color="success" variant="soft" size="sm" icon="i-heroicons-check-badge">
            Updated for version 2.2
          </UBadge>
        </div>
      </div>
    </UCard>
    <UCard
      v-motion-pop
      class="col-span-3"
      :delay="100"
      :ui="{
        root: 'rounded-none rounded-br-xl border-0',
        body: 'p-4 sm:p-4',
      }"
    >
      <div class="flex flex-col gap-2">
        <div>
          <h2 class="text-xl tracking-tight">
            <span class="text-gray-300 mr-2 font-bold">||</span>Build and optimize your <span class="font-semibold text-primary-500">Resonators</span>
          </h2>
          <p class="text-sm text-gray-400">
            Because your favorite Resonator deserves nothing less than perfection.
          </p>
        </div>
        <NuxtImg src="/images/wuwa-optimizer-showcase-01.png" class="w-full" />
      </div>
    </UCard>
    <UCard
      v-motion-pop class="col-span-3" :delay="100" :ui="{
        root: 'rounded-none rounded-br-xl border-0',
        body: 'p-4 sm:p-4',
      }"
    >
      <div class="flex flex-col gap-2">
        <div>
          <h2 class="text-xl tracking-tight">
            <span class="text-gray-300 mr-2 font-bold">||</span>Create and share your <span
              class="font-semibold text-primary-500"
            >Rotations</span>
          </h2>
          <p class="text-sm text-gray-400">
            Without mastery, even the perfect build falls short.
          </p>
        </div>
        <p>
          Coming Soon
        </p>
        <!-- <NuxtImg src="/images/character-bg-placeholder.webp" class="w-full h-full" width="700" height="490" /> -->
      </div>
    </UCard>

    <UCard
      v-motion-pop class="col-span-3" :delay="100" :ui="{
        root: 'rounded-none rounded-br-xl border-0',
        body: 'p-4 sm:p-4',
      }"
    >
      <div class="flex flex-col gap-2">
        <div>
          <h2 class="text-xl tracking-tight">
            <span class="text-gray-300 mr-2 font-bold">||</span>Import your <span
              class="font-semibold text-primary-500"
            >Game</span> information
          </h2>
          <p class="text-sm text-gray-400">
            Quickly bring your Wuthering Waves data into the site with the Archiver.
          </p>
        </div>
        <p>
          Coming Soon
        </p>
        <!-- <NuxtImg src="/images/character-bg-placeholder.webp" class="w-full h-full" width="700" height="490" /> -->
      </div>
    </UCard>
  </div>
</template>
