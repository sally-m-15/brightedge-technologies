<template>
  <div class="relative flex flex-col py-4">
    <router-link 
      v-for="(application, index) in applications"
      :key="application.id || index"
      :to="{name: 'application-details', params:{slug: application.slug}}"
    >
      <FeatureCard
      v-Observe
      :title="application.title"
      :description="application.description"
      :card-class="['relative flex items-center bg-surface-dark justify-evenly rounded-2xl border my-1 py-6 ',
      application.slug === route.params.slug ? 'border-primary text-secondary-dark' : 'hover:border-primary hover:bg-text-secondary-dark border-border-dark'
      ]"
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
    </router-link>
  </div>
</template>

<script setup>
import { applications } from '@/data/home/applications'
import ArrowIcon from '../common/ArrowIcon.vue'
import FeatureCard from '../common/FeatureCard.vue'
import BaseIcon from '../common/BaseIcon.vue'
import { vObserve } from '@/directives/vObserve.js'
import { useRoute } from 'vue-router'

const route = useRoute();
</script>
