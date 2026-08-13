<template>
    <div
        class="
            flex
            h-full
            w-full
            flex-col
            items-start
            gap-8
            ps-10
        "
    >
        <p
            class="
                flex
                w-fit
                items-center
                gap-3
                rounded-full
                border
                border-border-dark
                px-5
                py-2
                text-xs
                font-medium
                uppercase
                text-text-secondary-light
                md:tracking-[0.2em]
            "
        >
            <span
                class="
                    h-2
                    w-2
                    rounded-full
                    bg-gold
                    bg-primary
                "
            ></span>
            Intelligent Lighting Systems
        </p>
        <h1
            class="
                flex
                flex-col
                text-5xl
                font-black
                tracking-[2px]
                text-text-light
                md:text-[60px]
                xl:text-8xl
            "
        >
            Light that
            <span>
                <span               
                    class="
                    bg-linear-to-r
                    from-[#2a1b0f]
                    to-primary
                    bg-clip-text
                    text-transparent
                    "
                >
                    thinks</span>
                    with
            </span>
            your space.
        </h1>
        <p
            class="
                md:text-lg
                tracking-widest
                text-text-secondary-light
                md:w-110
                text-xs
                pe-6
            "
        >
            BrightEdge designs and engineers precision architectural
            lighting and smart control systems that adapt to how people
            live, work, and gather.
        </p>
        <div
            class="
                flex
                w-full
                flex-col
                gap-6
                md:flex-row
                lg:flex-col
                xl:flex-row
            "
        >
            <a
                href="https://wa.me/00966598100466"
                target="_blank"
                rel="noopener noreferrer"
                class="block text-xs"
            >
                <BaseButton
                    class="
                        rounded-xl
                        bg-primary
                        text-text-dark
                        shadow-primary
                        hover:bg-primary-hover
                        hover:shadow-2xl
                    "
                >
                    GET A CONSULTATION
                </BaseButton>
            </a>
            <RouterLink :to="{ name: 'products' }">
                <BaseButton
                    iconClass="text-text-light"
                    class="
                        rounded-xl
                        border!
                        border-border-light!
                        bg-bg-dark
                        px-9!
                        text-text-light
                        hover:border-primary!
                        hover:text-primary-hover
                    "
                >
                    VIEW PROJECTS
                </BaseButton>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import BaseButton from '@/components/common/BaseButton.vue'
</script>

<style scoped>
</style>