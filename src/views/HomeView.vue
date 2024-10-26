<template>
  <main>
    <HeroView />
    <div class="content-section mx-20 text-black mt-32">
      <FeaturedPost />
      <div class="mt-32"><AboutUs /></div>
      <div class="mt-32"><CategoryView /></div>
      <div class="mt-32"><WhyStarted /></div>
      <div class="mt-32"><AuthorView /></div>
      <div class="mt-28"><LogoView /></div>
      <div class="mt-28"><TestimonialView /></div>
      <div class="mt-32"><JoinTeam /></div>
    </div>
  </main>
</template>

<script setup>
import FeaturedPost from "@/components/FeaturedPost.vue";
import HeroView from "@/components/HeroView.vue";
import AboutUs from "@/components/AboutUs.vue";
import CategoryView from "@/components/CategoryView.vue";
import WhyStarted from "@/components/WhyStarted.vue";
import AuthorView from "@/components/AuthorView.vue";
import LogoView from "@/components/LogoView.vue";
import TestimonialView from "@/components/TestimonialView.vue";
import JoinTeam from "@/components/JoinTeam.vue";
import FooterView from "@/components/FooterView.vue";
</script>
