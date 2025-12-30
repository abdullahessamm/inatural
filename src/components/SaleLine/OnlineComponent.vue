<script setup>
import { onMounted, reactive } from "vue";
import VideoPreviewComponent from "../video/VideoPreviewComponent.vue";
import gsap from "gsap";

const state = reactive({
  vidOpened: false,
});

function openVid() {
  state.vidOpened = true;
  document.getElementById("online-video").pause();
}

function closeVid() {
  state.vidOpened = false;
  document.getElementById("online-video").play();
}

onMounted(() => {
  if (window.innerWidth < 768) {
    document.querySelector('#online-video').style.opacity = 1;

    return;
  } 

  gsap.to("#online-video", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#online-title",
      start: () =>
        `top ${
          window.innerHeight / 2 -
          document.getElementById("online-title").offsetHeight / 2
        }`,
      end: () =>
        `top ${
          window.innerHeight / 2 -
          document.getElementById("online-video").offsetHeight / 2
        }`,
      pin: true,
      markers: false,
      scrub: true,
    },
  });
});
</script>

<template>
  <div
    id="sales-online-section"
    class="flex flex-wrap md:flex-nowrap w-full justify-content-between align-items-start gap-4 md:gap-8 px-3 md:px-8 relative z-3"
  >
    <!-- video -->
    <div class="w-full">
      <div class="flex w-full justify-content-end">
        <video
          id="online-video"
          src="https://res.cloudinary.com/dbhf5jeep/video/upload/v1767115180/online_ogbljd.mp4"
          class="w-full border-round-xl shadow-3 cursor-pointer"
          style="object-fit: cover; opacity: 0"
          autoplay
          muted
          loop
          @click="openVid"
        ></video>
      </div>
    </div>

    <!-- title and p -->
    <div class="w-full">
      <div id="online-title" class="text-center md:text-right">
        <h2 class="text-2xl md:text-4xl text-primary font-bold arabic-font">
          الأونلاين (Online)
        </h2>
        <p class="mt-3 md:text-xl line-height-3">
          لدينا منصة إلكترونية سعودية متخصصة في بيع منتجات Natural| الطبيعية
          100% خالية من المواد الكيميائية الموقع يركز على الأمان والصحة
          والفعالية، مدعوم بشهادات جودة وتجارب عملاء ونسبة تكرار وصلت الي 86%
        </p>
      </div>
    </div>
  </div>
  <VideoPreviewComponent
    vidSrc="https://res.cloudinary.com/dbhf5jeep/video/upload/v1767115180/online_ogbljd.mp4"
    @close="closeVid"
    v-if="state.vidOpened"
  />
</template>
