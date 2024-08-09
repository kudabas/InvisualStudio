<template>
  <div class="font-Montserrat" id="app">
    <nav
      class="fixed w-full z-10 top-0 shadow-xl flex items-center justify-between flex-wrap bg-primary h-[100px] px-4 2xl:px-60">
      <div class="flex items-center flex-no-shrink text-blue mr-6 pt-2 pb-2">
        <router-link to="/" custom v-slot="{ navigate }">
          <button @click="navigate" role="link">
            <img src="@/assets/logo/logo1.png" class="w-[250px] lg:w-[300px]" alt="logo" />
          </button>
        </router-link>
      </div>
      <div class="sm:hidden">
        <button @click="isOpen = !isOpen" type="button"
          class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            <path v-if="!isOpen" fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
          </svg>
        </button>
      </div>
      <div class="fixed inset-0 z-10" :class="{'hidden':!isOpen}" @click.prevent="isOpen=false">
      </div>
      <div :class="isOpen ? 'block' : 'hidden'"
        class="bg-oren lg:h-[40px] z-50 rounded-md lg:rounded-full w-[100px] lg:w-[370px] text-center sm:flex sm:w-auto">
        <div class="pl-3 text-sm sm:flex-grow place-self-center">
          <router-link to="/" custom v-slot="{ navigate }">
            <button @click="navigate" role="link">
              <a href="#about"
                class="no-underline block mt-4 sm:inline-block sm:mt-0 text-bodas hover:text-hideung text-sm lg:text-sm transition duration-300 py-[9px] px-[20px] rounded-xl ease-in-out hover:bg-koneng mr-4 lg:mr-3">Home</a>
            </button>
          </router-link>
          <router-link to="/project" custom v-slot="{ navigate }">
            <button @click="navigate" role="link">
              <a href="#about"
                class="no-underline block mt-4 sm:inline-block sm:mt-0 text-bodas text-sm lg:text-sm transition duration-300 py-[9px] px-[20px] rounded-xl ease-in-out hover:bg-biru mr-4 lg:mr-3">Project</a>
            </button>
          </router-link>
          <router-link to="/people" custom v-slot="{ navigate }">
            <button @click="navigate" role="link">
              <a href="#about"
                class="no-underline block mt-4 sm:inline-block sm:mt-0 text-bodas text-sm lg:text-sm transition duration-300 py-[9px] px-[20px] rounded-xl ease-in-out hover:bg-biru mr-4 lg:mr-3">People</a>
            </button>
          </router-link>
          <router-link to="/findus" custom v-slot="{ navigate }">
            <button @click="navigate" role="link">
              <a href="#about"
                class="no-underline block mt-4 sm:inline-block sm:mt-0 text-bodas text-sm lg:text-sm transition duration-300 py-[9px] px-[20px] rounded-xl ease-in-out hover:bg-biru mr-4 lg:mr-3">Find
                Us</a>
            </button>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>