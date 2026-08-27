<template>
  <button
    type="button"
    class="
      inline-flex 
      items-center 
      justify-between 
      gap-2 
      px-4
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
    <base-icon/>
  </button>
</template>

<script setup>
import BaseIcon from './BaseIcon.vue';

</script>

<style lang="scss" scoped></style>
