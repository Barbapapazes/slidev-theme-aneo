<script setup lang="ts">
const props = defineProps<{
  class: string,
  seeMore?: SeeMore
}>()
</script>

<template>
  <div class="slidev-layout two-columns w-full h-full grid grid-cols-2 gap-4">
    <SeeMore v-if="seeMore" :seeMore="seeMore" />
    <div class="col-left" :class="props.class">
      <slot />
    </div>
    <div class="col-right" :class="props.class">
      <slot name="right" />
    </div>
    <SlideNumber></SlideNumber>
  </div>
</template>