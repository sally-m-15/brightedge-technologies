<template>
  <div class="relative flex flex-col py-4">
    <FeatureCard
      v-Observe
      v-for="(application, index) in applications"
      :key="application.id || index"
      :title="application.title"
      :description="application.description"
      card-class="relative flex items-center bg-surface-dark justify-evenly rounded-2xl border-border-dark hover:bg-text-secondary-dark my-1 border hover:border-primary py-6"
      icon-class="w-16 h-16 shrink-0"
      title-class="flex flex-col"
      title-text-class="text-text-light font-medium text-lg capitalize"
      description-class="text-sm w-40 text-text-secondary-light pt-2"
    >
      <template #icon>
        <BaseIcon
          v-observe
          :icon="application.icon"
          viewBox="0 0 100 100"
          svgClass="w-14 h-14 rounded-full bg-bg-dark border-2 border-border-dark flex items-center justify-center"
          :stroke-width="3"
        />
      </template>

      <template #action>
        <div class="text-primary">
          <ArrowIcon v-Observe />
        </div>
      </template>
    </FeatureCard>
  </div>
</template>

<script setup>
import { applications } from '@/data/home/applications'
import ArrowIcon from '../common/ArrowIcon.vue'
import FeatureCard from '../common/FeatureCard.vue'
import BaseIcon from '../common/BaseIcon.vue'
import { vObserve } from '@/directives/vObserve.js'
</script>
