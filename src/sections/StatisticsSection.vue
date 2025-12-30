<script setup>
import DoughnutChartComponent from "../components/Statistics/DoughnutChartComponent.vue";
import StatsCardComponent from "../components/Statistics/StatsCardComponent.vue";
</script>

<template>
  <div
    class="relative z-1 overflow-hidden mt-8 w-full md:flex md:justify-content-center md:align-items-center"
  >
    <!-- video bg -->
    <video src="https://res.cloudinary.com/dbhf5jeep/video/upload/v1767115153/stats-bg_hzuo2y.mp4" autoplay loop muted playsinline></video>

    <!-- content -->
    <div
      class="relative flex flex-column justify-content-center align-items-center gap-6 px-3 md:px-6 py-8 text-white"
    >
      <!-- title -->
      <h2 class="text-3xl md:text-5xl font-bold">الإحصائيات</h2>
      <!-- charts -->
      <div
        class="flex flex-wrap justify-content-center align-items-center gap-8"
      >
        <!-- countries -->
        <div class="countries-chart-wrapper w-17rem">
          <DoughnutChartComponent
            :labels="['%', '%']"
            :center-text="{
              lineHeight: 40,
              lines: [
                {
                  text: '96%',
                  font: 'bold 50px Inter',
                  color: '#ffffff',
                },
                {
                  text: 'نسبة رضاء العملاء',
                  font: '20px Inter',
                  color: '#ffffff',
                },
              ],
            }"
            :data="[96, 4]"
            :background-colors="['#47B174', '#EEEEEE90']"
          />
        </div>
        <!-- clients -->
        <div class="clients-chart-wrapper w-17rem">
          <DoughnutChartComponent
            :labels="['%', '%']"
            :center-text="{
              lineHeight: 40,
              lines: [
                {
                  text: '86%',
                  font: 'bold 50px Inter',
                  color: '#ffffff',
                },
                {
                  text: 'نسبة تكرار الطلبات',
                  font: '20px Inter',
                  color: '#ffffff',
                },
              ],
            }"
            :data="[86, 100 - 86]"
            :background-colors="['#47B174', '#EEEEEE90']"
          />
        </div>
        <!-- social -->
        <div class="social-chart-wrapper w-17rem">
          <DoughnutChartComponent
            :labels="['سناب شات', 'تيك توك']"
            :center-text="{
              lineHeight: 30,
              lines: [
                {
                  text: '500+',
                  font: 'bold 50px Inter',
                  color: '#ffffff',
                },
                {
                  text: 'إعلان لمنتجاتنا على',
                  font: '20px Inter',
                  color: '#ffffff',
                },
                {
                  text: 'منصات التواصل الاجتماعى',
                  font: '20px Inter',
                  color: '#ffffff',
                },
              ],
            }"
            :data="[200, 300]"
            :background-colors="['#47B174', '#eeeeee90']"
          />
        </div>
      </div>

      <!-- cards -->
      <div
        class="cards-wrapper mt-8 flex flex-column align-items-center justify-content-center gap-5"
        style="max-width: 1100px"
      >
        <!-- title -->
        <h2 class="text-3xl md:text-5xl font-bold">لدينا أيضاً</h2>
        <!-- cards -->
        <div class="flex flex-wrap justify-content-center gap-4">
          <!-- countries -->
          <div class="w-20rem" style="max-width: 90%">
            <StatsCardComponent :value="24" :duration="3">
              <template #title>دولة تم بيع المنتج بها</template>
            </StatsCardComponent>
          </div>

          <!-- social media followers -->
          <div class="w-20rem" style="max-width: 90%">
            <StatsCardComponent :value="250" :duration="3">
              <template #number-suffix>K+</template>

              <template #title>متابع على منصات التواصل الاجتماعي</template>
            </StatsCardComponent>
          </div>

          <!-- orders -->
          <div class="w-20rem" style="max-width: 90%">
            <StatsCardComponent :value="16" :duration="3">
              <template #number-suffix>K+</template>

              <template #title>طلب شهرياً</template>
            </StatsCardComponent>
          </div>

          <!-- pos -->
          <div class="w-20rem" style="max-width: 90%">
            <StatsCardComponent :value="25" :duration="3">
              <template #number-suffix>+</template>

              <template #title>نقطة بيع فى المملكة العربية السعودية</template>
            </StatsCardComponent>
          </div>

          <!-- cars -->
          <div class="w-20rem" style="max-width: 90%">
            <StatsCardComponent :value="15" :duration="3">
              <template #number-suffix>+</template>

              <template #title>سياره لاستلام والتسليم من والي العميل</template>
            </StatsCardComponent>
          </div>

          <!-- employees -->
          <div class="w-20rem" style="max-width: 90%">
            <StatsCardComponent :value="200" :duration="3">
              <template #number-suffix>+</template>

              <template #title>عدد الموظفين</template>
            </StatsCardComponent>
          </div>

          <!-- laundries -->
          <div class="w-20rem" style="max-width: 90%">
            <StatsCardComponent :value="4" :duration="3">
              <template #title>عدد المغاسل</template>
            </StatsCardComponent>
          </div>

          <!-- headquarters -->
          <div class="w-20rem" style="max-width: 90%">
            <StatsCardComponent :value="2" :duration="3">
              <template #title>عدد مقرات الشركة</template>
            </StatsCardComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: brightness(50%);
}
</style>
