<template>
  <div class="footer">
    <div class="first">
      <img src="../assets/rehudWhite.png" alt="logo" />
    </div>
    <div class="second">
      <h3>Navigation</h3>
      <div class="secondaryNav">
        <router-link to="/">Home</router-link>
        <router-link :to="{ name: 'About' }">About Us</router-link>
        <router-link :to="{ name: 'Programs' }">Programs</router-link>
        <router-link :to="{ name: 'Partner' }">Partner With Us</router-link>
        <router-link :to="{ name: 'Join' }"> Join our Cohort </router-link>
        <router-link :to="{ name: 'Contact' }"> Contact Us</router-link>
      </div>
    </div>
    <div class="third">
      <h3>Locate Us</h3>
      <p>Resource Hub for Development, Africa</p>
      <p>45, Hayes Steet. 2nd Floor, The Albert’s Offices.</p>
      <p>Kanda, Accra. 00233</p>
      <p>(+233) 54 123 122</p>
      <p>Working Days: Monday - Friday</p>
    </div>
    <div class="forth">
      <h3>Get in Touch with Us</h3>
      <div class="socials">
        <a href=""><img src="../assets/twitterLogo.png" alt="twitter logo" /></a>
        <a href=""><img src="../assets/fbLogo.png" alt="Facbook logo" /></a>
        <a href=""><img src="../assets/InstagramLogo.png" alt="Instagram logo" /></a>
        <a href=""><img src="../assets/podcastLogo.png" alt="podcast logo" /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer{
    background-color: #1f1f1f;
}

    </style>
