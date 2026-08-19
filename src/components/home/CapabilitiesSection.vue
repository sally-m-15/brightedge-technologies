<template>
    <section v-observe class="text-text-light lg:py-20 py-24 px-10 container mx-auto">
        <div class="lg:flex justify-between items-center pb-4">
            <SectionHeader 
            eyebrow="CAPABILITIES"
            title="A modular system"
            subtitle="for every"
            accent="environment."
            description="Scalable lighting and control solutions engineered to adapt to the way people live, work, and gather."
            />
            <BaseButton v-observe  class="font-medium tracking-wide relative cursor-pointer hover:text-primary
            after:absolute px-0!  after:left-0 after:bottom-0 pb-2  after:h-0.5 after:w-full after:bg-primary
            " >view all capabilties</BaseButton>
        </div>
            <CapabilityCard v-observe />
    </section>
</template>

<script setup>
import BaseButton from '../common/BaseButton.vue';
import SectionHeader from '../common/SectionHeader.vue';
import CapabilityCard from './capabilities/CapabilityCard.vue';
import { vObserve } from '@/directives/vObserve.js';

</script>

<style scoped>

</style>