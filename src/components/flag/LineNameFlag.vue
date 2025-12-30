<script setup>
const props = defineProps({
  name: String
})
</script>

<template>
 <div class="py-1 px-3 md:px-5 bg-primary inline-block border-round-right-3xl">
  <span class="md:text-2xl text-white">{{ props.name }}</span>
 </div>
</template>
