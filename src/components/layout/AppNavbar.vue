<template>
    <header
        class="relative px-6 flex items-center justify-between bg-bg-dark/95 md:px-16 py-3"
    >
        <BrandLogo />
        <div class="hidden lg:block">
            <NavbarNavigation />
        </div>
        <div class="hidden lg:block">
            <a
                href="https://wa.me/00966598100466"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm"
            >
                <BaseButton>
                    GET A CONSULTATION
                </BaseButton>
            </a>
        </div>
        <button
            type="button"
            class="text-3xl text-text-secondary-light hover:text-text-light lg:hidden"
            @click="isMenuOpen = !isMenuOpen"
            aria-label="Toggle navigation menu"
        >
            <font-awesome-icon
                :icon="isMenuOpen ? faXmark : faBars"
                class="text-xl"
            />
        </button>
        <div
            v-if="isMenuOpen"
            class="absolute border-t border-border-light md:px-16 left-0 top-full w-full bg-bg-dark/95 px-6 py-6 lg:hidden"
        >
            <NavbarNavigation />

            <a
                href="https://wa.me/00966598100466"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-6 block text-xs"
            >
                <BaseButton>
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

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

import { ref } from 'vue';

const isMenuOpen = ref(false);


</script>

<style lang="scss" scoped>

</style>