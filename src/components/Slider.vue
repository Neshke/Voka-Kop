<template>
  <div class="slider-home-carousel">
    <Carousel
      :per-page="1"
      :mouse-drag="true"
      :paginationEnabled="false"
      :autoplay="true"
      :loop="true"
      :autoplayHoverPause="true"
      :autoplayTimeout="3000"
    >
      <Slide class="VueCarousel-slide">
        <img :src="slideOne" alt="" id="slika" />
      </Slide>
      <Slide class="vueCarousel-slide">
        <img :src="slideTwo" alt="" id="slika" />
      </Slide>
      <Slide class="vueCarousel-slide">
        <img :src="slideFour" alt="" id="slika" />
      </Slide>
      <Slide class="vueCarousel-slide">
        <img :src="slideFive" alt="" id="slika" />
      </Slide>
    </Carousel>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
import Slika1 from "@/assets/images/izrada-sahtova-infrastruktura.jpg";
import Slika2 from "@/assets/images/asfaltiranje-gradiliste.jpg";
import Slika4 from "@/assets/images/masinski-iskopi-gradjevinski-radovi.jpg";
import Cev2 from "@/assets/images/pexels-alejandro-perez-3008241-4575147.jpg";

export default {
  data() {
    return {
      slideOne: Slika1,
      slideTwo: Slika2,
      slideFour: Cev2,
      slideFive: Slika4,
    };
  },
  components: {
    Carousel,
    Slide,
  },
};
</script>
<style>
#slika {
  object-fit: cover;
  width: 100%;
  height: 400px;
  padding: 5px;
}
.row {
  padding: 30px 0px 0px 0px;
}
.vueCarousel-slide {
  position: relative;
  background: transparent;
  color: #fff;
  height: 100%;
  z-index: 1;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 10rem;
}
.slider-home-carousel {
  width: 80rem;
}
</style>
