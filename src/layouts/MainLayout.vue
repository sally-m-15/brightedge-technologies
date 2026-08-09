<template>
    <div class="min-h-screen bg-bg-dark">
        <AppNavbar />

        <main class="pt-24">
            <RouterView />
        </main>

        <AppFooter />
    </div>
</template>

<script setup>
import AppFooter from '@/components/layout/AppFooter.vue';
import AppNavbar from '@/components/layout/AppNavbar.vue';




</script>

<style lang="scss" scoped>

</style>