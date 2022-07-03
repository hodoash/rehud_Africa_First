<template>
  <h2 header>Join us now</h2>
  <div class="split1">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus
      sit amet luctus venenatis, lectus magna fringilla urna. Vel fringilla est
      ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis
    </p>
    <Join-form />
  </div>
  <div class="split2">
    <div class="imageForm">
      <img src="../assets/form_img.svg" alt="image of parent using laptop" />
    </div>
    <p>
      Fill this simple form to provide us with your basic information and our
      team will contact you soon.
    </p>
  </div>
  <div class="bannerLight">
    <h3>
      Join any of our 4 cohorts and harness the bright something something ish
    </h3>
  </div>
</template>

<script>
import JoinForm from "../components/JoinForm.vue";
export default {
  components: { JoinForm },
};
</script>

<style></style>
