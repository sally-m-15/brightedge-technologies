<template>
  <div class="relative w-full min-h-[85vh] text-white overflow-hidden">
    <picture class="absolute inset-0">
      <source
        media="(max-width: 767px)"
        :srcset="bgImageMobile"
      />

      <img
        :src="bgImage"
        alt=""
        class="w-full h-full object-cover"
      />
    </picture>

    <div
      class="absolute inset-0 bg-linear-to-r from-black px-10 flex items-center via-black/50 to-transparent py-10"
    >
      <SectionHeader
        eyebrow="CAPABILITIES"
        title="A modular system"
        subtitle="for every"
        accent="environment."
        description="Scalable lighting and control solutions engineered to adapt to the way people live, work, and gather."
      />
    </div>
  </div>
</template>

<script setup>
import bgImage from '../../assets/images/converted_image.webp';
import bgImageMobile from '../../assets/images/capabilities-hero-mobile.webp';
import SectionHeader from '../common/SectionHeader.vue';
</script>