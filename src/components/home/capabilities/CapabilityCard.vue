<template>
  <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 auto-rows-fr">
    <div
      v-for="(capability, index) in capabilities"
      :key="capability.title"
      class="relative flex group overflow-hidden rounded-lg"
      :class="capability.gridClass"
    >
<picture>
  <source
    media="(max-width: 767px)"
    :srcset="capability.image.mobile"
  />

  <img
    v-observe
    :src="capability.image.desktop"
    :alt="capability.title"
    :width="capability.width"
    :height="capability.height"
    class="h-full w-full object-cover max-h-75 transition-transform duration-1000 ease-out group-hover:scale-105"
    loading="lazy"
  />
</picture>

      <div
        class="absolute inset-0 bg-linear-to-r from-black/80 py-4 px-6 flex flex-col justify-between via-black/40 to-transparent"
      >
          <CapabilityIcon :icon="capability.icon" />
        <div class=" flex flex-col">
          <h3 v-observe class="lg:text-3xl text-lg tracking-[1px] relative max-w-32 font-bold text-text-light
          after:absolute  after:h-0.5 after:w-14 after:bg-primary after:bottom-0 pb-2 after:left-0
          ">
            {{ capability.title }}
          </h3>
          <div v-observe 
          :class="capability.featured ? 'flex flex-col' : 'flex flex-col lg:flex-row  lg:justify-between lg:items-center'">
          <p class="mt-2 max-w-56 text-sm font-light  text-text-light">
            {{ capability.description }}
          </p>
            <BaseIcon v-if="index !== 0" 
            :aria-label="`Learn more about ${capability.title}`"
            class=" self-end border-2! cursor-pointer w-10 h-10  rounded-full  text-primary hover:text-white border-primary! hover:bg-primary mt-6" />
            <BaseButton v-else class="border-2! border-primary! w-fit rounded-4xl py-1! text-primary hover:text-white  hover:bg-primary mt-6"> Learn More</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from '@/components/common/BaseButton.vue';
import { capabilities } from '../../../data/home/capabilities.js'
import BaseIcon from '@/components/common/BaseIcon.vue';
import CapabilityIcon from './CapabilityIcon.vue';
import { vObserve } from '@/directives/vObserve.js';

</script>

<style scoped>
</style>