<template>
  <div class="items-center justify-center gap-x-2 sm:gap-x-4 md:gap-x-8 hidden sm:flex">
    <a
      href="https://cachethq.io/?ref=artisan.page"
      title="Cachet — The Open-Source Status Page System"
      @click="sponsorClick"
      target="_blank"
      class="font-bold text-artisan hover:text-artisan-light"
    >
      <NuxtImg src="sponsors/cachet.svg" class="h-8 dark:hidden" alt="Cachet" />
      <NuxtImg
        src="sponsors/cachet-dark.svg"
        class="h-8 hidden dark:block"
        alt="Cachet"
      />
    </a>
    <a
      href="https://checkmango.com/?ref=artisan.page"
      title="Checkmango — The Full-Stack A/B Testing Platform"
      @click="sponsorClick"
      target="_blank"
      class="font-bold text-artisan hover:text-artisan-light"
    >
      <NuxtImg src="sponsors/checkmango.svg" class="h-8 dark:hidden" alt="Checkmango" />
      <NuxtImg
        src="sponsors/checkmango-dark.svg"
        class="h-8 hidden dark:block"
        alt="Checkmango"
      />
    </a>
  </div>
</template>

<script>
export default {};
</script>
