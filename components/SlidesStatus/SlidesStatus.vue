<script lang="ts" setup>
const { logos, logosClass } = $slidev.configs
</script>


<template>
  <div class="absolute left-8 right-8 bottom-6 text-sm">
    <div class="absolute left-0 bottom-0 flex flex-row items-end gap-4">
      <LogoAneoShort class="relative top-[2px] h-8 w-auto" />
      <img v-for="logo in logos" :key="logo" :src="logo" class="relative top-[2px]" :class="logosClass ?? 'h-8 w-auto'" />
      <SlidesStatusTitle />
    </div>
    <SlidesStatusAuthor class="absolute left-1/2 transform -translate-x-1/2 bottom-0" />
    <SlidesStatusNumber class="absolute right-0 bottom-0" />
  </div>
</template>
