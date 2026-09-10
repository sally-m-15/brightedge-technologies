<template>
    <div class="pb-10 flex flex-col gap-20">
        <HeroSection />
        <div class="px-10">
            <SectionHeader
            tag="h2"
            eyebrow="APPLICATIONS"
            title="Explore our application"
            description="Discover our tailored lighting solutions for different architectural settings."
            />
            <div class="grid grid-cols-4 mt-10 gap-6">
                <div>
                    <ApplicationsSidebar />
                </div>
                <div class="col-span-3 h-full">
                    <ApplicationDetails />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ApplicationDetails from '@/components/applications/ApplicationDetails.vue';
import ApplicationsSidebar from '@/components/applications/ApplicationsSidebar.vue';
import HeroSection from '@/components/applications/HeroSection.vue';
import SectionHeader from '@/components/common/SectionHeader.vue';

</script>

<style scoped>

</style>