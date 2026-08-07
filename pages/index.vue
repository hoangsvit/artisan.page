<script setup>
import { laravel } from '~/manifest.json'
const route = useRoute()

useHead({
  link: [
    {
      rel: 'canonical',
      href: `https://artisan.eplus.dev${route.path}`,
    },
  ],
})

useSeoMeta({
  title: laravel[0],
  titleTemplate: 'Laravel v%s - The Laravel Artisan Cheatsheet',

  description: `The Laravel ${laravel[0]} Artisan cheatsheet maintained by hoangsvit. Discover Laravel ${laravel[0]} php artisan commands.`,
  ogTitle: `Laravel ${laravel[0]} Artisan Cheatsheet - artisan.eplus.dev`,
  ogDescription: `The Laravel ${laravel[0]} Artisan cheatsheet maintained by hoangsvit. Discover Laravel ${laravel[0]} php artisan commands.`,
  ogUrl: 'https://artisan.eplus.dev',
  twitterTitle: `Laravel ${laravel[0]} Artisan Cheatsheet - artisan.eplus.dev`,
  twitterDescription: `The Laravel ${laravel[0]} Artisan cheatsheet maintained by hoangsvit. Discover Laravel ${laravel[0]} php artisan commands.`,
})
</script>

<template>
  <ArtisanBrowser />
</template>
