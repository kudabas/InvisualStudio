<template>
  <div class="font-Montserrat" id="app">
    <nav
      class="fixed w-full z-10 top-0 shadow-xl flex items-center justify-between flex-wrap bg-primary h-[100px] px-4 2xl:px-60">
      <div class="flex items-center flex-no-shrink text-blue mr-6 pt-2 pb-2">
        <a href="https://chiclinciparay.com/">
          <img src="@/assets/logo/logo1.png" width="300" alt="logo" />
        </a>
      </div>
      <div class="block sm:hidden">
        <button @click="toggle"
          class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-primary">
          <svg class="fill-current h-3 w-3 bg-primary" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div :class="open ? 'block' : 'hidden'"
        class="bg-oren rounded-md lg:h-[40px] lg:rounded-full w-full items-start text-right sm:flex sm:w-auto">
        <div class="pl-3 text-sm sm:flex-grow place-self-center">
          <router-link to="/" custom v-slot="{ navigate }">
            <button @click="navigate" role="link">
              <a href="#about"
                class="no-underline block mt-4 sm:inline-block sm:mt-0 text-bodas hover:text-hideung text-md lg:text-sm transition duration-300 py-[9px] px-[20px] rounded-xl ease-in-out hover:bg-koneng mr-4 lg:mr-3">Home</a>
            </button>
          </router-link>
          <router-link to="/project" custom v-slot="{ navigate }">
            <button @click="navigate" role="link">
              <a href="#about"
                class="no-underline block mt-4 sm:inline-block sm:mt-0 text-bodas text-md lg:text-sm transition duration-300 py-[9px] px-[20px] rounded-xl ease-in-out hover:bg-biru mr-4 lg:mr-3">Project</a>
            </button>
          </router-link>
          <router-link to="/people" custom v-slot="{ navigate }">
            <button @click="navigate" role="link">
              <a href="#about"
                class="no-underline block mt-4 sm:inline-block sm:mt-0 text-bodas text-md lg:text-sm transition duration-300 py-[9px] px-[20px] rounded-xl ease-in-out hover:bg-biru mr-4 lg:mr-3">People</a>
            </button>
          </router-link>
          <router-link to="/findus" custom v-slot="{ navigate }">
            <button @click="navigate" role="link">
              <a href="#about"
                class="no-underline block mt-4 sm:inline-block sm:mt-0 text-bodas text-md lg:text-sm transition duration-300 py-[9px] px-[20px] rounded-xl ease-in-out hover:bg-biru mr-4 lg:mr-3">Find
                Us</a>
            </button>
          </router-link>
          <!-- <a href="#tentang"
            class="transition duration-300 ease-in-out hover:bg-primary hover:text-bodas text-primary border-2 border-bodas font-bold bg-bodas py-[9px] px-[30px] rounded-xl">People</a> -->
          <!-- <a href="#menu"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-gray-600 hover:text-primary mr-4">Find Us</a>
          <a href="#location"
            class="focus:bg-bodas active:bg-bodas no-underline block mt-4 sm:inline-block sm:mt-0 text-gray-600 hover:text-primary mr-4">Location</a>
          <button 
            class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
            <a href="#location"> </a>
            Save changes
          </button> -->

        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  data() {
    return { open: false };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
};
</script>

<style scoped>
</style>