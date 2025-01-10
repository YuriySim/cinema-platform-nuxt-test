<template>
  <div>
    <NuxtLayout name="main">
      <div v-if="status === 'loading'">Loading...</div>

      <div v-else-if="status === 'error'">Error when uploading data</div>

      <div v-else-if="status === 'success'">
        <div v-if="data && Object.keys(data).length" :class="$style.detail">
          <div :class="$style.detail__left">
            <div :class="$style.detail__card">
              <h1 :class="$style.detail__title">{{ data.name }}</h1>

              <div :class="$style.detail__wrapper">
                <img
                  :src="data.poster"
                  :alt="data.name"
                  :class="$style.detail__img"
                />
              </div>

              <div :class="$style.detail__tegs">
                <Teg v-if="data.rating" :type="'score'" :data="data.rating" />

                <Teg v-if="data.genre" :type="'genre'" :data="data.genre" />

                <Teg
                  v-if="data.duration"
                  :type="'duration'"
                  :data="data.duration"
                />
              </div>
            </div>
          </div>

          <div :class="$style.detail__right">
            <div v-if="data.description" :class="$style.detail__block">
              <h3 :class="$style.detail__blockTitle">Description</h3>

              <div :class="$style.detail__blockText">
                {{ data.description }}
              </div>
            </div>

            <div
              v-if="data.trivia && data.trivia.length > 0"
              :class="$style.detail__block"
            >
              <h3 :class="$style.detail__blockTitle">Trivia</h3>

              <ul :class="$style.detail__blockList">
                <li
                  v-for="(item, index) of data.trivia"
                  :key="`trivia-${index}`"
                  :class="$style.detail__blockItem"
                >
                  {{ item }}
                </li>
              </ul>
            </div>

            <div
              v-if="data.actors && data.actors.length > 0"
              :class="$style.detail__block"
            >
              <h3 :class="$style.detail__blockTitle">Actors</h3>

              <ul :class="$style.detail__blockList">
                <li
                  v-for="(item, index) of data.actors"
                  :key="`actors-${index}`"
                  :class="$style.detail__blockItem"
                >
                  <a
                    :href="`https://www.imdb.com/name/${item.imdb_id}`"
                    :class="$style.detail__link"
                    target="_blank"
                  >
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div v-else>There is no data to display.</div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Teg from "./components/Teg.vue";

const data = ref(null);
const status = ref("idle"); // idle, loading, error

onMounted(async () => {
  try {
    status.value = "loading";
    const baseUrl = process.env.BASE_URL || "http://localhost:3000";

    const response = await fetch(new URL("/detail.json", baseUrl));

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    data.value = await response.json();

    status.value = "success";
  } catch (error) {
    console.error(error);

    status.value = "error";
  }
});
</script>

<style module lang="scss">
.detail {
  display: flex;
  gap: 64px;
  color: #fff;

  @media (max-width: 1023px) {
    gap: 48px;
  }

  @media (max-width: 767px) {
    gap: 24px;
    flex-direction: column;
  }

  &__left {
    position: relative;
    max-width: 240px;
  }

  &__card {
    display: flex;
    flex-direction: column;
    gap: 24px;
    position: sticky;
    top: 132px;
    cursor: default;

    @media (max-width: 1023px) {
      top: 104px;
    }

    @media (max-width: 767px) {
      gap: 16px;
    }
  }

  &__title {
    font-size: 32px;
    font-weight: 700;
    line-height: normal;
  }

  &__wrapper {
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 767px) {
      order: 99;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__tegs {
    display: flex;
    gap: 8px;
    justify-content: start;
  }

  &__right {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    cursor: default;
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__blockTitle {
    font-size: 32px;
    font-weight: 700;
    line-height: normal;
  }

  &__blockText {
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
  }

  &__blockList {
    display: flex;
    flex-direction: column;
    list-style-position: inside;
    list-style: none;
  }

  &__blockItem {
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    line-height: normal;
    padding-left: 21px;
    display: flex;
    align-items: center;
    position: relative;

    &::after {
      content: "";
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: white;
      position: absolute;
      left: 9px;
    }
  }

  &__link {
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    border-bottom: 1px solid white;
    transition: all 0.4s ease-in-out;

    @media (min-width: 1024px) {
      &:hover {
        border-bottom: 1px solid transparent;
      }
    }
  }
}
</style>
