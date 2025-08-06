<script setup lang="ts">
import type Echo from '~/Core/Interfaces/Echo'
import { GetEchoIcon, GetSonataIcon } from '~/Core/Utils/EchoUtils'

const props = defineProps<{
  echo: Echo | undefined
}>()

const { t } = useI18n()

const IsValidEcho = computed(() => props.echo && props.echo.Id !== -1)
const SelectedSonata = computed(() => props.echo && props.echo.Sonata.find(x => x.IsSelected === true))
</script>

<template>
  <div class="w-full flex flex-row items-center gap-2">
    <div v-motion-pop :delay="400" class="flex flex-col items-center gap-2 rounded-full border-2 h-12 w-12 border-gold-400/60 overflow-clip">
      <NuxtImg v-if="IsValidEcho" :src="GetEchoIcon(echo!)" class="h-12 w-12" />
      <USkeleton v-else class="h-12 w-12 rounded-full" />
    </div>
    <div v-motion-pop :delay="400" class="flex flex-col min-w-0 flex-1">
      <div v-if="IsValidEcho" class="text-white" :title="t(`${echo!.Id}_name`)">
        <div class="flex items-center gap-2 w-full min-w-0">
          <span class="text-lg leading-none min-w-0 flex-1" style="font-size: clamp(0.75rem, 2.5vw, 1.125rem);">{{ t(`${echo!.Id}_name`) }}</span>
          <NuxtImg v-if="SelectedSonata" :src="GetSonataIcon(SelectedSonata)" class="h-6 w-6 flex-shrink-0" />
        </div>
      </div>
      <USkeleton v-else class="h-4 w-32" />
    </div>
  </div>
</template>
