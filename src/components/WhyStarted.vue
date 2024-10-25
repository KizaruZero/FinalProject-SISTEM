<template>
  <div class="started-section relative">
    <div class="image asbolute">
      <figure>
        <img
          src="@/assets/why-started.png"
          alt="Shoes"
          class="responsive-img"
          style="flex-shrink: 0"
        />
      </figure>
    </div>
    <div
      class="overlap-text absolute max-w-2xl bg-slate-100"
      style="transform: translateY(-100%) translateX(75%); height: 584px"
    >
      <div class="about-us p-20">
        <h4 class="text-xl font-bold tracking-widest">WHY WE STARTED</h4>
        <h2 class="text-4xl font-bold mt-6">
          It started out as a simple idea and evolved into our passion
        </h2>
        <p class="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>
        <div class="">
          <router-link
            :to="{ name: 'blog' }"
            class="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-sm transition duration-300 inline-flex items-center gap-2 text-lg font-bold"
          >
            Discover Our Story
            <span class="transform translate-y-px">&gt;</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.responsive-img {
  width: 100%;
  height: auto;
  max-width: 949px; /* Ensure the image does not exceed its original width */
  flex-shrink: 0;
}
</style>
