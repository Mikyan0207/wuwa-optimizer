<script setup lang="ts">
import type Echo from '~/Core/Interfaces/Echo'
import { domToBlob } from 'modern-screenshot'
import VueDraggable from 'vuedraggable'
import { useCharacterContext } from '~/composables/UseCharacterContext'

const CharacterInfoRef = ref<HTMLElement | null>(null)

const { CurrentCharacter, CurrentWeapon, CurrentEchoes, Score } = useCharacterContext()
const BuildsStore = useBuildsStore()
const EchoesStore = useEchoesStore()
const Toast = useToast()

if (CurrentCharacter.value === undefined || CurrentCharacter.value === null) {
  await navigateTo('/characters')
}

// Force async to trigger Suspense
await new Promise(resolve => setTimeout(resolve, 0))

function SaveCurrentBuild() {
  if (!CurrentCharacter.value)
    return

  const defaultBuild = BuildsStore.GetDefaultBuild(CurrentCharacter.value.Id)
  const equippedEchoes = defaultBuild?.EquipedEchoes || []

  const build = BuildsStore.SaveCurrentBuild(
    CurrentCharacter.value.Id,
    CurrentWeapon.value?.Id,
    equippedEchoes,
    Score.value?.Score,
    Score.value?.Note,
  )

  Toast.add({
    title: 'Build saved!',
    description: `"${build.Name}" has been saved successfully.`,
    color: 'success',
  })
}

const ShowScreenShotBackground = ref<boolean>(false)

const DraggableEchoes = computed({
  get: () => CurrentEchoes.value || [],
  set: (newOrder: any[]) => {
    if (CurrentCharacter.value) {
      const defaultBuild = BuildsStore.GetDefaultBuild(CurrentCharacter.value.Id)

      if (defaultBuild) {
        const updatedEquipedEchoes = [...(defaultBuild.EquipedEchoes || [])]
        const updatedEchoesData = [...(defaultBuild.EchoesData || [])]

        newOrder.forEach((echo, index) => {
          if (echo.Id !== -1) {
            EchoesStore.Update(echo.Id, {
              ...echo,
              EquipedSlot: index,
            })

            updatedEquipedEchoes[index] = echo.Id

            // Mettre à jour EchoesData avec le nouveau slot
            const echoDataIndex = updatedEchoesData.findIndex(e => e.Id === echo.Id)
            if (echoDataIndex >= 0) {
              updatedEchoesData[echoDataIndex] = {
                ...updatedEchoesData[echoDataIndex],
                EquipedSlot: index,
              } as Echo & { BuildId: number }
            }
          }
        })

        BuildsStore.UpdateBuild(defaultBuild.Id, {
          EquipedEchoes: updatedEquipedEchoes,
          EchoesData: updatedEchoesData,
        })

        // Recalculer et sauvegarder le score
        const ScoreCalculator = useScoreCalculator()
        const updatedScore = ScoreCalculator.GetCharacterScore(CurrentCharacter.value, defaultBuild)
        if (updatedScore) {
          BuildsStore.UpdateBuild(defaultBuild.Id, {
            Score: updatedScore.Score,
            Note: updatedScore.Note,
            EchoesScores: updatedScore.EchoesScores,
          })
        }
      }
    }
  },
})

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
    <div v-if="CurrentCharacter !== undefined && Score" class="mt-2 relative">
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
            <VueDraggable
              v-model="DraggableEchoes"
              :animation="200"
              ghost-class="opacity-65"
              chosen-class="scale-102"
              drag-class="scale-106"
              class="contents transition-all duration-150"
              item-key="Id"
            >
              <template #item="{ element: echo, index: idx }">
                <CharacterEchoCard
                  v-motion-slide-bottom
                  :delay="200 + (idx * 25)"
                  :echo="echo"
                  :echo-slot="echo.EquipedSlot || idx"
                  :score="Score.EchoesScores.find(x => x.EchoId === echo.Id)"
                />
              </template>
            </VueDraggable>
          </div>
        </div>

        <div class="grid grid-cols-2 mt-2 gap-2">
          <div class="col-span-1">
            <CharacterSetsCard
              v-motion-slide-bottom
              :delay="300"
              :echoes="CurrentEchoes"
            />
          </div>
          <div class="col-span-1">
            <!-- <CharacterStatsChart
              v-motion-slide-bottom
              :delay="350"
            /> -->
          </div>
        </div>
      </div>

      <div class="fixed right-4 top-1/3 z-50">
        <div class="bg-black/90 backdrop-blur-md rounded-xl border border-white/20 shadow-xl">
          <div class="p-1.5 flex flex-col space-y-1">
            <!-- Screenshot Button -->
            <UButton
              color="neutral"
              variant="ghost"
              icon="solar:camera-broken"
              :trailing="false"
              :loading="ShowScreenShotBackground"
              size="sm"
              class="w-9 h-9 justify-center text-white hover:text-white hover:bg-white/10 rounded-lg"
              @click.prevent="TakeScreenShotAsync"
            />
            <USeparator />
            <!-- Save Build Button -->
            <UButton
              color="neutral"
              variant="ghost"
              icon="solar:diskette-broken"
              :trailing="false"
              size="sm"
              class="w-9 h-9 justify-center text-white hover:text-white hover:bg-white/10 rounded-lg"
              @click.prevent="SaveCurrentBuild"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
