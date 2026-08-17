<template>
  <div
    class="md:flex md:items-center md:justify-between md:space-x-5 bg-gray-100 dark:bg-gray-900 py-4 px-12 dark:text-gray-400"
  >
    <div class="flex flex-col items-center justify-center w-full">
      <NuxtLink href="/" class="inline-flex items-center gap-3 text-gray-950 dark:text-gray-100">
        <LogoIcon id="desktop-brand-logo" class="h-12 w-auto" />
        <span class="font-sans text-2xl font-semibold tracking-tight">artisan.eplus.dev</span>
      </NuxtLink>
      <div>
        <h2 class="tracking-tight font-medium hidden md:block mt-2">
          A searchable, bookmarkable cheatsheet for
          <a
            href="https://laravel.com"
            class="text-artisan hover:text-artisan-light"
            >Laravel's</a
          >
          Artisan commands, maintained by hoangsvit.
        </h2>
      </div>
    </div>
  </div>
</template>
