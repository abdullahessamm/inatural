<script setup>
const props = defineProps({
  vidSrc: String
})

const emit = defineEmits(['close'])
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-screen bg-black-alpha-80 px-3" style="z-index: 8 !important;">
    <div class="w-full h-full flex justify-content-center align-items-center" @click.self="() => emit('close')">
      <video :src="props.vidSrc" controls autoplay style="max-width: 90%; max-height: 90%;"></video>
    </div>
  </div>
</template>
