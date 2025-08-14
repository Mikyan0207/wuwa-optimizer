import type { Rarity } from '~/Core/Enums/Rarity'
import { GetBackgroundColor, GetHighlightColor, GetSecondaryColor } from '~/Core/Utils/ColorUtils'

export function useRarityEffects(Rarity: Rarity) {
  const Background = computed(() => GetBackgroundColor(Rarity))
  const Secondary = computed(() => GetSecondaryColor(Rarity))
  const Highlight = computed(() => GetHighlightColor(Rarity))

  const Classes = {
    Glow: computed(() => `bg-gradient-to-b ${Background.value}`),
    Border: computed(() => `border-2 ${Highlight.value}`),
    Background: computed(() => Background.value),
    Secondary: computed(() => Secondary.value),
    Highlight: computed(() => Highlight.value),
  }

  const Effects = {
    Blur: computed(() => `blur-lg ${Background.value}`),
    Shadow: computed(() => `shadow-lg ${Highlight.value}`),
    Glow: computed(() => `drop-shadow-lg ${Background.value}`),
  }

  return {
    Background,
    Secondary,
    Highlight,
    Classes,
    Effects,
  }
}
