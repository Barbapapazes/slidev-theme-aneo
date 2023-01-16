<script setup lang="ts">
import { computed } from 'vue'
import LogoAneo from '../components/logos/LogoAneo.vue';
import { handleBackground } from '../layoutHelper'


const props = defineProps({
  background: {
    default: '',
  },
})

const style = computed(() => handleBackground(props.background, true))

// @ts-ignore
const { title, author } = $slidev.configs
</script>

<template>
  <div class="slidev-layout cover flex flex-col justify-center items-center" :style="style">
    <div>
      <slot>
        <h1>
          {{ title }}
        </h1>
        <p>
          {{ author }}
          {{ author? '-': '' }}
          {{
  new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  })
          }}
        </p>
      </slot>
    </div>
    <LogoAneo class="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-auto h-8" aria-hidden="true"></LogoAneo>
  </div>
</template>