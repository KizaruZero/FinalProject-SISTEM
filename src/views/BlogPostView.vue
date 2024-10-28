<template>
  <div class="content-section mx-20 text-black">
    <div class="">
      <HeaderSection />
    </div>
    <div class="mt-16 bg-black">
      <img src="@/assets/hero-blog.png" alt="" width="100%" />
    </div>
    <div class="mt-16">
      <BodyBlog />
    </div>
    <div class="mt-32">
      <AnotherBlog />
    </div>
    <div class="mt-32">
      <JoinTeam />
    </div>
  </div>
</template>

<script setup>
import HeaderSection from "@/components/HeaderSection.vue";
import BodyBlog from "@/components/BodyBlog.vue";
import AnotherBlog from "@/components/AnotherBlog.vue";
import JoinTeam from "@/components/JoinTeam.vue";
</script>
