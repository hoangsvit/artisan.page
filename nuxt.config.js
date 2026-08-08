import { readFileSync } from 'node:fs'
import { laravel } from './manifest'

const prerenderRoutes = laravel.flatMap((version) => {
  const commands = JSON.parse(readFileSync(`./assets/${version}.json`, 'utf-8'))
  return [
    `/${version}`,
    `/og/${version}.png`,
    ...commands.flatMap(c => [
      `/${version}/${c.name.replace(':', '')}`,
      `/og/${version}/${c.name.replace(':', '')}.png`,
    ]),
  ]
})

export default defineNuxtConfig({
  ssr: true,

  routeRules: {
    '/': { prerender: true },
    '/**': { prerender: true },
    '/api/**': { prerender: false },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml', ...prerenderRoutes],
    },
  },

  site: {
    url: 'https://artisan.eplus.dev',
    indexable: true,
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: 'Laravel v%s - The Laravel Artisan Cheatsheet',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'https://artisan.eplus.dev/favicon.ico',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.bunny.net/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700;800&display=swap',
        },
      ],
    },
  },

  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ['~/assets/css/main.css'],

  plugins: [],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap',
    '@nuxtjs/web-vitals',
  ],

  axios: {},

  build: {},

  ignore: ['**/.claude/**'],

  watchers: {
    chokidar: {
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        '**/.nuxt/**',
        '**/.output/**',
        '**/.claude/**',
      ],
    },
  },

  vite: {
    server: {
      watch: {
        ignored: ['**/.claude/**'],
      },
    },
  },

  sitemap: {
    cacheMaxAgeSeconds: 86400,
    sources: [
      '/api/__sitemap__/urls'
    ]
  },

  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },

  compatibilityDate: '2024-10-16',
})
