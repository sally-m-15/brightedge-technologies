<template>
    <section v-observe class="text-text-light lg:py-20 py-24 px-10">
        <div class="lg:flex justify-between items-center pb-4">
            <SectionHeader
            tag="h2"
            eyebrow="APPLICATIONS"
            title="Built for every"
            accent="environment."
            description="our solutions adapt to a wide range of spaces and bring every environment to life."
            />
            <BaseButton v-observe  class="font-medium tracking-wide relative cursor-pointer hover:text-primary
            after:absolute px-0!  after:left-0 after:bottom-0 pb-2  after:h-0.5 after:w-full after:bg-primary
            " >view all applications</BaseButton>
        </div>
        <div>
            <ApplicationCard v-observe />
        </div>
    </section>
</template>

<script setup>
import BaseButton from '../common/BaseButton.vue';
import SectionHeader from '../common/SectionHeader.vue';
import ApplicationCard from './application/ApplicationCard.vue';


</script>

<style scoped>

</style>