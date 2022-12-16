<script lang="ts" setup>
defineProps<{
  image: {
    src: string
    alt: string
  },
  right: boolean
}>()
</script>

<template>
  <div class="slidev-layout section">
    <div class="h-full" :class="{ 'grid grid-cols-2': image }">
      <div class="py-10 px-14 flex flex-col justify-center">
        <slot />
      </div>
      <img v-if="image" class="h-full object-cover" :class="{ 'col-start-1 row-start-1': right }" :src="image.src"
        :alt="image.alt">
    </div>
    <img class="absolute bottom-8 right-8 h-12" src="/logos/aneo-short.png" alt="Logo court d'Aneo">
  </div>
</template>

