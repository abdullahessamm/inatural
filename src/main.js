import { createApp } from "vue";
import "./assets/css/style.css";
import App from "./App.vue";

// gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

createApp(App).mount("#app");
