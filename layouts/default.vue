<script setup>
import { laravel } from '../manifest.json'

useHead({
  title: laravel[0],
})

defineRobotMeta()

useSeoMeta({
  title: 'The Laravel Artisan Cheatsheet',
  description: "A bookmarkable, searchable cheatsheet for Laravel's PHP Artisan commands.",
  ogDescription: () =>
    `A bookmarkable, searchable cheatsheet for Laravel's PHP Artisan commands.`,
  ogImage: 'https://artisan.eplus.dev/og.png',
  ogTitle: 'Laravel Artisan Cheatsheet',
  ogType: 'website',

  twitterCreator: '@david_nguyen94',
  twitterDescription: () =>
    `A bookmarkable, searchable cheatsheet for Laravel's PHP Artisan commands.`,
  twitterSite: '@david_nguyen94',
  twitterImage: 'https://artisan.eplus.dev/og.png',
  twitterTitle: 'Laravel Artisan Cheatsheet',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <RobotMeta />

    <slot />
  </div>
</template>
