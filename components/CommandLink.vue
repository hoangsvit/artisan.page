<template>
  <a
    class="ml-5 text-gray-600 dark:text-gray-400 dark:hover:text-artisan-light hover:text-artisan-light hover:underline block mb-1"
    :href="`#${slug}`"
    :title="command.description"
    v-bind="$attrs"
  >
    {{ command.name }}
  </a>
</template>

<script>
import { scrollToAnchor} from 'usemods'

export default {
  props: ['command'],
  computed: {
    slug() {
      return this.command.name.replace(':', '')
    },
  },
  methods: {
  },
}
</script>
