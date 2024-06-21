<template>
  <div class="home">
    <div class="lg:pt-[0px]">
      <HomeInvi/>
      <BatesTea />
      <AboutUs/>
      <FilletCik/>
      <WhyUs/>
      <LocationCik/>
      <FooterDigdaya/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeInvi from '@/components/HomeInvi.vue';
import BatesTea from '@/components/BatesTea.vue';
import AboutUs from '@/components/AboutUs.vue';
import WhyUs from '@/components/WhyUs.vue';
import FilletCik from '@/components/FilletCik.vue'
import LocationCik from '@/components/LocationCik.vue';
import FooterDigdaya from '@/components/FooterDigdaya.vue';
import AOS from 'aos'

export default {
  name: 'HomeView',
  components: {
    HomeInvi,
    BatesTea,
    AboutUs,
    FilletCik,
    WhyUs,
    LocationCik,
    FooterDigdaya
},
beforeCreate(){
    setTimeout(() => {
      AOS.init()
  }, 700)
  }
}
</script>