<template>
  <div id="about2">
    <div class="pb-[10px] pt-[50px] lg:pt-[0px] 2xl:px-60 flex-container">
      <div class="">
        <div
          class="drop-shadow-2xl shadow-xl rounded-xl p-5"
        >
          <div class="grid lg:grid-rows-2 grid-flow-col gap-0">
            <div class="col-1 lg:row-span-1 w-[200px] rounded-xl">
              <div class="">
                <img src="@/assets/project/sos.png" class="rounded-xl" />
              </div>
            </div>
            <div class="col-1 lg:row-span-1 w-[200px] rounded-xl">
              <div class="text-yoman text-bodas text-md font-light -rotate-90">
                <h1>Social Media</h1>
                <h1>Management</h1>
              </div>
            </div>
            <div class="col-span-2 row-span-4 lg:row-span-2 lg:col-span-2">
              <div class="p-3 pt-[00px]">
                <Carousel
                  :items-to-show="1"
                  :autoplay="4000"
                  :wrap-around="true"
                >
                  <Slide v-for="(image, index) in images" :key="index">
                    <img
                      class="w-full gap-3 rounded-2xl"
                      :src="image"
                      alt="My Image"
                    />
                  </Slide>
                  <template #addons>
                    <Navigation />
                    <Pagination />
                  </template>
                </Carousel>
                <!-- <div class="">
          <a v-bind:href="linkeuy">link euyy
          </a>
  
        </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import sos1 from "@/assets/project/sosmed/sos1.png";
import sos2 from "@/assets/project/sosmed/sos2.png";
import sos3 from "@/assets/project/sosmed/sos3.png";
import sos4 from "@/assets/project/sosmed/sos4.png";
import sos5 from "@/assets/project/sosmed/sos5.png";

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
      images: [sos1, sos2, sos3, sos4, sos5],
      // images2: ["sos1.png", "euy2.png", "3.png", "4.png", "5.png"],
      // linktea: ["https://catrainstitute.co.id/", "https://vikramainstitute.co.id/", "https://wiceunwar.com/", "https://tailwindcss.com/docs/space", "https://tailwindcss.com/docs/align-items"],
      items: [
        { url: "https://catrainstitute.co.id/", imageUrl: "sos1.png" },
        { url: "https://vikramainstitute.co.id/", imageUrl: "sos2.png" },
        { url: "https://wiceunwar.com/", imageUrl: "sos3.png" },
        { url: "https://wiceunwar.com/", imageUrl: "sos4.png" },
        { url: "https://wiceunwar.com/", imageUrl: "sos5.png" },
      ],
      loading: true,
    };
  },
});
</script>

<style></style>
