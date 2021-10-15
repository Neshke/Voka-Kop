<template >
  <div id="reference">
    <Header />
    <div class="reference-logo">
      Reference
      <br>
      <br>
      <h2>Preko 500,000 km ugrađene vodovodne i gasne instalacije</h2>
    </div>
    <div class="contents">
      <div class="container" >
        <hr>
        <div class="row" style="padding-top:0px" >
          <Carousel 
            :per-page="3" 
            :mouse-drag="true"
            :paginationEnabled="false"
            :autoplay="true"
            :loop="true"
            :autoplayHoverPause="true"
            :autoplayTimeout="3000"
            :navigationEnabled="true">

           <Slide class="Reference-slide" >
                  <img :src="slideOne" alt="" class="logoSlika" @click=" redirectOne">
           </Slide>
           <Slide class="Reference-slide">
                 <img :src="slideTwo" alt="" class="logoSlika" @click="redirectTwo" >
           </Slide>
           <Slide class="Reference-slide">
                  <img :src="slideThree" alt="" class="logoSlika" @click="redirectThree">
            </Slide>
            <Slide class="Reference-slide">
                  <img :src="slideFour" alt="" class="logoSlika" @click="redirectFour">
            </Slide>
          </Carousel>
        </div>
        <hr>
        <h1>Čak i Više od Kvaliteta!</h1>
        <div class="row" >
          
          <div class="display-image">
            <div class="photoAlt"> {{displayPhotoAlt}}</div>
            <img :src="displayPhoto" alt="" style="object-fit: contain; width:100%; height:90%" >
          </div>
        </div>
        <br>
        
        <div class="row" >
        <Carousel 
            :per-page="5" 
            :mouse-drag="true"
            :paginationEnabled="false"
            :loop="true"
            :navigationEnabled="true">

           <Slide class="Reference-slide" >
                  <img :src="slideOne" alt="" id="display-menu" @click="changePictureOne">
           </Slide>
           <Slide class="Reference-slide">
                 <img :src="slideTwo" alt="" id="display-menu"  @click="changePictureTwo">
           </Slide>
           <Slide class="Reference-slide">
                  <img :src="slideThree" alt="" id="display-menu" @click="changePictureThree">
            </Slide>
            <Slide class="Reference-slide">
                  <img :src="slideFour" alt="" id="display-menu" @click="changePictureFour">
            </Slide>
          </Carousel>
        </div>
        <hr>
        <div class="row" style="padding-top:0px" >
          <div class="col-sm-6" style="text-align:right"><img :src="slika5" alt="" style="border-radius:10px;width:100%" ></div>
          <div class="col-sm-6" style="text-align:left;padding:60px;">Građevinsko preduzeće "Voka Kop", sa sedištem u Smederevu je osnovano 2004. godine i već dugi niz godina posluje kao izvođač radova na različitim neurbanim i urbanim lokacijama širom Srbije. 
            <br><br>Organizacija koja i dan danas uspešno posluje, opremljena je svim neophodnim tehničko-tehnološkim i ljudskim resursima kako bi radovi bili uspešno izvedeni. </div>
        </div>
        <br>
        <div class="row" style="padding-top:0px" >
          <div class="col-sm-6" style="text-align:right;padding:60px;">Građevinsko preduzeće "Voka Kop", sa sedištem u Smederevu je osnovano 2004. godine i već dugi niz godina posluje kao izvođač radova na različitim neurbanim i urbanim lokacijama širom Srbije. 
            <br><br>Organizacija koja i dan danas uspešno posluje, opremljena je svim neophodnim tehničko-tehnološkim i ljudskim resursima kako bi radovi bili uspešno izvedeni. </div>
          <div class="col-sm-6" style="text-align:left"><img :src="slika5" alt="" style="border-radius:10px;width:100%"></div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
//components
import { Carousel, Slide } from 'vue-carousel';
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
//pictures
import Logo1 from '@/assets/images/kabelnet.png';
import Logo2 from '@/assets/images/promont.png';
import Logo3 from '@/assets/images/millennium_logo.png';
import Logo4 from '@/assets/images/setec.png';
import Logo5 from '@/assets/images/workers.jpg';

export default {
  name: 'Home',
  data:() => {
    return {
      mobileView: true,
      showNav: true,
      slideOne:Logo1,
      slideTwo:Logo2,
      slideThree:Logo3,
      slideFour:Logo4,
      slika5:Logo5,
      displayPhoto:Logo1,
      displayPhotoAlt: "Prvi",
    }
  },
  components: {
    Header,
    Footer,
    Carousel,
    Slide
  },
  methods:{
    handleView(){
      this.mobileView = window.innerWidth <= 990;
    },
    toggleShowNav(){
      this.showNav=!this.showNav;
    },
    redirectOne(){
      window.location.href = 'https://kabelnetgroup.com/';
    },
    redirectTwo(){
      window.location.href = 'https://www.promontgroup.rs/';
    },
    redirectThree(){
      window.location.href = 'https://www.millenniumteam.rs/sr';
    },
    redirectFour(){
      window.location.href = 'http://www.setec-ec.rs/';
    },
    changePictureOne(){
      this.displayPhoto = this.slideOne;
      this.displayPhotoAlt= "Prvi";
    },
    changePictureTwo(){
      this.displayPhoto = this.slideTwo;
      this.displayPhotoAlt= "Drugi";
    },
    changePictureThree(){
      this.displayPhoto = this.slideThree;
      this.displayPhotoAlt= "Treći";
    },
    changePictureFour(){
      this.displayPhoto = this.slideFour;
      this.displayPhotoAlt= "Cetvrti";
    },
  },
  
  created(){
    this.handleView();
  }
}
</script>
<style>


@import url("https://use.fontawesome.com/releases/v5.9.0/css/all.css");
* {
  font-size: 1rem;
}
body {
  width: 100%;
  height: 100%;
  padding: 0 ;
  font-family: "Segoe UI", Tahoma;
  background-color: #444;
}
#reference {
  width: 100%;
  height: 100%;
}
.contents {
  position: relative;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  height: 100%;
}
.slider{
  width: 100% ;
  height: 410px;
  padding: 5px;
  background-color: #fff;
  overflow: hidden;

}
.reference-logo{
  position:relative;
  width: 100% ;
  background: linear-gradient(rgba(255,0,0,0),#444);
  font-size:6vh;
  padding-top:100px;
  text-align: center;
  color:#fff;
  height:310px;
}
.partners-logo{
  object-fit: contain;
  width: 100% ;
  height: 320px;
  text-align: center;
  background: linear-gradient(#444 15% ,#fff);
}
br{
  border:1px solid #FF5858;
  background:#fff;
}
.Reference-slide {
  position: relative;
  color: #fff;
  background: #fff;
  width: 100%;
  z-index: 1;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 50px;
}
.logoSlika{
  object-fit:contain;
  width:100%;
  padding:5px;
  height:100px;
  cursor: pointer;
}
.display-image{
  width: 100%;
  border: 2px solid black;
  background-color: #ffae00;
  height: 400px;
  object-fit: contain;
  border-radius: 5px;
}
#display-menu{
  height:70px;
  object-fit: fill;
  width:95%;
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;
}
.photoAlt{
background-color:black;
color:#fff;
opacity: 0.5;
width:100%;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
text-align: left;
padding:5px;
}
</style>
