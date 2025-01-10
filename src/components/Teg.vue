<template>
  <div :class="$style.teg" :style="{ background: color }">
    <img v-if="type === 'genre'" src="@/assets/images/film.svg" />

    <img v-else-if="type === 'duration'" src="@/assets/images/clock.svg" />

    <img v-else src="@/assets/images/star.svg" />

    <div>{{ data }}</div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCssModule } from "vue";

const props = defineProps({
  type: String,
  data: [String, Number],
});

const color = computed(() => {
  switch (props.type) {
    case "genre":
      return "#2C81FB";
    case "duration":
      return "#702BFE";
    default:
      const dataValue = Number(props.data);

      if (dataValue <= 4) return "#E81A0C";

      if (dataValue > 4 && dataValue <= 7) return "#702BFE";

      return "#039C55";
  }
});

const $style = useCssModule();
</script>

<style module lang="scss">
.teg {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 2px 6px;
  border-radius: 8px;
  color: #fff;
  font-size: 11px;
  font-weight: 500;
  line-height: normal;

  & img {
    width: 8px;
  }
}
</style>
