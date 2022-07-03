<template>
  <div class="home">
    <Hero/>
    <AboutIntro/>
    <ProcessIntro/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import AboutIntro from '../components/AboutIntro.vue';
import ProcessIntro from '../components/ProcessIntro.vue';

export default {
  name: "Home",
  components: {
    Hero,
    AboutIntro,
    ProcessIntro,
  },
};
</script>
