<script setup>
const props = defineProps(["title", "selected"]);
</script>

<template>
  <div
    class="btn px-3 md:px-5 py-2 md:py-3 text-sm md:text-lg font-bold border-1 inline-block border-round-lg cursor-pointer"
    :class="props.selected ? 'bg-primary text-white border-primary' : 'text-primary'"
  >
    {{ props.title }}
  </div>
</template>

<style scoped>
.btn {
  border-color: var(--primary-400);
  transition: all 150ms ease-in-out;
}

.btn:hover {
  /* color: #ffffff !important; */
  background-color: var(--primary-300);
}
</style>