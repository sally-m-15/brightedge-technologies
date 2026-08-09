<template>
    <div class="flex-col flex gap-8 items-start w-full h-full  ">
    <p
    class="flex w-fit items-center gap-3 rounded-full border border-border-dark px-5 py-2
     text-xs font-medium uppercase md:tracking-[0.2em] text-text-secondary-light"
    >

    <span
    class="h-2 w-2 rounded-full bg-gold bg-primary"
    ></span>
  Intelligent Lighting Systems
</p>
<h1 class="flex flex-col text-5xl font-bold text-text-light tracking-[2px]">
    Light that
    <span>
        <span class="text-primary">thinks</span>
        with
    </span>
    your space.
</h1>
<p class=" text-md md:w-110 tracking-widest   text-text-secondary-light">
    BrightEdge designs and engineers precision architectural lighting
    and smart control systems that adapt to how people live, work, and gather.
</p>
       <div class="flex flex-col md:flex-wrap gap-6">
        <a
                href="https://wa.me/00966598100466"
                target="_blank"
                rel="noopener noreferrer"
                class="block text-xs"
            >
                <BaseButton    class="
      bg-primary
      rounded-xl
      text-text-dark
      hover:bg-primary-hover
      hover:shadow-2xl
      shadow-primary
    "
    >
  GET A CONSULTATION
</BaseButton>
            </a>

            <router-link :to="{name: 'products'}">

                    <BaseButton iconClass="text-text-light"
class="bg-bg-dark text-text-light px-9! rounded-xl hover:text-primary-hover  border! border-border-light! hover:border-primary!">
  VIEW PROJECTS
</BaseButton>
            </router-link>

       </div>
    </div>

</template>

<script setup>
import BaseButton from '@/components/common/BaseButton.vue';


</script>

<style scoped>

</style>