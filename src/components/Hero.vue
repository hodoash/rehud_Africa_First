<template>
  <div class="hero">
    <div class="heroTxt">
      <h1>Building goals through individual skill development</h1>
      <p>
        Looking to improve your leadership skills? Ready to grow your teamwork
        skills? Tired of something something here ish?
      </p>
      <div class="btns">
        <router-link :to="{ name: 'Join' }">
          <button>
            Join the movement <img src="../assets/arrow_btn.svg" />
          </button>
        </router-link>
        <router-link :to="{ name: 'Partner' }">
          <button>
            Become a Partner <img src="../assets/arrow_btn.svg" />
          </button>
        </router-link>
      </div>
    </div>
    <div class="heorImg">
      <img
        src="../assets/hero_img.svg"
        alt="hero illustration about leadership"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
