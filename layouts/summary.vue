<script lang="ts" setup>
defineProps<{
  listStyle?: 'disc' | 'circle' | 'decimal' | 'none'
}>()
</script>

<template>
  <div class="slidev-layout summary" :class="listStyle">
    <slot />
  </div>
</template>