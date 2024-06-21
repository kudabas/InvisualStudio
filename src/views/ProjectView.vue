<template>
  <div class="project">
    <div class="lg:pt-[0px]">
      <HomePro />
      <ListPro />
      <List2 />
      <List3 />
      <!-- <ListPro2 v-if="!loading" />
      <ListPro3 v-if="!loading" /> -->
      <FooterDigdaya />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePro from "@/components/project/HomePro.vue";
import ListPro from "@/components/project/ListPro.vue";
import List2 from "../components/project/List2.vue";
import List3 from "../components/project/List3.vue";
// import ListPro2 from "@/components/project/ListPro2.vue";
// import ListPro3 from "@/components/project/ListPro3.vue"
import FooterDigdaya from "@/components/FooterDigdaya.vue";
import AOS from 'aos'

export default {
  name: "ProjectView",
  components: {
    HomePro,
    ListPro,
    List2,
    List3,
    // ListPro2,
    // ListPro3,
    FooterDigdaya
  },
  data(){
    return {
      loading:true
    }
  },
  // created() {
  //   setTimeout(() => {
  //     this.loading = false;
  //   }, 1500);
  // },
  beforeCreate() {
    setTimeout(() => {
      AOS.init()
    }, 1500)
  },
};
</script>