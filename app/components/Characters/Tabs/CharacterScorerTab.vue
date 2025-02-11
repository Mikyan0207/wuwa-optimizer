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
  const echoes: Echo[] = [
    new Echo(Empty_Echo),
    new Echo(Empty_Echo),
    new Echo(Empty_Echo),
    new Echo(Empty_Echo),
    new Echo(Empty_Echo),
  ]

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
  const w = CharacterInfoRef.value.clientWidth * scale
  const h = CharacterInfoRef.value.clientHeight * scale

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
  <div class="mb-14 xl:mb-4 px-4 xl:px-0">
    <UCard
      class="mx-auto w-full text-sm xl:max-w-7xl"
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
            <ScoringAlgorithmCard v-if="SelectedCharacter !== undefined" :character="SelectedCharacter" />
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

    <div v-if="SelectedCharacter !== undefined && CharacterScore" class="mt-2">
      <div class="mx-auto my-2 xl:w-7xl">
        <div ref="CharacterInfoRef" class="relative p-0.25">
          <div v-if="ShowScreenShotBackground" class="absolute inset-0">
            <LayeredBackground />
          </div>
          <div class="grid grid-cols-2 mx-auto w-full gap-2 xl:grid-cols-5">
            <!-- Character Info (Art, Stats, Weapon, Skills) -->
            <CharacterArtCard
              v-if="SelectedCharacter" :character="SelectedCharacter"
              class="col-span-1 row-span-1 xl:col-span-2"
            />
            <div class="grid col-span-1 grid-cols-1 gap-2 xl:col-span-3 xl:grid-cols-2">
              <!-- Stats -->
              <CharacterStatsCard :character="SelectedCharacter" :score="CharacterScore" />
              <!-- Weapon / Skills -->
              <div class="grid grid-rows-4 gap-2">
                <!-- Weapon -->
                <CharacterWeaponCard
                  :character-id="SelectedCharacter.Id"
                  :character-weapon-type="SelectedCharacter.WeaponType"
                />
                <!-- Skills -->
                <CharacterSkillsCard class="z-1 row-span-3" :character="SelectedCharacter" />
              </div>
            </div>
          </div>

          <div class="grid grid-cols-4 mt-2 gap-2 xl:grid-cols-5">
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
