<script setup>
import { onMounted, ref } from "vue";
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { centerTextPlugin } from "@plugins/chartjs.plugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const props = defineProps({
  labels: {
    type: Array,
    default: [],
  },
  centerText: {
    type: Array,
    required: false,
  },
  data: {
    type: Array,
    default: [],
  },
  backgroundColors: {
    type: Array,
    default: [],
  },
  legend: {
    type: Object,
    default: {
      display: false,
    },
  },
});

Chart.register(
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
  centerTextPlugin
);

const ctx = ref();
const chart = ref();

const drawChart = () => {
  chart.value = new Chart(ctx.value, {
    type: "doughnut",
    data: {
      labels: props.labels,
      datasets: [
        {
          data: props.data,
          backgroundColor: props.backgroundColors,
          borderWidth: 0,
        },
      ],
    },
    options: {
      animation: {
        duration: 3000,
        easing: "easeOutQuart",
        delay: 500,
      },
      responsive: true,
      cutout: "80%",
      plugins: {
        legend: props.legend,
        centerText: props.centerText,
      },
    },
  });
};

// init gsap
onMounted(() => {
  ScrollTrigger.create({
    trigger: ctx.value,
    start: "top 50%",
    once: true,
    onEnter: () => {
      drawChart();
    },
  });
});
</script>

<template>
  <canvas ref="ctx"></canvas>
</template>
