<template>
    <header class="bg-bg-dark/95 flex items-center justify-around py-3 ">
        <BrandLogo />
        <NavbarNavigation />
        <a
            href="https://wa.me/00966598100466"
            target="_blank"
            rel="noopener noreferrer"
        >
            <BaseButton>
                GET A CONSULTATION
            </BaseButton>
        </a>
    </header>
</template>

<script setup>
import BaseButton from '../common/BaseButton.vue';
import BrandLogo from '../common/BrandLogo.vue';
import NavbarNavigation from './NavbarNavigation.vue';




</script>

<style lang="scss" scoped>

</style>