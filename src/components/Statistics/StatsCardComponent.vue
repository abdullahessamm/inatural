<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  value: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    default: 1.2, // بالثواني
  },
});

const displayValue = ref(0);
const cardRef = ref(null);

let tween;

onMounted(() => {
  tween = gsap.fromTo(
    displayValue,
    { value: 0 },
    {
      value: props.value,
      duration: props.duration,
      ease: "power2.out",
      roundProps: "value",
      scrollTrigger: {
        trigger: cardRef.value,
        start: "top 70%",
        once: true,
      },
    }
  );
});

onBeforeUnmount(() => {
  tween?.scrollTrigger?.kill();
  tween?.kill();
});
</script>

<template>
  <p
    ref="cardRef"
    class="w-full sc-stats-card flex flex-column gap-2 py-4 justify-content-center align-items-center border-round-xl"
    style="cursor: default"
  >
    <span class="text-2xl md:text-6xl font-bold">
      {{ displayValue }}<slot name="number-suffix" />
    </span>

    <span class="md:text-xl text-center">
      <slot name="title" />
    </span>
  </p>
</template>

<style lang="css" scoped>
.sc-stats-card {
  color: #f4f4f4;
  border: 1px solid #f4f4f4;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
}
.sc-stats-card:hover {
  color: #f4f4f4;
  border-color: var(--primary-400);
  background-color: var(--primary-400);
}
</style>
