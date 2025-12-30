<script setup>
const props = defineProps({
  vidSrc: String,
  title: String,
  autoPlay: Boolean,
  muted: Boolean,
  loop: Boolean,
  showPlayIcon: Boolean,
  preload: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['click:video']);
</script>

<template>
  <div class="w-full h-full relative overflow-hidden cursor-pointer" @click="emit('click:video', props.vidSrc)">
    <video
      :src="props.vidSrc"
      :autoplay="props.autoPlay"
      :loop="props.loop"
      :muted="props.muted"
      class="w-full h-full"
      style="object-fit: cover"
    ></video>
    <div
      class="absolute w-full h-full top-0 flex flex-column justify-content-center gap-2 align-items-center bg-black-alpha-60"
      v-if="props.showPlayIcon"
    >
      <!-- icon -->
      <svg
        viewBox="-1 0 12 12"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style="width: 50px; height: 50px"
      >
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-65.000000, -3803.000000)"
            fill="#ffffff"
          >
            <g id="icons" transform="translate(56.000000, 160.000000)">
              <path
                d="M18.074,3650.7335 L12.308,3654.6315 C10.903,3655.5815 9,3654.5835 9,3652.8985 L9,3645.1015 C9,3643.4155 10.903,3642.4185 12.308,3643.3685 L18.074,3647.2665 C19.306,3648.0995 19.306,3649.9005 18.074,3650.7335"
                id="play-[#1000]"
              ></path>
            </g>
          </g>
        </g>
      </svg>
      <!-- title -->
      <span class="text-white-alpha-80 font-bold" v-if="props.title">{{ props.title }}</span>
    </div>
  </div>
</template>
