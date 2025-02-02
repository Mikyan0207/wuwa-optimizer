import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Nunito',
        serif: 'Lato',
        mono: 'DM Mono',
      },
      processors: createLocalFontProcessor(),
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  shortcuts: {
    'max-w-8xl': 'max-w-85rem',
    'max-w-9xl': 'max-w-90rem',
    'max-w-10xl': 'max-w-95rem',
  },
  safelist: [
    'text-orange-4',
    'bg-gradient-to-r',
    'bg-clip-text',
    'text-transparent',
    'from-yellow-400',
    'via-pink-500',
    'to-purple-500',
  ],
  theme: {
    // colors: extendCatppuccin(),
    breakpoints: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
      '5xl': '3840px',
    },
  },
})
