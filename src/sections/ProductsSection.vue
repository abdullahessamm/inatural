<script setup>
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";

const secWrapper = ref();
const imgsContainer = ref();

onMounted(() => {
  if (window.innerWidth < 768) return;

  const imgs = document.querySelectorAll(".item-img");

  // hide all images
  imgs.forEach((img) => {
    img.style.opacity = 0;
  });

  // init scroll trigger
  ScrollTrigger.create({
    trigger: secWrapper.value,
    start: () =>
      `top ${window.innerHeight / 2 - imgsContainer.value.offsetHeight / 2}`,
    end: "bottom 0",
    pin: imgsContainer.value,
    pinSpacing: true,
    scrub: true,
    markers: false,
  });

  // show image if it's content in view
  imgs.forEach((img) => {
    const contentId = img.getAttribute("data-img-for");

    ScrollTrigger.create({
      trigger: `#${contentId}`,
      start: () =>
        `top ${window.innerHeight / 2 + imgsContainer.value.offsetHeight / 2}`,
      end: () =>
        `bottom ${
          window.innerHeight / 2 - imgsContainer.value.offsetHeight / 2
        }`,
      onEnter: () => {
        img.style.opacity = 1;
      },
      onLeave: () => {
        img.style.opacity = 0;
      },
      onEnterBack: () => {
        img.style.opacity = 1;
      },
      onLeaveBack: () => {
        img.style.opacity = 0;
      },
    });
  });
});
</script>

<template>
  <div ref="secWrapper" class="products-sec-wrapper px-8 relative z-1 hidden md:block">
    <div class="flex justify-content-between align-items-start gap-4 w-full">
      <!-- images container -->
      <div ref="imgsContainer" class="flex justify-content-center w-full">
        <!-- images wrapper -->
        <div
          class="images-wrapper relative w-15rem lg:w-20rem border-round-3xl overflow-hidden"
          style="height: calc(80vh); max-height: 30rem;"
        >
          <img
            src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767115006/multi-purpose-cleaner2_spxdb8.png"
            class="item-img absolute w-full h-full top-0 left-0"
            data-img-for="multi-purpose-cleaner2"
          />
          <img
            src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767115005/multi-purpose-cleaner_fhentu.png"
            class="item-img absolute w-full h-full top-0 left-0"
            data-img-for="multi-purpose-cleaner"
          />
          <img
            src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767115006/liquid-detergent_sujeub.png"
            class="item-img absolute w-full h-full top-0 left-0"
            data-img-for="liquid-detergent"
          />
          <img
            src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114994/detergent_vjmgat.jpg"
            class="item-img absolute w-full h-full top-0 left-0"
            data-img-for="detergent"
          />
          <img
            src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114999/dishwashing-liquid_vf10bo.png"
            class="item-img absolute w-full h-full top-0 left-0"
            data-img-for="dishwashing-liquid"
          />
          <img
            src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767115015/cleaning-wipes_zqu8ui.png"
            class="item-img absolute w-full h-full top-0 left-0"
            data-img-for="cleaning-wipes"
          />
          <img
            src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767114997/tooth-wipes_qhgcjt.png"
            class="item-img absolute w-full h-full top-0 left-0"
            data-img-for="tooth-wipes"
          />
          <img
            src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767115006/sabun-ghar_tf2242.jpg"
            class="item-img absolute w-full h-full top-0 left-0"
            data-img-for="sabun-ghar"
          />
          <img
            src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767115006/liquid-soap-laurel-oil_uxrglb.png"
            class="item-img absolute w-full h-full top-0 left-0"
            data-img-for="liquid-soap-laurel"
          />
          <img
            src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767115001/soap-box_u9jhwm.png"
            class="item-img absolute w-full h-full top-0 left-0"
            data-img-for="soap-box"
          />
          <img
            src="https://res.cloudinary.com/dbhf5jeep/image/upload/v1767115018/honey-soap_y9la5u.png"
            class="item-img absolute w-full h-full top-0 left-0"
            data-img-for="honey-soap"
          />
        </div>
      </div>

      <!-- content container -->
      <div class="w-full pt-8">
        <!-- Multi-purpose cleaner2 -->
        <div
          id="multi-purpose-cleaner2"
          class="item-content-wrapper multi-purpose-cleaner"
        >
          <h2 class="title text-3xl md:text-5xl mt-3">
            منظف متعدد الاستخدامات <br />
            Multi-purpose cleaner
          </h2>
          <p class="mt-3 md:text-xl line-height-3">
           منظف طبيعي متعدد الاستخدامات 500 مل، يتعامل بفعالية مع البقع العنيدة, تركيبة طبيعية ١٠٠%.
          </p>
        </div>
        <!-- Multi-purpose cleaner -->
        <div
          id="multi-purpose-cleaner"
          class="item-content-wrapper multi-purpose-cleaner"
        >
          <h2 class="title text-3xl md:text-5xl mt-3">
            منظف متعدد الاستخدامات <br />
            Multi-purpose cleaner
          </h2>
          <p class="mt-3 md:text-xl line-height-3">
            منظف طبيعي متعدد الاستخدامات ١٠٠ مل، يتعامل بفعالية مع البقع
            العنيدة, تركيبة طبيعية ١٠٠%.
          </p>
        </div>
        <!-- liquid detergent -->
        <div
          id="liquid-detergent"
          class="item-content-wrapper multi-purpose-cleaner"
        >
          <h2 class="title text-3xl md:text-5xl mt-3">
            سائل غسيل الملابس <br />
            Liquid Detergent
          </h2>
          <p class="mt-3 md:text-xl line-height-3">
            سائل غسيل الملابس 1X5 المصنوع بمواد طبيعية 100% يتميز بتركيبة فعالة
            وصحية ويناسب جميع أنواع الملابس
            <br />
            <br />
            <ul class="mx-4 text-xl">
              <li>يحافظ على الوان العبايات السوداء والداكنة</li>
              <li>يجعل الملابس خالية من البكتريا والجراثيم</li>
              <li>مع كل حركة للملابس يعطى رائحة عطرة و منعشة</li>
              <li>تقنية تفتيت البقع عن طريق اشعة الشمس</li>
              <li>بقوة الأنزيمات الحيوية لمكافحة البقع الصعبة</li>
            </ul>
          </p>
        </div>
        <!-- detergent -->
        <div id="detergent" class="item-content-wrapper">
          <h2 class="title text-3xl md:text-5xl mt-3">
            سائل غسيل ملابس 1.5 لتر بالعطور المستوحاه
          </h2>
          <p class="mt-3 md:text-xl line-height-3">
            سائل غسيل ملابس بأشهر العطور العالمية المستوحاه
            <br />
            <br />
            <ul class="mx-4 text-xl">
              <li>سوفاج</li>
              <li>بكرات</li>
              <li>مايكل كروس</li>
            </ul>
          </p>
        </div>
        <!-- dishwashing liquid -->
        <div
          id="dishwashing-liquid"
          class="item-content-wrapper multi-purpose-cleaner"
        >
          <h2 class="title text-3xl md:text-5xl mt-3">
            سائل غسيل الأطباق <br />
            Dishwashing liquid
          </h2>
          <p class="mt-3 md:text-xl line-height-3">
            سائل غسيل الأطباق بخلاصة الألوفيرا بتركيبة طبيعية وفعالية كبيرة
            وقوية. آمن وصحي ومميز
          </p>
        </div>
        <!-- cleaning wipes -->
        <div
        id="cleaning-wipes"
        class="item-content-wrapper multi-purpose-cleaner"
        >
        <h2 class="title text-3xl md:text-5xl mt-3">
          مناديل المنظف الشامل <br />
          All-in-one cleaning wipes
        </h2>
        <p class="mt-3 md:text-xl line-height-3">
          مناديل المنظف الشامل المميزة مناسب لجميع الأسطح والأخشاب وطبيعية
          ١٠٠٪
        </p>
      </div>
      <!-- tooth wipes -->
      <div
        id="tooth-wipes"
        class="item-content-wrapper multi-purpose-cleaner"
      >
        <h2 class="title text-3xl md:text-5xl mt-3">
          مناديل تنظيف الأسنان <br />
          Dental cleaning wipes
        </h2>
        <p class="mt-3 md:text-xl line-height-3">
          مناديل تنظيف وتبييض الأسنان المصنوعة من مواد طبيعية تماماً وتساعد في
          تبييض وتنظيف الأسنان وانتعاش الفم
        </p>
      </div>
        <!-- sabun-ghar -->
        <div id="sabun-ghar" class="item-content-wrapper">
          <h2 class="title text-3xl md:text-5xl mt-3">
            صابون الغار الصلب
          </h2>
          <p class="mt-3 md:text-xl line-height-3">
            صابون الغارالصلب بخلاصة زيت الزيتون الطبيعى المعد يدوياً
          </p>
        </div>
        <!-- Liquid Soap Laurel Oil -->
        <div id="liquid-soap-laurel" class="item-content-wrapper liquid-soap">
          <h2 class="title text-3xl md:text-5xl mt-3">
            صابون الغار السائل <br />
            Liquid Soap Laurel Oil
          </h2>
          <p class="mt-3 md:text-xl line-height-3">
            صابون الغار السائل بخلاصة زيت الزيتون وبروائح مختلفة كالياسمين
            الدمشقي والمسك العربي
          </p>
        </div>
        <!-- soap box -->
        <div id="soap-box" class="item-content-wrapper multi-purpose-cleaner">
          <h2 class="title text-3xl md:text-5xl mt-3">
            بكج الصابون المتنوع الطبيعي ١٠٠% (5 قطع) <br />
            Natural Soap Variety Pack ( 5 Bars )
          </h2>
          <p class="mt-3 md:text-xl line-height-3">
            مجموعة من خمس صابونات طبيعية ١٠٠%, صممت بعناية لتلبية احتياجات
            البشرة المختلفة.
          </p>
        </div>
        <!-- hony soap -->
        <div id="honey-soap" class="item-content-wrapper multi-purpose-cleaner">
          <h2 class="title text-3xl md:text-5xl mt-3">
            صابون العسل <br />
            Honey soap
          </h2>
          <p class="mt-3 md:text-xl line-height-3">
            صابون العسل والذهب معجزة طبيعية للبشرة والوجه يحتوي علي العديد من
            الفيتامينات
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  color: var(--primary-500);
}

.item-content-wrapper {
  height: 100vh;
}

.item-content-wrapper p {
  max-width: 800px;
}

.item-img {
  transition: opacity 300ms ease-in-out;
  object-fit: cover;
}
</style>
