import { BaseCharacters } from "./app/Core/Characters"
import { ReleaseState } from "./app/Core/Enums/ReleaseState"
import { AppDescription } from "./app/Core/Versions"

export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "@vueuse/motion/nuxt",
    "@pinia/nuxt",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/fonts",
    "@nuxtjs/i18n",
    "@nuxthub/core",
    "nuxt-gtag",
    "@nuxtjs/seo",
  ],

  plugins: [
    { src: "~/plugins/pixi-plugin.ts", mode: "client" },
    { src: "~/plugins/vue-draggable-plugin.ts", mode: "client" },
  ],

  ssr: true,

  components: [
    "~/components",
    "~/components/Base",
    "~/components/Stats",

    // Characters
    "~/components/Characters",
    "~/components/Characters/Cards",
    "~/components/Characters/Tabs",
    "~/components/Characters/MCharacterCard",

    // Echoes
    "~/components/Echoes",
    "~/components/Echoes/MEchoCard",
    "~/components/Echoes/MEchoForm",

    "~/components/Filters",
    "~/components/Importer",
    "~/components/Navigation",
    "~/components/Settings",
    "~/components/Skills",

    // Weapons
    "~/components/Weapons",
    "~/components/Weapons/MWeaponCard",
    "~/components/Weapons/Forms",
    "~/components/Events",

    // Sonatas
    "~/components/Sonatas",
  ],

  devtools: {
    enabled: true,
  },
  app: {
    head: {
      viewport: "width=device-width,initial-scale=1",
      link: [
        { rel: "icon", href: "/favicon.ico", sizes: "any" },
        { rel: "icon", type: "image/svg+xml", href: "/nuxt.svg" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: AppDescription },
        { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
        { property: "og:url", content: "https://wuwa-optimizer.com" },
        { property: "twitter:url", content: "https://wuwa-optimizer.com" },
        { name: "canonical", content: "https://wuwa-optimizer.com" },
      ],
    },
    pageTransition: {
      name: "bounce",
    },
  },

  css: [
    "~/assets/css/main.css",
  ],

  site: {
    url: "https://wuwa-optimizer.com",
    name: "Wuthering Waves Optimizer",
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    renderJsonPayloads: true,
    typedPages: true,
  },

  compatibilityDate: "2025-07-10",

  nitro: {
    esbuild: {
      options: {
        target: "esnext",
      },
    },
    prerender: {
      crawlLinks: true,
      routes: ["/", "/sitemap.xml"],
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
      styles: ["normal", "italic"],
    },
    families: [
      {
        name: "Flow Circular",
        provider: "google",
      },
      {
        name: "Quicksand",
        provider: "google",
      },
    ],
  },

  gtag: {
    enabled: import.meta.env.NUXT_SITE_ENV === "production",
    id: "G-Z51E9PE81V",
    config: {
      page_title: "Wuthering Waves Optimizer",
      page_location: "https://wuwa-optimizer.com",
    },
    initCommands: [
      // Setup up consent mode
      ["consent", "default", {
        ad_user_data: "denied",
        ad_personalization: "denied",
        ad_storage: "denied",
        analytics_storage: "granted",
        wait_for_update: 500,
      }],
    ],
  },

  i18n: {
    strategy: "no_prefix",
    locales: [
      { code: "en", language: "en-US", file: "en-US.ts" },
      { code: "fr", language: "fr-FR", file: "fr-FR.ts" },
      { code: "jp", language: "ja-JP", file: "ja-JP.ts" },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: "en",
      cookieKey: "wuwa-optimizer-locale",
    },
    defaultLocale: "en",
  },
  ogImage: {
    enabled: true,
  },
  robots: {
    blockAiBots: true,
    blockNonSeoBots: true,
  },
  schemaOrg: {
    enabled: false,
  },
  sitemap: {
    enabled: true,
    urls: () => {
      return BaseCharacters
        .filter(c => c !== undefined && c.Id < 9000 && c.ReleaseState !== ReleaseState.UNKNOWN)
        .map(c => `/characters/${c.Id}`)
    },
  },
})
