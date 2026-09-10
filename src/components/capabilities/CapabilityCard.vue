<template>
  <div class="space-y-4 px-4">
    <div
      v-for="capability in capabilitiesData"
      :key="capability.title"
      class="shadow-2xl group lg:grid lg:grid-rows-[auto_1fr_auto] shadow-border-dark/90 border border-border-dark gap-0 lg:h-112.5 rounded-xl overflow-hidden"
      :class="
        capability.imagePosition === 'left'
          ? 'lg:grid-cols-[35%_65%] lg:pe-10'
          : 'lg:grid-cols-[65%_35%]'
      "
    >
      <div
        :class="[
          'flex flex-col gap-4 p-6 lg:py-4 lg:pb-0',
          capability.imagePosition === 'right' ? 'lg:col-start-1 ps-8' : 'lg:col-start-2',
        ]"
      >
        <span v-observe class="text-primary font-medium text-lg">
          {{ capability.number }}
        </span>
        <h2 v-observe class="font-medium text-text-light tracking-[2px] uppercase text-lg">
          {{ capability.title }}
        </h2>
        <h3 v-observe class="text-text-light text-sm w-full tracking-[1px] font-medium">
          {{ capability.subtitle }}
        </h3>
        <p v-observe class="text-text-secondary-light text-xs w-60">
          {{ capability.description }}
        </p>
      </div>

      <div
        :class="[
          'w-full shadow-2xl shadow-primary/50 h-full rounded-2xl lg:row-span-3 lg:row-start-1 overflow-hidden',
          capability.imagePosition === 'right' ? 'lg:col-start-2' : 'lg:col-start-1',
        ]"
      >
        <BaseImage
          v-Observe
          media="(min-width: 1024px)"
          :srcset="capability.image.desktop"
          sourceWidth="600"
          :src="capability.image.mobile"
          :alt="capability.title"
          loading="lazy"
          imgWidth="378"
          class="transition-transform duration-1000 ease-out group-hover:scale-105 rounded-2xl"
        />
      </div>

      <div
        class="flex ps-6 flex-wrap lg:flex-nowrap gap-y-4 py-4 lg:py-0 lg:gap-y-0 justify-between items-center"
      >
        <FeatureCard
          v-Observe
          v-for="feature in capability.features"
          :key="feature.title"
          :title="feature.title"
          :description="feature.description"
          card-class="border-r-2 border-border-dark w-full last:border-r-0 p-1 md:pe-3 lg:pe-8 xl:pe-4 flex flex-col gap-2"
          title-text-class="text-sm! font-medium text-text-light w-32 md:w-full md:text-xl"
          description-class="text-[11px] py-3 text-text-secondary-light w-28 lg:w-32"
        >
          <template #icon>
            <div class="w-12 h-12 flex items-center justify-center">
              <BaseIcon v-Observe :icon="feature.icon" svg-class="w-10 h-10" :stroke-width="1.8" />
            </div>
          </template>
        </FeatureCard>
      </div>

      <div v-observe class="mb-8 px-6">
        <a v-observe href="#">
          <BaseButton
            class="text-primary font-medium! border! border-primary! py-2 rounded-xl hover:bg-primary hover:text-text-light"
          >
            EXPLORE ARCHITECTURAL LIGHTING
            <ArrowIcon />
          </BaseButton>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { capabilitiesData } from '@/data/capabilities/capabilitiesData'
import BaseButton from '../common/BaseButton.vue'
import { vObserve } from '@/directives/vObserve.js'
import BaseImage from '../common/BaseImage.vue'
import ArrowIcon from '../common/ArrowIcon.vue'
import FeatureCard from '../common/FeatureCard.vue'
import BaseIcon from '../common/BaseIcon.vue'
</script>
