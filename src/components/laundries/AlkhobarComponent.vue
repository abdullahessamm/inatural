<script setup>
import { onMounted, reactive } from "vue";
import VideoPreviewComponent from "../video/VideoPreviewComponent.vue";
import gsap from "gsap";

const state = reactive({
  vidOpened: false,
});

function openVid() {
  state.vidOpened = true;
  document.getElementById("laundry-intro-video").pause();
}

function closeVid() {
  state.vidOpened = false;
  document.getElementById("laundry-intro-video").play();
}

onMounted(() => {
  gsap.to("#laundry-intro-video", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#laundry-intro-title",
      start: () =>
        `top ${
          window.innerHeight / 2 -
          document.getElementById("laundry-intro-title").offsetHeight / 2
        }`,
      end: () =>
        `top ${
          window.innerHeight / 2 -
          document.getElementById("laundry-intro-video").offsetHeight / 2
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
    class="flex flex-wrap md:flex-nowrap w-full justify-content-between align-items-start gap-4 md:gap-8 px-3 md:px-8 relative z-3"
  >
    <!-- title and p -->
    <div class="w-full">
      <div id="laundry-intro-title" class="text-center md:text-right">
        <h2 class="text-2xl md:text-4xl text-primary font-bold arabic-font">
          مغاسل <span class="title-font">INatural</span> (الخبر)
        </h2>
        <p class="mt-3 md:text-xl line-height-3">
          تُعتبر مغسلة الخبر أول مغسلة تستبدل المواد الكيميائية بالمواد الطبيعية
          بالإضافة لوجود أحدث المعدات والتقنيات تُعد المغسلة نقطة بيع لجميع
          منتجاتنا الطبيعية التي تلبي كافة احتياج العائلة
        </p>
      </div>
    </div>

    <!-- video -->
    <div class="w-full">
      <div class="flex w-full justify-content-end">
        <video
          id="laundry-intro-video"
          src="https://res.cloudinary.com/dbhf5jeep/video/upload/v1767115162/laundries-intro_hxkixv.mp4"
          class="w-full border-round-xl shadow-3 cursor-pointer"
          style="object-fit: cover; opacity: 0"
          autoplay
          muted
          loop
          @click="openVid"
        ></video>
      </div>
    </div>
  </div>
  <VideoPreviewComponent
    vidSrc="https://res.cloudinary.com/dbhf5jeep/video/upload/v1767115162/laundries-intro_hxkixv.mp4"
    @close="closeVid"
    v-if="state.vidOpened"
  />
</template>
