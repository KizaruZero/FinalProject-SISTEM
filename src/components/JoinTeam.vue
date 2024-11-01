<template>
  <div class="join-our-team text-center">
    <h1 class="text-4xl font-bold tracking-normal">
      Join our team to be a part of our story
    </h1>
    <p class="text-base mt-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt.
    </p>
    <div class="">
      <router-link
        :to="{ name: 'contact' }"
        class="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-sm transition duration-300 inline-flex items-center gap-2 text-lg font-bold"
      >
        Join Now
      </router-link>
    </div>
  </div>
</template>
