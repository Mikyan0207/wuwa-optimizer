<script setup lang="ts">
import FileSaver from 'file-saver'
import { domToBlob } from 'modern-screenshot'
import { Empty_Echo } from '~/Core/Echoes'
import { Echo } from '~/Core/Models/Echo'

definePageMeta({
  layout: 'character-optimizer',
})

const Route = useRoute()
const { isTablet, isDesktop, isIos, isMacOS } = useDevice()
const Toast = useToast()
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
  let w = 1280 * scale
  let h = 886 * scale

  if (isTablet) {
    w = 1069 * scale
    h = 1770 * scale
  }

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

    Toast.add({
      title: `${isDesktop} / ${isIos}`,
      timeout: 3000,
    })

    const fileURL = URL.createObjectURL(blob)
    // iPad Air/Pro wants to be a PC, fuck that shit
    if (isDesktop && !isIos && !isMacOS) {
      window.open(fileURL, '_blank')
    }
    else {
      Toast.add({
        title: 'Triggering mobile/tablet download.',
        timeout: 3000,
      })
      FileSaver.saveAs(fileURL, `${SelectedCharacter.value!.Name}_${+new Date()}.png`)
    }
    ShowScreenShotBackground.value = false
  })
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

    <div v-if="SelectedCharacter !== undefined && CharacterScore" class="mb-14 mt-4 px-4 xl:mb-0 xl:px-0">
      <div class="mx-auto my-2 xl:w-7xl">
        <div ref="CharacterInfoRef" class="relative">
          <div v-if="ShowScreenShotBackground" class="absolute inset-0">
            <LayeredBackground />
          </div>
          <div class="grid grid-cols-2 mx-auto w-full gap-1 xl:grid-cols-5">
            <!-- Character Info (Art, Stats, Weapon, Skills) -->
            <CharacterArtCard v-if="SelectedCharacter" :character="SelectedCharacter" class="col-span-1 xl:col-span-2" />
            <div class="grid col-span-1 grid-cols-1 gap-1 xl:col-span-3 xl:grid-cols-2">
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
          </div>

          <div class="grid grid-cols-4 mt-1 gap-1 xl:grid-cols-5">
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
