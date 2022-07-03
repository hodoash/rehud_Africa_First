<template>
  <div class="home">
    <Hero/>
    <AboutIntro/>
    <ProcessIntro/>
    <Testimonials/>
    <Events/>
    <BannerFirst/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import AboutIntro from '../components/AboutIntro.vue';
import ProcessIntro from '../components/ProcessIntro.vue';
import Testimonials from '../components/Testimonials.vue';
import Events from '../components/Events.vue';
import BannerFirst from '../components/BannerFirst.vue';

export default {
  name: "Home",
  components: {
    Hero,
    AboutIntro,
    ProcessIntro,
    Testimonials,
    Events,
    BannerFirst,
  },
};
</script>
