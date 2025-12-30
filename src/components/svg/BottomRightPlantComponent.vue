<script setup>
import brp from "@svg/brp.svg";
import { onMounted, ref, watch } from "vue";
import { showObject } from "@/utils/helpers.js";
import gsap from "gsap";

// ------------ brp object ------------
const brpObject = ref(null);
const brpLoaded = ref(false);

// ------------ Animation ------------
const animationOptions = {
  rotation: 3,
  transformOrigin: "right bottom",
  yoyo: true,
  repeat: -1,
  duration: 1,
  ease: "sine.inOut",
};

const animations = ref([]);

function startAnimation() {
  const objectDoc = brpObject.value.contentDocument;

  const leaves = {
    l1: objectDoc.querySelector("#brp-1"),
    l2: objectDoc.querySelector("#brp-2"),
    l3: objectDoc.querySelector("#brp-3"),
    l4: objectDoc.querySelector("#brp-4"),
    l5: objectDoc.querySelector("#brp-5"),
    l6: objectDoc.querySelector("#brp-6"),
  }

  animations.value = [
    gsap.to(leaves.l1, {
      ...animationOptions,
      rotation: -animationOptions.rotation,
    }),
    gsap.to(leaves.l2, {
      ...animationOptions,
      rotation: animationOptions.rotation,
    }),
    gsap.to(leaves.l3, {
      ...animationOptions,
      rotation: animationOptions.rotation,
    }),
    gsap.to(leaves.l4, {
      ...animationOptions,
      rotation: -animationOptions.rotation,
    }),
    gsap.to(leaves.l5, {
      ...animationOptions,
      transformOrigin: "0 100%",
      rotation: animationOptions.rotation,
    }),
    gsap.to(leaves.l6, {
      ...animationOptions,
      transformOrigin: "0 100%",
      rotation: -animationOptions.rotation,
    }),
  ];
}

function pauseAnimation() {
  animations.value.forEach((anim) => anim.pause());
}

function resumeAnimation() {
  if (!animations.value.length) startAnimation();

  animations.value.forEach((anim) => anim.resume());
}


function stopAnimation() {
  animations.value.forEach((anim) => anim.kill());
  animations.value = [];
}

// expose stopAnimation if needed
defineExpose({
  startAnimation,
  pauseAnimation,
  resumeAnimation,
  stopAnimation,
  domElement: brpObject,
});

defineEmits(["loaded", "animationStarted", "animationPaused"]);

watch(brpLoaded, (val) => {
  if (val) {
    showObject(brpObject.value);
  }
});

// ------------ onMounted ------------
onMounted(() => {
  brpObject.value = document.getElementById("brp-object");
  brpObject.value.style.visibility = "hidden";
  brpObject.value.addEventListener("load", () => {
    brpLoaded.value = true;
  });
});
</script>

<template>
  <object
    v-once
    id="brp-object"
    :data="brp"
    type="image/svg+xml"
  ></object>
</template>
