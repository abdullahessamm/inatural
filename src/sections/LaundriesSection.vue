<script setup lang="ts">
import AlkhobarComponent from "../components/laundries/AlkhobarComponent.vue";
import AlreyadComponent from "../components/laundries/AlreyadComponent.vue";
import IntroComponent from "../components/laundries/IntroComponent.vue";
</script>

<template>
  <!-- intro -->
  <div class="w-full h-screen flex align-items-center relative">
    <IntroComponent />
  </div>

  <!-- alkhobar -->
  <div id="laundries-section-khobar" class="w-full h-screen flex align-items-center">
    <AlkhobarComponent />
  </div>

  <!-- reyad -->
  <div id="laundries-section-reyad" class="w-full flex align-items-center">
    <AlreyadComponent />
  </div>
</template>
