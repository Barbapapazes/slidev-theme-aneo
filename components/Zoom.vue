<script lang="ts" setup>
defineProps<{
  src: string;
  zoom?: string;
  origin?: string;
}>();

</script>

<template>
  <div class="zoom overflow-hidden">
    <img :src="src" />
  </div>
</template>

<style>
.zoom img {
  transform: scale(v-bind(zoom));
  transform-origin: v-bind(origin);
}
</style>
