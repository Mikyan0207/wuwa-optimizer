export default interface RoadmapItem {
  id: string
  title: string
  description: string
  status: 'planned' | 'in-progress' | 'completed' | 'cancelled' | 'maybe'
  priority: 'low' | 'medium' | 'high' | 'critical'
  category: 'feature' | 'improvement' | 'bugfix' | 'ui/ux'
  estimatedDate?: Date
  completedDate?: Date
  progress?: number
  dependencies?: string[]
}
