<template>
  <div class="category text-black">
    <div class="header-container min-h-screen flex items-center justify-center">
      <div class="header text-center py-40 text-black mx-[464px]">
        <h1 class="judul text-5xl font-bold">Business</h1>
        <p class="text-base mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>

        <div class="nav text-base font-bold tracking-wider mt-8">
          BLOG > BUSINESS
        </div>
      </div>
    </div>

    <div class="content grid grid-cols-3 gap-x-36 mx-20">
      <div class="col-span-2">
        <div class="card card-side rounded-none">
          <div class="img w-full">
            <img src="@/assets/category-post.png" alt="Movie" class="w-full" />
          </div>
          <div class="card-body p-0 m-0 mt-6 mx-8">
            <h2 class="text-yellow-400 mb-5 text-xl font-bold tracking-widest">
              BUSINESS
            </h2>
            <router-link :to="{ name: 'post' }">
              <h3 class="text-4xl font-bold">
                Top 6 free website mockup tools 2022
              </h3>
            </router-link>
            <p class="description text-base mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec.
            </p>
          </div>
        </div>
        <div class="card card-side rounded-none mt-8">
          <div class="img w-full">
            <img src="@/assets/category-post.png" alt="Movie" class="w-full" />
          </div>
          <div class="card-body p-0 m-0 mt-6 mx-8">
            <h2 class="text-yellow-400 mb-5 text-xl font-bold tracking-widest">
              BUSINESS
            </h2>
            <router-link :to="{ name: 'post' }">
              <h3 class="text-4xl font-bold">
                Top 6 free website mockup tools 2022
              </h3>
            </router-link>
            <p class="description text-base mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec.
            </p>
          </div>
        </div>
        <div class="card card-side rounded-none mt-8">
          <div class="img w-full">
            <img src="@/assets/category-post.png" alt="Movie" class="w-full" />
          </div>
          <div class="card-body p-0 m-0 mt-6 mx-8">
            <h2 class="text-yellow-400 mb-5 text-xl font-bold tracking-widest">
              BUSINESS
            </h2>
            <router-link :to="{ name: 'post' }">
              <h3 class="text-4xl font-bold">
                Top 6 free website mockup tools 2022
              </h3>
            </router-link>
            <p class="description text-base mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec.
            </p>
          </div>
        </div>
        <div class="card card-side rounded-none mt-8">
          <div class="img w-full">
            <img src="@/assets/category-post.png" alt="Movie" class="w-full" />
          </div>
          <div class="card-body p-0 m-0 mt-6 mx-8">
            <h2 class="text-yellow-400 mb-5 text-xl font-bold tracking-widest">
              BUSINESS
            </h2>
            <router-link :to="{ name: 'post' }">
              <h3 class="text-4xl font-bold">
                Top 6 free website mockup tools 2022
              </h3>
            </router-link>
            <p class="description text-base mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-1">
        <div class="category">
          <div class="title">
            <h2 class="text-4xl font-bold">Category</h2>
          </div>
          <div class="choose-category grid grid-row-4 gap-y-8 mt-10">
            <router-link :to="{ name: 'category' }">
              <div
                class="category-card outline hover:bg-blue-600 hover:text-slate-100 outline-slate-200 outline-1 p-6 flex items-center"
              >
                <div class="rounded-xl bg-yellow-100 w-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M25.0305 13.9138L14.04 12.2443C13.53 12.1648 13.0095 12.3043 12.6195 12.6343C12.2295 12.9748 12 13.4638 12 13.9738V35.0443C12 35.5948 12.45 36.0448 13.0005 36.0448H16.251V30.7948C16.251 29.8243 17.031 29.0443 18.0015 29.0443H20.502C21.4725 29.0443 22.2525 29.8243 22.2525 30.7948V36.0448H26.502V15.6448C26.5005 14.7838 25.8795 14.0548 25.0305 13.9138ZM17.5005 26.7943H16.0005C15.5865 26.7943 15.2505 26.4583 15.2505 26.0443C15.2505 25.6303 15.5865 25.2943 16.0005 25.2943H17.5005C17.9145 25.2943 18.2505 25.6303 18.2505 26.0443C18.2505 26.4583 17.9145 26.7943 17.5005 26.7943ZM17.5005 23.7943H16.0005C15.5865 23.7943 15.2505 23.4583 15.2505 23.0443C15.2505 22.6303 15.5865 22.2943 16.0005 22.2943H17.5005C17.9145 22.2943 18.2505 22.6303 18.2505 23.0443C18.2505 23.4583 17.9145 23.7943 17.5005 23.7943ZM17.5005 20.7943H16.0005C15.5865 20.7943 15.2505 20.4583 15.2505 20.0443C15.2505 19.6303 15.5865 19.2943 16.0005 19.2943H17.5005C17.9145 19.2943 18.2505 19.6303 18.2505 20.0443C18.2505 20.4583 17.9145 20.7943 17.5005 20.7943ZM17.5005 17.7943H16.0005C15.5865 17.7943 15.2505 17.4583 15.2505 17.0443C15.2505 16.6303 15.5865 16.2943 16.0005 16.2943H17.5005C17.9145 16.2943 18.2505 16.6303 18.2505 17.0443C18.2505 17.4583 17.9145 17.7943 17.5005 17.7943ZM22.5 26.7943H21C20.586 26.7943 20.25 26.4583 20.25 26.0443C20.25 25.6303 20.586 25.2943 21 25.2943H22.5C22.914 25.2943 23.25 25.6303 23.25 26.0443C23.25 26.4583 22.914 26.7943 22.5 26.7943ZM22.5 23.7943H21C20.586 23.7943 20.25 23.4583 20.25 23.0443C20.25 22.6303 20.586 22.2943 21 22.2943H22.5C22.914 22.2943 23.25 22.6303 23.25 23.0443C23.25 23.4583 22.914 23.7943 22.5 23.7943ZM22.5 20.7943H21C20.586 20.7943 20.25 20.4583 20.25 20.0443C20.25 19.6303 20.586 19.2943 21 19.2943H22.5C22.914 19.2943 23.25 19.6303 23.25 20.0443C23.25 20.4583 22.914 20.7943 22.5 20.7943ZM22.5 17.7943H21C20.586 17.7943 20.25 17.4583 20.25 17.0443C20.25 16.6303 20.586 16.2943 21 16.2943H22.5C22.914 16.2943 23.25 16.6303 23.25 17.0443C23.25 17.4583 22.914 17.7943 22.5 17.7943Z"
                      fill="#232536"
                    />
                    <path
                      d="M34.6205 22.887L27.5 21.396V36.045H34.25C35.2145 36.045 36.0005 35.2605 36.0005 34.2945V24.597C36.0005 23.7705 35.4365 23.067 34.6205 22.887ZM32.2505 33.045H30.7505C30.3365 33.045 30.0005 32.709 30.0005 32.295C30.0005 31.881 30.3365 31.545 30.7505 31.545H32.2505C32.6645 31.545 33.0005 31.881 33.0005 32.295C33.0005 32.709 32.6645 33.045 32.2505 33.045ZM32.2505 30.045H30.7505C30.3365 30.045 30.0005 29.709 30.0005 29.295C30.0005 28.881 30.3365 28.545 30.7505 28.545H32.2505C32.6645 28.545 33.0005 28.881 33.0005 29.295C33.0005 29.709 32.6645 30.045 32.2505 30.045ZM32.2505 27.045H30.7505C30.3365 27.045 30.0005 26.709 30.0005 26.295C30.0005 25.881 30.3365 25.545 30.7505 25.545H32.2505C32.6645 25.545 33.0005 25.881 33.0005 26.295C33.0005 26.709 32.6645 27.045 32.2505 27.045Z"
                      fill="#075EFD"
                    />
                  </svg>
                </div>

                <h3 class="text-2xl font-bold mx-4">Business</h3>
              </div>
            </router-link>

            <div
              class="category-card outline hover:bg-blue-600 hover:text-slate-100 outline-slate-200 outline-1 p-6 flex items-center"
            >
              <div class="p-3 rounded-xl bg-yellow-100 w-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_224)">
                    <path
                      d="M5.85051 6.21152L3.85789 6.36546C3.30342 6.40832 2.8096 6.69892 2.50296 7.16273L0.204913 10.6384C-0.027646 10.9901 -0.0646164 11.4303 0.105951 11.8159C0.276563 12.2015 0.627175 12.4703 1.04382 12.5348L2.86831 12.8174C3.29511 10.5524 4.3168 8.29305 5.85051 6.21152Z"
                      fill="#075EFD"
                    />
                    <path
                      d="M10.1836 20.1316L10.4662 21.9561C10.5307 22.3728 10.7995 22.7234 11.185 22.8939C11.3454 22.9649 11.5152 22.9999 11.6842 22.9999C11.9215 22.9999 12.1572 22.9308 12.3626 22.795L15.8384 20.497C16.3022 20.1903 16.5928 19.6964 16.6355 19.142L16.7895 17.1494C14.7079 18.6832 12.4486 19.7049 10.1836 20.1316Z"
                      fill="#075EFD"
                    />
                    <path
                      d="M9.49673 18.8667C9.56007 18.8667 9.62377 18.8614 9.68734 18.8508C10.6363 18.6922 11.5509 18.4249 12.4233 18.075L4.92457 10.5763C4.57473 11.4487 4.30744 12.3633 4.14878 13.3123C4.08625 13.6863 4.21171 14.0674 4.47985 14.3356L8.66402 18.5198C8.88665 18.7424 9.18713 18.8667 9.49673 18.8667Z"
                      fill="#075EFD"
                    />
                    <path
                      d="M21.1661 10.1973C23.0011 6.64969 23.0691 2.90072 22.9732 1.14249C22.9403 0.540047 22.46 0.0597456 21.8575 0.026908C21.5713 0.0112753 21.232 0 20.8496 0C18.8835 0 15.7727 0.297785 12.8027 1.83397C10.4424 3.0548 7.34749 5.74295 5.52151 9.27567C5.54308 9.29251 5.56415 9.31039 5.584 9.33025L13.6699 17.4161C13.6897 17.436 13.7076 17.457 13.7244 17.4786C17.2571 15.6525 19.9453 12.5576 21.1661 10.1973ZM13.3731 4.86231C14.6867 3.54876 16.8241 3.54862 18.1377 4.86231C18.7741 5.49862 19.1245 6.34472 19.1245 7.24463C19.1245 8.14454 18.7741 8.99064 18.1377 9.62695C17.481 10.2837 16.6181 10.6121 15.7554 10.6122C14.8926 10.6122 14.03 10.2838 13.3731 9.62695C12.7368 8.99064 12.3863 8.14454 12.3863 7.24463C12.3863 6.34472 12.7368 5.49862 13.3731 4.86231Z"
                      fill="#232536"
                    />
                    <path
                      d="M14.3264 8.67403C15.1146 9.46218 16.3971 9.46223 17.1853 8.67403C17.5671 8.29219 17.7773 7.78458 17.7773 7.24462C17.7773 6.70466 17.5671 6.19704 17.1853 5.81525C16.7912 5.42115 16.2735 5.22412 15.7559 5.22412C15.2382 5.22412 14.7205 5.42115 14.3265 5.81525C13.9447 6.19704 13.7344 6.70466 13.7344 7.24462C13.7344 7.78458 13.9447 8.29224 14.3264 8.67403Z"
                      fill="#232536"
                    />
                    <path
                      d="M0.687462 18.954C0.859917 18.954 1.03237 18.8882 1.1639 18.7566L3.36386 16.5566C3.62702 16.2935 3.62702 15.8668 3.36386 15.6037C3.10076 15.3405 2.67409 15.3405 2.41093 15.6037L0.210975 17.8036C-0.0521773 18.0668 -0.0521773 18.4934 0.210975 18.7566C0.342551 18.8881 0.515006 18.954 0.687462 18.954Z"
                      fill="#075EFD"
                    />
                    <path
                      d="M5.38009 17.6201C5.11699 17.357 4.69032 17.357 4.42717 17.6201L0.197547 21.8497C-0.065605 22.1129 -0.065605 22.5395 0.197547 22.8027C0.329124 22.9342 0.501579 23 0.674034 23C0.846489 23 1.01894 22.9342 1.15048 22.8026L5.38005 18.5731C5.64325 18.3099 5.64325 17.8833 5.38009 17.6201Z"
                      fill="#075EFD"
                    />
                    <path
                      d="M6.4422 19.6358L4.24229 21.8358C3.97913 22.099 3.97913 22.5256 4.24229 22.7887C4.37386 22.9203 4.54632 22.9861 4.71873 22.9861C4.89114 22.9861 5.06364 22.9203 5.19517 22.7887L7.39513 20.5888C7.65828 20.3256 7.65828 19.899 7.39513 19.6358C7.13202 19.3727 6.70535 19.3727 6.4422 19.6358Z"
                      fill="#075EFD"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_224">
                      <rect width="23" height="23" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 class="text-2xl mx-4 font-bold">Startup</h3>
            </div>
            <div
              class="category-card hover:bg-blue-600 hover:text-slate-100 outline outline-slate-200 outline-1 p-6 flex items-center"
            >
              <div class="p-3 rounded-xl bg-yellow-100 w-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="24"
                  viewBox="0 0 23 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_205)">
                    <path
                      d="M5.11557 15.4253H2.53171C1.5999 15.4253 0.841797 16.2179 0.841797 17.192V22.915C0.841797 23.5133 1.30738 24 1.87959 24H5.76759C6.33985 24 6.80544 23.5133 6.80544 22.915V17.1921C6.80544 16.2179 6.04738 15.4253 5.11557 15.4253Z"
                      fill="#232536"
                    />
                    <path
                      d="M12.6995 11.9491H10.1157C9.18386 11.9491 8.42575 12.7417 8.42575 13.7158V22.9147C8.42575 23.513 8.89134 23.9997 9.46359 23.9997H13.3516C13.9239 23.9997 14.3894 23.513 14.3894 22.9147V13.7158C14.3894 12.7416 13.6313 11.9491 12.6995 11.9491Z"
                      fill="#232536"
                    />
                    <path
                      d="M20.4261 7.98877H17.8423C16.9104 7.98877 16.1523 8.78133 16.1523 9.75545V22.9148C16.1523 23.5131 16.6179 23.9998 17.1901 23.9998H21.0781C21.6504 23.9998 22.1159 23.5131 22.1159 22.9148V9.75545C22.116 8.78133 21.3579 7.98877 20.4261 7.98877Z"
                      fill="#232536"
                    />
                    <path
                      d="M18.3679 0.668189C18.0518 0.201126 17.5378 -0.045859 16.9927 0.00645363L12.1126 0.478486C11.5676 0.53122 11.1057 0.87294 10.8769 1.39264C10.6481 1.91235 10.7002 2.50152 11.0163 2.96858L11.2887 3.37105L5.23158 7.7468L5.22539 7.75134C4.79558 8.0693 4.50997 8.54325 4.42115 9.08583C4.33232 9.62841 4.45087 10.1746 4.755 10.624C5.05913 11.0733 5.51248 11.3719 6.03147 11.4648C6.14392 11.4849 6.25651 11.4949 6.36833 11.4949C6.77115 11.4949 7.16351 11.3657 7.49939 11.1184L13.5662 6.73575L13.8475 7.15111C14.1355 7.57669 14.5878 7.81983 15.0781 7.81983C15.1259 7.81983 15.1741 7.81748 15.2226 7.81284C15.7676 7.76011 16.2295 7.41834 16.4583 6.89859L18.5074 2.24413C18.7362 1.72433 18.6841 1.13521 18.3679 0.668189Z"
                      fill="#075EFD"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_205">
                      <rect width="22.9565" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 class="text-2xl mx-4 font-bold">Economy</h3>
            </div>
            <div
              class="category-card hover:bg-blue-600 hover:text-slate-100 outline outline-slate-200 outline-1 p-6 flex items-center"
            >
              <div class="p-3 rounded-xl bg-yellow-100 w-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_194)">
                    <path
                      d="M15.5176 7.03125C15.5176 7.80647 16.1486 8.4375 16.9238 8.4375H21.1042C21.0283 7.44788 20.7988 6.50213 20.4316 5.625H16.9238C16.1486 5.625 15.5176 6.25603 15.5176 7.03125Z"
                      fill="#232536"
                    />
                    <path
                      d="M6.37695 24H14.8145C15.2031 24 15.5176 23.6855 15.5176 23.2969V19.6875H16.9238V15.1172L9.893 9.84375H3.56445C3.17581 9.84375 2.86133 10.1582 2.86133 10.5469C2.86133 13.0373 3.88236 15.4228 5.67383 17.1428V23.2969C5.67383 23.6855 5.98831 24 6.37695 24Z"
                      fill="#075EFD"
                    />
                    <path
                      d="M12.002 0C11.6133 0 11.2988 0.314484 11.2988 0.703125V1.40625H8.35681C8.06558 0.589594 7.29242 0 6.37695 0C5.2138 0 4.26758 0.946219 4.26758 2.10938C4.26758 3.27253 5.2138 4.21875 6.37695 4.21875C7.29242 4.21875 8.06558 3.62916 8.35681 2.8125H11.2988V5.625H4.13806C3.84683 4.80834 3.07367 4.21875 2.1582 4.21875C0.995047 4.21875 0.00195312 5.16497 0.00195312 6.32812C0.00195312 7.49128 0.995047 8.4375 2.1582 8.4375C3.07367 8.4375 3.84683 7.84791 4.13806 7.03125H11.2988V9.14095L18.0485 14.2033C18.2257 14.3358 18.3301 14.5445 18.3301 14.7656V19.6875H19.0332C20.1964 19.6875 21.1426 18.7413 21.1426 17.5781V14.0625H23.2988C23.5584 14.0625 23.7966 13.9197 23.9189 13.691C24.0411 13.4624 24.0274 13.185 23.8839 12.9693L21.7533 9.84375H16.9238C15.3727 9.84375 14.1113 8.58239 14.1113 7.03125C14.1113 5.48011 15.3727 4.21875 16.9238 4.21875H19.6897C18.0628 1.68647 15.2291 0 12.002 0V0Z"
                      fill="#232536"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_194">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 class="text-2xl mx-4 font-bold">Technology</h3>
            </div>
          </div>
        </div>
        <div class="all-tag mt-12">
          <div class="judul text-4xl font-bold">
            <h2>All Tags</h2>
          </div>
          <div class="tag mt-6 flex flex-wrap justify-between">
            <div
              class="btn rounded-full px-9 py-2 mt-4 mr-4 border-2 border-slate-400 bg-slate-100"
            >
              Business
            </div>
            <div
              class="btn rounded-full px-9 py-2 mt-4 mr-4 border-2 border-slate-400 bg-slate-100"
            >
              Experience
            </div>
            <div
              class="btn rounded-full px-12 py-2 mt-4 mr-4 border-2 border-slate-400 bg-slate-100"
            >
              Screen
            </div>
            <div
              class="btn rounded-full px-12 py-2 mt-4 mr-4 border-2 border-slate-400 bg-slate-100"
            >
              Technology
            </div>
            <div
              class="btn rounded-full px-[54px] py-2 mt-4 mr-4 border-2 border-slate-400 bg-slate-100"
            >
              Marketing
            </div>
            <div
              class="btn rounded-full px-[38px] py-2 mt-4 mr-4 border-2 border-slate-400 bg-slate-100"
            >
              Life
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<script setup></script>
