<template>
  <div class="space-y-4 px-4">
    <div 
    v-for="capabilities in capabilitiesData"
      class="flex  shadow-2xl shadow-border-dark/90 border border-border-dark gap-6 rounded-xl overflow-hidden "
    >
     <div
  :class="[
    ' rounded-lg w-full shadow-2xl shadow-primary/50',
    capabilities.imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'
  ]"
>
        <img 
          src="../../assets/images/architectural-lighting-600.webp" 
          alt="title" 
          class="w-full h-full object-cover"
        />
      </div>

      <div
  :class="[
    'col-span-2 space-y-4 py-4',
    capabilities.imagePosition === 'right' ? 'lg:order-1 ps-14' : 'lg:order-2'
  ]"
>
        <div class="flex flex-col gap-4">
          <span v-observe class="text-primary font-medium text-lg block">{{ capabilities.number }}</span>
          <h2 v-observe class="text-2xl lg:text-3xl font-medium text-text-light tracking-widest uppercase">
            {{ capabilities.title }}
          </h2>
          <h3 v-observe class="text-text-light text-sm lg:text-base font-medium">
            {{ capabilities.subtitle }}
          </h3>
          <p v-observe class="text-text-secondary-light text-xs lg:text-sm w-87.5">
            {{  capabilities.descrription }}
          </p>
          <div class="flex gap-6 pt-4 ">
            
            <div 
          v-for="futcher in capabilities.features"
          :key="futcher.title"
          class="border-r-2 border-border-dark last:border-r-0 pe-6"
          >
            <div 
              class=" flex flex-col gap-2"
            >
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
  <template
    v-for="(icon, iconIndex) in futcher.icon"
    :key="iconIndex"
  >
    <rect
      v-if="icon.type === 'rect'"
      :x="icon.x"
      :y="icon.y"
      :width="icon.width"
      :height="icon.height"
      :fill="icon.fill || 'none'"
      :stroke-width="icon.strokeWidth || 1.8"
    />

    <circle
      v-else-if="icon.type === 'circle'"
      :cx="icon.cx"
      :cy="icon.cy"
      :r="icon.r"
      :fill="icon.fill || 'none'"
      :stroke-width="icon.strokeWidth || 1.8"
    />

    <path
      v-else-if="icon.type === 'path'"
      :d="icon.d"
      :fill="icon.fill || 'none'"
      :stroke-width="icon.strokeWidth || 1.8"
    />

    <polygon
      v-else-if="icon.type === 'polygon'"
      :points="icon.points"
      :fill="icon.fill || 'none'"
      :stroke-width="icon.strokeWidth || 1.8"
    />
  </template>
</svg>

              <h4 v-observe class="text-xs  font-medium text-text-light">{{ futcher.title }}</h4>
              <p v-observe class="text-[11px] text-text-secondary-light  w-28"> {{ futcher.description }}</p>
            </div>
          </div>
          </div>

        </div>

        <div class="pt-2">
        <a 
        v-observe
            href="" 
        >
            <BaseButton  class="text-primary font-medium! border!  border-primary py-2 rounded-2xl hover:bg-primary hover:text-text-light">
            EXPLORE ARCHITECTURAL LIGHTING
        </BaseButton>
        </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { capabilitiesData } from '@/data/capabilities/capabilitiesData';
import BaseButton from '../common/BaseButton.vue';
import { vObserve } from '@/directives/vObserve.js';

</script>

<style scoped>

</style>