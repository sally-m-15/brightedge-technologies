<template>
  <picture class="block w-full h-full" :style="style">
    <source :media="media" :srcset="srcset" :width="sourceWidth" :height="sourceHeight" />
    <img
      :src="src"
      :alt="alt"
      :loading="loading"
      :width="imgWidth"
      :height="imgHeight"
      class="w-full h-full object-cover"
      :fetchpriority="fetchpriority"
    />
  </picture>
</template>

<script setup>
defineProps({
  media: {
    type: String,
    required: true,
  },
  style: {
    type: [String, Number],
    required: '',
  },
  fetchpriority: {
    type: String,
    default: 'high',
    required: '',
  },
  srcset: {
    type: String,
    required: true,
  },
  sourceWidth: {
    type: [Number, String],
    default: '',
  },
  sourceHeight: {
    type: [Number, String],
    default: '',
  },
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  loading: {
    type: String,
    default: 'lazy',
  },
  imgWidth: {
    type: [Number, String],
    default: '',
  },
  imgHeight: {
    type: [Number, String],
    default: '',
  },
})
</script>
