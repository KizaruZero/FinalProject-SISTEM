<template>
  <div class="w-[48rem] mx-auto p-6 space-y-4">
    <!-- Working Hours and Contact Info Section -->
    <div
      class="grid grid-cols-2 gap-4 p-4 bg-yellow-400 px-16 py-12 text-black"
    >
      <div class="">
        <p class="text-sm font-medium text-gray-700">Working hours</p>
        <div class="divider divide-y mt-4 border-slate-400"></div>
        <p class="text-lg font-semibold mt-4">Monday To Friday</p>
        <p class="text-lg font-semibold">9:00 AM to 8:00 PM</p>
        <p class="text-sm text-gray-600">Our Support Team is available 24/7</p>
      </div>
      <div>
        <p class="text-sm font-medium text-gray-700">Contact Us</p>
        <div class="divider divide-y mt-4 border-slate-400"></div>
        <p class="text-lg font-semibold mt-4">020 7993 2905</p>
        <p class="text-sm text-gray-600">hello@finsweet.com</p>
      </div>
    </div>

    <!-- Form Section -->
    <form class="space-y-4 bg-slate-100 text-black">
      <input
        type="text"
        placeholder="Full Name"
        class="w-full p-6 border border-gray-300 bg-slate-100 text-black"
      />
      <input
        type="email"
        placeholder="Your Email"
        class="w-full p-6 border border-gray-300 bg-slate-100 text-black"
      />

      <!-- Province and City Selection -->
      <div class="grid grid-cols-2 gap-4 bg-slate-100 text-black">
        <select class="w-full p-6 border border-gray-300 bg-slate-100">
          <option>Province</option>
          <!-- Add other province options here -->
        </select>
        <select class="w-full p-6 border border-gray-300 bg-slate-100">
          <option>City</option>
          <!-- Add other city options here -->
        </select>
      </div>

      <!-- Message Textarea -->
      <textarea
        placeholder="Message"
        class="w-full p-6 border border-gray-300 bg-slate-100 text-black"
        rows="4"
      ></textarea>

      <!-- Submit Button -->
      <button
        type="submit"
        class="w-full p-6 text-black text-2xl font-bold bg-blue-600 hover:bg-blue-700"
      >
        Send Message
      </button>
    </form>
  </div>
</template>
