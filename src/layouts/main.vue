<template>
  <div :class="$style.content">
    <Navbar />

    <div class="transition" :class="$style.container">
      <slot />
    </div>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<style module lang="scss">
.content {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding-top: 100px;
  background: rgba(0, 0, 0, 0.6);

  @media (max-width: 1023px) {
    padding-top: 80px;
  }
}

.container {
  width: 100%;
  flex: 1;
  padding: 32px 48px;

  @media (max-width: 1023px) {
    padding: 24px;
  }

  @media (max-width: 767px) {
    padding: 24px 16px;
  }
}
</style>
