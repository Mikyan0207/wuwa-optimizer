<script setup lang="ts">
import type Echo from '~/Core/Interfaces/Echo'
import type Sonata from '~/Core/Interfaces/Sonata'
import { GetSonataIcon } from '~/Core/Utils/EchoUtils'

const props = defineProps<{
  echoes: Echo[]
}>()

const SetStatsStore = useSetStatsStore()

const ActiveSets = computed(() => {
  const setCounts = new Map<string, { count: number, sonata: Sonata }>()

  props.echoes.forEach((echo) => {
    if (echo.Id !== -1 && echo.Sonata) {
      echo.Sonata.forEach((sonata) => {
        if (sonata.IsSelected) {
          const key = sonata.Name
          if (setCounts.has(key)) {
            setCounts.get(key)!.count++
          }
          else {
            setCounts.set(key, { count: 1, sonata })
          }
        }
      })
    }
  })

  return Array.from(setCounts.entries())
    .map(([name, data]) => {
      const effect1Required = data.sonata.Effect1RequiredEchoes || 2
      const effect2Required = data.sonata.Effect2RequiredEchoes || 5
      const maxRequired = data.sonata.Effect2 ? Math.max(effect1Required, effect2Required) : effect1Required
      const progressValue = Math.min((data.count / maxRequired) * 100, 100)

      return {
        name,
        count: data.count,
        sonata: data.sonata,
        effect1Required,
        effect2Required,
        maxRequired,
        progressValue,
        effect1Active: data.count >= effect1Required,
        effect2Active: data.sonata.Effect2 ? data.count >= effect2Required : false,
      }
    })
    .sort((a, b) => b.count - a.count)
})
</script>

<template>
  <UCard
    class="w-full"
    :ui="{
      root: 'rounded-none rounded-br-xl border-0',
    }"
  >
    <template #default>
      <BorderLines />
      <div class="p-2">
        <div v-if="ActiveSets.length === 0" class="text-gray-400 text-center py-4">
          No active sets
        </div>

        <div v-else class="space-y-3">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2">
              <div class="w-1 h-4 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full" />
              <h3 class="text-sm font-medium text-gray-300 tracking-wide uppercase">
                Sets
              </h3>
            </div>
            <UTooltip text="Include set bonuses in character stats calculation">
              <div class="flex items-center gap-2">
                <span class="text-xs text-gray-400">Active</span>
                <USwitch v-model="SetStatsStore.IncludeSetStats" size="sm" />
              </div>
            </UTooltip>
          </div>
          <div
            v-for="set in ActiveSets"
            :key="set.name"
            class="bg-neutral-800/60 backdrop-blur-sm rounded-sm p-3 border border-gold-600/20 hover:border-gold-500/30 transition-all duration-200"
          >
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-3">
                <div class="relative">
                  <NuxtImg
                    :src="GetSonataIcon(set.sonata)"
                    :alt="set.name"
                    class="w-8 h-8 object-contain"
                  />
                </div>
                <div>
                  <span class="text-sm text-white">{{ set.name }}</span>
                  <div class="text-xs text-gray-400">
                    {{ set.count }}/{{ set.maxRequired }} pieces
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-4">
              <UProgress
                v-model="set.progressValue"
                :max="100"
                :value="set.progressValue"
                class="w-full"
                color="neutral"
              />
            </div>

            <div class="space-y-2.5">
              <div class="flex items-start gap-3">
                <UBadge
                  :color="set.effect1Active ? 'success' : 'neutral'"
                  variant="soft"
                  size="xs"
                  class="font-mono mt-0.5 border border-gray-600/30"
                >
                  {{ set.effect1Required }}
                </UBadge>
                <span
                  :class="`text-sm leading-relaxed font-medium ${set.effect1Active ? 'text-green-300' : 'text-gray-300'}`"
                >
                  {{ set.sonata.Effect1 }}
                </span>
              </div>

              <div v-if="set.sonata.Effect2" class="flex items-start gap-3">
                <UBadge
                  :color="set.effect2Active ? 'success' : 'neutral'"
                  variant="soft"
                  size="xs"
                  class="font-mono mt-0.5 border border-gray-600/30"
                >
                  {{ set.effect2Required }}
                </UBadge>
                <span
                  :class="`text-sm leading-relaxed font-medium ${set.effect2Active ? 'text-green-300' : 'text-gray-300'}`"
                >
                  {{ set.sonata.Effect2 }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </UCard>
</template>
