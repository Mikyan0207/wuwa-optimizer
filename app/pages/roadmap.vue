<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'
import type RoadmapItem from '~/Core/Interfaces/RoadmapItem'
import { RoadmapItems } from '~/Core/Roadmap'
import { Capitalize, CapitalizeWords } from '~/Core/Utils/StringUtils'

definePageMeta({
  layout: 'default',
})

useHead({
  title: 'Roadmap - Wuthering Waves Optimizer',
  meta: [
    {
      name: 'description',
      content: 'Explore the future of Wuthering Waves Optimizer. See what features are planned, in progress, and completed.',
    },
  ],
})

const timelineItems = computed<TimelineItem[]>(() => {
  return RoadmapItems.map(item => ({
    date: item.estimatedDate ? FormatDate(item.estimatedDate) : undefined,
    title: item.title,
    description: `${item.description}`,
    icon: GetStatusIcon(item.status),
    value: item.progress !== undefined ? `${item.progress}%` : undefined,
    priority: item.priority,
    category: item.category,
    status: item.status,
  }))
})

function GetStatusIcon(status: RoadmapItem['status']) {
  switch (status) {
    case 'completed':
      return 'i-lucide-circle-check'
    case 'in-progress':
      return 'i-lucide-circle-dot-dashed'
    case 'planned':
      return 'i-lucide-clock'
    case 'maybe':
      return 'i-lucide-help-circle'
    case 'cancelled':
      return 'i-lucide-x-circle'
    default:
      return 'i-lucide-circle'
  }
}

function FormatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

function GetStatusTooltip(status: RoadmapItem['status']): string {
  switch (status) {
    case 'completed':
      return 'This feature or improvement has been fully implemented and is ready for use.'
    case 'in-progress':
      return 'This feature or improvement is currently being worked on and will be released soon.'
    case 'planned':
      return 'This feature or improvement is in the planning phase and will be implemented in the future.'
    case 'maybe':
      return 'This feature or improvement is uncertain and may or may not be implemented.'
    case 'cancelled':
      return 'This feature or improvement has been cancelled and will not be implemented.'
    default:
      return ''
  }
}

function GetCategoryTooltip(category: RoadmapItem['category']): string {
  switch (category) {
    case 'feature':
      return 'A new functionality or capability being added to the application.'
    case 'improvement':
      return 'An enhancement or optimization to existing functionality.'
    case 'bugfix':
      return 'A fix for an existing issue or bug in the application.'
    case 'ui/ux':
      return 'A change related to user interface or user experience design.'
    default:
      return ''
  }
}

function GetPriorityTooltip(priority: RoadmapItem['priority']): string {
  switch (priority) {
    case 'critical':
      return 'Highest priority - essential for the application to function properly.'
    case 'high':
      return 'High priority - important for user experience and core functionality.'
    case 'medium':
      return 'Medium priority - valuable addition but not urgent.'
    case 'low':
      return 'Low priority - nice to have but not essential.'
    default:
      return ''
  }
}
</script>

<template>
  <div class="flex flex-col mx-auto gap-8 mb-12 px-8 x:px-0 xl:container">
    <!-- Header -->
    <div class="text-center space-y-4">
      <div class="flex items-center justify-center gap-3 mb-6">
        <div class="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30 shadow-lg">
          <UIcon name="solar:map-broken" class="w-8 h-8 text-blue-400" />
        </div>
      </div>
      <div class="space-y-2">
        <h1 class="text-4xl font-bold text-gray-100">
          Roadmap
        </h1>
        <p class="text-lg text-gray-400 max-w-2xl mx-auto">
          Explore the future of Wuthering Waves Optimizer and discover what's coming next
        </p>
      </div>
    </div>

    <!-- Timeline Card -->
    <div class="max-w-4xl mx-auto w-full">
      <UCard
        :ui="{
          root: 'rounded-2xl border-0 bg-neutral-900/50 backdrop-blur-sm',
          body: 'p-8',
        }"
      >
        <UTimeline
          :items="timelineItems"
          color="primary"
          orientation="vertical"
          class="w-full"
        >
          <template #title="{ item }">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-base font-semibold text-gray-100">{{ item.title }}</span>
              <div class="flex gap-2 flex-wrap">
                <UBadge
                  class="rounded-full"
                  variant="soft"
                  size="sm"
                  :color="item.category === 'feature' ? 'primary' : item.category === 'improvement' ? 'warning' : item.category === 'bugfix' ? 'error' : 'neutral'"
                >
                  <UTooltip :text="GetCategoryTooltip(item.category)">
                    <span>{{ Capitalize(item.category) }}</span>
                  </UTooltip>
                </UBadge>
                <UBadge
                  class="rounded-full"
                  variant="soft"
                  size="sm"
                  :color="item.status === 'completed' ? 'success' : item.status === 'in-progress' ? 'info' : item.status === 'planned' ? 'warning' : item.status === 'maybe' ? 'secondary' : 'error'"
                >
                  <UTooltip :text="GetStatusTooltip(item.status)">
                    <span>{{ CapitalizeWords(item.status, '-') }}</span>
                  </UTooltip>
                </UBadge>
                <UBadge
                  class="rounded-full"
                  variant="soft"
                  size="sm"
                  :color="item.priority === 'critical' ? 'error' : item.priority === 'high' ? 'warning' : item.priority === 'medium' ? 'info' : 'success'"
                >
                  <UTooltip :text="GetPriorityTooltip(item.priority)">
                    <span>{{ Capitalize(item.priority) }}</span>
                  </UTooltip>
                </UBadge>
              </div>
            </div>
          </template>
        </UTimeline>
      </UCard>
    </div>
  </div>
</template>
