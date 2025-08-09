import type RoadmapItem from './Interfaces/RoadmapItem'

function CreateDateInUserTimezone(dateString: string): Date {
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: userTimezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })

  const tempDate = new Date(dateString)
  const dateStringInTimezone = formatter.format(tempDate)
  return new Date(dateStringInTimezone)
}

export const RoadmapItems: RoadmapItem[] = [
  {
    id: 'alpha-beta',
    title: 'Alpha/Beta Release',
    description: 'Initial development phase with core features including character management, echo system, weapon management, and basic import functionality. This phase established the foundation for the Wuthering Waves Optimizer.',
    status: 'completed',
    priority: 'critical',
    category: 'feature',
    completedDate: CreateDateInUserTimezone('2025-01-01'),
    progress: 100,
  },
  {
    id: 'stabilization-v1',
    title: 'Stabilization (v1.0)',
    description: 'Major update to improve overall site performance, stability, and user experience. This includes faster loading times, better error handling, and a more polished interface. The site will feel more responsive and reliable.',
    status: 'in-progress',
    priority: 'critical',
    category: 'improvement',
    estimatedDate: CreateDateInUserTimezone('2025-08-30'),
    progress: 50,
  },
  {
    id: 'builds-echoes-optimizer',
    title: 'Builds/Echoes Optimizer',
    description: 'Automatically find the best echo combinations for your characters. Simply select a character and weapon, and the system will analyze your entire echo collection to suggest the most powerful build possible.',
    status: 'planned',
    priority: 'medium',
    category: 'feature',
    progress: 0,
  },
  {
    id: 'community-update',
    title: 'Community Update',
    description: 'Add community features like leaderboards, build sharing, user profiles, and social interactions. Share your best builds with the community and discover top-performing configurations from other players.',
    status: 'maybe',
    priority: 'low',
    category: 'feature',
    progress: 0,
  },
  {
    id: 'damage-calculator',
    title: 'Damage Calculator',
    description: 'Calculate exact damage numbers for your builds in different team compositions and combat scenarios. Get detailed performance metrics and combat scores to help you optimize your characters for specific content.',
    status: 'maybe',
    priority: 'low',
    category: 'feature',
    progress: 0,
  },
]

export function GetRoadmapItemsByStatus(status: RoadmapItem['status']): RoadmapItem[] {
  return RoadmapItems.filter(item => item.status === status)
}

export function GetRoadmapItemsByCategory(category: RoadmapItem['category']): RoadmapItem[] {
  return RoadmapItems.filter(item => item.category === category)
}

export function GetRoadmapItemsByPriority(priority: RoadmapItem['priority']): RoadmapItem[] {
  return RoadmapItems.filter(item => item.priority === priority)
}
