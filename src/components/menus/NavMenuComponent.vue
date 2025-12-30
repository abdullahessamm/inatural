<script setup>
defineEmits(['link:click'])
</script>

<template>
  <div class="nav-menu-component w-full h-full flex justify-content-start md:flex-row gap-5">
    <div class="navs-wrapper px-5 py-5">
      <!-- sale line -->
      <div class="nav-group">
        <h2 class="text-xl">خط البيع</h2>
        <ul class="mt-2 mx-3 line-height-3 text-xl">
          <li>
            <a href="#sales-section" @click="$emit('link:click')">نقاط البيع (POS)</a>
          </li>
          <li>
            <a href="#sales-mt-section" @click="$emit('link:click')">MT Brands</a>
          </li>
          <li>
            <a href="#sales-gt-section" @click="$emit('link:click')">GT Brands</a>
          </li>
          <li>
            <a href="#sales-e-commerce-section" @click="$emit('link:click')">E-Commerce</a>
          </li>
          <li>
            <a href="#sales-online-section" @click="$emit('link:click')">الأونلاين (Online)</a>
          </li>
        </ul>
      </div>
      <!-- laundries -->
      <div class="nav-group mt-5">
        <h2 class="text-xl">المغاسل</h2>
        <ul class="mt-2 mx-3 line-height-3 text-xl">
          <li>
            <a href="#laundries-section" @click="$emit('link:click')">المقدمة</a>
          </li>
          <li>
            <a href="#laundries-section-khobar" @click="$emit('link:click')">مغسلة الخبر</a>
          </li>
          <li>
            <a href="#laundries-section-reyad" @click="$emit('link:click')">مغسلة الرياض</a>
          </li>
        </ul>
      </div>
      <!-- others -->
      <div class="nav-group mt-5">
        <h2 class="text-xl">أخرى</h2>
        <ul class="mt-2 mx-3 line-height-3 text-xl">
          <li>
            <a href="#mobile-app-section" @click="$emit('link:click')">تطبيق INatural</a>
          </li>
          <li>
            <a href="#influencers-section" @click="$emit('link:click')">فيديوهات المشاهير</a>
          </li>
          <li>
            <a href="#statistics-section" @click="$emit('link:click')">الاحصائيات</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .nav-menu-component {
    background-color: #000000bf;
  }

  h2 {
    color: #a3a3a3;
  }

  ul {
    list-style: none;
  }

  a {
    color: #e3e3e3 !important;
    text-decoration: none;
    transition: all 200ms ease;
    display: inline-block;
  }

  a:hover {
    color: #fff !important;
    text-decoration: underline;
    transform: translateX(-10px);
  }
</style>
