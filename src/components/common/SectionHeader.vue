<template>
  <div class="flex flex-col gap-y-5">
    <span
    v-observe
      v-if="eyebrow"
      class="relative lg:text-xl font-medium tracking-[3px] text-primary text-md 
        after:absolute  after:left-35 lg:after:left-40 after:top-1/2 after:h-0.5 after:w-14 after:bg-primary"
    >
      {{ eyebrow }}
    </span>

    <h2 class="lg:text-5xl text-2xl font-black" v-observe>
      {{ title }}

      <span class="block" v-observe>
        {{ subtitle }}

        <span class="text-primary" v-observe>
          {{ accent }}
        </span>
      </span>
    </h2>

    <p v-if="description" class="lg:w-80 w-full text-text-light tracking-[1px] font-light pb-3" v-observe>
      {{ description }}
    </p>
  </div>
</template>

<script setup>
import { vObserve } from '@/directives/vObserve.js';

defineProps({
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

  description: {
    type: String,
    default: '',
  },
})
</script>