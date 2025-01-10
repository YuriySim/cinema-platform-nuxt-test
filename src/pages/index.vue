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
import { onMounted } from "vue";
import Card from "./components/Card.vue";

const { data, status, fetchData } = useFetchData("/data.json");

onMounted(fetchData); // Launching a request when mounting a component
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
