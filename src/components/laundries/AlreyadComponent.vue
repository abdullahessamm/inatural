<script setup>
import gsap from "gsap";
import { onMounted, reactive, ref } from "vue";
import VideoComponent from "../video/VideoComponent.vue";
import VideoPreviewComponent from "../video/VideoPreviewComponent.vue";

const secWrapper = ref();
const pWrapper = ref();
const vidContainer = ref();

onMounted(() => {
  if (window.innerWidth < 768) return;

  vidContainer.value.style.transform = `translateX(100%)`;
});

onMounted(() => {
  if (window.innerWidth < 768) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: secWrapper.value,
      start: "top 0",
      end: "bottom 0",
      pin: true,
      pinSpacing: true,
      markers: false,
      scrub: true,
      onEnter: () => {
        pWrapper.value.style.opacity = 0;
      },
      onEnterBack: () => {
        pWrapper.value.style.opacity = 0;
      },
      onLeave: () => {
        pWrapper.value.style.opacity = 1;
      },
      onLeaveBack: () => {
        pWrapper.value.style.opacity = 1;
      },
    },
  });

  tl.to(vidContainer.value, {
    translateX: -window.innerWidth,
    duration: 3,
  });
});

// -------------- open video ---------------
const state = reactive({
  vidPrevOpen: false,
  vidPrevSrc: null,
});

function openVid(src) {
  state.vidPrevSrc = src;
  state.vidPrevOpen = true;
}
</script>

<template>
  <div ref="secWrapper" class="text-center w-full">
    <div
      class="w-full md:h-screen flex align-items-center justify-content-center"
    >
      <div class="w-full">
        <h2 class="text-3xl md:text-5xl text-primary font-bold">
          مغاسل INatural (الرياض)
        </h2>
        <div class="content-wrapper relative w-full">
          <!-- p -->
          <div
            ref="pWrapper"
            class="md:absolute w-full"
            style="transition: opacity 300ms ease"
          >
            <p
              class="px-3 mt-3 md:text-xl line-height-3 m-auto"
              style="max-width: 900px"
            >
              يعتبر فرع الرياض فرع مركزي وذلك لقدرته الاستيعابية الكبيرة التي
              تخدم 60 مغسلة فرعية ، لتلبية احتياجات السكان، والشركات، والفنادق،
              والمستشفيات والذي يقدم فيه جميع انواع الغسيل (ملابس أحذية سجاد
              وخدمات الدراي كلين) يتعبر نقطة بیع لكامل منتجات التنظيف والعناية
              الشخصية
            </p>
          </div>
          <!-- vids -->
          <div class="relative z-2 w-full mt-5 overflow-x-hidden">
            <div
              ref="vidContainer"
              class="flex flex-wrap md:flex-nowrap gap-4 md:gap-6 align-items-stretch justify-content-center md:justify-content-start md:h-30rem"
            >
              <div class="w-10rem md:w-20rem border-round-2xl shadow-2 overflow-hidden">
                <VideoComponent
                  vid-src="https://res.cloudinary.com/dbhf5jeep/video/upload/v1767126103/shoes_nhjfjx.mp4"
                  auto-play
                  loop
                  muted
                  preload
                  @click:video="openVid"
                />
              </div>

              <div class="w-10rem md:w-20rem border-round-2xl shadow-2 overflow-hidden">
                <VideoComponent
                  vid-src="https://res.cloudinary.com/dbhf5jeep/video/upload/v1767126191/hotels_ix3dbi.mp4"
                  auto-play
                  loop
                  muted
                  preload
                  @click:video="openVid"
                />
              </div>

              <div class="w-10rem md:w-20rem border-round-2xl shadow-2 overflow-hidden">
                <VideoComponent
                  vid-src="https://res.cloudinary.com/dbhf5jeep/video/upload/v1767126221/washing-machines_rcliie.mp4"
                  auto-play
                  loop
                  muted
                  preload
                  @click:video="openVid"
                />
              </div>

              <div class="w-10rem md:w-20rem border-round-2xl shadow-2 overflow-hidden">
                <VideoComponent
                  vid-src="https://res.cloudinary.com/dbhf5jeep/video/upload/v1767126239/carpets_agfszk.mp4"
                  auto-play
                  loop
                  muted
                  preload
                  @click:video="openVid"
                />
              </div>

              <div class="w-10rem md:w-20rem border-round-2xl shadow-2 overflow-hidden">
                <VideoComponent
                  vid-src="https://res.cloudinary.com/dbhf5jeep/video/upload/v1767126159/outside_hqlxcq.mp4"
                  auto-play
                  loop
                  muted
                  preload
                  @click:video="openVid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <VideoPreviewComponent
    :vid-src="state.vidPrevSrc"
    @close="state.vidPrevOpen = false"
    v-if="state.vidPrevOpen"
  />
</template>
