<template>
  <div class="hero pt-32">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img src="@/assets/hero-blog2.png" class="w-[515 px] h-[359]" />
      <div>
        <h1 class="text-base font-bold tracking-wide">FEATURED POST</h1>
        <h1 class="mt-5 text-4xl font-bold">
          Step-by-step guide to choosing great font pairs
        </h1>
        <p class="mt-4 text-sm">
          By <span class="text-yellow-400">John Doe</span> | May 23, 2022
        </p>
        <p class="description text-sm mt-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
        <div class="">
          <router-link
            :to="{ name: 'blog' }"
            class="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-sm transition duration-300 inline-flex items-center gap-2 text-lg font-bold"
          >
            Read More
            <span class="transform translate-y-px">&gt;</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
