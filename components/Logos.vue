<script lang="ts" setup>
const { logos, logosClass } = $slidev.configs
</script>


<template>
  <div class="absolute left-8 bottom-[1.375rem] flex flex-row gap-4 items-end">
    <LogoAneoShort class="h-8 w-auto" />
    <img v-for="logo in logos" :key="logo" :src="logo" :class="logosClass ?? 'h-8 w-auto'" />
  </div>
</template>
