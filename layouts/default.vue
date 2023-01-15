<script lang="ts" setup>
defineProps<{
  seeMore?: SeeMore
}>()
</script>

<template>
  <div class="slidev-layout default">
    <Logo />
    <SeeMore v-if="seeMore" :seeMore="seeMore" />
    <slot />
    <SlidesStatus></SlidesStatus>
  </div>
</template>