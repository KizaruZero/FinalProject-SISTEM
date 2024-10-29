<template>
  <div class="flex px-28 py-20 bg-[#f7f3e8]">
    <div class="flex space-x-10 rounded-lg">
      <!-- Left Section -->
      <div class="w-1/2">
        <h2 class="text-sm font-semibold text-gray-700 tracking-widest">
          TESTIMONIALS
        </h2>
        <h1 class="mt-2 text-3xl font-bold text-gray-900">
          What people say about our blog
        </h1>
        <p class="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
      <div class="divider divider-horizontal">OR</div>

      <!-- Right Section -->
      <div class="w-1/2">
        <p class="text-lg text-gray-900">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <!-- User Info -->
        <div class="flex items-center mt-6 space-x-4">
          <img
            src="https://via.placeholder.com/50"
            alt="User"
            class="w-12 h-12 rounded-full"
          />
          <div>
            <p class="font-semibold text-gray-900">Jonathan Vallem</p>
            <p class="text-sm text-gray-500">New York, USA</p>
          </div>
        </div>

        <!-- Navigation Arrows -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestimonialSection",
};
</script>

<style scoped></style>
