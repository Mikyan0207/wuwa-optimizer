export function useMetaTags() {
  function SetEmbedMetaTags(title: string, description: string, imagePath: string = '/images/wuwa-optimizer-showcase-00.webp') {
    const config = useRuntimeConfig()
    const baseUrl = (config.public.siteUrl as string) || 'https://wuwa-optimizer.nuxt.dev'

    useHead({
      title,
      meta: [
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: baseUrl,
        },
        {
          property: 'og:image',
          content: `${baseUrl}${imagePath}`,
        },
        {
          property: 'og:image:width',
          content: '1200',
        },
        {
          property: 'og:image:height',
          content: '630',
        },
        {
          property: 'og:image:alt',
          content: `${title} - Wuthering Waves Optimizer`,
        },
        {
          property: 'og:site_name',
          content: 'Wuthering Waves Optimizer',
        },
        {
          property: 'og:locale',
          content: 'en_US',
        },
        // Twitter Card
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
        {
          name: 'twitter:image',
          content: `${baseUrl}${imagePath}`,
        },
        {
          name: 'twitter:image:alt',
          content: `${title} - Wuthering Waves Optimizer`,
        },
        // Discord specific
        {
          name: 'theme-color',
          content: '#a1975e',
        },
        {
          name: 'color-scheme',
          content: 'dark',
        },
      ],
    })
  }

  return {
    SetEmbedMetaTags,
  }
}
