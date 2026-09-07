<template>
  <div class="relative w-full h-[60vh] md:h-[85vh] text-white overflow-hidden">
    <BaseImage 
    media="(min-width: 767px)"
    :srcset="bgImage"
    sourceWidth="1000"
    sourceHwight="562"
     :src="bgImageMobile"
     alt="Modern architectural smart lighting background"
     loading="eager"
      imgWidth="525"
        imgHeight="700"
        fetchpriority="high"
    />

    <div
      class="absolute inset-0 bg-linear-to-r from-black px-10 flex items-center via-black/50 to-transparent py-10"
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
import BaseImage from '../common/BaseImage.vue';
</script>