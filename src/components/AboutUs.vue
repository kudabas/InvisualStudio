<template>
  <div id="about">
    <div
      data-aos="fade-right"
      data-aos-duration="800"
      data-aos-offset="300"
      class="pb-[10px] pt-[50px] lg:pt-[0px] mt-[50px] 2xl:px-60 flex-container bg-[url('@/assets/5.png')] bg-[length:1000px_200px] bg-no-repeat drop-shadow-2xl"
    >
      <div class="flex flex-wrap shadow-xl rounded-xl pb-[0px] pt-[180px]">
        <div
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-offset="300"
          class="my-auto px-5 lg:w-1/2"
        >
          <div class>
            <h1 class="font-yoman mb-0 text-lg text-bodas text-left font-bold">
              HELLO,
            </h1>
            <h2 class="font-yoman mb-5 text-lg text-bodas text-left font-bold">
              WE ARE INVISUAL
            </h2>
          </div>
          <div class="text-justify">
            <h2 class="font-yoman text-bodas text-md">
              Hey Involks! Invisual is more than just a design studio, we are
              your partners in creativity. Our team of talented designers and
              consultants is passionate about delivering innovative design
              solutions that help individuals and businesses express their
              unique visions. Whether you need high-quality design templates,
              bespoke design services, or expert guidance through our consulting
              services, Invisual is here to bring your ideas to life.
            </h2>
          </div>
          <div class="flex pt-20 pb-5">
            <router-link to="/project" custom v-slot="{ navigate }">
              <button @click="navigate" role="link">
            <a
              href="#about"
              class="underline block mt-4 sm:inline-block sm:mt-0 text-bodas text-md lg:text-sm transition duration-300 py-[9px] px-[20px] rounded-xl ease-in-out hover:bg-oren mr-4 lg:mr-0"
              >Our Work</a
            >
              </button>
            </router-link>
            <router-link to="/findus" custom v-slot="{ navigate }">
              <button @click="navigate" role="link">
            <a
              href="#about"
              class="underline block mt-4 sm:inline-block sm:mt-0 text-bodas text-md lg:text-sm transition duration-300 py-[9px] px-[20px] rounded-xl ease-in-out hover:bg-oren mr-4 lg:mr-3"
              >Know More</a
            >
              </button>
            </router-link>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="300"
          class="p-3 pt-[0px] w-full lg:w-1/2"
        >
          <img
            src="@/assets/logo/logo2.png"
            alt="catra"
            class="w-[400px] my-auto rounded-full mx-auto transform hover:rotate-90 duration-1000"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
