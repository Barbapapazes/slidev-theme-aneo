<script lang="ts" setup>
// @ts-ignore
const { author, disableSlidesAuthor } = $slidev.configs
</script>

<template>
  <div v-if="!disableSlidesAuthor" class="text-zinc-400">
    {{ author }}
  </div>
</template>