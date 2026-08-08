<template>
    <nav class="font-medium uppercase text-sm tracking-[2px]">
        <ul class="flex gap-10">
            <li v-for="link in navigationLinks" :key="link.name"
            class="text-text-secondary-light hover:text-text-light"
            >
           <RouterLink
  :to="link.path"
  exact-active-class="!text-primary after:scale-x-100"
  class="relative pb-2
         after:absolute
         after:bottom-0
         after:left-0
         after:h-0.5
         after:w-full
         after:origin-left
         after:scale-x-0
         after:bg-primary
         after:transition-transform
         after:duration-300
         "
>
  {{ link.name }}
</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import {navigationLinks} from '../../data/navigation';
</script>

<style lang="scss" scoped>

</style>