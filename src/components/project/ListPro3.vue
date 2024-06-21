<template>
  <div id="about3">
    <div class="pb-[10px] pt-[50px] lg:pt-[0px] 2xl:px-60 flex-container">
      <div class="">
        <div
          class="drop-shadow-2xl shadow-xl rounded-xl p-5"
        >
          <div class="grid lg:grid-rows-2 grid-flow-col gap-0">
            <div class="col-1 lg:row-span-1 w-[200px] rounded-xl">
              <div class="">
                <img src="@/assets/project/vis.png" class="rounded-xl" />
              </div>
            </div>
            <div class="col-1 lg:row-span-1 w-[200px] rounded-xl">
              <div class="text-yoman text-bodas text-md font-light -rotate-90">
                <h1>Branding</h1>
                <h1>& Positioning</h1>
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
import vis1 from "@/assets/project/visco/vis1.png";
import vis2 from "@/assets/project/visco/vis2.png";
import vis3 from "@/assets/project/visco/vis3.png";
import vis4 from "@/assets/project/visco/vis4.png";
import vis5 from "@/assets/project/visco/vis5.png";

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
      images: [vis1, vis2, vis3, vis4, vis5],
      // images2: ["euy1.png", "euy2.png", "3.png", "4.png", "5.png"],
      // linktea: ["https://catrainstitute.co.id/", "https://vikramainstitute.co.id/", "https://wiceunwar.com/", "https://tailwindcss.com/docs/space", "https://tailwindcss.com/docs/align-items"],
      items: [
        { url: "https://catrainstitute.co.id/", imageUrl: "vis1.png" },
        { url: "https://vikramainstitute.co.id/", imageUrl: "vis2.png" },
        { url: "https://wiceunwar.com/", imageUrl: "vis3.png" },
        { url: "https://wiceunwar.com/", imageUrl: "vis4.png" },
        { url: "https://wiceunwar.com/", imageUrl: "vis5.png" },
      ],
      loading:true
    };
  },
});
</script>

<style>

</style>
