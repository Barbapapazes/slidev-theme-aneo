<script lang="ts" setup>
import type { SeeMore } from '../types/see-more'

defineProps<{
  seeMore?: SeeMore
}>()
</script>

<template>
  <div class="slidev-layout default">
    <SeeMore v-if="seeMore" :seeMore="seeMore" />
    <slot />
    <SlidesStatus></SlidesStatus>
  </div>
</template>
