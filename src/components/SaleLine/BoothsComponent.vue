<script setup>
import { onMounted } from "vue";
import ScrollTrigger from "gsap/ScrollTrigger";

onMounted(() => {
  if (window.innerWidth < 768) return;

  const startFrom =
    window.innerHeight / 2 -
    document.getElementById("booths-title").offsetHeight / 2;

  new ScrollTrigger({
    trigger: "#booths-title",
    start: () => `top ${startFrom}`,
    end: () =>
      `top ${
        startFrom -
        document.getElementById("sales-booths-section").offsetHeight
      }`,
    pin: true,
    markers: false,
  });
});
</script>

<template>
  <div
    id="sales-booths-section"
    class="flex flex-wrap-reverse flex-wrap md:flex-nowrap w-full justify-content-between align-items-start md:gap-8 px-3 md:px-8 relative z-3"
  >
    <!-- photos -->
    <div class="w-full pt-8">
      <div class="flex w-full justify-content-end">
        <img class="h-auto w-25rem" src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114843/15_n1fyro.png" alt="booth 15" />
      </div>
      <div class="flex w-full justify-content-start">
        <img class="h-auto w-25rem" src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114824/14_pec5pz.png" alt="booth 14" />
      </div>
      <div class="flex w-full justify-content-end">
        <img class="h-auto w-25rem" src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114829/13_hmjsfy.png" alt="booth 13" />
      </div>
      <div class="flex w-full justify-content-start">
        <img class="h-auto w-25rem" src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114825/12_fk5esv.png" alt="booth 12" />
      </div>
      <div class="flex w-full justify-content-end">
        <img class="h-auto w-25rem" src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114848/11_jwucjh.png" alt="booth 11" />
      </div>
      <div class="flex w-full justify-content-start">
        <img class="h-auto w-25rem" src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114837/10_t2tg5n.png" alt="booth 10" />
      </div>
      <div class="flex w-full justify-content-end">
        <img src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114821/1_r8sy17.jpg" alt="booth 1" />
      </div>
      <div class="flex w-full justify-content-start">
        <img src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114819/2_iqmtkm.jpg" alt="booth 2" />
      </div>
      <div class="flex w-full justify-content-end">
        <img src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114821/3_muevwi.jpg" alt="booth 3" />
      </div>
      <div class="flex w-full justify-content-start">
        <img src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114820/4_ubizjf.jpg" alt="booth 4" />
      </div>
      <div class="flex w-full justify-content-end">
        <video src="https://res.cloudinary.com/dbhf5jeep/video/upload/v1767114843/6_tgd4uf.mp4" autoplay muted loop />
      </div>
      <div class="flex w-full justify-content-start">
        <video src="https://res.cloudinary.com/dbhf5jeep/video/upload/v1767114872/9_j4u9h2.mp4" autoplay muted loop />
      </div>
    </div>

    <!-- title and p -->
    <div class="w-full">
      <div id="booths-title" class="text-center md:text-right">
        <h2 class="text-2xl md:text-4xl text-primary font-bold arabic-font">
          قسم نقاط البيع (POS)
        </h2>
        <p class="mt-3 md:text-xl line-height-3">
          حضور استثنائي يضع <b class="text-primary">I Natural</b> كـ المنظف الوحيد داخل أكبر مولات المملكة،
          عبر نقاط بيع مباشرة تخلق تجربة تفاعلية وتواصل مباشر مع العملاء في قلب
          وجهات التسوق.
          <br />
          <br />
          <ul class="mx-4 text-xl">
            <li>أكثر من 25 نقطة بيع داخل المملكة</li>
            <li>تغطية 8 مدن رئيسية</li>
            <li>توسّع محلي وخارجي قيد التنفيذ</li>
          </ul>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
img,
video {
  width: 350px;
  height: 500px;
  max-width: 100%;
  object-fit: cover;
  margin-top: 50px;
  border-radius: 20px;
}
</style>
