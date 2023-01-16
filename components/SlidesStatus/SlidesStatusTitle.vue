<script lang="ts" setup>
// @ts-ignore
const { title, disableSlidesTitle } = $slidev.configs
</script>

<template>
  <div v-if="!disableSlidesTitle" class="text-zinc-400">
    {{ title }}
  </div>
</template>