<script setup>
import { laravel } from '../manifest.json'

useHead({
  title: laravel[0],
  meta: [
    { name: 'theme-color', content: '#d3403e' },
    { name: 'twitter:domain', content: 'artisan.eplus.dev' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'artisan.eplus.dev',
        alternateName: 'The Laravel Artisan Cheatsheet',
        url: 'https://artisan.eplus.dev',
        inLanguage: 'en',
        description: "A searchable, bookmarkable cheatsheet for Laravel's Artisan commands maintained by hoangsvit.",
        publisher: {
          '@type': 'Organization',
          name: 'ePlus.DEV',
          url: 'https://eplus.dev',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://artisan.eplus.dev/?search={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      }),
    },
  ],
})

useSeoMeta({
  description: "The Laravel Artisan cheatsheet maintained by hoangsvit. Discover Laravel's php artisan commands.",
  ogDescription: "The Laravel Artisan cheatsheet maintained by hoangsvit. Discover Laravel's php artisan commands.",
  ogImage: 'https://artisan.eplus.dev/og.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogTitle: 'The Laravel Artisan Cheatsheet',
  ogType: 'website',
  ogSiteName: 'artisan.eplus.dev',
  ogUrl: 'https://artisan.eplus.dev',
  ogLocale: 'en_US',

  twitterCreator: '@hoangsvit',
  twitterDescription: "The Laravel Artisan cheatsheet maintained by hoangsvit. Discover Laravel's php artisan commands.",
  twitterSite: '@hoangsvit',
  twitterImage: 'https://artisan.eplus.dev/og.png',
  twitterTitle: 'The Laravel Artisan Cheatsheet',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>
