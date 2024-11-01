<template>
  <div class="flex px-28 py-20 bg-[#f7f3e8]">
    <div class="flex space-x-10 rounded-lg">
      <!-- Left Section -->
      <div class="w-1/2 pr-44">
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
      <div
        class="divider divider-horizontal divide-gray-400 -translate-x-32"
      ></div>

      <!-- Right Section -->
      <div class="w-1/2 -translate-x-32">
        <p class="text-3xl font-bold text-gray-900">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <!-- User Info -->
        <div class="flex items-center mt-32 space-x-4">
          <img
            src="@/assets/profile.png"
            alt="User"
            class="w-12 h-12 rounded-full"
          />
          <div class="">
            <p class="font-semibold text-gray-900">Jonathan Vallem</p>
            <p class="text-sm text-gray-500">New York, USA</p>
          </div>
          <div class="tombol flex flex-cols gap-x-6 translate-x-64">
            <div class="place-content-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="24"
                  transform="rotate(-180 24 24)"
                  fill="white"
                />
                <path
                  d="M34.2852 25C34.8374 25 35.2852 24.5523 35.2852 24C35.2852 23.4477 34.8374 23 34.2852 23L34.2852 25ZM13.449 23.2929C13.0585 23.6834 13.0585 24.3166 13.449 24.7071L19.813 31.0711C20.2035 31.4616 20.8367 31.4616 21.2272 31.0711C21.6177 30.6805 21.6177 30.0474 21.2272 29.6569L15.5703 24L21.2272 18.3431C21.6177 17.9526 21.6177 17.3195 21.2272 16.9289C20.8367 16.5384 20.2035 16.5384 19.813 16.9289L13.449 23.2929ZM34.2852 23L14.1561 23L14.1561 25L34.2852 25L34.2852 23Z"
                  fill="#232536"
                />
              </svg>
            </div>
            <div class="justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="62"
                viewBox="0 0 62 62"
                fill="none"
              >
                <circle cx="31" cy="31" r="31" fill="#232536" />
                <path
                  d="M18 31C17.4477 31 17 31.4477 17 32C17 32.5523 17.4477 33 18 33V31ZM44.7071 32.7071C45.0976 32.3166 45.0976 31.6834 44.7071 31.2929L38.3431 24.9289C37.9526 24.5384 37.3195 24.5384 36.9289 24.9289C36.5384 25.3195 36.5384 25.9526 36.9289 26.3431L42.5858 32L36.9289 37.6569C36.5384 38.0474 36.5384 38.6805 36.9289 39.0711C37.3195 39.4616 37.9526 39.4616 38.3431 39.0711L44.7071 32.7071ZM18 33H44V31H18V33Z"
                  fill="#F4F4F4"
                />
              </svg>
            </div>
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
