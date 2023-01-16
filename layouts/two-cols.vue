<script setup lang="ts">
const props = defineProps<{
  class: string,
  seeMore?: SeeMore
}>()
</script>

<template>
  <div class="slidev-layout two-columns">
    <Logo />
    <SeeMore v-if="seeMore" :seeMore="seeMore" />
    <slot />
    <div class="w-full grid grid-cols-2 gap-4">
      <div class="col-left" :class="props.class">
        <slot name="left" />
      </div>
      <div class="col-right" :class="props.class">
        <slot name="right" />
      </div>
    </div>
    <SlidesStatus></SlidesStatus>
  </div>
</template>