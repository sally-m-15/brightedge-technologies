<template>
    <div
        class="
            relative
            z-10
            flex
            w-full
            items-center
            justify-between
            border-t
            border-white/10
            pt-6
            lg:ps-10
        "
    >
        <div
            v-for="stat in stats"
            :key="stat.title"
            class="flex items-start gap-3"
        >
            <div
                class="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-primary/30
                    bg-primary/10
                    p-2.5
                    md:h-10
                    md:w-10
                "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#F5A623"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-5 w-5"
                    aria-hidden="true"
                >
                    <template
                        v-for="(shape, index) in stat.icon"
                        :key="index"
                    >
                        <polygon
                            v-if="shape.type === 'polygon'"
                            :points="shape.points"
                        />
                        <path
                            v-else-if="shape.type === 'path'"
                            :d="shape.d"
                        />
                    </template>
                </svg>
            </div>
            <div>
                <h4
                    class="
                        text-base
                        font-black
                        leading-none
                        text-white
                        md:text-lg
                    "
                >
                    {{ stat.title }}
                </h4>
                <p
                    class="
                        mt-1
                        md:whitespace-nowrap
                        text-xs
                        tracking-[.5px]
                        text-text-secondary-light
                    "
                >
                    {{ stat.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { stats } from '../../../data/home/heroStats'
</script>