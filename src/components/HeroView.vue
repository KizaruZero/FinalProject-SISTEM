<template>
  <div class="relative">
    <img
      :src="heroImage.url"
      :alt="heroImage.alt"
      class="w-full h-screen object-cover opacity-100"
      :width="heroImage.width"
      :height="heroImage.height"
    />

    <div class="absolute top-1/4 ml-20 transform max-w-5xl">
      <p class="text-lg text-gray-400">
        POSTED ON
        <span class="text-white font-bold">{{ article.category }}</span>
      </p>

      <h1 class="text-6xl font-bold mt-6">
        {{ article.title }}
      </h1>

      <p class="mt-6 text-white">
        By <span class="text-blue-400">{{ article.author }}</span> |
        {{ formatDate(article.date) }}
      </p>

      <p class="mt-4 text-white">
        {{ article.excerpt }}
      </p>

      <router-link
        :to="{ name: 'blog' }"
        class="mt-12 bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-sm transition duration-300 inline-flex items-center gap-2 text-lg font-bold"
      >
        Read More
        <span class="transform translate-y-px">&gt;</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import heroImageUrl from "@/assets/hero.png";

const heroImage = ref({
  url: heroImageUrl, // Use the imported image URL directly
  alt: "Person working on a laptop",
  width: 1440,
  height: 720,
  flexShrink: 0,
});

const article = ref({
  category: "STARTUP",
  title: "Step-by-step guide to choosing great font pairs",
  author: "James West",
  date: "2022-05-23",
  excerpt:
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
});

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
</script>
