<template>
    <div v-if="currentApplication" class="relative group rounded-2xl border border-border-dark overflow-hidden mt-4">
    <div class="overflow-hidden h-[400px]">
    <BaseImage
        v-Observe
        media="(min-width: 1024px)"
        :srcset="currentApplication.heroImage.desktop"
        sourceWidth="1920"
        sourceHeight="900"
        :src="currentApplication.heroImage.mobile"
        :alt="currentApplication.title"
        loading="lazy"
        imgWidth="768"
        imgHeight="512"
        class="w-full h-full rounded-t-2xl transition-transform duration-1000 ease-out group-hover:scale-105"
    />
    </div>

    <div
    v-observe
    class="-mt-20 relative z-10 pt-2 bg-linear-to-b from-bg-dark/90 via-surface-dark to-surface-dark"
    >
    <div class="flex text-text-light px-8">
        <div class="w-1/2">
        <SectionHeader 
            :accent="currentApplication.title"
            :summary="currentApplication.summary"
            :description="currentApplication.description"
            tag="h3"
        />
        </div>

        <div class="pt-4">
        <span v-observe class="font-bold text-md text-primary capitalize"> KEY BENEFITS </span>

        <div
        v-observe
        v-for="(benefit, index) in currentApplication.benefits"
        :key="index"
            class="flex items-center pt-8 gap-2"
        >
            <BaseIcon
            v-observe
              :icon="benefit.icon"
              svgWidth="20"
              svgHeight="20"
              viewBox="0 0 24 24"
              stroke="var(--color-primary)"
              svgClass="w-6 h-6"
            />

            <p v-observe>{{ benefit.description}}</p>
          </div>
        </div>
      </div>
      <hr v-observe class="border my-8 border-border-dark mx-8" />
      <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 px-8 pb-8">
        <div
        v-observe
        v-for="feature in currentApplication.features"
        :key="feature.title"
          class="flex flex-col items-start border-r-2 border-border-dark w-full last:border-r-0 gap-4"
        >
          <BaseIcon
          v-observe
            :icon="feature.icon"
            svgWidth="32"
            svgHeight="32"
            viewBox="0 0 24 24"
            stroke="var(--color-primary)"
            svgClass="w-8 h-8 shrink-0"
            strokeWidth="1.5"
          />

          <h4 v-observe class="text-xs font-bold text-text-light tracking-[2px] uppercase">
            {{ feature.title }}
          </h4>

          <p v-observe class="text-xs text-text-secondary-light">
            {{ feature.description }}
          </p>
        </div>
      </div>
      <div v-observe class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 h-44 gap-1">
        <div v-for="image in currentApplication.images" class="rounded-2xl overflow-hidden">
          <BaseImage
            v-Observe
            media="(min-width: 1024px)"
            :srcset="image.desktop"
            sourceWidth="1200"
            sourceHeight="675"
            :src="image.mobile"
            :alt="currentApplication.title"
            loading="lazy"
            imgWidth="768"
            imgHeight="512"
            class="w-full rounded-t-2xl transition-transform duration-1000 ease-out group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseImage from '../common/BaseImage.vue'
import SectionHeader from '../common/SectionHeader.vue'
import BaseIcon from '../common/BaseIcon.vue'
import { applicationDetails } from '../../data/applications/applications.js'
import { useRoute} from 'vue-router'
import { computed } from 'vue'
import { vObserve } from '@/directives/vObserve.js'


const route = useRoute();
const currentApplication = computed(() => {
  return applicationDetails.find(app => app.slug === route.params.slug) || null;
});
</script>
<style scoped></style>
