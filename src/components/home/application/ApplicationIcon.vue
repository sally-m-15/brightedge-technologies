<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-16 h-16 bg-bg-dark rounded-full p-1">
    <circle cx="50" cy="50" r="45" fill="none" stroke="var(--color-border-dark)" stroke-width="2" />
    
    <g fill="none" stroke="var(--color-primary)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <template v-for="(shape, index) in icon" :key="index">
        
        <rect 
          v-if="shape.type === 'rect'" 
          :x="shape.x" 
          :y="shape.y" 
          :width="shape.width" 
          :height="shape.height || shape.height" 
          :rx="shape.rx" 
          :ry="shape.ry" 
          :stroke-width="shape.strokeWidth"
          :fill="shape.fill || 'none'"
        />

        <path 
          v-else-if="shape.type === 'path'" 
          :d="shape.d" 
          :stroke-width="shape.strokeWidth"
          :fill="shape.fill || 'none'"
        />

        <line 
          v-else-if="shape.type === 'line'" 
          :x1="shape.x1" 
          :y1="shape.y1" 
          :x2="shape.x2" 
          :y2="shape.y2" 
          :stroke-width="shape.strokeWidth"
        />

        <g v-else-if="shape.type === 'g'" :stroke-width="shape.strokeWidth">
          <template v-for="(child, childIndex) in shape.children" :key="childIndex">
            <line 
              v-if="child.type === 'line'" 
              :x1="child.x1" 
              :y1="child.y1" 
              :x2="child.x2" 
              :y2="child.y2" 
              :stroke-width="child.strokeWidth"
            />
            <path 
              v-else-if="child.type === 'path'" 
              :d="child.d" 
              :stroke-width="child.strokeWidth"
            />
          </template>
        </g>

      </template>
    </g>
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