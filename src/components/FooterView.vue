<template>
  <footer class="bg-gray-900 text-gray-300 py-14 px-20">
    <!-- Navigation and Logo -->
    <div class="flex items-center justify-between mb-14">
      <h2 class="text-white text-xl font-bold">Kizaru Kaede</h2>
      <nav class="flex space-x-6 text-base">
        <a href="/." class="hover:text-white">Home</a>
        <a href="/blog" class="hover:text-white">Blog</a>
        <a href="/about" class="hover:text-white">About us</a>
        <a href="/contact" class="hover:text-white">Contact us</a>
        <a href="/privacy" class="hover:text-white">Privacy Policy</a>
      </nav>
    </div>

    <!-- Subscription Box -->
    <div class="flex flex-row bg-gray-800 py-20 px-16">
      <div class="w-1/2">
        <h3 class="text-2xl font-semibold text-white">
          Subscribe to our newsletter to get latest updates and news
        </h3>
      </div>
      <div class="w-1/2 flex justify-between">
        <input
          type="email"
          placeholder="Enter Your Email"
          class="bg-gray-800 text-gray-300 placeholder-gray-500 text-xl px-6 border"
        />
        <div class="subscribe">
          <router-link
            :to="{ name: 'blog' }"
            class="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-sm transition duration-300 inline-flex items-center gap-2 text-lg font-bold"
          >
            Read More
            <span class="transform translate-y-px">&gt;</span>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Footer Info and Social Links -->
    <div
      class="flex items-center justify-between -10 pt-10 border-t border-gray-700 mt-6"
    >
      <div class="text-gray-500">
        <p>Finstreet 118 2561 Fintown</p>
        <p>Hello@finsweet.com 020 7993 2905</p>
      </div>
      <div class="flex space-x-4">
        <a href="#" class="hover:text-white">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="hover:text-white">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="hover:text-white">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#" class="hover:text-white">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
/* Optional Font Awesome CDN for icons */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
</style>
