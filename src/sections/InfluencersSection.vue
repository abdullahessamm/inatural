<script setup lang="ts">
import VideoComponent from "../components/video/VideoComponent.vue";
import gsap from "gsap";
import { onMounted, reactive } from "vue";
import VideoPreviewComponent from "../components/video/VideoPreviewComponent.vue";

const state = reactive({
  vidPrevOpened: false,
  vidPrevSrc: null,
});

// preview video
function openVid(src) {
  state.vidPrevOpened = true;
  state.vidPrevSrc = src;
}

onMounted(() => {
  if (window.innerWidth < 768) return;

  gsap.set(".vid-wrapper", {
    opacity: 0,
    scale: 0.8,
    transformOrigin: "center",
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#influencers-sec-wrapper",
      start: "top 30%",
    },
  });

  // animate videos
  document.querySelectorAll(".vid-wrapper").forEach((vidWrapper) => {
    tl.to(vidWrapper, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.2,
    });
  });
});
</script>

<template>
  <div id="influencers-sec-wrapper" class="text-center w-full px-2 mt-5">
    <div>
      <h2 class="text-3xl md:text-5xl text-primary font-bold">
        آراء المشاهير في منتجاتنا
      </h2>
      <p class="mt-3 md:text-xl line-height-3 m-auto" style="max-width: 900px">
        آراء وتجارب حقيقية من صناع محتوى جرّبوا منتجاتنا
      </p>
    </div>

    <!-- videos -->
    <div
      class="relative z-1 flex flex-wrap justify-content-center gap-3 md:gap-7 mx-3 md:mx-5 py-5"
    >
      <div
        class="vid-wrapper w-9rem h-15rem md:w-20rem md:h-20rem border-round-xl overflow-hidden shadow-3"
      >
        <VideoComponent vid-src="https://res.cloudinary.com/dbhf5jeep/video/upload/v1767115380/yasser1_dpo55z.mp4" auto-play muted loop @click:video="openVid" />
      </div>
      
      <div
        class="vid-wrapper w-9rem h-15rem md:w-20rem md:h-20rem border-round-xl overflow-hidden shadow-3"
      >
        <VideoComponent vid-src="https://res.cloudinary.com/dbhf5jeep/video/upload/v1767116671/rahaf_yttobf.mp4" show-play-icon @click:video="openVid" title="فيديو رهف القحطانى" />
      </div>

      <div
        class="vid-wrapper w-9rem h-15rem md:w-20rem md:h-20rem border-round-xl overflow-hidden shadow-3"
      >
        <VideoComponent vid-src="https://res.cloudinary.com/dbhf5jeep/video/upload/v1767116790/abdulrahman_xbt0gd.mp4" show-play-icon @click:video="openVid" title="فيديو عبدالرحمن المطيري" />
      </div>
      <div
        class="vid-wrapper w-9rem h-15rem md:w-20rem md:h-20rem border-round-xl overflow-hidden shadow-3"
      >
        <VideoComponent vid-src="https://res.cloudinary.com/dbhf5jeep/video/upload/v1767117544/nayef_zwqgce.mp4" show-play-icon @click:video="openVid" title="فيديو نايف حمدان" />
      </div>
      <div
        class="vid-wrapper w-9rem h-15rem md:w-20rem md:h-20rem border-round-xl overflow-hidden shadow-3"
      >
        <VideoComponent vid-src="https://res.cloudinary.com/dbhf5jeep/video/upload/v1767115709/mnal_hs2o5r.mp4" show-play-icon @click:video="openVid" />
      </div>
      <div
        class="vid-wrapper w-9rem h-15rem md:w-20rem md:h-20rem border-round-xl overflow-hidden shadow-3"
      >
        <VideoComponent vid-src="https://res.cloudinary.com/dbhf5jeep/video/upload/v1767115573/mona_gqkvwd.mp4" show-play-icon @click:video="openVid" />
      </div>
      <div
        class="vid-wrapper w-9rem h-15rem md:w-20rem md:h-20rem border-round-xl overflow-hidden shadow-3"
      >
        <VideoComponent vid-src="https://res.cloudinary.com/dbhf5jeep/video/upload/v1767115757/nora_rq5km4.mov" show-play-icon @click:video="openVid" />
      </div>
      <div
        class="vid-wrapper w-9rem h-15rem md:w-20rem md:h-20rem border-round-xl overflow-hidden shadow-3"
      >
        <VideoComponent vid-src="https://res.cloudinary.com/dbhf5jeep/video/upload/v1767115576/somaya_yh7xle.mp4" show-play-icon @click:video="openVid" />
      </div>
    </div>
  </div>

  <!-- video previewer -->
  <VideoPreviewComponent
    :vid-src="state.vidPrevSrc"
    @close="state.vidPrevOpened = false"
    v-if="state.vidPrevOpened && state.vidPrevSrc"
  />
</template>
