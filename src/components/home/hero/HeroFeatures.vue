<template>
    <div
        class="
            flex flex-col gap-4
            rounded-2xl
            border border-primary/40
            bg-black/60
            py-6
            ps-2
            shadow shadow-primary
            backdrop-blur-md
        "
    >
        <div
            v-for="feature in heroFeatures"
            :key="feature.title"
            class="flex items-center gap-4"
        >
            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#F5A623"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                >
                    <template
                        v-for="(shape, index) in feature.icon"
                        :key="index"
                    >
                        <path
                            v-if="shape.type === 'path'"
                            :d="shape.d"
                        />
                        <circle
                            v-else-if="shape.type === 'circle'"
                            :cx="shape.cx"
                            :cy="shape.cy"
                            :r="shape.r"
                            :fill="shape.fill"
                        />
                    </template>
                </svg>
            </div>
            <div>
                <h2 class="text-sm font-semibold text-white">
                    {{ feature.title }}
                </h2>
                <p class="mt-0.5 text-xs text-gray-400">
                    {{ feature.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { heroFeatures } from '../../../data/home/heroFeatures'
</script>