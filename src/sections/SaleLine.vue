<script setup>
import { onMounted } from "vue";
import PosComponent from "../components/SaleLine/PosComponent.vue";
import gsap from "gsap";
import BoothsComponent from "../components/SaleLine/BoothsComponent.vue";
import OnlineComponent from "../components/SaleLine/OnlineComponent.vue";

onMounted(() => {
  const logoAnimateOption = {
    opacity: 1,
    translateY: 0,
    duration: 0.5,
    ease: "ease.inOut",
    delay: 0,
  };

  for (const i of Array(3).keys()) {
    const num = i + 1;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".logo-animate-wrapper-" + num,
        start: "top 50%",
      },
    });

    tl.to(`.logo-animate-wrapper-${num} > .logo-animate-1`, logoAnimateOption)
      .to(`.logo-animate-wrapper-${num} > .logo-animate-2`, logoAnimateOption)
      .to(`.logo-animate-wrapper-${num} > .logo-animate-3`, logoAnimateOption)
      .to(`.logo-animate-wrapper-${num} > .logo-animate-4`, logoAnimateOption)
      .to(`.logo-animate-wrapper-${num} > .logo-animate-5`, logoAnimateOption)
      .to(`.logo-animate-wrapper-${num} > .logo-animate-6`, logoAnimateOption);
  }
});
</script>

<template>
  <div ref="sectionWrapperRef" class="sale-line-section-wrapper">
    <!-- content -->
    <div class="w-full h-full relative">
      <!-- map -->
      <PosComponent />

      <!-- booths -->
      <BoothsComponent />

      <!-- MT -->
      <div
        id="sales-mt-section"
        class="mt-container w-full h-screen flex flex-column gap-4 md:gap-6 justify-content-center align-items-center px-5 relative z-3"
      >
        <!-- title -->
        <div class="text-center">
          <h2 id="mt-title" class="text-3xl md:text-5xl text-primary font-bold">
            MT BRANDS
          </h2>
          <p class="mt-3 md:text-xl line-height-3" style="max-width: 900px">
            شراكتنا مع کېري سلاسل الميني ماركت بتغطية واسعة تشمل أكثر من 400 فرع
            في مختلف انحاء المملكة
          </p>
        </div>
        <!-- logos -->
        <div
          class="logo-animate-wrapper-1 flex flex-wrap gap-3 md:gap-7 justify-content-center align-items-center"
          style="max-width: 900px"
        >
          <img
            src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114973/saco_ks5mlw.png"
            class="logo-animate-1 w-8rem md:w-15rem"
          />
          <img
            src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114970/tamimi_yjh5c3.png"
            class="logo-animate-2 w-8rem md:w-15rem"
          />
          <img
            src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114970/manuel_vxe3pk.jpg"
            class="logo-animate-3 w-5rem md:w-9rem"
            style="border-radius: 50%"
          />
          <img
            src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114969/bin_dawood_zeupop.png"
            class="logo-animate-4 w-8rem md:w-15rem"
          />
          <img
            src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114970/lulu_csbwnf.png"
            class="logo-animate-5 w-4rem md:w-8rem"
          />
          <img
            src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114972/panda_xbr39j.png"
            class="logo-animate-6 w-5rem md:w-8rem"
          />
        </div>
      </div>
      <!-- GT brands -->
      <div
        id="sales-gt-section"
        class="gt-container w-full h-screen flex flex-column gap-4 md:gap-6 justify-content-center align-items-center px-5 relative z-3"
      >
        <!-- title -->
        <div class="text-center">
          <h2 id="gt-title" class="text-3xl md:text-5xl text-primary font-bold">
            GT BRANDS
          </h2>
          <p class="mt-3 md:text-xl line-height-3" style="max-width: 900px">
            منتجاتنا متوفرة لدي أبرز تجار ومحلات الجملة مما يعزز انتشارنا
            ويجعلنا الخيار الأفضل في السوق لتلبية كافة احتياجات العملاء
          </p>
        </div>
        <!-- logos -->
        <div
          class="logo-animate-wrapper-2 flex flex-wrap gap-3 md:gap-7 justify-content-center align-items-center"
        >
          <img
            src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114960/ala_kaifak_huuccl.png"
            class="logo-animate-1 w-8rem md:w-15rem"
          />
          <img
            src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114961/alsief_gallery_eeaxhs.png"
            class="logo-animate-2 w-8rem md:w-15rem"
          />
          <img
            src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114960/nice_otpewd.png"
            class="logo-animate-3 w-4rem md:w-8rem"
          />
          <img
            src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114960/alrugaib-logo_ad0gdc.png"
            class="w-8rem md:w-15rem border-round-2xl logo-animate-4"
          />
        </div>
      </div>
      <!-- E-Commerce -->
      <div
        id="sales-e-commerce-section"
        class="gt-container w-full h-screen flex flex-column gap-4 md:gap-6 justify-content-center align-items-center px-5 relative z-3"
      >
        <!-- title -->
        <div class="text-center">
          <h2 id="gt-title" class="text-3xl md:text-5xl text-primary font-bold">
            E-COMMERCE
          </h2>
          <p class="mt-3 md:text-xl line-height-3" style="max-width: 900px">
            وجودنا الرقمي من خلال التواجد على أكبر منصات التجارة الاليكترونية
            حيث نهدف الي تسهيل الوصول لمنتجاتنا الطبيعية عبر قنوات متعددة تخدم
            جميع العملاء.
          </p>
        </div>
        <!-- logos -->
        <div
          class="logo-animate-wrapper-3 flex flex-wrap gap-3 md:gap-7 justify-content-center align-items-center"
          style="max-width: 900px"
        >
          <img
            src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114950/nana_kz6qsr.png"
            class="logo-animate-1 w-7rem md:w-13rem"
          />
          <img
            src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114950/ninja_kgissu.png"
            class="logo-animate-2 w-7rem md:w-13rem"
          />
          <img
            src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114949/noon_zkou8b.png"
            class="logo-animate-3 w-7rem md:w-10rem"
          />
          <img
            src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114949/amazon_v63xj4.png"
            class="logo-animate-4 w-7rem md:w-13rem"
          />
          <img
            src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114951/hungerstation_cfuvgh.png"
            class="logo-animate-5 w-7rem md:w-13rem"
          />
        </div>
      </div>
      <!-- online -->
      <OnlineComponent />
    </div>
  </div>
</template>

<style scoped>
img {
  opacity: 0;
  transform: translateY(10px);
}
</style>
