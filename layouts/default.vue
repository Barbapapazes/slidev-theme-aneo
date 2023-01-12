<script lang="ts" setup>
defineProps<{
  seeMore?: SeeMore
}>()
</script>

<template>
  <div class="slidev-layout default">
    <SeeMore v-if="seeMore" :seeMore="seeMore" />
    <slot />
    <Author></Author>
    <SlidesTitle />
    <SlideNumber></SlideNumber>
  </div>
</template>