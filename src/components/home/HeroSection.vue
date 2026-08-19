<template>
    <section
        class="
            relative
           xl:min-h-screen
            w-full
            bg-black
        "
    >
        <div
            class="
                pointer-events-none
                absolute
                inset-0
                z-0
                overflow-hidden
            "
            aria-hidden="true"
        >
            <div
                class="
                    absolute
                    left-[30%]
                    top-[30%]
                    h-500
                    w-16
                    -translate-x-1/2
                    -translate-y-1/2
                    rotate-40
                    bg-[radial-gradient(circle,rgba(245,158,11,0.32)_0%,rgba(245,158,11,0.60)_40%,rgba(245,158,11,0.04)_55%,transparent_75%)]
                    shadow-2xl
                    shadow-primary
                    blur-3xl
                    light-sweep
                "
            ></div>
            <div
                class="
                    absolute
                    left-[50%]
                    top-[10%]
                    h-173
                    w-20
                    rotate-40
                    bg-[linear-gradient(to_bottom,transparent,rgba(245,158,11,0.50),transparent)]
                    shadow-2xl
                    shadow-primary
                    blur-2xl
                    light-sweep
                "
            ></div>
        </div>
        <div
            class="
                relative
                z-10
                flex
                flex-col
                lg:flex-row
            "
        >
            <div
                class="
                    flex
                    flex-col
                    pt-10
                    lg:pt-0
                    items-center
                    justify-evenly
                    lg:w-2/5
                "
            >
                <HeroContent />
                <div class="hidden w-full lg:block">
                    <HeroStats />
                </div>
            </div>
            <div
                class="
                    relative
                    pt-10
                    lg:w-3/5
                "
            >
                <HeroImage />
                <div
                    class="
                        absolute
                        bottom-0
                        right-8
                        z-40
                        w-[85%]
                        md:bottom-10
                        md:right-10
                        md:w-48
                    "
                >
                    <HeroFeatures />
                </div>
            </div>
            <div
                class="
                    mx-auto
                    w-[85%]
                    lg:hidden
                "
            >
                <HeroStats />
            </div>
        </div>
    </section>
</template>

<script setup>
import HeroContent from './hero/HeroContent.vue'
import HeroFeatures from './hero/HeroFeatures.vue'
import HeroImage from './hero/HeroImage.vue'
import HeroStats from './hero/HeroStats.vue'
</script>
<style>
@keyframes light-sweep {
    0% {
        transform: translateX(30px);
    }

    50% {
        transform: translateX(-30px);
    }

    100% {
        transform: translateX(30px);
    }
}

.light-sweep {
    animation: light-sweep 6s ease-in-out infinite;
}
</style>


