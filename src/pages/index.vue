<template>
  <div>
    <NuxtLayout name="main">
      <div v-if="status === 'loading' || data === null">Loading...</div>

      <div v-else-if="status === 'error'">Error when uploading data</div>

      <div v-else-if="status === 'success'">
        <div
          v-if="data && data.items && data.items.length > 0"
          :class="$style.grid"
        >
          <Card
            v-for="item of data.items"
            :key="`card-${item.id}`"
            :content="item"
          />
        </div>

        <div v-else>There is no data to display.</div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Card from "./components/Card.vue";

const data = ref(null);
const status = ref("idle"); // idle, loading, error

onMounted(async () => {
  try {
    status.value = "loading";
    const baseUrl = process.env.BASE_URL || "http://localhost:3000";

    const response = await fetch(new URL("/data.json", baseUrl));

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
.grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  gap: 16px;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 479px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
