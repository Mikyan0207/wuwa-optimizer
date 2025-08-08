<script setup lang="ts">
import type Echo from '~/Core/Interfaces/Echo'
import { useGameIcon } from '~/composables/core/UseGameIcon'
import { useRarityEffects } from '~/composables/core/UseRarityEffects'

interface EchoIconProps {
  echo: Echo
}

const props = defineProps<EchoIconProps>()

const { Background, Secondary, Highlight } = useRarityEffects(props.echo.Rarity)
const { MainIcon, SonataIcon, Name } = useGameIcon(props.echo)
</script>

<template>
  <MIconFrame
    :background="Background"
    :secondary="Secondary"
    :highlight="Highlight"
  >
    <!-- Sonata Icon -->
    <template #sonata-icon>
      <NuxtImg
        v-if="SonataIcon"
        :width="24"
        :height="24"
        :src="SonataIcon"
        class="select-none"
        style="color: transparent;"
      />
    </template>

    <!-- Main Icon -->
    <template #main-icon>
      <NuxtImg
        :width="160"
        :height="160"
        :src="MainIcon"
        style="color: transparent;"
      />
    </template>

    <!-- Name -->
    <template #name>
      <div
        class="overflow-hidden mx-auto text-ellipsis whitespace-nowrap"
        style="width: 115px;"
        :title="Name"
      >
        {{ Name }}
      </div>
    </template>
  </MIconFrame>
</template>
