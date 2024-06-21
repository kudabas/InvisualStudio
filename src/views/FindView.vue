<template>
  <div class="findus">
    <div class="">
      <HomeFind />
      <SeeOur />
      <DontHesis />
      <FooterDigdaya />
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HomeFind from "../components/findus/HomeFind.vue";
import SeeOur from "../components/findus/SeeOur.vue";
import DontHesis from "../components/findus/DontHesis.vue";
import FooterDigdaya from "../components/FooterDigdaya.vue";
import AOS from 'aos'

export default {
  name: "FindView",
  components: {
    HomeFind,
    SeeOur,
    DontHesis,
    FooterDigdaya
  },
  beforeCreate() {
    setTimeout(() => {
      AOS.init()
    }, 1500)
  }
};
</script>