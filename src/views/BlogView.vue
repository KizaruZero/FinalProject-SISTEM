<template>
  <div>
    <div
      class="content-section px-20 pb-20 text-black bg-[#F4F0F8] min-h-screen"
    >
      <HeroBlog />
    </div>
    <div class="content-section mx-20 text-black">
      <div class="mt-16">
        <AllPostSection />
      </div>
      <div class="mt-16">
        <CategoryView />
      </div>
      <div class="mt-32">
        <JoinTeam />
      </div>
    </div>
  </div>
</template>

<script setup>
import HeroBlog from "@/components/HeroBlog.vue";
import AllPostSection from "@/components/AllPostSection.vue";
import JoinTeam from "@/components/JoinTeam.vue";
import CategoryView from "@/components/CategoryView.vue";
</script>
