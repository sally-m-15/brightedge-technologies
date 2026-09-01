<template>
  <div class="space-y-4 px-4">
    <div 
      v-for="capability in capabilitiesData"
      :key="capability.title"
      class="shadow-2xl lg:grid lg:grid-rows-[auto_1fr_auto] shadow-border-dark/90 border border-border-dark gap-6 lg:h-[500px] rounded-xl overflow-hidden"
      :class="capability.imagePosition === 'left' ? 'lg:grid-cols-[35%_65%] pe-10' : 'lg:grid-cols-[65%_35%]'"
    >

    <div
  :class="[
    'flex flex-col gap-4 p-4 lg:py-4 lg:pb-0',
    capability.imagePosition === 'right'
      ? 'lg:col-start-1 ps-8'
      : 'lg:col-start-2'
  ]"
>
      <span v-observe class="text-primary font-medium text-lg">
        {{ capability.number}}
      </span>
      <h2 v-observe class="font-medium text-text-light tracking-[2px] uppercase text-lg">
        {{
          capability.title
        }}
      </h2>
      <h3 v-observe class="text-text-light text-sm w-full tracking-[1px] font-medium">
        {{ capability.subtitle }}
      </h3>
      <p v-observe class="text-text-secondary-light text-xs w-60">
        {{ capability.descrription }}
      </p>
    </div>
  <div
  :class="[
    'w-full shadow-2xl shadow-primary/50 h-full lg:row-span-3 lg:row-start-1',
    capability.imagePosition === 'right'
      ? 'lg:col-start-2'
      : 'lg:col-start-1'
  ]"
>
       <picture>
  <source 
    media="(min-width: 1024px)" 
    :srcset="capability.image.desktop" 
    width="600" 
  />
  <img 
    :src="capability.image.mobile" 
    :alt="capability.title" 
    class="w-full h-full object-cover rounded-2xl"
    loading="lazy"
    width="378" 
  />
</picture>
      </div>

          <div class="flex flex-wrap lg:flex-nowrap  p-4  w-full justify-between items-center gap-y-8 lg:pt-0 lg:pb-0">
            <div 
              v-for="feature in capability.features"
              :key="feature.title"
              class="border-r-2 border-border-dark  last:border-r-0 p-2 md:pe-3 lg:pe-8 xl:pe-4"
            >
              <div class="flex flex-col gap-2 ">
                <CapabilityIcon :icon="feature.icon" />
                <h4 v-observe class="text-sm font-medium text-text-light w-32 md:w-full md:text-xl">{{ feature.title }}</h4>
                <p v-observe class="text-[11px] text-text-secondary-light w-28 lg:w-32">{{ feature.description }}</p>
              </div>
            </div>
          </div>

            <div class="p-4 lg:pt-0 lg:ps-8">
          <a v-observe href="#">
            <BaseButton class="text-primary font-medium! border! border-primary! py-2 rounded-xl hover:bg-primary hover:text-text-light">
              EXPLORE ARCHITECTURAL LIGHTING
            </BaseButton>
          </a>
        </div>
    </div>
  </div>
</template>

<script setup>
import { capabilitiesData } from '@/data/capabilities/capabilitiesData';
import BaseButton from '../common/BaseButton.vue';
import { vObserve } from '@/directives/vObserve.js';
import CapabilityIcon from './CapabilityIcon.vue';
</script>