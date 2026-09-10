<template>
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
    <div
      v-observe
      v-for="application in applications"
      :key="application.id"
      class="rounded-2xl group pb-4 border border-border-dark"
    >
      <div class="relative w-full h-60 overflow-hidden">
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
      <div class="px-6">
        <FeatureCard
          :title="application.title"
          :description="application.description"
          icon-class="-mt-9 z-10"
          title-text-class="text-text-light py-2 font-black tracking-[1.2px] w-full capitalize"
          description-class="text-text-secondary-light pb-2 text-sm md:w-44"
        >
          <template #icon>
            <BaseIcon
              :icon="application.icon"
              viewBox="0 0 100 100"
              svgClass="w-14 h-14 rounded-full bg-bg-dark border-2 border-border-dark flex items-center justify-center"
              :stroke-width="3"
            />
          </template>
          <template #action>
            <div class="text-primary">
              <BaseButton class="text-primary w-full px-0! hover:underline"
                >Explore <ArrowIcon
              /></BaseButton>
            </div>
          </template>
        </FeatureCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { applications } from '@/data/home/applications'
import BaseButton from '@/components/common/BaseButton.vue'
import { vObserve } from '@/directives/vObserve.js'
import BaseImage from '@/components/common/BaseImage.vue'
import ArrowIcon from '@/components/common/ArrowIcon.vue'
import FeatureCard from '@/components/common/FeatureCard.vue'
import BaseIcon from '@/components/common/BaseIcon.vue'
</script>

<style scoped></style>
