<script lang="ts" setup>
// @ts-ignore
const { disableSlidesNumber } = $slidev.configs;
</script>

<template>
  <div v-if="!disableSlidesNumber" class="text-zinc-400">
    <SlideCurrentNo /> /
    <SlidesTotal />
  </div>
</template>