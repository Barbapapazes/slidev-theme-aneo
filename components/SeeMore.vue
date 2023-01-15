<script lang="ts" setup>
defineProps<{
  seeMore: SeeMore
}>()
</script>

<template>
  <a class="absolute top-12 right-14 text-sm" :href="seeMore.href" target="_blank" rel="noreferrer noopener">
    {{ seeMore.text }}
  </a>
</template>