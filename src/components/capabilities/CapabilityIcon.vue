<template>
  <svg
    v-observe
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--color-primary)"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <template v-for="(item, iconIndex) in icon" :key="iconIndex">
      <rect
        v-if="item.type === 'rect'"
        :x="item.x"
        :y="item.y"
        :width="item.width"
        :height="item.height"
        :fill="item.fill || 'none'"
        :stroke-width="item.strokeWidth || 1.8"
      />

      <circle
        v-else-if="item.type === 'circle'"
        :cx="item.cx"
        :cy="item.cy"
        :r="item.r"
        :fill="item.fill || 'none'"
        :stroke-width="item.strokeWidth || 1.8"
      />

      <path
        v-else-if="item.type === 'path'"
        :d="item.d"
        :fill="item.fill || 'none'"
        :stroke-width="item.strokeWidth || 1.8"
      />

      <polygon
        v-else-if="item.type === 'polygon'"
        :points="item.points"
        :fill="item.fill || 'none'"
        :stroke-width="item.strokeWidth || 1.8"
      />
    </template>
  </svg>
</template>

<script setup>
import { vObserve } from '@/directives/vObserve.js';

defineProps({
  icon: {
    type: Array,
    required: true,
  },
});
</script>