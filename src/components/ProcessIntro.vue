<template>
  <div class="processIntro">
    <h2>Process/Programs</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue aliquet
      elementum lorem hac. Praesent in laoreet scelerisque pellentesque ornare
      et nulla nisi
    </p>
    <router-link :to="{ name: 'Join' }">
      <button>Join our cohort <img src="../assets/arrow_btn.svg" /></button>
    </router-link>
  </div>
  <div class="processgrid">
      <div class="gridItem">
          <img src="../assets/the_talk.png" />
          <h3>The Talk</h3>
      </div>
       <div class="gridItem">
          <img src="../assets/spring.png" />
          <h3>Spring Cohort</h3>
      </div>
       <div class="gridItem">
          <img src="../assets/idea2.png" />
          <h3>Problem Fair</h3>
      </div>
       <div class="gridItem">
          <img src="../assets/podcast.png" />
          <h3>Podcast</h3>
      </div>
       <div class="gridItem">
          <img src="../assets/leadership.png" />
          <h3>Leadership by Service</h3>
      </div>
       <div class="gridItem">
          <img src="../assets/idea.png" />
          <h3>Idea & Design Fair</h3>
      </div>

  </div>
</template>

<script>
export default {};
</script>

<style></style>
