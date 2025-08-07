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
    'nuxt-gtag',
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
    '~/components/Importer/Cards',
    '~/components/Interface',
    '~/components/Navigation',
    '~/components/Skills',
    '~/components/Weapons',
    '~/components/Weapons/Forms',
    '~/components/Events',
  ],

  devtools: {
    enabled: false,
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

  runtimeConfig: {
    public: {
      siteUrl: 'https://wuwa-optimizer.com',
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
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
      crawlLinks: true,
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
    defaults: {
      weights: [400],
      styles: ['normal', 'italic'],
    },
    families: [
      {
        name: 'Flow Circular',
        provider: 'google',
      },
      {
        name: 'Quicksand',
        provider: 'google',
      },
    ],
  },

  gtag: {
    // eslint-disable-next-line node/prefer-global/process
    enabled: process.env.NODE_ENV === 'production',
    config: {
      page_title: 'Wuthering Waves Optimizer',
      page_location: 'https://wuwa-optimizer.com',
    },
  },

  i18n: {
    strategy: 'no_prefix',
    locales: [
      { code: 'en', language: 'en-US', file: 'en-US.ts' },
      { code: 'fr', language: 'fr-FR', file: 'fr-FR.ts' },
      { code: 'jp', language: 'ja-JP', file: 'ja-JP.ts' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: 'en',
      cookieKey: 'wuwa-optimizer-locale',
    },
    defaultLocale: 'en',
  },
})
