<template>
  <div>
    <HeadOG
      :title="'Test Cinema Platform'"
      :description="'based on Nuxt.js 3'"
    />

    <NuxtPage />
  </div>
</template>

<script setup>
import HeadOG from "./components/HeadOG.vue";
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
}

.page-enter-active .transition,
.page-leave-active .transition {
  transition: all 0.3s;
}
.page-enter-from .transition,
.page-leave-to .transition {
  opacity: 0;
  filter: blur(1rem);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 1;
}
</style>
