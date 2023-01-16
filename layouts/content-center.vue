<script setup lang="ts">
defineProps<{
  seeMore?: SeeMore
}>()
</script>

<template>
  <div class="slidev-layout content-center flex flex-col">
    <SeeMore v-if="seeMore" :seeMore="seeMore" />
    <slot />
    <div class="flex-grow flex flex-col justify-center">
      <slot name="center" />
    </div>
    <SlidesStatus></SlidesStatus>
  </div>
</template>