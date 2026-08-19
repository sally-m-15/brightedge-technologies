<template>
    <button
        type="button"
        class="
            text-3xl
            text-text-secondary-light
            hover:text-text-light
            lg:hidden
        "
        :aria-label="isOpen ? 'Close navigation menu' : 'Open navigation menu'"
        :aria-expanded="isOpen"
        @click="$emit('toggle')"
    >
        <svg
  v-if="!isOpen"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linejoin="round"
  aria-hidden="true"
  class="size-6"
>
  <path d="M4 6h16" />
  <path d="M4 12h16" />
  <path d="M4 18h16" />
</svg>

<svg
  v-else
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linejoin="round"
  aria-hidden="true"
  class="size-6"
>
  <path d="M6 6l12 12" />
  <path d="M18 6L6 18" />
</svg>
    </button>
</template>

<script setup>

defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    },
})

defineEmits(['toggle'])
</script>