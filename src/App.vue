<template>
  <div class="bg-kabeh bg-center bg-cover font-yoman">
    <NavbarDigdaya />
    <!-- <OurProduct /> -->
    <router-view />
  </div>
</template>

<script>
import NavbarDigdaya from './components/NavbarDigdaya.vue';
// import OurProduct from './components/OurProduct.vue';

export default {
  components: {
    NavbarDigdaya,
    // OurProduct
  }
}
</script>
