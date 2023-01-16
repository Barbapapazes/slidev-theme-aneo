<script lang="ts" setup>
defineProps<{
  title: string
  color: Color
}>()
</script>

<template>
  <div class="alert overflow-hidden rounded-lg">
    <div class="header px-4 pt-3 pb-2 font-bold"
      :class="{ 'bg-aneo-orange text-black': color === 'orange', 'bg-aneo-red text-black': color === 'red', 'bg-aneo-yellow text-black': color === 'yellow', 'bg-aneo-blue text-white': color === 'blue', 'bg-aneo-green text-black': color === 'green' }">
      {{ title }}</div>
    <div class="content px-4 py-4"
      :class="{ 'bg-aneo-orange/20': color === 'orange', 'bg-aneo-red/20': color === 'red', 'bg-aneo-yellow/20': color === 'yellow', 'bg-aneo-blue/20': color === 'blue', 'bg-aneo-green/20': color === 'green' }">
      <slot />
    </div>
  </div>
</template>