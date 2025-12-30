<template>
  <div
    class="menu-button w-15rem h-8rem text-white border-1 border-round-2xl text-xl font-light flex justify-content-center align-items-center cursor-pointer"
  >
    <slot></slot>
  </div>
</template>
<style scoped>
  .menu-button {
    transition: all 300ms ease-in-out;
  }
  .menu-button:hover {
    background-color: #ffffff;
    color: #333 !important;
  }
</style>