<template>
  <div class="relative group rounded-2xl border border-border-dark overflow-hidden mt-4">
    <div class="overflow-hidden">
      <BaseImage
        v-Observe
        media="(min-width: 1024px)"
        :srcset="image"
        sourceWidth="600"
        :src="image"
        alt="image"
        loading="lazy"
        imgWidth="378"
        class="w-full rounded-t-2xl transition-transform duration-1000 ease-out group-hover:scale-105"
      />
    </div>

    <div
      class="-mt-20 relative z-10 pt-2 bg-linear-to-b from-bg-dark/90 via-surface-dark to-surface-dark"
    >
      <div class="flex text-text-light px-8">
        <div class="w-1/2">
          <SectionHeader
            accent="hospitality"
            summary="Hotels, restaurants, lounges and resorts."
            description="Lighting shapes the mood, defines the experience, and enhances every aspect of hospitality spaces. From warm, welcoming lobbies to intimate dining atmospheres, we create lighting designs that make every moment memorable."
            tag="h4"
          />
        </div>

        <div class="pt-4">
          <span class="font-bold text-md text-primary capitalize"> KEY BENEFITS </span>

          <div
            v-for="benefit in benefits"
            :key="benefit.description"
            class="flex items-center pt-8 gap-2"
          >
            <BaseIcon
              :icon="benefit.icon"
              svgWidth="20"
              svgHeight="20"
              viewBox="0 0 24 24"
              stroke="var(--color-primary)"
              svgClass="w-6 h-6"
            />

            <p>{{ benefit.description }}</p>
          </div>
        </div>
      </div>
      <hr class="border my-8 border-border-dark mx-8" />
      <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 px-8 pb-8">
        <div
          v-for="feature in hospitalityFeatures"
          :key="feature.title"
          class="flex flex-col items-start border-r-2 border-border-dark w-full last:border-r-0 gap-4"
        >
          <BaseIcon
            :icon="feature.icon"
            svgWidth="32"
            svgHeight="32"
            viewBox="0 0 24 24"
            stroke="var(--color-primary)"
            svgClass="w-8 h-8 shrink-0"
            strokeWidth="1.5"
          />

          <h4 class="text-xs font-bold text-text-light tracking-[2px] uppercase">
            {{ feature.title }}
          </h4>

          <p class="text-xs text-text-secondary-light">
            {{ feature.description }}
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 h-44 gap-1">
        <div v-for="value in 4" class="rounded-2xl overflow-hidden">
          <BaseImage
            v-Observe
            media="(min-width: 1024px)"
            :srcset="image"
            sourceWidth="600"
            :src="image"
            alt="image"
            loading="lazy"
            imgWidth="378"
            class="w-full rounded-t-2xl transition-transform duration-1000 ease-out group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseImage from '../common/BaseImage.vue'
import image from '../../assets/images/applicationDesktop.webp'
import SectionHeader from '../common/SectionHeader.vue'
import BaseIcon from '../common/BaseIcon.vue'
import { benefits } from '@/data/applications/hospitality/hospitalityBenefits.js'
import { hospitalityFeatures } from '@/data/applications/hospitality/hospitalityFeatures.js'
</script>
<style scoped></style>
