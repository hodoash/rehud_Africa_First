<template>
  <h2 class="header">Get in touch with us</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus
    sit amet luctus venenatis, lectus magna fringilla urna. Vel fringilla est
    ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis
  </p>
  <div class="split1">
    <Email-form />
  </div>
  <div class="split2">
    <div class="contact-image">
      <img src="../assets/email_img.svg" alt="people sending emails" />
    </div>
    <div class="address">
      <p>45, Hayes Steet. 2nd Floor, The Albert’s Offices.</p>
      <p>Kanda, Accra. 00233</p>
      <div class="item">
        <div class="item">
          <img src="../assets/phone.svg" />
          <p>(+233) 54 123 122</p>
        </div>
        <img src="../assets/mail.svg" />
        <p>rehudafricasupport@gmail.com</p>
      </div>
    </div>
  </div>
</template>

<script>
import EmailForm from "../components/EmailForm.vue";
export default {
  components: { EmailForm },
};
</script>

<style></style>
