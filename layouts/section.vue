<script lang="ts" setup>
import { computed } from 'vue';
import LogoAneoShort from '../components/logos/LogoAneoShort.vue';
import { handleBackground } from '../layoutHelper'

const props = defineProps<{
  background: string,
  right?: boolean,
  position?: BackgroundPosition,
}>()

const style = computed(() => handleBackground(props.background, true, props.position))
</script>

<template>
  <div class="slidev-layout section">
    <div class="h-full grid grid-cols-2">
      <div class="py-10 px-14 flex flex-col justify-center" :class="{ 'col-start-2': right }">
        <slot />
      </div>
      <div :style="style" :class="{ 'row-start-1': right }"></div>
    </div>
    <Logo />
  </div>
</template>

