<template>
  <div class="logo">
    <img src="../src/assets/logo.png" alt="rehud logo" />
  </div>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'About' }">About Us</router-link>
    <router-link :to="{ name: 'Programs' }">Programs</router-link>
    <router-link :to="{ name: 'Partner' }">Partner With Us</router-link>
    <router-link :to="{ name: 'Contact' }"> Contact Us</router-link>


  </div>
  <router-view />

  <Footer />
</template>
<script>
import Footer from "../src/components/Footer.vue";

export default {
  components: {
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
