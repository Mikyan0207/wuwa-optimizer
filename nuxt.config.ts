import { AppDescription } from './app/Core'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxtjs/i18n',
    '@nuxthub/core',
  ],

  ssr: false,

  components: [
    '~/components',
    '~/components/Characters',
    '~/components/Characters/Tabs',
    '~/components/Characters/Cards',
    '~/components/Echoes',
    '~/components/Echoes/Forms',
    '~/components/Filters',
    '~/components/Importer',
    '~/components/Interface',
    '~/components/Navigation',
    '~/components/Rotations',
    '~/components/Rotations/Builder',
    '~/components/Rotations/Lister',
    '~/components/Rotations/Cards',
    '~/components/Skills',
    '~/components/Weapons',
    '~/components/Weapons/Forms',
  ],

  devtools: {
    enabled: true,
  },
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: AppDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
    pageTransition: {
      name: 'bounce',
    },
  },

  css: [
    '~/assets/css/main.css',
  ],
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classPrefix: '',
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  compatibilityDate: '2025-01-15',

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
    },
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  fonts: {
    families: [
      { name: 'Noto Sans', provider: 'google' },
    ],
    defaults: {
      weights: [400],
      styles: ['normal', 'italic'],
    },
  },

  i18n: {
    strategy: 'no_prefix',
    locales: [
      { code: 'en', language: 'en-US', file: 'en-US.ts' },
      { code: 'fr', language: 'fr-FR', file: 'fr-FR.ts' },
      { code: 'jp', language: 'ja-JP', file: 'ja-JP.ts' },
    ],
    lazy: false,
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: 'en',
      cookieKey: 'wuwa-optimizer-locale',
    },
    defaultLocale: 'en',
  },
})
