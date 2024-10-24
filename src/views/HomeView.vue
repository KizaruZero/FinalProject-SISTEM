<template>
  <main>
    <HeroView />
    <div class="content-section mx-20 text-black mt-32">
      <FeaturedPost />
    </div>
  </main>
</template>

<script setup>
import FeaturedPost from "@/components/FeaturedPost.vue";
import HeroView from "@/components/HeroView.vue";
</script>
