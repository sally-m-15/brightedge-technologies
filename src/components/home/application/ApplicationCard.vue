<template>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
    <div v-observe v-for="application in applications" :key="application.id" class="rounded-2xl group pb-4 border border-border-dark">
    <div  class="relative w-full h-60 overflow-hidden">
        <BaseImage 
          media="(max-width: 767px)"
          :srcset="application.image.mobile"
          :src="application.image.desktop"
          :alt="application.title"
          loading="lazy"
          :imgWidth="application.width"
          :imgHeight="application.height"
          class="transition-transform duration-1000 ease-out group-hover:scale-105"
        />
    </div>
    <div class="px-6 flex flex-col gap-3">
        <div v-observe  class="-mt-9 z-10">
          <ApplicationIcon :icon="application.icon" />
      </div>
      <h3 v-observe  class="text-text-light font-black tracking-[1.2px] w-full capitalize"> {{ application.title }} </h3>
      <p v-observe  class="text-text-secondary-light text-sm md:w-44"> {{ application.description }} </p>
      <BaseButton v-observe  class="!text-xs text-primary !px-0 !font-mideum  hover:underline">Explore <ArrowIcon /></BaseButton>
    </div>
  </div>
    </div>
</template>

<script setup>
import { applications } from '@/data/home/applications';
import ApplicationIcon from './ApplicationIcon.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import { vObserve } from '@/directives/vObserve.js';
import BaseImage from '@/components/common/BaseImage.vue';
import ArrowIcon from '@/components/common/ArrowIcon.vue';



</script>

<style scoped>

</style>