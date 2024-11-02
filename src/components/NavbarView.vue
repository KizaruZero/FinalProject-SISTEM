<template>
  <nav
    class="bg-gray-800 p-4 flex justify-between items-center fixed w-full z-20"
  >
    <router-link
      to="/"
      class="text-white text-2xl flex items-center pb-2 font-bold hover:text-gray-300 transition duration-300 ml-16"
    >
      <img src="@/assets/Brand.png" alt="" />
    </router-link>

    <div class="space-x-4">
      <router-link
        v-for="item in navigationItems"
        :key="item.path"
        :to="item.path"
        class="text-white text-base hover:text-gray-300 transition duration-300"
        active-class="text-blue-300"
      >
        {{ item.name }}
      </router-link>
    </div>

    <router-link
      to="/contact"
      class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 mr-16 rounded-full transition duration-300"
    >
      Contact Us
    </router-link>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const brandName = ref("SISTEM");
const navigationItems = ref([
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
]);
</script>
