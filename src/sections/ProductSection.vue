<script setup>
import gsap from "gsap";
import { onMounted, ref } from "vue";

const vidRef = ref(null);
const titleRef = ref(null);

onMounted(() => {
  gsap.fromTo(titleRef.value, {
    translateX: 20
  }, {
    opacity: 1,
    translateX: 0,
    duration: 1,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: vidRef.value,
      markers: false,
      start: () => `top ${(window.innerHeight / 2) - (vidRef.value.offsetHeight / 2)}`,
      end: () => `bottom 0`,
    },
  });
});
</script>

<template>
  <div ref="secRef" class="grid flex-wrap-reverse grid-nogutter gap-4 md:gap-0">
    <!-- title & p -->
    <div class="col-12 lg:col-8 flex align-items-center">
      <div
        ref="titleRef"
        class="title-wrapper mx-auto"
        style="opacity: 0"
      >
        <h2 class="title text-3xl md:text-5xl mt-3">
          منتجات تنظيف متخصصة وفعالة وشاملة
        </h2>
        <p class="text-lg mt-5 line-height-3">
          تقدم <b class="text-primary">I Natural</b> منتجات تنظيف آمنة ونباتية مصنوعة من مكونات طبيعية عالية الجودة. تركيباتنا لطيفة على البشرة والأقمشة، وفعّالة في إزالة الأوساخ والبقع. من اختيار النباتات وحتى وصول المنتج النهائي إليك، نركز على النقاء والجودة والاستدامة، لتستمتع بتجربة تنظيف طبيعية حقيقية.
        </p>
      </div>
    </div>
    <!-- vid -->
    <div class="col-12 lg:col-4 align-items-center flex justify-content-center">
      <div ref="vidRef" class="px-0 md:px-2">
        <video
          src="https://res.cloudinary.com/dbhf5jeep/video/upload/v1767115153/product_tv1zo0.mp4"
          class="md:border-round-2xl shadow-5 w-screen h-screen md:w-auto md:h-auto"
          style="object-fit: cover; max-width: 500px; max-height: 40rem"
          autoplay
          muted
          loop
        ></video>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title-wrapper {
  max-width: 45rem;
  width: 90%;
}

.title,
.subtitle {
  color: var(--primary-500);
  text-transform: uppercase;
}

.subtitle {
  font-weight: 500;
}

.title {
  font-weight: bolder;
}
</style>
