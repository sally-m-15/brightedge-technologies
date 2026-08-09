<template>
    <section
        class="relative min-h-screen w-full overflow-hidden bg-black"
    >
        <div
            class="pointer-events-none absolute inset-0 z-0 overflow-hidden"
            aria-hidden="true"
        >
            <div
                class="
                    absolute
                    left-[30%]
                    top-[30%]
                    h-500
                    w-16
                    shadow-2xl
                    shadow-primary
                    -translate-x-1/2
                    -translate-y-1/2
                    rotate-40
                    bg-[radial-gradient(circle,rgba(245,158,11,0.32)_0%,rgba(245,158,11,0.60)_40%,rgba(245,158,11,0.04)_55%,transparent_75%)]
                    blur-3xl
                "
            ></div>
            <div
                class="
                    absolute
                    left-[50%]
                    top-[10%]
                    h-173
                    w-20
                    shadow-2xl
                    shadow-primary
                    rotate-40
                    bg-[linear-gradient(to_bottom,transparent,rgba(245,158,11,0.50),transparent)]
                    blur-2xl
                "
            ></div>
        </div>
        <div 
        class="flex flex-col lg:flex-row"
                >
                <div class="lg:w-2/5 flex flex-col   justify-between items-center py-10 md:py-20">
                    <HeroContent />
                    <div class="hidden lg:block  w-full">
                        <HeroStats />
                    </div>
                </div>
                <div class="lg:w-3/5 pt-10 relative">
                <HeroImage />
                   <div class="absolute bottom-0 right-8 md:right-10 md:bottom-10 container mx-auto w-[85%] md:w-48 z-40">
                        <HeroFeatures />
                    </div>
                </div>
                <div class="lg:hidden container mx-auto w-[85%]">
                        <HeroStats />
                    </div>
        </div>
    </section>

</template>

<script setup>
import HeroContent from './hero/HeroContent.vue';
import HeroFeatures from './hero/HeroFeatures.vue';
import HeroImage from './hero/HeroImage.vue';
import HeroStats from './hero/HeroStats.vue';

</script>

<style scoped>

</style>