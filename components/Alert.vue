<script lang="ts" setup>
defineProps<{
  title: string
  color: Color
}>()
</script>

<template>
  <div class="alert overflow-hidden rounded-lg">
    <div class="header px-4 pt-3 pb-2 font-bold"
      :class="{ 'bg-orange-400 dark:bg-orange-600 text-black': color === 'orange', 'bg-red-500 dark:bg-red-700': color === 'red', 'bg-yellow-300 dark:bg-yellow-500 dark:text-black': color === 'yellow', 'bg-blue-400 dark:bg-blue-600 dark:text-black': color === 'blue', 'bg-green-400 dark:bg-green-600 dark:text-black': color === 'green' }">
      {{ title }}</div>
    <div class="content px-4 py-1"
      :class="{ 'bg-orange-100 dark:bg-orange-900/20': color === 'orange', 'bg-red-100 dark:bg-red-900/20': color === 'red', 'bg-yellow-100 dark:bg-yellow-900/20': color === 'yellow', 'bg-blue-100 dark:bg-blue-900/20': color === 'blue', 'bg-green-100 dark:bg-green-900/20': color === 'green' }">
      <slot />
    </div>
  </div>
</template>