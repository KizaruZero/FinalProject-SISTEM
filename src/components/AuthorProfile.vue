<template>
  <main
    class="flex flex-col items-center pt-32 w-full max-md:px-5 max-md:pt-24 max-md:max-w-full"
  >
    <section class="flex flex-col w-full max-md:max-w-full">
      <div class="max-w-full w-[952px]">
        <div class="flex gap-5 max-md:flex-col">
          <div class="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/620ff041f074146a40a17d4ed05a7b479d1ea11f21ba20bdd8802d9140460ab6?placeholderIfAbsent=true&apiKey=9f07f0d0300c485faa5b0ff53fd24f5e"
              alt="Author's portrait"
              class="object-contain grow w-full aspect-[0.85] max-md:mt-8"
            />
          </div>
          <div class="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col max-md:mt-9 max-md:max-w-full">
              <h1
                class="text-5xl font-bold tracking-tighter text-gray-800 leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]"
              >
                Hey there, I'm Andrew Jonhson and welcome to my Blog
              </h1>
              <p
                class="mt-6 mr-5 text-base leading-7 text-zinc-500 max-md:mr-2.5 max-md:max-w-full"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam
                sem. At risus viverra adipiscing at in tellus.
              </p>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/081b496ba97d77d68a909d86c5938932b0b19cdcf5f062fea86df0e31e92ff5e?placeholderIfAbsent=true&apiKey=9f07f0d0300c485faa5b0ff53fd24f5e"
                alt="Social media icons"
                class="object-contain mt-6 w-28 max-w-full aspect-[6.58]"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c6adf65d2b2182cdb25b4a072861eb1ed209bb0f828b6136c6697d20e482490?placeholderIfAbsent=true&apiKey=9f07f0d0300c485faa5b0ff53fd24f5e"
        alt="Decorative image"
        class="object-contain mt-64 w-full aspect-[43.48] max-md:mt-10 max-md:max-w-full"
      />
    </section>
  </main>
</template>

<style scoped>
.author {
  /* Ensure the author div uses flexbox */
  display: flex;
  align-items: center; /* Center align vertically */
}

.image-container {
  width: 251px; /* Set fixed width */
  height: 294px; /* Set fixed height */
}

.author-image {
  width: 100%; /* Fill the width of the container */
  height: auto; /* Maintain aspect ratio */
}
</style>
