<template>
  <div class="featured-post grid grid-cols-2 gap-x-8 bg-slate-100">
    <div class="basis-1/2">
      <h2 class="text-3xl font-bold mb-8">Featured Post</h2>
      <div class="p-8 outline outline-slate-200 outline-1 outline-offset-0">
        <div class="rounded-none p-0">
          <figure>
            <img
              src="@/assets/featured.png"
              alt="Shoes"
              width="669"
              height="352"
              style="flex-shrink: 0"
            />
          </figure>
          <div class="card-body p-0 m-0">
            <p class="mt-4 text-sm">
              By <span class="text-yellow-400">John Doe</span> | May 23, 2022
            </p>
            <h3 class="card-title text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </h3>
            <p class="description text-sm">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
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
    </div>
    <div class="basis-1/2">
      <h2 class="text-2xl text font-bold">All Post</h2>
      <div class="grid grid-rows-5 mt-8">
        <div class="post-1 p-8 pb-6">
          <div class="card-body p-0 m-0">
            <p class="text-sm">
              By <span class="text-yellow-400">John Doe</span> | May 23, 2022
            </p>
            <h3 class="card-title text-2xl">
              8 Figma design systems that you can download for free today.
            </h3>
          </div>
        </div>
        <div class="post-2 p-8 pb-6 bg-amber-100/30">
          <div class="card-body p-0 m-0">
            <p class="text-sm">
              By <span class="text-yellow-400">John Doe</span> | May 23, 2022
            </p>
            <h3 class="card-title text-2xl">
              8 Figma design systems that you can download for free today.
            </h3>
          </div>
        </div>
        <div class="post-3 p-8 pb-6">
          <div class="card-body p-0 m-0">
            <p class="text-sm">
              By <span class="text-yellow-400">John Doe</span> | May 23, 2022
            </p>
            <h3 class="card-title text-2xl">
              8 Figma design systems that you can download for free today.
            </h3>
          </div>
        </div>
        <div class="post-4 p-8 pb-6">
          <div class="card-body p-0 m-0">
            <p class="text-sm">
              By <span class="text-yellow-400">John Doe</span> | May 23, 2022
            </p>
            <h3 class="card-title text-2xl">
              8 Figma design systems that you can download for free today.
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
