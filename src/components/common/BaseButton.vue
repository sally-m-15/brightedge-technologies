<template>
    <button
        type="button"
        class="flex justify-center items-center gap-2 transition-all tracking-[1.5px] duration-300
        bg-primary rounded-full px-4 py-3 font-medium uppercase text-text-dark
        hover:shadow-2xl shadow-primary hover:bg-primary-hover"
    >
        <slot />

        <font-awesome-icon
            :icon="faArrowRight"
            class="text-text-dark"
        />
    </button>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
</script>

<style lang="scss" scoped>
</style>