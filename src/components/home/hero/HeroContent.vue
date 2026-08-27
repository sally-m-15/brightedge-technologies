<template>
  <div class="flex w-full flex-col items-start gap-10 ps-10">
    <p
      class="flex w-fit items-center gap-3 rounded-full border border-border-dark px-5 py-2 text-xs font-medium uppercase text-text-secondary-light md:tracking-[0.2em]"
    >
      <span  class="h-2 w-2 rounded-full bg-gold bg-primary"></span>
      Intelligent Lighting Systems
    </p>
    <h1 v-observe 
      class="flex flex-col text-5xl font-black tracking-[2px] text-text-light md:text-[60px] xl:text-[80px]"
    >
      Light that
      <span>
        <span class="bg-linear-to-r from-[#2a1b0f] to-primary bg-clip-text text-transparent">
          thinks</span
        >
        with
      </span>
      your space.
    </h1>
    <p
      class="md:text-lg tracking-wider text-text-secondary-light md:w-120 text-xs font-medium pe-6"
    >
      BrightEdge designs and engineers precision architectural lighting and smart control systems
      that adapt to how people live, work, and gather.
    </p>
    <div class="flex w-full flex-col items-start gap-6 py-4 md:flex-row lg:flex-col xl:flex-row">
      <a
        href="https://wa.me/201029817421"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block"
        aria-label="Get a consultation via WhatsApp (opens in a new tab)"
      >
        <BaseButton
          class="rounded-xl bg-primary text-text-dark py-3 whitespace-nowrap shadow-primary hover:bg-primary-hover hover:shadow-2xl"
        >
          GET A CONSULTATION
        </BaseButton>
      </a>
      <RouterLink :to="{ name: 'products' }" class="inline-block">
        <BaseButton
          class="rounded-xl border! border-border-light! py-3 whitespace-nowrap bg-bg-dark px-10! text-text-light hover:border-primary! hover:text-primary-hover"
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

<style scoped></style>
