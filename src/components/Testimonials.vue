<template>
  <!------ Include the above in your HEAD tag ---------->
  <!--Important link from https://bootsnipp.com/snippets/Q0PG6-->
  <section class="testimonial_area">
    <h4>Testimonial</h4>
    <h2>What Our core client say ?</h2>
    <div
      class="carousel slide testimonial_slide carousel-fade"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="testimonial_content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div class="media">
              <img
                src="http://themazine.com/html/kabbo/images/testimonial-1.jpg"
                alt=""
              />
              <div class="media-body">
                <a href="#">Emran Khan</a>
                <h6>Frontend Developer</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="testimonial_content">
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
            <div class="media">
              <img
                src="http://themazine.com/html/kabbo/images/testimonial-3.jpg"
                alt=""
              />
              <div class="media-body">
                <a href="#">Jesi Azaira</a>
                <h6>Creative Web Solution</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="testimonial_content">
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </p>
            <div class="media">
              <img
                src="http://themazine.com/html/kabbo/images/testimonial-4.jpg"
                alt=""
              />
              <div class="media-body">
                <a href="#">Mahfuz Riad</a>
                <h6>Ui Designer & CEO</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="testimonial_content">
            <p>
              Business Analysis is the practice of enabling change in an
              organizational context, by defining needs enabling change in an
              organizational context, by defining needs
            </p>
            <div class="media">
              <img
                src="http://themazine.com/html/kabbo/images/testimonial-5.jpg"
                alt=""
              />
              <div class="media-body">
                <a href="#">Mahfuz Riad</a>
                <h6>Ui Designer & CEO</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="nav_control">
        <a
          class="control-prev"
          href=".testimonial_slide"
          role="button"
          data-slide="prev"
        >
          <i class="fas fa">
            <h3>
              <b> less </b>
            </h3>
          </i>
        </a>
        <a
          class="control-next"
          href=".testimonial_slide"
          role="button"
          data-slide="next"
        >
          <i class="fas fa">
            <h3>
              <b>> </b>
            </h3>
          </i>
        </a>
      </div>
    </div>
    <ul class="indicators">
      <li
        data-target=".testimonial_slide"
        data-slide-to="0"
        class="testimonial_1"
      >
        <img
          src="http://themazine.com/html/kabbo/images/testimonial-2.jpg"
          alt=""
        />
      </li>
      <li
        data-target=".testimonial_slide"
        data-slide-to="1"
        class="testimonial_2"
      >
        <img
          src="http://themazine.com/html/kabbo/images/testimonial-3.jpg"
          alt=""
        />
      </li>
      <li
        data-target=".testimonial_slide"
        data-slide-to="2"
        class="testimonial_3"
      >
        <img
          src="http://themazine.com/html/kabbo/images/testimonial-4.jpg"
          alt=""
        />
      </li>
      <li
        data-target=".testimonial_slide"
        data-slide-to="3"
        class="testimonial_4"
      >
        <img
          src="http://themazine.com/html/kabbo/images/testimonial-5.jpg"
          alt=""
        />
      </li>
      <li class="round_shap"></li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style>
.carousel-item {
  display: none;
}
.active {
  display: block;
}

.testimonial_area {
  display: block;
  overflow: hidden;
  padding-left: 200px;
  padding-top: 220px;
  padding-bottom: 100px;
  position: relative;
  /* Jupitar Nave */
}
.testimonial_area h4 {
  font: 700 18px/1 "Niramit", sans-serif;
  color: #282331;
  padding-bottom: 53px;
  text-transform: uppercase;
}
.testimonial_area h2 {
  font: 400 52px/62px "Niramit", sans-serif;
  color: #282331;
  padding-bottom: 70px;
}
.testimonial_area .testimonial_slide {
  padding-left: 170px;
  /* Control */
}
.testimonial_area .testimonial_slide .testimonial_content {
  padding-left: 220px;
  z-index: 1;
}
.testimonial_area .testimonial_slide .testimonial_content:before {
  content: "\f102";
  position: absolute;
  left: 0;
  top: 0;
  color: #faf7ff;
  font-size: 205px;
  font-family: Flaticon;
  font-style: normal;
  line-height: 1;
  z-index: -1;
}
.testimonial_area .testimonial_slide .testimonial_content p {
  font: 400 20px/31px "Niramit", sans-serif;
  color: rgba(40, 35, 49, 0.8);
  max-width: 800px;
  padding-top: 30px;
}
.testimonial_area .testimonial_slide .testimonial_content .media {
  padding: 85px 0;
}
.testimonial_area .testimonial_slide .testimonial_content .media img {
  height: 82px;
  width: 82px;
  border-radius: 50%;
  max-width: 100%;
  border: 6px solid #e5e6fa;
  box-shadow: 0px 45px 45px 0px rgba(147, 147, 147, 0.35);
}
.testimonial_area .testimonial_slide .testimonial_content .media .media-body {
  padding-left: 30px;
}
.testimonial_area .testimonial_slide .testimonial_content .media .media-body a {
  display: block;
  font: 700 21px/1 "Niramit", sans-serif;
  color: #382c4d;
  padding-top: 10px;
}
.testimonial_area
  .testimonial_slide
  .testimonial_content
  .media
  .media-body
  a:hover,
.testimonial_area
  .testimonial_slide
  .testimonial_content
  .media
  .media-body
  a:focus {
  color: #8f49f9;
}
.testimonial_area
  .testimonial_slide
  .testimonial_content
  .media
  .media-body
  h6 {
  font: 400 16px/1 "Niramit", sans-serif;
  color: #8f49f9;
  padding-top: 20px;
}
.testimonial_area .testimonial_slide .nav_control {
  display: block;
  overflow: hidden;
  margin-left: 500px;
  padding-top: 75px;
}
.testimonial_area .testimonial_slide .control-prev {
  color: #8f49f9;
  line-height: 68px;
  width: 84px;
  display: inline-block;
  text-align: right;
  padding-right: 15px;
  background: #fff;
  position: relative;
}
.testimonial_area .testimonial_slide .control-prev:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  border-style: solid;
  border-width: 68px 30px 0 0;
  border-color: #fff transparent transparent transparent;
}
.testimonial_area .testimonial_slide .control-prev i:before {
  font-size: 43px;
  line-height: 68px;
  display: block;
  font-weight: 300;
}
.testimonial_area .testimonial_slide .control-prev:hover,
.testimonial_area .testimonial_slide .control-prev:focus {
  background: #8f49f9;
  color: #fff;
}
.testimonial_area .testimonial_slide .control-next {
  color: #fff;
  line-height: 68px;
  width: 84px;
  display: inline-block;
  padding-left: 15px;
  background: #8f49f9;
  position: relative;
}
.testimonial_area .testimonial_slide .control-next:after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  border-style: solid;
  border-width: 0 30px 68px 0;
  border-color: transparent #fff transparent transparent;
}
.testimonial_area .testimonial_slide .control-next i:before {
  font-size: 43px;
  line-height: 68px;
  display: block;
  font-weight: 300;
}
.testimonial_area .indicators {
  position: absolute;
  top: 0;
  right: 30px;
  border-radius: 50%;
  width: 705px;
  height: 705px;
  display: block;
  margin-top: 200px;
}
.testimonial_area .indicators li {
  position: absolute;
  display: block;
  transition: all 300ms linear 0s;
}
.testimonial_area .indicators li img {
  border-radius: 50%;
  border: 6px solid #e5e6fa;
  box-shadow: 0px 45px 45px 0px rgba(147, 147, 147, 0.35);
  cursor: pointer;
  z-index: 1;
}
.testimonial_area .indicators li:hover,
.testimonial_area .indicators li:focus {
  border-color: #8f49f9 !important;
}
.testimonial_area .indicators .testimonial_1 {
  top: 0;
  right: 0;
  border: 2px solid #e5e6fa;
  border-radius: 50%;
  width: 705px;
  height: 705px;
}
.testimonial_area .indicators .testimonial_1 img {
  animation: rotation 60s linear infinite;
  transform-origin: -290px 80px;
  top: 270px;
  position: absolute;
  right: -70px;
}
.testimonial_area .indicators .testimonial_1:before {
  content: "";
  border: 3px solid #d4b4fe;
  border-radius: 50%;
  box-shadow: 0px 18px 58px 0px rgba(82, 82, 82, 0.35);
  height: 19px;
  width: 19px;
  display: block;
  animation: rotation 55s linear infinite;
  transform-origin: -342px 10px;
  top: 340px;
  position: absolute;
  right: -10px;
}
.testimonial_area .indicators .testimonial_1:after {
  content: "";
  border: 3px solid #d4b4fe;
  border-radius: 50%;
  box-shadow: 0px 18px 58px 0px rgba(82, 82, 82, 0.35);
  height: 19px;
  width: 19px;
  display: block;
  animation: rotation 100s linear infinite;
  transform-origin: -342px 10px;
  top: 340px;
  position: absolute;
  right: -10px;
}
.testimonial_area .indicators .testimonial_2 {
  border: 1px solid #e5e6fa;
  border-radius: 50%;
  width: 607px;
  height: 607px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  left: 0;
  right: 0;
}
.testimonial_area .indicators .testimonial_2 img {
  animation: rotation 35s linear infinite;
  transform-origin: -230px 65px;
  top: 230px;
  position: absolute;
  right: -60px;
}
.testimonial_area .indicators .testimonial_3 {
  border: 1px solid #f4f4fd;
  border-radius: 50%;
  width: 494px;
  height: 494px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  left: 0;
  right: 0;
}
.testimonial_area .indicators .testimonial_3 img {
  animation: rotation 20s linear infinite;
  transform-origin: -170px 75px;
  bottom: 190px;
  position: absolute;
  right: -55px;
}
.testimonial_area .indicators .testimonial_4 {
  border: 1px solid #f4f4fd;
  border-radius: 50%;
  width: 365px;
  height: 365px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  left: 0;
  right: 0;
}
.testimonial_area .indicators .testimonial_4 img {
  animation: rotation 50s linear infinite;
  transform-origin: -125px 75px;
  top: 100px;
  position: absolute;
  right: -30px;
}
.testimonial_area .indicators .round_shap {
  border: 3px solid #d4b4fe;
  border-radius: 50%;
  box-shadow: 0px 20px 52px 0px rgba(176, 124, 255, 0.35);
  width: 27px;
  height: 27px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  left: 0;
  right: 0;
}

.ta_2 {
  padding-top: 120px;
}
.ta_2 .testimonial_slide {
  padding-left: 130px;
}
.ta_2 .testimonial_slide .testimonial_content {
  box-shadow: 0px 20px 50px 0px rgba(238, 228, 253, 0.75);
  background: #fff;
  max-width: 1047px;
  margin: 40px;
  margin-top: 15px;
  padding-top: 20px;
  z-index: 999;
  position: relative;
}
.ta_2 .testimonial_slide .testimonial_content:before {
  font-size: 160px;
  left: 35px;
  top: 50px;
}
.ta_2 .testimonial_slide .testimonial_content .media {
  padding-bottom: 70px !important;
}
.ta_2 .testimonial_slide .nav_control {
  padding-top: 40px;
}
.ta_2 .indicators {
  margin-top: 100px;
  z-index: -1;
}

.ta_4 {
  padding-bottom: 70px;
}
@media (max-width: 1610px) {
  .testimonial_area {
    padding-left: 15px;
    padding-right: 15px;
  }
  .testimonial_area .testimonial_slide {
    padding-left: 0;
  }
}
@media (max-width: 1440px) {
  .testimonial_area .testimonial_slide .testimonial_content {
    padding-left: 30px;
  }
  .testimonial_area .testimonial_slide .testimonial_content:before {
    font-size: 80px;
  }
  .testimonial_area .testimonial_slide .nav_control {
    margin: 0;
    padding: 0;
  }

  .ta_2 .testimonial_slide .testimonial_content:before {
    top: 20px;
  }
}
@media (max-width: 1199px) {
  .testimonial_area {
    padding-top: 80px;
  }
  .testimonial_area h4 {
    padding-bottom: 20px;
  }
  .testimonial_area h2 {
    padding-bottom: 30px;
  }
  .testimonial_area .indicators {
    position: relative;
    margin: 0;
    right: 0;
    left: 50px;
  }
}
@media (max-width: 767px) {
  .testimonial_area .indicators {
    display: none;
  }
}
@media (max-width: 575px) {
  .testimonial_area h4 {
    font-size: 16px;
  }
  .testimonial_area h2 {
    font-size: 30px;
    line-height: 35px;
  }
  .testimonial_area .testimonial_slide .testimonial_content p {
    font-size: 18px;
  }
  .testimonial_area .testimonial_slide .testimonial_content .media {
    padding-top: 40px;
  }
}
@keyframes rotation {
  to {
    transform: rotate(360deg);
  }
}
</style>
