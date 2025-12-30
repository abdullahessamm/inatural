<script setup>
import gsap from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {
  gsap.to('#laundries-intro-p', {
    opacity: 1,
    translateY: 0,
    duration: 1,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: '#laundries-intro-title',
      start: "top 50%"
    }
  })
})
</script>

<template>
  <div class="text-center w-full px-2">
    <div>
      <h2 id="laundries-intro-title" class="text-3xl md:text-5xl text-primary font-bold">
        مغاسل <span class="title-font">INatural</span>
      </h2>
      <p id="laundries-intro-p" class="mt-3 md:text-xl line-height-3 m-auto" style="max-width: 900px; opacity: 0; transform: translateY(30px);">
        مغاسل آمنة وصديقة للبيئة نقدم مغاسل تعتمد على منتجات INatural، مما يضمن
        نظافة فعالة دون الإضرار بالبيئة أو صحة العملاء. خدمات متنوعة للمستهلكين
        خدمات الغسيل الشخصية الملابس، الحقائب ، الأحذية ، السجاد خدمات لقطاع
        الأعمال خدمات غسيل ملابس الفنادق: يشمل غسيل الأغطیة، المفارش ، الوسائد،
        المناشف والشركات والمطاعم والمستشفيات مثل غسيل الزي الموحد أو ملابس العمل.
      </p>
    </div>
  </div>
</template>
