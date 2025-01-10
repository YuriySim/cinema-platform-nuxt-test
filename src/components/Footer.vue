<template>
  <footer :class="$style.footer">
    <div :class="$style.footer__content">
      <div :class="$style.footer__container">
        <p :class="$style.footer__text">Test Task, 2025</p>
      </div>

      <div :class="$style.footer__container">
        <a href="tel:518-363-2171" :class="$style.footer__phone">
          518-363-2171
        </a>

        <p :class="$style.footer__address">91 Park St. Fairhope, AL 36532</p>
      </div>
    </div>
  </footer>
</template>

<style module lang="scss">
.footer {
  position: relative;
  height: 98px;
  padding: 31px 48px;
  background: #292d32;
  box-shadow: 0px -4px 4px 0px #00000040;
  color: white;
  display: flex;
  justify-content: center;

  &__content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 4px;
  }

  &__text {
    font-size: 18px;
    font-weight: 700;
    line-height: 21.09px;
  }

  &__phone {
    font-size: 14px;
    font-weight: 500;
    line-height: 16.41px;
    color: white;
  }

  &__address {
    font-size: 14px;
    font-weight: 500;
    line-height: 16.41px;
  }
}
</style>
