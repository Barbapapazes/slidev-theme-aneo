<script lang="ts" setup>
// @ts-ignore
const disableSlidesNumber = $slidev.configs.disableSlideNumber;
</script>

<template>
  <div v-if="!disableSlidesNumber">
    <SlideCurrentNo /> /
    <SlidesTotal />
  </div>
</template>