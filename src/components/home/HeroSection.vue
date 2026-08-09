<template>
    <section
        class="relative h-screen overflow-hidden bg-black"
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
        class="flex "
                >
                <div class="w-2/5">
                    <HeroContent />
                    
                </div>
                <div class="w-3/5 pt-10">
                <HeroImage />
                </div>
        </div>
        
    </section>

</template>

<script setup>
import HeroContent from './hero/HeroContent.vue';
import HeroImage from './hero/HeroImage.vue';

</script>

<style scoped>

</style>