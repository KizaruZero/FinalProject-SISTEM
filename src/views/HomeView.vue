<template>
  <main>
    <HeroView />
    <div class="content-section mx-20 text-black mt-32">
      <FeaturedPost />
      <div class="mt-32"><AboutUs /></div>
      <div class="mt-32"><CategoryView /></div>
    </div>
  </main>
</template>

<script setup>
import FeaturedPost from "@/components/FeaturedPost.vue";
import HeroView from "@/components/HeroView.vue";
import AboutUs from "@/components/AboutUs.vue";
import CategoryView from "@/components/CategoryView.vue";
</script>
