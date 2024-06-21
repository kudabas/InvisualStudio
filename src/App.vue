<template>
  <div class="bg-kabeh bg-center bg-cover font-yoman">
    <NavbarDigdaya />
    <router-view />
  </div>
</template>

<script>
import NavbarDigdaya from './components/NavbarDigdaya.vue';

export default {
  components: {
    NavbarDigdaya
  }
}
</script>
