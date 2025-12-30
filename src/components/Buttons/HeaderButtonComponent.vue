<script setup>
const props = defineProps({
  opened: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <div
    :class="`header-btn flex justify-content-center align-items-center border-round-3xl w-2rem w-3rem h-3rem cursor-pointer ${
      props.opened ? 'opened' : ''
    }`"
  >
    <svg
      width="27"
      height="30"
      viewBox="0 0 36 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        id="header-btn-line-1"
        y1="2.5"
        x2="36"
        y2="2.5"
        stroke="white"
        stroke-width="5"
        style=""
      />
      <line
        id="header-btn-line-2"
        y1="14.5"
        x2="36"
        y2="14.5"
        stroke="white"
        stroke-width="5"
      />
    </svg>
  </div>
</template>

<style scoped>
.header-btn {
  background-color: #00000078;
  box-shadow: none;
  transition: all 300ms ease;
}

.header-btn:hover {
  background-color: #000000ba;
  box-shadow: 0 0 20px 0px #00000058;
}

.header-btn svg > line {
  transition: all 300ms ease;
}

.header-btn.opened svg > #header-btn-line-1 {
  transform-origin: center;
  transform: rotate(45deg) translateX(0px) translateY(5px);
}

.header-btn.opened svg > #header-btn-line-2 {
  transform-origin: center;
  transform: rotate(-45deg) translateY(-5px);
}

@media screen and (max-width: 767px) {
  .header-btn {
    transform-origin: top right;
    transform: scale(0.7);
  }
}
</style>
