<script setup lang="ts">
defineProps<{
  image: {
    src: string
    alt: string
  }
}>()
</script>

<template>
  <div class="slidev-layout cover flex flex-col justify-center items-center">
    <div class="relative z-10">
      <slot />
      <div class="subtitle">
        <slot name="subtitle" />
      </div>
    </div>
    <div class="absolute inset-0">
      <img :src="image.src" :alt="image.alt" class="object-cover w-full h-full" />
    </div>
    <div class="absolute inset-0 bg-black opacity-50" />
    <img class="absolute bottom-8 left-8 h-12" src="/logos/aneo.png" alt="Logo d'Aneo">
  </div>
</template>