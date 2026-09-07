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
        accent="APPLICATIONS"
        description="Our lighting solutions are tailored to the unique needs of different spaces—enhancing aesthetics, improving comfort, and creating experiences that leave a lasting impression."
        tag="h1"
      />
      
    </div>
    
  </div>
</template>

<script setup>
import bgImage from '../../assets/images/Modern Metal Facade Design for Commercial & Residential Buildings.jfif';
import bgImageMobile from '../../assets/images/Modern Metal Facade Design for Commercial & Residential Buildings.jfif';
import BaseImage from '../common/BaseImage.vue';
import SectionHeader from '../common/SectionHeader.vue';
</script>

<style scoped>

</style>