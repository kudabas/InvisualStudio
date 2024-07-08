<template>
  <div id="about">
    <div class="pb-[10px] pt-[50px] lg:pt-[0px] 2xl:px-60 flex-container">
      <div class="">
        <div class="rounded-xl p-5">
          <div class="grid grid-rows-4 grid-flow-col gap-0">
            <div class="col-span-2 row-span-1 lg:col-1 lg:row-span-2 rounded-xl">
              <div class="">
                <img src="@/assets/project/bran.png" class="w-[100px] lg:w-[200px] mx-auto rounded-xl" />
              </div>
            </div>
            <div class="relative col-span-2 row-span-1 lg:col-1 lg:row-span-2 rounded-xl">
              <div
                class="text-center absolute bottom-10 left-[100px] lg:left-0 lg:bottom-[80px] text-yoman text-bodas text-[30px] lg:text-md font-light lg:-rotate-90">
                <h1>Branding</h1>
                <h1>& Positioning</h1>
              </div>
            </div>
            <div class="col-span-2 row-span-2 lg:row-span-4 lg:col-span-2">
              <div class="p-3 pt-[0px]">
                <Carousel :items-to-show="1" :autoplay="5000" :wrap-around="true">
                  <Slide v-for="(item, index) in items" :key="index">
                    <img class="w-full rounded-2xl" :src="item.imageUrl" alt="Image" />
                    <div class="text-overlay absolute right-0 bottom-0 p-2 mr-7">
                      <a class="px-2 my-auto group text-abhu" :href="item.url" target="_blank">
                        Details
                        <div class="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                      </a>
                    </div>
                  </Slide>
                  <template #addons>
                    <Navigation />
                    <Pagination />
                  </template>
                </Carousel>
              </div>
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
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import euy1 from "@/assets/project/branding/euy1.png";
import euy2 from "@/assets/project/branding/euy2.png";
import euy3 from "@/assets/project/branding/3.png";
import euy4 from "@/assets/project/branding/4.png";
import euy5 from "@/assets/project/branding/5.png";
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
      // images2: ["euy1.png", "euy2.png", "3.png", "4.png", "5.png"],
      // linktea: ["https://catrainstitute.co.id/", "https://vikramainstitute.co.id/", "https://wiceunwar.com/", "https://tailwindcss.com/docs/space", "https://tailwindcss.com/docs/align-items"],
      items: [
        {
          url: "https://www.behance.net/gallery/200657709/Fashion-Branding",
          imageUrl: euy1,
        },
        {
          url: "https://www.behance.net/gallery/200658327/Bakery-",
          imageUrl: euy2,
        },
        {
          url: "https://www.behance.net/gallery/201003539/Wristband-Branding",
          imageUrl: euy3,
        },
        {
          url: "https://www.behance.net/gallery/201001427/Skincare-Branding?tracking_source=project_owner_other_projects",
          imageUrl: euy4,
        },
        {
          url: "https://www.behance.net/gallery/200917835/Hotel-Branding",
          imageUrl: euy5,
        },
      ],
      loading: true,
    };
  },
});
</script>

<style></style>
