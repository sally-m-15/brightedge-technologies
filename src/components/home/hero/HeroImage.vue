<template>
    <div class="relative h-full w-full">
        <svg
            class="absolute h-0 w-0"
            aria-hidden="true"
        >
            <defs>
                <clipPath
                    id="hero-image-clip"
                    clipPathUnits="objectBoundingBox"
                >
                    <path
                        d="
                            M 0.27 0
                            L 1 0
                            L 1 1
                            L 0 1.5
                            L 0.16 0.40
                            L 0.21 0.08
                            Q 0.23 0.005 0.27 0
                            Z
                        "
                    />
                </clipPath>
            </defs>
        </svg>
        <svg
            class="pointer-events-none absolute inset-0 z-0 h-full w-full"
            style="filter: drop-shadow(0px 0px 10px #F5a623);"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
        >
            <path
                d="
                    M 270 0
                    L 1000 0
                    L 1000 1000
                    L 0 1000
                    L 780 1600
                    L 110 1000
                    L 160 400
                    L 210 80
                    Q 230 5 270 0
                    Z
                "
                fill="#F5a623"
            />
        </svg>
        <svg
            class="pointer-events-none absolute inset-0 z-10 h-full w-full"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
        >
            <path
                d="
                    M 1000 0
                    L 270 0
                    Q 230 5 210 80
                    L 160 400
                    L 110 750
                    L 0 1510
                    L 780 1002
                "
                fill="none"
                class="stroke-[#F5a623]"
                stroke-width="2"
                vector-effect="non-scaling-stroke"
                stroke-linecap="round"
            />
        </svg>
        <div
            class="
                relative
                z-5 
                h-full 
                w-full 
                overflow-hidden
                "
        >
        <picture
            class="
                h-full 
                w-full 
                block
                "
            style="clip-path: url(#hero-image-clip);"
        >
                <source media="(min-width: 768px)" :srcset="imageLarge" />
                <img
                :src="imageSmall"
                alt="Modern smart lighting interior"
                class="h-full w-full object-cover object-center"
                loading="eager"
                width="512"
                height="512"
                fetchpriority="high"
            />
        </picture>
        </div>
    </div>
</template>

<script setup>
import imageSmall from '@/assets/images/bright-hero-sm.webp'
import imageLarge from '@/assets/images/bright-hero.webp'
</script>

<style scoped>
</style>