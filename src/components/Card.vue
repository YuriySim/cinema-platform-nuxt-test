<template>
  <NuxtLink :to="{ path: `/movie/${content.id}` }" :class="$style.card">
    <div :class="$style.card__content">
      <div :class="$style.card__wrapper">
        <img
          :src="content.poster"
          :alt="content.name"
          :class="$style.card__img"
        />
      </div>

      <div :class="$style.card__description">
        <div :class="$style.card__title">
          {{ content.name }}
        </div>

        <div :class="$style.card__subtitle">
          {{ content.description }}
        </div>
      </div>

      <div :class="$style.card__tegs">
        <Teg v-if="content.rating" :type="'score'" :data="content.rating" />

        <Teg v-if="content.genre" :type="'genre'" :data="content.genre" />

        <Teg
          v-if="content.duration"
          :type="'duration'"
          :data="content.duration"
        />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
import Teg from "./components/Teg.vue";

const props = defineProps({
  content: Object,
});
</script>

<style module lang="scss">
.card {
  position: relative;
  text-decoration: none;
  color: white;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    border-radius: 16px;
    background: #702bfe;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
  }

  &:hover {
    &::after {
      opacity: 1;
    }

    & .card__content {
      transform: translate(-8px, -8px);
    }
  }

  &__content {
    background: #292d32;
    border: 3px solid #292d32;
    padding: 12px;
    border-radius: 16px;
    position: relative;
    z-index: 2;
    transition: all 0.4s ease-in-out;
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 100%;
  }

  &__wrapper {
    overflow: hidden;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 172px;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__description {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__title {
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 28px;
    line-height: 32px;
    max-height: 32px;
    font-weight: 700;
  }

  &__subtitle {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 14px;
    line-height: 16px;
    max-height: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  &__tegs {
    display: flex;
    gap: 8px;
    justify-content: start;
  }
}
</style>
