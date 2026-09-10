<template>
  <div
    class="relative z-10 flex w-full items-center justify-between border-t border-white/10 pt-6 lg:ps-10"
  >
    <FeatureCard
      v-for="stat in stats"
      :key="stat.title"
      :title="stat.title"
      :description="stat.description"
      card-class="flex items-start gap-3"
      icon-class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 p-2.5 lg:h-10 lg:w-10"
      title-text-class="text-base font-black leading-none text-white md:text-lg"
      description-class="mt-1 md:whitespace-nowrap text-xs tracking-[.5px] text-text-secondary-light"
    >
      <template #icon>
        <BaseIcon :icon="stat.icon" svg-class="h-5 w-5" svg-width="20" svg-height="20" />
      </template>
    </FeatureCard>
  </div>
</template>

<script setup>
import FeatureCard from '@/components/common/FeatureCard.vue'
import { stats } from '../../../data/home/heroStats'
import BaseIcon from '@/components/common/BaseIcon.vue'
</script>
