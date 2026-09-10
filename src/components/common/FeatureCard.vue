<template>
  <div :class="cardClass">
    <div :class="iconClass">
      <slot name="icon" />
    </div>

    <div :class="titleClass">
      <h4 v-Observe :class="titleTextClass">{{ title }}</h4>
      <p v-Observe v-if="description" :class="descriptionClass">{{ description }}</p>
    </div>

    <div v-if="$slots.action">
      <slot name="action" />
    </div>
  </div>
</template>

<script setup>
import { vObserve } from '@/directives/vObserve.js'

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  cardClass: {
    type: String,
    default: 'flex flex-col gap-2',
  },
  iconClass: {
    type: String,
    default: '',
  },
  titleClass: {
    type: String,
    default: '',
  },
  titleTextClass: {
    type: String,
    default: 'text-text-light font-medium',
  },
  descriptionClass: {
    type: String,
    default: 'text-text-secondary-light text-sm',
  },
})
</script>
