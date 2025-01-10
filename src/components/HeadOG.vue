<template>
  <Head>
    <!-- HTML Meta Tags -->
    <Title>{{ title }}</Title>
    <Meta name="description" :content="description" />

    <!-- Facebook Meta Tags -->
    <Meta property="og:url" content="http://localhost:3000/" />
    <Meta property="og:type" content="website" />
    <Meta property="og:title" :content="title" />
    <Meta property="og:description" :content="description" />
    <Meta property="og:image" content="/thumbnail.jpg" />

    <!-- Twitter Meta Tags -->
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta property="twitter:domain" content="http://localhost:3000/" />
    <Meta property="twitter:url" content="http://localhost:3000/" />
    <Meta name="twitter:title" :content="description" />
    <Meta name="twitter:description" :content="description" />
    <Meta name="twitter:image" content="/thumbnail.jpg" />
  </Head>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
});
</script>
