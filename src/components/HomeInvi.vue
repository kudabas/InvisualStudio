<template>
  <div id="hero">
    <div
      data-aos="fade-down"
      data-aos-duration="300"
      class="text-center mt-[0px] lg:px-[150px]"
    >
      <div class="p-3 pt-[100px]">
        <Carousel :items-to-show="1" :autoplay="5000" :wrap-around="true">
          <Slide v-for="(image, index) in images" :key="index">
            <img class="w-full rounded-2xl" :src="image" alt="Image" />
          </Slide>
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
      <!-- <div class="animate-bounce mt-[20px] mx-auto">
        <a
          href="https://wa.link/jacikr"
          class=" transition duration-300 ease-in-out hover:bg-primary hover:text-bodas text-primary border-2 border-bodas font-bold bg-bodas py-3 px-12 rounded-xl"
        >
          ORDER
          NOW !
        </a>
      </div> -->

      <!-- <div class="bg-cover bg-center bg-no-repeat 5 bg-cats pt-0">
      <div class="grid grid-cols-2 gap-10 pt-15 h-[700px]">
        <div class="text-left p-60">
          <p class="text-4xl font-extrabold">
            SCIENTIFICS
            <a class="text-primary">RESEARCH</a>
          </p>
          <p class="text-4xl font-extrabold">
            JOURNAL
          </p>
          <a href="https://api.whatsapp.com/send/?phone=6281120011644&text&type=phone_number&app_absent=0">
          <button
            type="button"
            class="text-bodas bg-primary hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-primary dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >Consultation NOW !</button>
        </a>
        </div>
        <div class="place-content-center">
          <div class>
            <img class="h-[629px] w-[629px]" src="../assets/home1.png" alt="homie" />
          </div>
        </div>
      </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import slide1 from "@/assets/slide1.png";
import slide2 from "@/assets/slide2.png";
import slide3 from "@/assets/slide3.png";
import slide4 from "@/assets/slide4.png";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "AutoPlay",
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  data() {
    return {
      images: [slide1, slide2, slide3, slide4], // Array of image filenames
      linkeuy: ["https://tailwindcss.com/docs/place-self"],
    };
  },
});
</script>

<style></style>
