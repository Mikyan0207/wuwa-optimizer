<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const { SetEmbedMetaTags } = useMetaTags()

SetEmbedMetaTags(
  'Roadmap - Wuthering Waves Optimizer',
  'Découvrez les futures fonctionnalités du Wuthering Waves Optimizer. Calculateur de dégâts, système de comptes, leaderboards et plus encore.',
)

const roadmapItems = [
  {
    version: 'v0.1',
    status: 'alpha',
    title: 'Alpha Release',
    description: 'Initial prototype with basic character management',
    features: [
      'Basic character data structure',
      'Simple stat calculations',
      'Character list display',
    ],
    color: 'neutral' as const,
    icon: 'solar:test-tube-bold-duotone',
    fullWidth: false,
  },
  {
    version: 'v0.2',
    status: 'alpha',
    title: 'Weapon System',
    description: 'Added weapon management and character-weapon relationships',
    features: [
      'Weapon data structure',
      'Character-weapon pairing',
      'Basic weapon stats display',
      'Weapon type filtering',
    ],
    color: 'neutral' as const,
    icon: 'solar:shield-bold-duotone',
    fullWidth: false,
  },
  {
    version: 'v0.3',
    status: 'alpha',
    title: 'Adding Echoes',
    description: 'Initial echo system implementation',
    features: [
      'Echo data structure',
      'Basic echo display',
      'Echo-character relationships',
      'Sonata system foundation',
    ],
    color: 'neutral' as const,
    icon: 'solar:database-bold-duotone',
    fullWidth: false,
  },
  {
    version: 'v0.4',
    status: 'beta-early',
    title: 'Scoring System',
    description: 'Implemented basic scoring and optimization algorithms',
    features: [
      'Echo scoring algorithm',
      'Character stat calculations',
      'Basic optimization logic',
      'Score display system',
    ],
    color: 'neutral' as const,
    icon: 'solar:chart-2-bold-duotone',
    fullWidth: false,
  },
  {
    version: 'v0.5',
    status: 'beta-early',
    title: 'Import System',
    description: 'Enhanced character system with import capabilities',
    features: [
      'Character import functionality',
      'Echo import system',
      'Data validation',
      'Import error handling',
    ],
    color: 'neutral' as const,
    icon: 'solar:import-bold-duotone',
    fullWidth: false,
  },
  {
    version: 'v0.6',
    status: 'beta',
    title: 'Build Management',
    description: 'Complete build system with save functionality',
    features: [
      'Build creation and editing',
      'Build saving system',
    ],
    color: 'neutral' as const,
    icon: 'solar:folder-with-files-bold-duotone',
    fullWidth: false,
  },
  {
    version: 'v0.7',
    status: 'beta',
    title: 'UI/UX Overhaul',
    description: 'Major interface improvements and user experience enhancements',
    features: [
      'Modern UI design',
      'Responsive layout',
      'Improved navigation',
    ],
    color: 'neutral' as const,
    icon: 'solar:palette-bold-duotone',
    fullWidth: false,
  },
  {
    version: 'v0.8',
    status: 'beta-late',
    title: 'Final Polish',
    description: 'Bug fixes, performance optimization, and final refinements',
    features: [
      'Comprehensive bug fixes',
      'Performance optimization',
      'Code refactoring',
      'Final UI polish',
    ],
    color: 'neutral' as const,
    icon: 'solar:settings-bold-duotone',
    fullWidth: false,
  },
  {
    version: 'v1.0',
    status: 'current',
    title: 'Official Release',
    description: 'The site works more or less, basic features operational',
    features: [
      'Automatic character import',
      'Stats and scores calculation',
      'Build management',
      'Basic interface',
      'Character builds system',
    ],
    color: 'primary' as const,
    icon: 'solar:pin-bold-duotone',
    fullWidth: true,
  },
  {
    version: 'v1.1',
    status: 'stabilization',
    title: 'Stabilization & Refactoring',
    description: 'Site stabilization and internal refactoring to facilitate future development',
    features: [
      'Complete architecture refactoring',
      'Performance optimization',
      'Bug fixes',
      'UI/UX improvements',
      'Smart caching system',
    ],
    color: 'warning' as const,
    icon: 'solar:settings-bold-duotone',
    fullWidth: false,
  },
  {
    version: 'v2.0',
    status: 'damage-calculator',
    title: 'Damage Calculator',
    description: 'Damage calculator for a character with a given team based on optimal rotation',
    features: [
      'Real-time damage calculation',
      'Optimized combat rotations',
      'Complete team simulation',
      'New scoring system',
      'Advanced build comparison',
    ],
    color: 'warning' as const,
    icon: 'solar:calculator-bold-duotone',
    fullWidth: false,
  },
  {
    version: 'v3.0',
    status: 'accounts',
    title: 'Account System',
    description: 'Optional account system with build sharing and leaderboards',
    features: [
      'User account creation',
      'Public build sharing',
      'Community leaderboards',
      'Cloud data backup',
      'Likes and comments system',
    ],
    color: 'warning' as const,
    icon: 'solar:user-circle-bold-duotone',
    fullWidth: false,
  },
]

onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      const currentElement = document.querySelector('[data-version="v1.0"]')
      if (currentElement) {
        currentElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        })
      }
    }, 500)
  })
})
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="w-full max-w-4xl px-8">
      <div class="space-y-8">
        <div
          v-for="(item, index) in roadmapItems"
          :key="item.version"
          v-motion-pop
          :data-version="item.version"
          :delay="200 + (index * 100)"
          class="col-span-6"
        >
          <div
            class="flex items-start gap-2 p-4 rounded-lg border"
            :class="item.fullWidth
              ? 'p-2 bg-neutral-800/50 border-primary-700/50'
              : 'bg-neutral-800/30 border-neutral-700/30'"
          >
            <div
              class="rounded-lg flex items-center justify-center flex-shrink-0"
              :class="item.fullWidth
                ? 'w-12 h-12 bg-primary/20'
                : 'w-10 h-10 bg-neutral-700/50'"
            >
              <UIcon
                :name="item.icon"
                :class="item.fullWidth
                  ? 'w-6 h-6 text-primary'
                  : 'w-5 h-5 text-gray-400'"
              />
            </div>

            <div class="flex-1">
              <div class="flex items-center gap-2 h-6">
                <UBadge :color="item.color" variant="soft" size="sm">
                  {{ item.version }}
                </UBadge>
                <h3
                  class="font-semibold text-gray-100 truncate"
                  :class="item.fullWidth ? 'text-lg' : 'text-base'"
                >
                  {{ item.title }}
                </h3>
              </div>

              <p
                class="text-gray-300 mb-3 line-clamp-2"
                :class="item.fullWidth ? 'text-sm' : 'text-xs'"
              >
                {{ item.description }}
              </p>

              <ul :class="item.fullWidth ? 'space-y-2' : 'space-y-1'">
                <li
                  v-for="feature in item.features.slice(0, item.fullWidth ? 6 : 3)"
                  :key="feature"
                  class="flex items-center gap-2 text-gray-400"
                  :class="item.fullWidth ? 'text-sm' : 'text-xs'"
                >
                  <UIcon
                    name="i-solar-check-circle-broken"
                    :class="item.fullWidth ? 'w-4 h-4' : 'w-3 h-3'"
                    class="text-green-400 flex-shrink-0"
                  />
                  <span class="line-clamp-1">{{ feature }}</span>
                </li>
                <li
                  v-if="!item.fullWidth && item.features.length > 3"
                  class="text-xs text-gray-500 italic"
                >
                  +{{ item.features.length - 3 }} more features...
                </li>
              </ul>
            </div>
          </div>
        </div>

        <USeparator class="w-full my-8" />

        <!-- Community Section -->
        <div>
          <div class="text-center p-6 mb-12 bg-neutral-800/30 rounded-lg border border-neutral-700/30">
            <h3 class="text-xl font-semibold text-gray-100 mb-4">
              Contribute to Development
            </h3>
            <p class="text-gray-300 mb-6 max-w-2xl mx-auto">
              Your feedback and suggestions are essential to shape the future of the optimizer.
              Don't hesitate to share your ideas and report bugs.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <UButton
                href="https://github.com/Mikyan0207/wuwa-optimizer/issues"
                target="_blank"
                color="primary"
                variant="subtle"
                leading-icon="mdi:github"
              >
                Report a Bug
              </UButton>
              <UButton
                href="https://github.com/Mikyan0207/wuwa-optimizer/discussions"
                target="_blank"
                color="secondary"
                variant="subtle"
                leading-icon="solar:chat-round-dots-bold-duotone"
              >
                Suggest a Feature
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
