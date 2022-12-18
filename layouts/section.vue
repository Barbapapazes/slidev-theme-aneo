<script lang="ts" setup>
import LogoAneoShort from '../components/logos/LogoAneoShort.vue';

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
    <LogoAneoShort class="absolute bottom-8 right-8 w-auto h-12" aria-hidden="true">
    </LogoAneoShort>
  </div>
</template>

