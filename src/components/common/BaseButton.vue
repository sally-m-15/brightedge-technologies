<template>
    <button
        type="button"
class="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs md:text-[14px] font-medium uppercase tracking-[1.5px] transition-all duration-300 ">
        <slot />

        <font-awesome-icon
            :icon="faArrowRight"
            :class="iconClass"
        />
    </button>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

defineProps({
  iconClass: {
    type: String,
    default: 'text-text-dark'
  }
})
</script>

<style lang="scss" scoped>
</style>