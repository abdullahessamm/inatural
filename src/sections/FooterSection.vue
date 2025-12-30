<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faSnapchat,
  faTiktok,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMobile,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <div class="bg-primary text-white relative z-1 py-5 px-4">
    <div class="m-auto" style="max-width: 1250px">
      <div class="grid grid-nogutter">
        <div class="col-12 md:col-4 px-5 mb-5 md:mb-0">
          <div>
            <img
              src="@assets/images/logo-white.png"
              alt="inatural logo"
              class="max-w-7rem"
            />
          </div>
          <!-- company description -->
          <p class="mt-3 text-xl">
            شركة دليل الشبكة للتجارة الوكيل الحصري لمنتجات INatural أنا طبيعي شركة رائدة في مجال تجارة مواد التنظيف تم تأسيسها في عام
            2013, تتميز بمنتجاتها المستخلصة من الطبيعة للحفاظ على النظام البيئي
          </p>
          <!-- social -->
          <div class="mt-3 flex gap-2 align-items-center">
            <!-- insta -->
            <a
              class="text-white no-underline text-2xl"
              href="https://www.instagram.com/inatural_sa/"
              target="_blank"
            >
              <FontAwesomeIcon :icon="faInstagram" />
            </a>
            <!-- x -->
            <a
              class="text-white no-underline text-2xl"
              href="https://x.com/inatural_sa"
              target="_blank"
            >
              <FontAwesomeIcon :icon="faXTwitter" />
            </a>
            <!-- tiktok -->
            <a
              class="text-white no-underline text-2xl"
              href="https://www.tiktok.com/@inatural_sa"
              target="_blank"
            >
              <FontAwesomeIcon :icon="faTiktok" />
            </a>
            <!-- snapchat -->
            <a
              class="text-white no-underline text-2xl"
              href="https://www.snapchat.com/@inaturl"
              target="_blank"
            >
              <FontAwesomeIcon :icon="faSnapchat" />
            </a>
            <!-- youtube -->
            <a
              class="text-white no-underline text-2xl"
              href="https://www.youtube.com/@inatural_sa"
              target="_blank"
            >
              <FontAwesomeIcon :icon="faYoutube" />
            </a>
          </div>

          <div class="mt-5 flex gap-2 align-items-center">
            <img
              src="@assets/images/commerce_logo.png"
              alt="sa commerical logo"
              class="w-4rem"
            />
            <div class="flex flex-column gap-1">
              <span>السجل التجاري</span>
              <b>2051028663</b>
            </div>
          </div>
        </div>

        <div class="col-12 md:col-4 px-5 mb-5 md:mb-0">
          <h2>تواصل معنا</h2>
          <div class="mt-3 flex flex-column gap-3">
            <div class="flex align-items-center gap-2">
              <FontAwesomeIcon class="text-2xl" :icon="faWhatsapp" />
              <b class="" style="direction: ltr">+966581622363</b>
            </div>
            <div class="flex align-items-center gap-2">
              <FontAwesomeIcon class="text-2xl" :icon="faMobile" />
              <b class="" style="direction: ltr">+966 920020454</b>
            </div>
            <div class="flex align-items-center gap-2">
              <FontAwesomeIcon class="text-2xl" :icon="faPhone" />
              <b class="" style="direction: ltr">+966581622363</b>
            </div>
            <div class="flex align-items-center gap-2">
              <FontAwesomeIcon class="text-2xl" :icon="faEnvelope" />
              <b class="" style="direction: ltr">info@inaturl.com</b>
            </div>
          </div>
        </div>
        <div class="col-12 md:col-4 px-5">
          <h2>روابط مهمة</h2>
          <div class="mt-3 flex flex-column gap-3">
            <a
              class="text-white no-underline"
              href="https://inaturl.com/%D8%B9%D9%86-%D8%A7%D9%8A%D8%A7-%D9%83%D9%84%D9%8A%D9%86-%D8%A8%D8%B1%D9%88/page-1033453770"
              target="_blank"
              >عن أنا طبيعي</a
            >
            <a
              class="text-white no-underline"
              href="https://inaturl.com/%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9-%D8%A7%D9%84%D8%A5%D8%B1%D8%AC%D8%A7%D8%B9/page-6253274"
              target="_blank"
              >سياسة الإسترجاع</a
            >
            <a
              class="text-white no-underline"
              href="https://inaturl.com/%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85-%D9%88%D8%A7%D9%84%D8%AE%D8%B5%D9%88%D8%B5%D9%8A%D8%A9/page-668233552"
              target="_blank"
              >سياسة الخصوصية</a
            >
          </div>

          <div class="mt-5 flex gap-2 align-items-center">
            <img
              src="@assets/images/vat-logo.png"
              alt="sa commerical logo"
              class="h-3rem"
            />
            <div class="flex flex-column gap-1">
              <span>الرقم الضريبي</span>
              <b>310149142600003</b>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- separetor -->
    <div class="mt-5 mb-3 border-top-1 border-white-alpha-50"></div>

    <!-- copyright -->
     <div class="flex justify-content-between px-4">
      <div class="flex gap-2">
        <span>الحقوق محفوظة | 2025</span> <a class="text-white" href="https://inaturl.com/" target="_blank">متجر انا طبيعي | INatural</a>
      </div>
      <div>
        Powered By <b>(SWIFT CARE)</b>
      </div>
     </div>
  </div>
</template>
