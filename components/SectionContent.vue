<script lang="ts" setup>
defineProps<{
  title: string
  color: string
}>()
</script>

<template>
  <div class="section-content p-4 rounded-lg">
    <div class="header font-bold">
      {{ title }}
    </div>
    <div class="mt-2 content">
      <slot />
    </div>
  </div>
</template>

<style>
.section-content {
  border: 1px solid v-bind(color);
}

.header {
  color: v-bind(color);
}
</style>
