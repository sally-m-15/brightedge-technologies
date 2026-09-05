<template>
    <main class=" flex flex-col gap-y-24 lg:gap-y-20">
        <HeroSection />
        <CapabilitiesSection />
        <ApplicationSection />
    </main>
</template>

<script setup>
import ApplicationSection from '@/components/home/ApplicationSection.vue';
import CapabilitiesSection from '@/components/home/CapabilitiesSection.vue';
import HeroSection from '@/components/home/HeroSection.vue';


</script>

<style scoped>

</style>