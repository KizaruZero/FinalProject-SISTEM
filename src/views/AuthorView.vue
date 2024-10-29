<template>
  <div class="content text-black">
    <div class="content-section px-52 text-black bg-[#F4F0F8] min-h-screen">
      <AuthorProfile />
    </div>
    <div class="mt-32 px-52">
      <div class="card card-side rounded-none mt-8">
        <div class="img w-full">
          <img src="@/assets/author-post.png" alt="Movie" class="w-full" />
        </div>
        <div class="card-body p-0 m-0 mt-[56px] mx-8">
          <h2 class="text-yellow-400 mb-5 text-xl font-bold tracking-widest">
            BUSINESS
          </h2>
          <router-link :to="{ name: 'post' }">
            <h3 class="text-4xl font-bold">
              Top 6 free website mockup tools 2022
            </h3>
          </router-link>
          <p class="description text-base mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec.
          </p>
        </div>
      </div>
      <div class="card card-side rounded-none mt-8">
        <div class="img w-full">
          <img src="@/assets/author-post.png" alt="Movie" class="w-full" />
        </div>
        <div class="card-body p-0 m-0 mt-[56px] mx-8">
          <h2 class="text-yellow-400 mb-5 text-xl font-bold tracking-widest">
            BUSINESS
          </h2>
          <router-link :to="{ name: 'post' }">
            <h3 class="text-4xl font-bold">
              Top 6 free website mockup tools 2022
            </h3>
          </router-link>
          <p class="description text-base mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AuthorProfile from "@/components/AuthorProfile.vue";
</script>
