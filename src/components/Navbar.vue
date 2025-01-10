<template>
  <nav :class="$style.navbar">
    <div :class="$style.navbar__content">
      <NuxtLink :to="{ path: '/' }" :class="$style.navbar__logo">
        Test Task
      </NuxtLink>
    </div>
  </nav>
</template>

<style module lang="scss">
.navbar {
  position: fixed;
  inset: 0;
  bottom: auto;
  height: 100px;
  padding: 31px 48px;
  background: #292d32;
  box-shadow: 0px 4px 4px 0px #00000040;
  color: white;
  display: flex;
  justify-content: center;
  z-index: 1000;

  @media (max-width: 1023px) {
    padding: 21px 24px;
    height: 80px;
  }

  @media (max-width: 767px) {
    padding: 21px 16px;
  }

  &__content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    text-decoration: none;
    font-size: 32px;
    font-weight: 700;
    line-height: 37.5px;
    text-align: left;
    color: white;
  }
}
</style>
