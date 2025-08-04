<script setup lang="ts">
import type Echo from '~/Core/Interfaces/Echo'
import * as d3 from 'd3'
import { useCharacterContext } from '~/composables/UseCharacterContext'
import { StatType } from '~/Core/Enums/StatType'
import { STAT_NAMES } from '~/Core/Statistics'

const { CurrentCharacter, CurrentEchoes } = useCharacterContext()
const chartRef = ref<HTMLElement | null>(null)

interface StatData {
  statType: StatType
  statName: string
  weight: number
  procCount: number
  normalizedValue: number
}

const statsData = computed(() => {
  if (!CurrentCharacter.value || !CurrentEchoes.value || !CurrentCharacter.value.StatsWeights)
    return []

  const weights = CurrentCharacter.value.StatsWeights
  const data: StatData[] = []

  const statCounts = new Map<StatType, number>()

  CurrentEchoes.value.forEach((echo: Echo) => {
    if (echo.Id === -1)
      return

    if (echo.SecondaryStatistic) {
      const stat = echo.SecondaryStatistic
      statCounts.set(stat.Type, (statCounts.get(stat.Type) || 0) + 1)
    }

    echo.Statistics.forEach((stat) => {
      statCounts.set(stat.Type, (statCounts.get(stat.Type) || 0) + 1)
    })
  })

  statCounts.forEach((procCount, statType) => {
    const weight = weights[statType] || 0

    data.push({
      statType,
      statName: STAT_NAMES[statType],
      weight,
      procCount,
      normalizedValue: procCount,
    })
  })

  const statOrder = [
    StatType.ATTACK,
    StatType.ATTACK_PERCENTAGE,
    StatType.HP,
    StatType.HP_PERCENTAGE,
    StatType.DEF,
    StatType.DEF_PERCENTAGE,
    StatType.CRIT_RATE,
    StatType.CRIT_DMG,
    StatType.ENERGY_REGENERATION,
    StatType.HEALING_BONUS,
    StatType.BASIC_ATTACK_DMG_AMPLIFICATION,
    StatType.HEAVY_ATTACK_DMG_AMPLIFICATION,
    StatType.RESONANCE_LIBERATION_DMG_AMPLIFICATION,
    StatType.RESONANCE_SKILL_DMG_AMPLIFICATION,
    StatType.AERO_DMG_BONUS,
    StatType.ELECTRO_DMG_BONUS,
    StatType.FUSION_DMG_BONUS,
    StatType.GLACIO_DMG_BONUS,
    StatType.HAVOC_DMG_BONUS,
    StatType.SPECTRO_DMG_BONUS,
  ]

  return data.sort((a, b) => {
    const aIndex = statOrder.indexOf(a.statType)
    const bIndex = statOrder.indexOf(b.statType)

    if (aIndex === -1 && bIndex === -1) {
      return b.procCount - a.procCount
    }
    if (aIndex === -1)
      return 1
    if (bIndex === -1)
      return -1

    return aIndex - bIndex
  })
})

function getBarColor(stat: StatData): string {
  if (stat.weight === 0)
    return '#6B7280'

  const weight = Math.floor(stat.weight * 10) / 10

  const weightColorMap: Record<number, string> = {
    1.0: '#F59E0B',
    0.9: '#F97316',
    0.8: '#EF4444',
    0.7: '#A855F7',
    0.6: '#6366F1',
    0.5: '#3B82F6',
    0.4: '#06B6D4',
    0.3: '#14B8A6',
    0.2: '#22C55E',
    0.1: '#84CC16',
    0.0: '#9CA3AF',
  }

  return weightColorMap[weight] || weightColorMap[0.0] || '#9CA3AF'
}

onMounted(() => {
  nextTick(() => {
    if (chartRef.value && statsData.value.length > 0) {
      createChart()
    }
  })
})

watch(statsData, () => {
  nextTick(() => {
    if (chartRef.value && statsData.value.length > 0) {
      createChart()
    }
  })
}, { deep: true })

function createChart() {
  if (!chartRef.value || statsData.value.length === 0)
    return

  const data = statsData.value
  const width = 420
  const height = 420
  const radius = Math.min(width, height) / 2 - 90

  d3.select(chartRef.value).selectAll('*').remove()

  const svg = d3.select(chartRef.value)
    .append('svg')
    .attr('width', width)
    .attr('height', height)

  const g = svg.append('g')
    .attr('transform', `translate(${width / 2}, ${height / 2})`)

  const angleSlice = (Math.PI * 2) / data.length

  const rScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.procCount) || 0])
    .range([0, radius])

  const radarLine = d3.lineRadial<StatData>()
    .radius(d => rScale(d.procCount))
    .angle((_, i) => i * angleSlice)
    .curve(d3.curveLinearClosed)

  const radarArea = d3.areaRadial<StatData>()
    .radius(d => rScale(d.procCount))
    .angle((_, i) => i * angleSlice)
    .curve(d3.curveLinearClosed)

  g.selectAll('.grid-circle')
    .data(d3.range(1, 6))
    .enter()
    .append('circle')
    .attr('class', 'grid-circle')
    .attr('r', d => (radius / 5) * d)
    .attr('fill', 'none')
    .attr('stroke', '#374151')
    .attr('stroke-width', 0.5)
    .attr('opacity', 0.3)

  g.selectAll('.grid-line')
    .data(data)
    .enter()
    .append('line')
    .attr('class', 'grid-line')
    .attr('x1', 0)
    .attr('y1', 0)
    .attr('x2', (_, i) => Math.cos(i * angleSlice - Math.PI / 2) * radius)
    .attr('y2', (_, i) => Math.sin(i * angleSlice - Math.PI / 2) * radius)
    .attr('stroke', '#374151')
    .attr('stroke-width', 0.5)
    .attr('opacity', 0.3)

  g.append('path')
    .datum(data)
    .attr('class', 'radar-area')
    .attr('d', radarArea)
    .attr('fill', 'url(#radar-gradient)')
    .attr('opacity', 0.3)
    .attr('stroke', 'none')

  g.append('path')
    .datum(data)
    .attr('class', 'radar-line')
    .attr('d', radarLine)
    .attr('fill', 'none')
    .attr('stroke', '#6B7280')
    .attr('stroke-width', 1.5)

  const defs = svg.append('defs')
  const gradient = defs.append('linearGradient')
    .attr('id', 'radar-gradient')
    .attr('gradientUnits', 'userSpaceOnUse')
    .attr('x1', '0%')
    .attr('y1', '0%')
    .attr('x2', '0%')
    .attr('y2', '100%')

  gradient.append('stop')
    .attr('offset', '0%')
    .attr('stop-color', '#F59E0B')
    .attr('stop-opacity', 0.6)

  gradient.append('stop')
    .attr('offset', '100%')
    .attr('stop-color', '#F59E0B')
    .attr('stop-opacity', 0.1)

  g.selectAll('.axis-label')
    .data(data)
    .enter()
    .append('text')
    .attr('class', 'axis-label')
    .attr('x', (_, i) => Math.cos(i * angleSlice - Math.PI / 2) * (radius + 35))
    .attr('y', (_, i) => Math.sin(i * angleSlice - Math.PI / 2) * (radius + 35))
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'middle')
    .attr('fill', '#D1D5DB')
    .attr('font-size', '8px')
    .attr('font-weight', '500')
    .text(d => d.statName)

  g.selectAll('.value-label')
    .data(data)
    .enter()
    .append('text')
    .attr('class', 'value-label')
    .attr('x', (d, i) => Math.cos(i * angleSlice - Math.PI / 2) * (rScale(d.procCount) + 8))
    .attr('y', (d, i) => Math.sin(i * angleSlice - Math.PI / 2) * (rScale(d.procCount) + 8))
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'middle')
    .attr('fill', '#9CA3AF')
    .attr('font-size', '7px')
    .attr('font-weight', '600')
    .text(d => d.procCount.toString())

  g.selectAll('.data-point')
    .data(data)
    .enter()
    .append('circle')
    .attr('class', 'data-point')
    .attr('cx', (d, i) => Math.cos(i * angleSlice - Math.PI / 2) * rScale(d.procCount))
    .attr('cy', (d, i) => Math.sin(i * angleSlice - Math.PI / 2) * rScale(d.procCount))
    .attr('r', 3)
    .attr('fill', d => getBarColor(d))
    .attr('stroke', '#1F2937')
    .attr('stroke-width', 1)
}
</script>

<template>
  <UCard
    class="h-full w-full"
    :ui="{
      root: 'rounded-none rounded-br-xl border-0',
    }"
  >
    <template #default>
      <BorderLines />
      <div class="p-2 h-full">
        <div v-if="!CurrentCharacter" class="text-gray-400 text-center py-8">
          No character selected
        </div>

        <div v-else-if="statsData.length === 0" class="text-gray-400 text-center py-8">
          No echoes equipped
        </div>

        <div v-else class="space-y-3">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-1 h-4 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full" />
            <h3 class="text-sm font-medium text-gray-300 tracking-wide uppercase">
              Stats Distribution
            </h3>
          </div>

          <div class="flex justify-center">
            <div ref="chartRef" class="w-[420px] h-[420px]" />
          </div>
        </div>
      </div>
    </template>
  </UCard>
</template>
