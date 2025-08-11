<script setup lang="ts">
import type Echo from '~/Core/Interfaces/Echo'
import VueDraggable from 'vuedraggable'
import { useBuild } from '~/composables/builds/UseBuild'
import { useCharacter } from '~/composables/characters/UseCharacter'
import { useScreenshot } from '~/composables/core/UseScreenshot'
import { GetCharacterBackground } from '~/Core/Utils/CharacterUtils'
import { useBuildsStore } from '~/stores/BuildsStore'

const { CurrentCharacter } = useCharacter()
const { DefaultBuild, CurrentEchoes } = useBuild()

const CharacterInfoRef = ref<HTMLElement | null>(null)
const ShowScreenShotBackground = ref<boolean>(false)
const ForceStaticArt = ref<boolean>(false)

const BuildsStore = useBuildsStore()
const SettingsStore = useSettingsStore()
const Toast = useToast()
const { TakeScreenShotAsync } = useScreenshot(CharacterInfoRef)

async function SaveCurrentBuild() {
  if (!CurrentCharacter.value) {
    return
  }

  const build = BuildsStore.CreateBuild(
    'Current Build',
    CurrentCharacter.value.Id,
  )

  if (build) {
    Toast.add({
      title: 'Build saved!',
      description: `"${build.Name}" has been saved successfully.`,
      color: 'success',
    })
  }
  else {
    Toast.add({
      title: 'Build already exists!',
      description: 'A build with the same configuration already exists.',
      color: 'warning',
    })
  }
}

const DraggableEchoes = computed({
  get: () => CurrentEchoes.value,
  set: (newOrder: any[]) => {
    if (CurrentCharacter.value && DefaultBuild.value) {
      const updatedEchoes = [...(DefaultBuild.value.Echoes || [])]

      newOrder.forEach((echo, index) => {
        if (echo.GameId !== -1) {
          const echoDataIndex = updatedEchoes.findIndex(e => e.GameId === echo.GameId)
          if (echoDataIndex >= 0) {
            updatedEchoes[echoDataIndex] = {
              ...updatedEchoes[echoDataIndex],
              EquipedSlot: index,
            } as Echo
          }
        }
      })

      BuildsStore.UpdateBuild(DefaultBuild.value.Id, {
        Echoes: updatedEchoes,
      })
    }
  },
})

function OnTakeScreenShotClicked() {
  TakeScreenShotAsync(() => {
    ForceStaticArt.value = true
    ShowScreenShotBackground.value = true
  }, () => {
    ShowScreenShotBackground.value = false
    ForceStaticArt.value = false
  })
}
</script>

<template>
  <div class="mb-14 xl:mb-4">
    <div v-if="CurrentCharacter" class="mt-2 relative">
      <div class="mx-auto my-2">
        <div ref="CharacterInfoRef" class="relative p-0.25">
          <div v-if="ShowScreenShotBackground" class="absolute inset-0 blur-sm">
            <div class="absolute -top-5 -left-5 -right-5 -bottom-5 bg-neutral-900/75" />
            <NuxtImg :src="GetCharacterBackground(CurrentCharacter)" class="h-full w-full object-cover" />
          </div>

          <!-- Main Layout Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-1 auto-rows-auto">
            <!-- Character Art Card -->
            <CharacterAnimatedArtCard
              v-if="CurrentCharacter && SettingsStore.GetSetting('Characters').EnableAnimatedArt === true && !ForceStaticArt"
              class="md:col-span-1 xl:col-span-2"
            />
            <CharacterArtCard
              v-else
              :character="CurrentCharacter"
              class="md:col-span-1 xl:col-span-2"
            />

            <!-- Stats & Weapon/Skills Container -->
            <div class="md:col-span-1 xl:col-span-3 grid grid-cols-1 xl:grid-cols-2 gap-1">
              <!-- Stats Card -->
              <CharacterStatsCard
                v-motion-pop
                class="col-span-1"
                :delay="100"
                :character="CurrentCharacter"
                :build="DefaultBuild"
              />

              <!-- Weapon & Skills Container -->
              <div class="grid grid-rows-4 gap-1 col-span-1">
                <!-- Weapon Card -->
                <CharacterWeaponCard
                  class="row-span-1"
                  :build="DefaultBuild"
                />

                <!-- Skills Card -->
                <CharacterSkillsCard
                  v-motion-slide-right
                  :delay="200"
                  class="row-span-3"
                  :character="CurrentCharacter"
                />
              </div>
            </div>
          </div>

          <!-- Echoes Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 mt-1">
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
                <MEchoCard
                  v-motion-slide-bottom
                  :delay="200 + (idx * 25)"
                  :equiped-slot="echo.EquipedSlot || idx"
                  :echo="echo"
                />
              </template>
            </VueDraggable>
          </div>
        </div>

        <div class="mt-12">
          <MSectionTitle title="Sets" color="emerald" />
        </div>

        <!-- Sets Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-1 mt-2">
          <CharacterSetsCard
            v-motion-slide-bottom
            :delay="300"
          />
        </div>
      </div>

      <!-- Fixed Action Buttons -->
      <div class="fixed right-4 top-1/3 z-50">
        <div class="bg-black/90 backdrop-blur-md rounded-xl border border-white/20 shadow-xl">
          <div class="p-1.5 flex flex-col space-y-1">
            <UButton
              color="neutral"
              variant="ghost"
              icon="solar:camera-broken"
              :trailing="false"
              :loading="ShowScreenShotBackground"
              size="sm"
              class="w-9 h-9 justify-center text-white hover:text-white hover:bg-white/10 rounded-lg"
              @click.prevent="OnTakeScreenShotClicked"
            />
            <USeparator />
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
