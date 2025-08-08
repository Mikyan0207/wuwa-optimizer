<script setup lang="ts">
import type Echo from '~/Core/Interfaces/Echo'
import { domToBlob } from 'modern-screenshot'
import VueDraggable from 'vuedraggable'
import { useBuild } from '~/composables/builds/UseBuild'
import { useCharacter } from '~/composables/characters/UseCharacter'
import { GetCharacterBackground } from '~/Core/Utils/CharacterUtils'
import { useBuildsStore } from '~/stores/BuildsStore'

const CharacterInfoRef = ref<HTMLElement | null>(null)

const { CurrentCharacter } = useCharacter()
const { CurrentWeapon, CurrentEchoes } = useBuild()
const BuildsStore = useBuildsStore()
const Toast = useToast()

if (CurrentCharacter.value === undefined || CurrentCharacter.value === null) {
  await navigateTo('/characters')
}

async function SaveCurrentBuild() {
  if (!CurrentCharacter.value)
    return

  const build = BuildsStore.CreateBuild(
    'Current Build',
    CurrentCharacter.value.Id,
    CurrentWeapon.value?.Id,
    CurrentEchoes.value,
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

const ShowScreenShotBackground = ref<boolean>(false)

const DraggableEchoes = computed({
  get: () => CurrentEchoes || [],
  set: (newOrder: any[]) => {
    if (CurrentCharacter.value) {
      const defaultBuild = BuildsStore.GetDefaultBuild(CurrentCharacter.value.Id)

      if (defaultBuild) {
        const updatedEchoes = [...(defaultBuild.Echoes || [])]

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

        BuildsStore.UpdateBuild(defaultBuild.Id, {
          Echoes: updatedEchoes,
        })
      }
    }
  },
})

async function TakeScreenShotAsync() {
  if (!CharacterInfoRef.value) {
    return
  }

  ShowScreenShotBackground.value = true

  await new Promise(resolve => setTimeout(resolve, 100))

  const originalWidth = CharacterInfoRef.value.clientWidth
  const originalHeight = CharacterInfoRef.value.clientHeight
  const aspectRatio = originalWidth / originalHeight

  let targetWidth = 2560
  let targetHeight = 1440

  if (aspectRatio > 16 / 9) {
    targetHeight = Math.round(targetWidth / aspectRatio)
  }
  else {
    targetWidth = Math.round(targetHeight * aspectRatio)
  }

  const scaleX = targetWidth / originalWidth
  const scaleY = targetHeight / originalHeight
  const scale = Math.max(scaleX, scaleY)

  try {
    const blob = await domToBlob(CharacterInfoRef.value, {
      height: targetHeight,
      width: targetWidth,
      style: {
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        imageRendering: 'crisp-edges',
      },
      quality: 1,
      type: 'image/png',
      backgroundColor: '#000000',
    })

    if (blob) {
      const url = URL.createObjectURL(blob)
      window.open(url, '_blank')

      setTimeout(() => {
        URL.revokeObjectURL(url)
      }, 1000)

      Toast.add({
        title: 'Screenshot generated!',
        description: `Generated image (${targetWidth}x${targetHeight}) opened in new tab.`,
        color: 'success',
      })
    }
  }
  catch (error) {
    console.error('Screenshot error:', error)
    Toast.add({
      title: 'Screenshot failed',
      description: 'Failed to generate high-quality screenshot.',
      color: 'error',
    })
  }
  finally {
    ShowScreenShotBackground.value = false
  }
}
</script>

<template>
  <div class="mb-14 xl:mb-4">
    <div v-if="CurrentCharacter !== undefined" class="mt-2 relative">
      <div class="mx-auto my-2">
        <div ref="CharacterInfoRef" class="relative p-0.25">
          <div v-if="ShowScreenShotBackground" class="absolute inset-0 blur-sm">
            <div class="absolute -top-5 -left-5 -right-5 -bottom-5 bg-neutral-900/75" />
            <NuxtImg :src="GetCharacterBackground(CurrentCharacter)" class="h-full w-full object-cover" />
          </div>

          <!-- Main Layout Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-2 auto-rows-auto">
            <!-- Character Art Card -->
            <CharacterAnimatedArtCard
              v-if="CurrentCharacter"
              v-motion-slide-left
              :delay="50"
              :character="CurrentCharacter"
              class="md:col-span-1 xl:col-span-2"
            />

            <!-- Stats & Weapon/Skills Container -->
            <div class="md:col-span-1 xl:col-span-3 grid grid-cols-1 xl:grid-cols-2 gap-2">
              <!-- Stats Card -->
              <CharacterStatsCard
                v-motion-pop
                class="col-span-1"
                :delay="100"
              />

              <!-- Weapon & Skills Container -->
              <div class="grid grid-rows-4 gap-2 col-span-1">
                <!-- Weapon Card -->
                <CharacterWeaponCard
                  v-motion-slide-right
                  :delay="150"
                  class="row-span-1"
                />

                <!-- Skills Card -->
                <CharacterSkillsCard
                  v-motion-slide-right
                  :delay="200"
                  class="row-span-3"
                />
              </div>
            </div>
          </div>

          <!-- Echoes Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-2">
            <VueDraggable
              v-if="CurrentCharacter"
              v-model="DraggableEchoes.value"
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
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-2">
          <CharacterSetsCard
            v-motion-slide-bottom
            :delay="300"
            :echoes="CurrentEchoes"
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
              @click.prevent="TakeScreenShotAsync"
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
