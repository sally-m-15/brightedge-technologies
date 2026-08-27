<template>
              <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="48"
          height="48"
          aria-hidden="true"
        >
          <rect
            x="2"
            y="2"
            width="44"
            height="44"
            rx="10"
            ry="10"
            fill="#181a20"
            stroke="#2a2d36"
            stroke-width="1"
          />
          <template v-for="(item, iconIndex) in icon" :key="iconIndex">
            <rect
              v-if="item.type === 'rect'"
              :x="item.x"
              :y="item.y"
              :width="item.width"
              :height="item.height"
              fill="none"
              stroke="var(--color-primary)"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <line
              v-else-if="item.type === 'line'"
              :x1="item.x1"
              :y1="item.y1"
              :x2="item.x2"
              :y2="item.y2"
              stroke="var(--color-primary)"
              stroke-width="2"
              stroke-linecap="round"
            />
            <circle
              v-else-if="item.type === 'circle'"
              :cx="item.cx"
              :cy="item.cy"
              :r="item.r ?? 0.9"
              fill="var(--color-primary)"
            />
            <path
              v-else-if="item.type === 'path'"
              :d="item.d"
              fill="none"
              stroke="var(--color-primary)"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <polygon
              v-else-if="item.type === 'polygon'"
              :points="item.points"
              fill="none"
              stroke="var(--color-primary)"
              stroke-width="2"
              stroke-linejoin="round"
            />
          </template>
        </svg>
</template>

<script setup>
defineProps({
  icon: {
    type: Array,
    required: true,
  },
})

</script>

<style scoped>

</style>