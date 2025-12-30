<script setup>
import BRPComponent from "@components/svg/BottomRightPlantComponent.vue";
import BottomLeftPlantComponent from "@components/svg/BottomLeftPlantComponent.vue";
import HeaderButtonComponent from "./components/Buttons/HeaderButtonComponent.vue";
import NavMenuComponent from "./components/menus/NavMenuComponent.vue";
import LineNameFlag from "./components/flag/LineNameFlag.vue";
import HeroComponent from "./sections/HeroSection.vue";
import ProductSection from "./sections/ProductSection.vue";
import VidSection from "./sections/VidSection.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, reactive, ref, watch } from "vue";
import SaleLine from "./sections/SaleLine.vue";
import LaundriesSection from "./sections/LaundriesSection.vue";
import MobileAppSection from "./sections/MobileAppSection.vue";
import InfluencersSection from "./sections/InfluencersSection.vue";
import StatisticsSection from "./sections/StatisticsSection.vue";
import ProductsSection from "./sections/ProductsSection.vue";
import FooterSection from "./sections/FooterSection.vue";

const state = reactive({
  navMenuOpen: false,
  flagTitle: "",
  isHeaderBlurred: true,
});

// --------------------- remove header blur when menu opened ---------------------
watch(
  () => state.navMenuOpen,
  (val) => {
    state.isHeaderBlurred = !val;
  }
);

const brpRef = ref();
const tlp = ref(null);
const productSection = ref(null);

// init scroll animations
onMounted(() => {
  if (tlp.value) {
    gsap.to(tlp.value, {
      opacity: 0,
      scrollTrigger: {
        trigger: productSection.value,
        end: () => `top 70%`,
        scrub: true,
        markers: false,
        onLeave: () => {
          tlp.value.style.display = "none";
          brpRef.value.domElement.classList.remove("z-0");
        },
        onEnterBack: () => {
          tlp.value.style.display = "block";
        },
        onLeaveBack: () => {
          brpRef.value.domElement.classList.remove("z-4");
          brpRef.value.domElement.classList.add("z-0");
        },
      },
      ease: "none",
    });
  }
});

// flag enter animate
onMounted(() => {
  ScrollTrigger.create({
    trigger: "#sales-section",
    start: "top 51%",
    end: "bottom 20%",
    onEnter: () => {
      state.flagTitle = "خط البيع";
      gsap.to(".flag-wrapper", {
        opacity: 1,
        translateX: 0,
        duration: 1,
        ease: "power2.out",
      });
    },
    onEnterBack: () => {
      state.flagTitle = "خط البيع";
    },
    onLeaveBack: () => {
      gsap.to(".flag-wrapper", {
        opacity: 0,
        translateX: "-100%",
        duration: 1,
        ease: "power2.in",
      });
    },
  });
});

// change flag title to laundries section
onMounted(() => {
  ScrollTrigger.create({
    trigger: "#laundries-section",
    start: "top 51%",
    end: "bottom 20%",
    markers: false,
    pin: false,
    onEnter: () => {
      state.flagTitle = "المغاسل";
    },
    onEnterBack: () => {
      state.flagTitle = "المغاسل";
    }
  });
});

// change flag title to mobile app section
onMounted(() => {
  ScrollTrigger.create({
    trigger: "#mobile-app-section",
    start: "top 51%",
    end: "bottom 20%",
    markers: false,
    pin: false,
    onEnter: () => {
      state.flagTitle = "تطبيق INatural";
    },
    onEnterBack: () => {
      state.flagTitle = "تطبيق INatural";
      gsap.to(".flag-wrapper", {
        opacity: 1,
        translateX: 0,
        duration: 1,
        ease: "power2.out",
      });
    },
    onLeave: () => {
      gsap.to(".flag-wrapper", {
        opacity: 0,
        translateX: "-100%",
        duration: 1,
        ease: "power2.in",
      });
    },
  });
});
</script>

<template>
  <div class="app-container">
    <!------------------------------------------ vectors ------------------------------------------>
    <!-- bottom right plant -->
    <BRPComponent
      ref="brpRef"
      class="fixed right-0 bottom-0 z-1 w-10rem md:w-20rem lg:w-25rem"
    />
    <!-- top left plant -->
    <img
      ref="tlp"
      src="@assets/images/tlp.png"
      alt="tlp"
      class="fixed top-0 left-0 z-0 w-12rem md:w-20rem lg:w-25rem"
      style="margin-top: -1px"
    />
    <!-- bottom left plant with green smoke -->
    <img
      src="@svg/smoke.svg"
      class="fixed bottom-0 left-0 z-0 w-12rem md:w-30rem"
      alt="green smoke"
    />
    <BottomLeftPlantComponent
      class="fixed left-0 bottom-0 z-0 w-8rem md:w-15rem"
    />

    <!------------------------------------------ Menu ------------------------------------------>
    <Transition name="nav-menu-transition">
      <div class="fixed w-screen h-screen top-0" style="max-width: 400px; z-index: 7;" v-if="state.navMenuOpen">
        <NavMenuComponent @link:click="state.navMenuOpen = false" />
      </div>
    </Transition>

    <!------------------------------------------ Header ------------------------------------------>
    <div
      id="inatural-header"
      class="fixed z-5 w-screen flex justify-content-between align-items-center px-4 md:px-8 py-2"
      :class="state.isHeaderBlurred ? 'inatural-header-blur' : ''"
      style="top: 0"
    >
      <img
        ref="logoElement"
        src="@assets/images/logo.png"
        alt="I Natural Logo"
        class="w-4rem md:w-6rem"
      />

      <HeaderButtonComponent
        :opened="state.navMenuOpen"
        @click="() => (state.navMenuOpen = !state.navMenuOpen)"
      />
    </div>

    <!------------------------------------------ content ------------------------------------------>
    <div
      class="relative w-full h-full overflow-x-hidden overflow-y-hidden"
      style="background-color: #00000009"
    >
      <!-- flag -->
      <div
        class="flag-wrapper fixed z-4"
        style="top: 13%; left: 0; opacity: 0; transform: translateX(-100%)"
      >
        <LineNameFlag :name="state.flagTitle" />
      </div>

      <!-- hero section -->
      <section id="hero-section" class="z-3 relative">
        <HeroComponent @blur:header="(val) => (state.isHeaderBlurred = val)" />
      </section>
      <!-- main product section -->
      <section
        id="product-section"
        ref="productSection"
        class="w-full px-4 md:px-6 lg:px-8 relative z-2"
        style="margin-bottom: 300px"
      >
        <ProductSection @blur:header="(val) => (state.isHeaderBlurred = val)" />
      </section>

      <!-- products section -->
      <ProductsSection />

      <!-- man-section -->
      <section id="man-sec" class="w-full relative z-2">
        <VidSection @blur:header="(val) => (state.isHeaderBlurred = val)" />
      </section>
      <!-- sales sec -->
      <section id="sales-section" class="w-full" style="height: auto">
        <SaleLine @blur:header="(val) => (state.isHeaderBlurred = val)" />
      </section>
      <!-- laundries sec -->
      <section
        id="laundries-section"
        class="w-full"
      >
        <LaundriesSection />
      </section>
      <!-- mobile app section -->
      <section
        id="mobile-app-section"
        class="w-full"
      >
        <MobileAppSection />
      </section>
      
      <!-- influencers sec-->
      <section
        id="influencers-section"
        class="w-full"
      >
        <InfluencersSection />
      </section>

      <!-- statistics sec -->
      <section id="statistics-section">
        <StatisticsSection />
      </section>

      <!-- footer -->
      <footer>
        <FooterSection />
      </footer>
    </div>
  </div>
</template>

<style scoped>
/* nav menu transition */
.nav-menu-transition-enter-active,
.nav-menu-transition-leave-active {
  transition: opacity 300ms ease-in-out;
}

.nav-menu-transition-enter-to,
.nav-menu-transition-leave-from {
  opacity: 1;
}

.nav-menu-transition-leave-to,
.nav-menu-transition-enter-from {
  opacity: 0;
}
</style>

<style>
.inatural-header-blur {
  backdrop-filter: blur(5px);
  background-color: #ffffff20;
}
</style>
