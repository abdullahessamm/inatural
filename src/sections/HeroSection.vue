<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";

const logoElement = ref(null);
const titleElement = ref(null);

const emit = defineEmits(["blur:header"]);

onMounted(() => {
  // animate logo
  gsap.to(logoElement.value, {
    opacity: 0,
    scale: 0.5,
    duration: 5,
    scrollTrigger: {
      trigger: logoElement.value,
      start: () => `top ${logoElement.value.offsetTop}px`,
      end: () => `top 15px`,
      scrub: true,
      pin: true,
      onEnter: () => {
        emit("blur:header", false);
      },
      onEnterBack: () => {
        emit("blur:header", false);
      },
      onLeave: () => {
        emit("blur:header", true);
      },
      onLeaveBack: () => {
        emit("blur:header", true);
      },
    },
    ease: "none",
  });

  // animate title
  gsap.to(titleElement.value, {
    opacity: 0,
    scale: 0.95,
    duration: 5,
    scrollTrigger: {
      trigger: titleElement.value,
      scrub: true,
      start: () => `top ${titleElement.value.offsetTop}px`,
      end: "top 30%",
      markers: false,
      pin: true,
    },
    ease: "none",
  });
});
</script>

<template>
  <div
    class="w-full h-screen overflow-hidden flex flex-column gap-2 md:gap-4 justify-content-center align-items-center"
  >
    <img
      ref="logoElement"
      src="@assets/images/logo.png"
      alt="I Natural Logo"
      class="w-10rem md:w-15rem"
    />

    <div ref="titleElement">
      <h1
        class="text-2xl md:text-4xl font-bold text-primary arabic-font text-center px-3"
        style="max-width: 1200px"
      >
        حلول طبيعية متكاملة للحياة اليومية
      </h1>
  
      <p class="md:text-2xl text-center px-3" style="max-width: 1200px">
        نؤمن أن الطبيعة قادرة على تقديم حلول متكاملة للتنظيف والعناية. لذلك نطوّر
        منتجات تعتمد على مكونات طبيعية مختارة بعناية، لتكون بديلاً آمناً وفعّالاً
        للمواد الكيميائية ، مع تجربة استخدام راقية تحترم صحتك والبيئة
      </p>
    </div>

  </div>
</template>
