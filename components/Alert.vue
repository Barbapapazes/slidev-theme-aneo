<script lang="ts" setup>
defineProps<{
  title: string
  color: Color
}>()
</script>

<template>
  <div class="alert overflow-hidden rounded-lg">
    <div class="header px-4 py-2 text-black font-bold"
      :class="{ 'bg-orange-400 dark:bg-orange-600': color === 'orange', 'bg-red-500 dark:bg-red-700': color === 'red', 'bg-yellow-300 dark:bg-yellow-500': color === 'yellow', 'bg-blue-400 dark:bg-blue-600': color === 'blue', 'bg-green-400 dark:bg-green-600': color === 'green' }">
      {{ title }}</div>
    <div class="content px-4 py-1"
      :class="{ 'bg-orange-50 dark:bg-orange-900/10': color === 'orange', 'bg-red-50 dark:bg-red-900/10': color === 'red', 'bg-yellow-50 dark:bg-yellow-900/10': color === 'yellow', 'bg-blue-50 dark:bg-blue-900/10': color === 'blue', 'bg-green-50 dark:bg-green-900/10': color === 'green' }">
      <slot />
    </div>
  </div>
</template>