import type Character from '~/Core/Interfaces/Character'
import { TemplateCharacters } from '~/Core/Characters'

export interface TeamPreset {
  id: string
  name: string
  description: string
  characterIds: number[]
  tier: 'S' | 'A' | 'B' | 'C'
  category: 'Best' | 'F2P' | 'Easy' | 'Alternative'
}

export function GetPresetCharacters(preset: TeamPreset): Character[] {
  return TemplateCharacters.filter(char => preset.characterIds.includes(char.Id))
}

export const TeamPresets: TeamPreset[] = [
  {
    id: 'lupa-mono-fusion',
    name: 'Lupa Mono Fusion',
    description: '',
    characterIds: [1207, 1205, 1206],
    tier: 'S',
    category: 'Best',
  },
  {
    id: 'phrolova-mono-havoc',
    name: 'Phrolova Mono Havoc',
    description: '',
    characterIds: [1608, 1607, 1606],
    tier: 'S',
    category: 'Best',
  },
  {
    id: 'phrolova-phoebe-duo',
    name: 'Phrolova ・ Phoebe Dual DPS',
    description: '',
    characterIds: [1608, 1502, 1506],
    tier: 'A',
    category: 'Alternative',
  },
]

export function GetPresetsByCategory(category: TeamPreset['category']): TeamPreset[] {
  return TeamPresets.filter(preset => preset.category === category)
}

export function GetPresetsByTier(tier: TeamPreset['tier']): TeamPreset[] {
  return TeamPresets.filter(preset => preset.tier === tier)
}
