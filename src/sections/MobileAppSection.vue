<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import VideoComponent from "../components/video/VideoComponent.vue";
import VideoPreviewComponent from "../components/video/VideoPreviewComponent.vue";
import gsap from "gsap";
import CarsComponent from "../components/laundries/CarsComponent.vue";

const state = reactive({
  videoPrevOpen: false,
});

const secWrapper = ref();
const vidWrapper = ref();
const content1 = ref();
const content2 = ref();

// init scroll animations

onMounted(() => {
  if (window.innerWidth < 768) return;

  // hide contents
  content1.value.style.opacity = 0;
  content1.value.style.transform = 'translateY(50px)';
  content2.value.style.opacity = 0;
  content2.value.style.transform = 'translateY(50px)';


  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: secWrapper.value,
      start: () =>
        `top ${window.innerHeight / 2 - vidWrapper.value.offsetHeight / 2}`,
      end: "bottom 0",
      pin: false,
      pinSpacing: false,
      markers: false,
      scrub: false,
    },
  });

  tl.to(content1.value, {
    opacity: 1,
    translateY: 0,
    duration: 1,
    ease: "power2.out",
  }).to(content2.value, {
    opacity: 1,
    translateY: 0,
    duration: 1,
    ease: "power2.out",
  })
});
</script>

<template>
  <div
    ref="secWrapper"
    class="flex flex-wrap flex-wrap-reverse md:flex-nowrap w-full justify-content-between align-items-center gap-4 md:gap-8 px-3 md:px-8 relative z-3 h-auto md:h-screen py-8 md:py-0"
    style="height: 100vh;"
  >
    <!-- content -->
    <div>
      <div ref="content1" class="text-center md:text-right">
        <h2 class="text-2xl md:text-4xl text-primary font-bold arabic-font">
          مميزات التطبيق
        </h2>
        <p class="mt-3 md:text-xl line-height-3 text-center md:text-right">
          يقدم تطبيق I Natural ميزات فريدة تمكن العميل من طلب خدمات التنظيف
          والغسيل بمواد طبيعية من والي المنزل بأسطول من السيارات المجهزه. كما
          يمكن للمستخدمين طلب المنتجات مباشرة، متابعة الطلبات، واكتشاف نصائح
          صديقة للبيئة. من خلال واجهة سهلة الاستخدام، نهدف إلى تعزيز أسلوب حياة
          صحي بين مستخدمينا الذين وصل عددهم الي اكثر من 44000 عميل علي التطبيق.
          انضم إلينا في رحلتنا نحو بيئة أكثر صحة!
        </p>
      </div>
      <div ref="content2" class="text-center md:text-right mt-8">
        <h2 class="text-2xl md:text-4xl text-primary font-bold arabic-font">
          أهداف التطبيق
        </h2>
        <ul class="mt-3 md:text-xl line-height-3 px-4 text-right">
          <li>
            نعمل على بناء شبكة مغاسل شريكة في المدن والمحافظات التي لا نغطیها
            بعد.
          </li>
          <li>هذه المغاسل تُضاف إلى التطبيق ليظهر نطاقها للعملاء مباشرة.</li>
          <li>
            الشرط الأساسي: استخدام منتجات I Natural للتنظيف الطبيعي الآمن.
          </li>
          <li>
            بهذه الطريقة نتيح للعملاء في كل مكان طلب نفس الخدمة الموثوقة من خلال
            شركائنا.
          </li>
          <li>يفتح هذا النموذج المجال لتوسع سريع وفعال على مستوى المملكة.</li>
        </ul>
      </div>
    </div>

    <!-- video -->
    <div ref="vidWrapper" class="w-full flex justify-content-center">
      <div class="vid-container border-round-2xl shadow-2 overflow-hidden">
        <VideoComponent
          vid-src="https://res.cloudinary.com/dbhf5jeep/video/upload/v1767115149/mobile-app_ygoim0.mp4"
          auto-play
          muted
          loop
          preload
          @click:video="state.videoPrevOpen = true"
        />
      </div>
    </div>
  </div>

    <!-- cars -->
  <div class="w-full md:h-screen flex align-items-center relative py-5 md:py-0">
    <CarsComponent />
  </div>

  <!-- vid previewer -->
  <VideoPreviewComponent
    vid-src="https://res.cloudinary.com/dbhf5jeep/video/upload/v1767115149/mobile-app_ygoim0.mp4"
    v-if="state.videoPrevOpen"
    @close="() => (state.videoPrevOpen = false)"
  />
</template>

<style scoped>
.vid-container {
  width: 23rem;
  max-height: 60vh;
}
</style>
