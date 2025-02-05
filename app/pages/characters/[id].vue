<script setup lang="ts">
import { domToBlob } from 'modern-screenshot'
import { Empty_Echo } from '~/Core/Echoes'
import { Echo } from '~/Core/Models/Echo'

definePageMeta({
  layout: 'character-optimizer',
})

const Route = useRoute()
const CharacterInfoRef = ref<HTMLElement | null>(null)

const CharactersStore = useCharactersStore()
const EchoesStore = useEchoesStore()
const ScoreCalculator = useScoreCalculatorStore()
const CharactersEventBus = useEventBus('CharactersEvents')

const SelectedCharacter = computed(() => CharactersStore.GetCharacter(Number.parseInt(Route.params.id)))
const CharacterScore = ref<ICharacterRatingResult>()
const ShowScreenShotBackground = ref<boolean>(false)

if (SelectedCharacter.value === undefined || SelectedCharacter.value === null) {
  await navigateTo('/characters')
}
else {
  CharacterScore.value = ScoreCalculator.GetCharacterScore(SelectedCharacter.value, SelectedCharacter.value.EquipedEchoes || [])
}

CharactersEventBus.on(() => {
  if (SelectedCharacter.value === undefined) {
    return
  }

  CharacterScore.value = ScoreCalculator.GetCharacterScore(SelectedCharacter.value, SelectedCharacter.value.EquipedEchoes || [])
})

function GetEchoes(): Echo[] {
  if (SelectedCharacter.value === undefined || SelectedCharacter.value.EquipedEchoes.length === 0) {
    return Array.from({ length: 5 }).fill(new Echo(Empty_Echo)) as Echo[]
  }

  const equippedEchoes = EchoesStore.GetEchoesByIds(SelectedCharacter.value.EquipedEchoes)
  const echoes: Echo[] = Array.from({ length: 5 }).fill(new Echo(Empty_Echo)) as Echo[]

  equippedEchoes.forEach((echo, index) => {
    echoes[index] = echo
  })

  return echoes
}

async function TakeScreenShotAsync() {
  if (!CharacterInfoRef.value) {
    return
  }

  ShowScreenShotBackground.value = true

  const scale = 1
  const w = 1280 * scale
  const h = 886 * scale

  const blob = await domToBlob(CharacterInfoRef.value, {
    height: h,
    width: w,
    style: {
      zoom: `${scale}`,
    },
  })

  if (blob === null) {
    ShowScreenShotBackground.value = false
    return
  }

  const fileURL = URL.createObjectURL(blob)
  window.open(fileURL, '_blank')

  ShowScreenShotBackground.value = false
}
</script>

<template>
  <div>
    <div class="sticky left-16 top-0 h-12 w-full flex items-center justify-between gap-2 border-b border-white/14 bg-black/44 p-3 text-sm backdrop-blur-6">
      <div class="flex items-center gap-2">
        <UBreadcrumb
          v-if="SelectedCharacter !== undefined"
          :links="[
            { label: 'Characters', to: '/characters' },
            { label: SelectedCharacter.Name },
          ]"
        />
      </div>
      <div class="flex items-center gap-2">
        <WeightsCard v-if="SelectedCharacter !== undefined" :character="SelectedCharacter" />
        <UButton color="white" size="xs" variant="solid" icon="i-carbon:camera" :trailing="false" :loading="ShowScreenShotBackground" @click.prevent="TakeScreenShotAsync">
          Screenshot
        </UButton>
      </div>
    </div>

    <div v-if="SelectedCharacter !== undefined && CharacterScore" class="mb-14 mt-4 xl:mb-0">
      <div class="mx-auto my-2 w-7xl">
        <div ref="CharacterInfoRef" class="relative grid grid-cols-5 mx-auto w-full gap-1">
          <div v-if="ShowScreenShotBackground" class="absolute inset-0">
            <LayeredBackground />
          </div>
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
                :character-weapon-type="SelectedCharacter.WeaponType"
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
            class="relative border-2 border-white/18 rounded bg-black/66 backdrop-blur-6"
          />
          <div class="grid col-span-3 grid-cols-2">
            <Card class="h-36">
              Active Sonata
            </Card>
            <div class="w-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
