<script setup>
import gsap from "gsap";
import { onMounted, ref } from "vue";

const secWrapper = ref();
const car1 = ref();
const car2 = ref();

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: secWrapper.value,
      start: "top 30%",
    },
  });

  tl.to(car1.value, {
    opacity: 1,
    translateY: 0,
    duration: 1,
    ease: "power1.out",
  }).to(car2.value, {
    opacity: 1,
    translateY: 0,
    duration: 1,
    ease: "power1.out",
  });
});
</script>

<template>
  <div ref="secWrapper" class="text-center w-full px-2">
    <div>
      <h2
        id="laundries-intro-title"
        class="text-3xl md:text-5xl text-primary font-bold"
      >
        سيارات INatural
      </h2>

      <!-- cars images -->
      <div class="grid grid-nogutter mt-5">
        <div class="col-12 md:col-6 px-2 flex justify-content-end">
          <img
            ref="car1"
            src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114939/back_s8my79.jpg"
            loading="eager"
            class="border-round-2xl shadow-2"
            style="
              opacity: 0;
              transform: translateY(50px);
              width: 100%;
              max-width: 40rem;
              object-fit: cover;
            "
          />
        </div>
        <div class="col-12 md:col-6 px-2 flex justify-content-start">
          <img
            ref="car2"
            src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114939/side_woloy7.jpg"
            loading="eager"
            class="border-round-2xl shadow-2"
            style="
              opacity: 0;
              transform: translateY(50px);
              width: 100%;
              max-width: 40rem;
              object-fit: cover;
            "
          />
        </div>
      </div>
      <!-- <div class="flex flex-wrap justify-content-center gap-3 mt-5">
        <img
          ref="car1"
          src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114939/back_s8my79.jpg"
          loading="eager"
          class="border-round-2xl shadow-2"
          style="
            opacity: 0;
            transform: translateY(50px);
            max-width: 90%;
            width: 40rem;
          "
        />
        <img
          ref="car2"
          src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114939/side_woloy7.jpg"
          loading="eager"
          class="border-round-2xl shadow-2"
          style="
            opacity: 0;
            transform: translateY(50px);
            max-width: 90%;
            width: 40rem;
          "
        />
      </div> -->
    </div>
  </div>
</template>
