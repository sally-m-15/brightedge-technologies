<template>
  <button
    type="button"
    class="
      inline-flex 
      items-center 
      justify-center 
      gap-2 
      px-4 
      py-3 
      text-xs 
      md:text-[14px] 
      font-black 
      uppercase 
      tracking-[1.5px] 
      transition-all 
      duration-300
      "
  >
    <slot />
<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="iconClass"
    class="h-4 w-4"
    aria-hidden="true"
>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
</svg>
  </button>
</template>

<script setup>

defineProps({
  iconClass: {
    type: String,
    default: 'text-text-dark',
  },
})
</script>

<style lang="scss" scoped></style>
