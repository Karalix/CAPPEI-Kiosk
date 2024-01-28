<script setup lang="ts">
defineProps({
  href: {
    type: String,
    required: true,
  },
  external: {
    type: Boolean,
    default: false,
  },
  img: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <span class="not-prose">
    <NuxtLink :to="href" :external="external" class="inline-flex items-center gap-1 text-2xl text-white bg-gray-800 dark:bg-gray-200 dark:text-gray-950 px-3 py-4 rounded no-underline">
      <ContentSlot :use="$slots.default" unwrap="p" /><span> &nbsp; &nbsp; &nbsp; &nbsp; </span>
      <img v-if="img" :src="img" class="h-20" />
    </NuxtLink>
  </span>
</template>