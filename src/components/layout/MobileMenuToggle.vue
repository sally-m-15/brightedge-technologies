<template>
    <button
        type="button"
        class="
            text-3xl
            text-text-secondary-light
            hover:text-text-light
            lg:hidden
        "
        aria-label="Toggle navigation menu"
        @click="$emit('toggle')"
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
    isOpen: {
        type: Boolean,
        default: false,
    },
})

defineEmits(['toggle'])
</script>