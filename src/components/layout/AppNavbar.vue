<template>
    <header
        class="fixed z-50 w-full px-6 flex items-center justify-between bg-bg-dark/90 md:px-16 lg:px-6 xl:px-16 py-3"
    >
        <BrandLogo />
        <div class="hidden lg:block">
            <NavbarNavigation />
        </div>
        <div class="hidden lg:block">
<a
  href="https://wa.me/01029817421"
  target="_blank"
  rel="noopener noreferrer"
>
  <BaseButton
    class="
      bg-primary
      rounded-full
      text-text-dark
      hover:bg-primary-hover
      hover:shadow-2xl
      shadow-primary
      py-3
    "
  >
    GET A CONSULTATION
  </BaseButton>
</a>
        </div>
        <MobileMenuToggle
            :isOpen="isMenuOpen"
            @toggle="isMenuOpen = !isMenuOpen" 
        />
        <div
            v-if="isMenuOpen"
            class="absolute border-t border-border-light md:px-16 left-0 top-full w-full bg-bg-dark/95 px-6 py-6 lg:hidden"
        >
            <NavbarNavigation />
<a
  href="https://wa.me/201029817421"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Get a consultation via WhatsApp (opens in a new tab)"
>
  <BaseButton
    class="
      bg-primary
      rounded-xl
      text-text-dark
      hover:bg-primary-hover
      hover:shadow-2xl
      shadow-primary
      mt-8
      py-3
      "
  >
    GET A CONSULTATION
  </BaseButton>
</a>
        </div>
    </header>
</template>

<script setup>
import BaseButton from '../common/BaseButton.vue';
import BrandLogo from '../common/BrandLogo.vue';
import NavbarNavigation from './NavbarNavigation.vue';

import { onMounted, onUnmounted, ref } from 'vue';
import MobileMenuToggle from './MobileMenuToggle.vue';

const isMenuOpen = ref(false);


const handleScroll = () => {
    if (isMenuOpen.value) {
        isMenuOpen.value = false
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>

</style>