<script lang="ts" setup>
// @ts-ignore
const { title, disableSlidesTitle } = $slidev.configs
</script>

<template>
  <div v-if="!disableSlidesTitle">
    {{ title }}
  </div>
</template>