<template>
  <div class="gajelas flex">
    <div class="garis-1 flex-none h-6 w-72 bg-slate-100"></div>
    <div class="garis-2 h-6 grow bg-yellow-300"></div>
    <div class="garis-3 flex-none h-6 w-72 bg-blue-600"></div>
  </div>
  <div class="px-20 py-24 bg-gray-300">
    <div class="grid grid-cols-2 gap-x-20">
      <div class="about-us">
        <h4 class="text-xl font-bold tracking-widest">ABOUT US</h4>
        <h2 class="text-4xl font-bold mt-6">
          We are a community of content writers who share their learnings
        </h2>
        <p class="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="">
          <router-link
            :to="{ name: 'about' }"
            class="mt-8 text-blue-600 rounded-sm transition duration-300 inline-flex items-center text-lg font-bold"
          >
            Read More
            <span class="transform translate-y-px">&gt;</span>
          </router-link>
        </div>
      </div>
      <div class="our-mission">
        <h4 class="text-xl font-bold tracking-widest">OUR MISSION</h4>
        <h2 class="text-4xl font-bold mt-6">
          Creating valuable content for creatives all around the world
        </h2>
        <p class="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  </div>
</template>
