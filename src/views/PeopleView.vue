<template>
    <div class="people">
        <div class="lg:pt-[0px]">
            <HomePeop />
            <GrupPeop />
            <FooterDigdaya />
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HomePeop from "@/components/people/HomePeop.vue";
import GrupPeop from "@/components/people/GrupPeop.vue";
import FooterDigdaya from "@/components/FooterDigdaya.vue";
import AOS from 'aos'

export default {
    name: "PeopleView",
    components: {
        HomePeop,
        GrupPeop,
        FooterDigdaya
    },
    beforeCreate() {
        setTimeout(() => {
            AOS.init()
        }, 100)
    }
};
</script>