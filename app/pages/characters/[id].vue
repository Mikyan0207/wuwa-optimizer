<script setup lang="ts">
import * as htmlToImage from 'html-to-image'
import { Empty_Echo } from '~/Core/Echoes'
import { Echo } from '~/Core/Models/Echo'

definePageMeta({
  layout: 'default',
})

const Route = useRoute()
const CharacterInfoRef = ref<HTMLElement | null>(null)

const CharactersStore = useCharactersStore()
const EchoesStore = useEchoesStore()
const ScoreCalculator = useScoreCalculatorStore()

const SelectedCharacter = computed(() => CharactersStore.GetCharacter(Number.parseInt(Route.params.id)))
const CharacterScore = ref<ICharacterRatingResult>()

if (SelectedCharacter.value === undefined || SelectedCharacter.value === null) {
  await navigateTo('/characters')
}
else {
  CharacterScore.value = ScoreCalculator.GetCharacterScore(SelectedCharacter.value, SelectedCharacter.value.EquipedEchoes || [])
}

function GetEchoes(): Echo[] {
  if (SelectedCharacter.value === undefined || SelectedCharacter.value.EquipedEchoes.length === 0) {
    return Array.from({ length: 5 }).fill(new Echo(Empty_Echo)) as Echo[]
  }

  const equippedEchoes = EchoesStore.GetEchoesByIds(SelectedCharacter.value.EquipedEchoes)
  const echoes: Echo[] = Array.from({ length: 5 }).fill(new Echo(Empty_Echo)) as Echo[]

  equippedEchoes.forEach((echo, index) => {
    echoes[echo.EquipedSlot || index] = echo
  })

  return echoes
}

async function TakeScreenShotAsync() {
  if (!CharacterInfoRef.value) {
    return
  }

  const scale = 1
  const w = 1280 * scale
  const h = 885 * scale

  htmlToImage.toBlob(CharacterInfoRef.value, {
    pixelRatio: 1,
    height: h,
    canvasHeight: h,
    width: w,
    canvasWidth: w,
    skipAutoScale: true,
    backgroundColor: '#2f2f2f',
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
    <div class="h-12 w-full flex items-center justify-between gap-2 border-b border-white/14 bg-black/44 p-3 text-sm backdrop-blur-6">
      <div class="flex items-center gap-2">
        <div class="mx-4 h-6 w-1px bg-white/14" />
        <NuxtLink to="/characters">
          Resonators
        </NuxtLink>
        <span> / </span>
        <span v-if="SelectedCharacter !== undefined">{{ SelectedCharacter.Name }}</span>
      </div>
      <div class="flex items-center gap-2">
        <WeightsCard v-if="SelectedCharacter !== undefined" :character="SelectedCharacter" />
        <UButton color="white" size="xs" variant="solid" icon="i-carbon:camera" :trailing="false" @click.prevent="TakeScreenShotAsync">
          Screenshot
        </UButton>
      </div>
    </div>

    <div v-if="SelectedCharacter !== undefined && CharacterScore">
      <div class="mx-auto my-8 max-w-7xl">
        <div ref="CharacterInfoRef" class="grid grid-cols-5 mx-auto w-full gap-1">
          <!-- Character Info (Art, Stats, Weapon, Skills) -->
          <CharacterArtCard v-if="SelectedCharacter" :character="SelectedCharacter" class="col-span-2" />
          <div class="grid col-span-3 grid-cols-2 gap-1">
            <!-- Stats -->
            <CharacterStatsCard :character="SelectedCharacter" :score="CharacterScore" />
            <!-- Weapon / Skills -->
            <div class="grid grid-rows-4 gap-1">
              <!-- Weapon -->
              <WeaponCard
                :character-id="SelectedCharacter.Id"
                :weapon-id="SelectedCharacter.EquipedWeapon"
              />
              <!-- Skills -->
              <CharacterSkillsCard
                class="z-1 row-span-3"
                :character="SelectedCharacter"
              />
            </div>
          </div>

          <!-- Echoes -->
          <CharacterEchoCard
            v-for="(echo, idx) in GetEchoes()"
            :key="idx"
            :echo="echo"
            :echo-slot="idx"
            :score="CharacterScore.EchoesScores.find(x => x.EchoId === echo.Id)"
            :character="SelectedCharacter"
            class="relative border border-white/14 rounded-md bg-black/66"
          />
        </div>
      </div>
    </div>
  </div>
</template>
