<template>
  <div class="flex flex-col gap-y-4">
    <span
      v-observe="shouldObserve"
      v-if="eyebrow"
      class="relative lg:text-xl font-medium tracking-[3px] text-primary text-md uppercase after:absolute after:ms-2 after:top-1/2 after:h-0.5 after:w-14 after:bg-primary"
    >
      {{ eyebrow }}
    </span>

    <component
      :is="tag"
      class="lg:text-5xl text-2xl font-medium text-text-light"
      v-observe="shouldObserve"
    >
      {{ title }}

      <span class="block" v-observe="shouldObserve">
        {{ subtitle }}

        <span class="text-primary" v-observe="shouldObserve">
          {{ accent }}
        </span>
      </span>
    </component>
    <span class="text-md font-medium">
      {{ summary }}
    </span>
    <p
      v-if="description"
      class="lg:w-90 w-full pt-2 text-text-light tracking-[1px] font-light pb-3"
      v-observe="shouldObserve"
    >
      {{ description }}
    </p>
  </div>
</template>

<script setup>
import { vObserve } from '@/directives/vObserve.js'
import { computed } from 'vue'

const props = defineProps({
  eyebrow: {
    type: String,
    default: '',
  },

  title: {
    type: String,
    required: true,
  },

  subtitle: {
    type: String,
    default: '',
  },

  accent: {
    type: String,
    default: '',
  },

  summary: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },

  tag: {
    type: String,
    default: 'h2',
  },
})

const shouldObserve = computed(() => props.tag !== 'h1')
</script>
