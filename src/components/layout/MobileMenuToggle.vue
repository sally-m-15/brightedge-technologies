<template>
            <button
            type="button"
            class="text-3xl text-text-secondary-light hover:text-text-light lg:hidden"
            @click="$emit('toggle')"
            aria-label="Toggle navigation menu"
        >
            <font-awesome-icon
                :icon="isOpen ? faXmark : faBars"
                class="text-xl"
            />
        </button>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

defineProps({
    isOpen: Boolean,
})

defineEmits(['toggle'])
</script>

<style lang="scss" scoped>

</style>