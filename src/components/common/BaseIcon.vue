<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox"
    :class="svgClass"
    :width="svgWidth"
    :height="svgHeight"
    :aria-hidden="ariaHidden || 'true'"
    :fill="fill"
    :stroke="stroke"
    :stroke-width="strokeWidth || '2'"
    :stroke-linecap="strokeLinecap || 'none'"
    :stroke-linejoin="strokeLinejoin || 'none'"
  >
    <slot>
      <template v-for="(item, index) in icon" :key="index">
        <rect
          v-if="item.type === 'rect'"
          :x="item.x"
          :y="item.y"
          :width="item.width"
          :height="item.height"
          :fill="item.fill || 'none'"
          :stroke-width="item.strokeWidth || '2'"
        />
        <line
          v-else-if="item.type === 'line'"
          :x1="item.x1"
          :y1="item.y1"
          :x2="item.x2"
          :y2="item.y2"
          :stroke-width="item.strokeWidth || '2'"
        />
        <circle
          v-else-if="item.type === 'circle'"
          :cx="item.cx"
          :cy="item.cy"
          :r="item.r ?? 0.9"
          :fill="item.fill || 'var(--color-primary)'"
        />
        <path
          v-else-if="item.type === 'path'"
          :d="item.d"
          :fill="item.fill || 'none'"
          :stroke-width="item.strokeWidth || '2'"
        />
        <polygon
          v-else-if="item.type === 'polygon'"
          :points="item.points"
          :fill="item.fill || 'none'"
          :stroke-width="item.strokeWidth || '2'"
        />
      </template>
    </slot>
  </svg>
</template>

<script setup>
defineProps({
  icon: {
    type: Array,
    default: () => [],
  },
  viewBox: {
    type: String,
    default: '0 0 24 24',
  },
  svgClass: {
    type: String,
    default: 'h-5 w-5 shrink-0',
  },
  svgWidth: {
    type: [Number, String],
    default: null,
  },
  svgHeight: {
    type: [Number, String],
    default: null,
  },
  ariaHidden: {
    type: [Boolean, String],
    default: true,
  },
  fill: {
    type: String,
    default: 'none',
  },
  stroke: {
    type: String,
    default: 'var(--color-primary)',
  },
  strokeWidth: {
    type: [Number, String],
    default: 2,
  },
  strokeLinecap: {
    type: String,
    default: 'round',
  },
  strokeLinejoin: {
    type: String,
    default: 'round',
  },
})
</script>
