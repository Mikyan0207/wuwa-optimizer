<script setup lang="ts">
import { domToBlob } from 'modern-screenshot'
import { Empty_Echo } from '~/Core/Echoes'
import { Echo } from '~/Core/Models/Echo'

const props = defineProps<{
  characterId: number
}>()

const CharacterInfoRef = ref<HTMLElement | null>(null)

const CharactersStore = useCharactersStore()
const EchoesStore = useEchoesStore()
const ScoreCalculator = useScoreCalculatorStore()
const CharactersEventBus = useEventBus('CharactersEvents')

const SelectedCharacter = computed(() => CharactersStore.GetCharacter(props.characterId))
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
    echoes[echo.EquipedSlot || index] = echo
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
  const h = 884 * scale

  domToBlob(CharacterInfoRef.value, {
    height: h,
    width: w,
    style: {
      zoom: `${scale}`,
    },
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
  <div>
    <UCard
      class="mx-auto w-full border text-sm backdrop-blur-6 xl:max-w-7xl"
    >
      <template #default>
        <div class="flex items-center justify-between">
          <!-- TODO: Detect if there is something to save, etc.. -->
          <!-- <UButton color="white" size="xs" variant="solid" icon="i-mdi-content-save-plus-outline" :trailing="false">
                      Save Build
                    </UButton> -->
          <div class="w-full flex justify-end gap-1">
            <WeightsCard v-if="SelectedCharacter !== undefined" :character="SelectedCharacter" />
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

    <div v-if="SelectedCharacter !== undefined && CharacterScore" class="mb-14 mt-2 px-4 xl:mb-0 xl:px-0">
      <div class="mx-auto my-2 xl:w-7xl">
        <div ref="CharacterInfoRef" class="relative">
          <div v-if="ShowScreenShotBackground" class="absolute inset-0">
            <LayeredBackground />
          </div>
          <div class="grid grid-cols-2 mx-auto w-full gap-1 xl:grid-cols-5">
            <!-- Character Info (Art, Stats, Weapon, Skills) -->
            <CharacterArtCard
              v-if="SelectedCharacter" :character="SelectedCharacter"
              class="col-span-1 row-span-1 xl:col-span-2"
            />
            <div class="grid col-span-1 grid-cols-1 gap-1 xl:col-span-3 xl:grid-cols-2">
              <!-- Stats -->
              <CharacterStatsCard :character="SelectedCharacter" :score="CharacterScore" />
              <!-- Weapon / Skills -->
              <div class="grid grid-rows-4 gap-1">
                <!-- Weapon -->
                <CharacterWeaponCard
                  :character-id="SelectedCharacter.Id"
                  :character-weapon-type="SelectedCharacter.WeaponType"
                  :weapon-id="SelectedCharacter.EquipedWeapon"
                />
                <!-- Skills -->
                <CharacterSkillsCard class="z-1 row-span-3" :character="SelectedCharacter" />
              </div>
            </div>
          </div>

          <div class="grid grid-cols-4 mt-1 gap-1 xl:grid-cols-5">
            <!-- Echoes -->
            <CharacterEchoCard
              v-for="(echo, idx) in GetEchoes()" :key="idx" :echo="echo" :echo-slot="idx"
              :score="CharacterScore.EchoesScores.find(x => x.EchoId === echo.Id)"
              :character="SelectedCharacter"
            />
          </div>
          <!-- <div class="grid col-span-3 grid-cols-2">
            <Card class="h-36">
              Active Sonata
            </Card>
            <div class="w-full" />
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
