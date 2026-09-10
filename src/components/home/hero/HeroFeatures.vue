<template>
  <div
    class="flex flex-col gap-4 rounded-2xl border border-primary/40 bg-black/60 py-6 ps-2 shadow shadow-primary backdrop-blur-md"
  >
    <FeatureCard
      v-for="feature in heroFeatures"
      :key="feature.title"
      :title="feature.title"
      :description="feature.description"
      card-class="flex items-center gap-4"
      title-text-class="text-sm font-semibold text-white"
      description-class="mt-0.5 text-xs text-gray-400"
    >
      <template #icon>
        <BaseIcon :icon="feature.icon" svg-width="28" svg-height="28" />
      </template>
    </FeatureCard>
  </div>
</template>

<script setup>
import { heroFeatures } from '@/data/home/heroFeatures'
import FeatureCard from '@/components/common/FeatureCard.vue'
import BaseIcon from '@/components/common/BaseIcon.vue'
</script>
