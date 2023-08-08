<template>
<div>
    <Carousel 
    :per-page="1" 
    :mouse-drag="true"
    :paginationEnabled="false"
    :autoplay="true"
    :loop="true"
    :autoplayHoverPause="true"
    :autoplayTimeout="3000">
      <Slide class="VueCarousel-slide">
            <img :src="slideOne" alt="" id="slika" >
      </Slide>
      <Slide class="vueCarousel-slide">
            <img :src="slideTwo" alt="" id="slika">
      </Slide>
      <Slide class="vueCarousel-slide">
            <img :src="slideThree" alt="" id="slika">
      </Slide>
      <Slide class="vueCarousel-slide">
            <img :src="slideThree" alt="" id="slika">
      </Slide>
      <Slide class="vueCarousel-slide">
            <img :src="slideFour" alt="" id="slika">
      </Slide>
    </Carousel>
   
</div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';
import Slika1 from '@/assets/images/water 2.jpg';
import Slika2 from '@/assets/images/water.jpg';
import Slika3 from '@/assets/images/gasovod.jpg';
import Cev2 from '@/assets/images/cev2.jpg';

export default {
  
  data(){
    return{
      slideOne:Slika1,
      slideTwo:Slika2,
      slideThree:Slika3,
      slideFour:Cev2,
    }
  },
  components: {
    Carousel,
    Slide
  }
};
</script>
<style>
#slika{
  object-fit: cover;
  width:100%;
  height:400px;
  padding:5px;
}
.row{
  padding:30px 0px 0px 0px;
}
.vueCarousel-slide {
  position: relative;
  background: linear-gradient(#231f20,#fff);
  color: #fff;
  width: 80%;
  height: 100%;
  z-index: 1;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 10rem;
}
</style>