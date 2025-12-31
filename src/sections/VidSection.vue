<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";

const vidSectionWrapperRef = ref(null);
const vidWrapperRef = ref(null);
const maskRef = ref(null);
const contentHRef = ref(null);
const contentPRef = ref(null);

const emit = defineEmits(["blur:header"]);

onMounted(() => {
  if (window.innerWidth < 768) return;

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: vidSectionWrapperRef.value,
      start: "top top",
      end: () => `bottom -${window.innerHeight * 2}`,
      scrub: true,
      markers: false,
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
  });

  timeline
    .to(maskRef.value, {
      scale: 1.1,
      delay: 1,
      duration: 3,
      ease: "none",
    })
    .to(vidWrapperRef.value, {
      opacity: 0,
      duration: 1,
      delay: 2,
      ease: "none",
    })
    .fromTo(
      contentHRef.value,
      {
        opacity: 0,
        translateY: 100,
      },
      {
        opacity: 1,
        translateY: 0,
        duration: 1,
        ease: "none",
      }
    )
    .fromTo(
      contentPRef.value,
      {
        opacity: 0,
        translateY: 100,
      },
      {
        opacity: 1,
        translateY: 0,
        duration: 1,
        ease: "none",
      }
    );
});
</script>

<template>
  <div ref="vidSectionWrapperRef" class="vid-sec-wrapper">
    <div class="vid-sec-container h-screen relative">
      <!-- content -->
      <div
        class="absolute top-0 left-0 w-full h-full flex justify-content-center align-items-center gap-2"
      >
        <div class="content-wrapper text-center px-3">
          <h2
            ref="contentHRef"
            class="text-primary text-4xl md:text-6xl font-bold arabic-font"
          >
            التصنيع
          </h2>
          <p
            ref="contentPRef"
            class="text-lg md:text-2xl mt-5"
            style="direction: rtl"
          >
            مصانع I Natural متخصصة في تصنيع حلول طبيعية عالية الجودة تُعد بديلًا
            آمنًا وفعّالًا للمواد الكيميائية. نعتمد على مكونات نباتية مختارة
            وتقنيات تصنيع دقيقة تضمن الأداء، الأمان، والاستدامة، لتقديم منتجات
            طبيعية متكاملة تعبّر عن أسلوب حياة صحي وصديق للبيئة
          </p>
        </div>
      </div>
      <!-- media -->
      <div
        ref="vidWrapperRef"
        class="m-auto overflow-hidden relative md:block hidden"
        style="width: 100%; height: 100%"
      >
        <!-- video -->
        <video
          class="w-full h-full"
          style="object-fit: cover"
          src="https://res.cloudinary.com/dbhf5jeep/video/upload/v1767211449/man-video_sfas3o.mp4"
          autoplay
          loop
          muted
        />
        <!-- mask -->
        <img
          ref="maskRef"
          src="@svg/man-mask.svg"
          class="absolute top-0 left-0 w-full h-full"
          style="transform-origin: 45% center; transform: scale(90)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.vid-sec-wrapper {
  height: 100vh;
  direction: ltr;
}

.content-wrapper {
  max-width: 1000px;
}
</style>
