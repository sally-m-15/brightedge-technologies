<template>
  <div class="relative w-full min-h-[85vh] text-white overflow-hidden">
    <picture class="absolute inset-0">
      <source
        media="(min-width: 767px)"
        :srcset="bgImage"
      />

      <img
        :src="bgImageMobile"
        alt=""
        class="w-full h-full object-cover"
        fetchpriority="high"
        loading="eager"
        width="525"
        height="700"
      />
    </picture>

    <div
      class="absolute inset-0 bg-linear-to-r from-black px-10 flex items-center via-black/70 to-transparent py-10"
    >
      <SectionHeader
        accent="OUR CAPABILITIES"
        description="Discover our comprehensive suite of architectural lighting and smart control solutions."
        tag="h1"
      />
      
    </div>
    
  </div>
</template>

<script setup>
import bgImage from '../../assets/images/converted_image.webp';
import bgImageMobile from '../../assets/images/capabilities-hero-mobile.webp';
import SectionHeader from '../common/SectionHeader.vue';
</script>