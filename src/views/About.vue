Z
<template>
  <div id="reference">
    <Header />
    <div class="reference-logo">O nama</div>
    <div class="contents">
      <div class="container">
        <hr />
        <div class="row" style="padding-top: 0px">
          <div class="col-sm-6" style="text-align: right">
            <img
              :src="slideOne"
              alt=""
              style="width: 100%; border-radius: 10px"
            />
          </div>
          <div class="col-sm-6" style="text-align: left; padding: 60px">
            Građevinsko preduzeće "Voka Kop", sa sedištem u Smederevu je
            osnovano 2004. godine i već dugi niz godina posluje kao izvođač
            radova na različitim neurbanim i urbanim lokacijama širom Srbije.
            <br /><br />Organizacija koja i dan danas uspešno posluje,
            opremljena je svim neophodnim tehničko-tehnološkim i ljudskim
            resursima kako bi radovi bili uspešno izvedeni.
          </div>
        </div>
        <div class="row" style="padding-top: 0px">
          <div class="col-sm-6" style="text-align: left; padding: 60px">
            Preduzeće je otvoreno za svaki vid saradnje i spremno je da svaki
            povereni posao izvede profesionalno i u skladu sa vremenskim
            rokovima.
            <br />
            <br />
            Tokom niza godina poslovanja formirano je pet ekipa za iskop i dve
            ekipe za daljinsko horizontalno podbušenje, što čini oko 35 radnika
            plus sezonski po potrebi.
          </div>
          <div class="col-sm-6" style="text-align: right">
            <img :src="cev1" alt="" style="width: 100%; border-radius: 10px" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
//components
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
//pictures
import Logo1 from "@/assets/images/workers.jpg";
import Logo3 from "@/assets/images/millennium_logo.png";
import Logo4 from "@/assets/images/setec.png";
import cev1 from "@/assets/images/cev1.jpg";

export default {
  name: "Home",
  data: () => {
    return {
      mobileView: true,
      showNav: true,
      cev1: cev1,
      slideOne: Logo1,
      slideThree: Logo3,
      slideFour: Logo4,
      displayPhoto: Logo1,
      displayPhotoAlt: "Prvi",
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    },
    toggleShowNav() {
      this.showNav = !this.showNav;
    },
    redirectOne() {
      window.location.href = "https://kabelnetgroup.com/";
    },
    redirectTwo() {
      window.location.href = "https://www.promontgroup.rs/";
    },
    redirectThree() {
      window.location.href = "https://www.millenniumteam.rs/sr";
    },
    redirectFour() {
      window.location.href = "http://www.setec-ec.rs/";
    },
    changePictureOne() {
      this.displayPhoto = this.slideOne;
      this.displayPhotoAlt = "Prvi";
    },
    changePictureTwo() {
      this.displayPhoto = this.slideTwo;
      this.displayPhotoAlt = "Drugi";
    },
    changePictureThree() {
      this.displayPhoto = this.slideThree;
      this.displayPhotoAlt = "Treći";
    },
    changePictureFour() {
      this.displayPhoto = this.slideFour;
      this.displayPhotoAlt = "Cetvrti";
    },
  },

  created() {
    this.handleView();
  },
};
</script>
<style>
@import url("https://use.fontawesome.com/releases/v5.9.0/css/all.css");
* {
  font-size: 1rem;
}
body {
  width: 100%;
  height: 100%;
  padding: 0;
  font-family: "Segoe UI", Tahoma;
  background-color: #231f20;
}
#reference {
  width: 100%;
  height: 100%;
}
.contents {
  position: relative;
  width: 100%;
  background-image: url("../assets/images/repeating-triangles.svg");
  padding: 20px;
  height: 100%;
}
.slider {
  width: 100%;
  height: 410px;
  padding: 5px;
  background-image: url("../assets/images/repeating-triangles.svg");
  overflow: hidden;
}
.reference-logo {
  position: relative;
  width: 100%;
  background: linear-gradient(rgba(255, 0, 0, 0), #231f20);
  font-size: 6vh;
  padding-top: 100px;
  text-align: center;
  color: #fff;
  height: 310px;
}
.partners-logo {
  object-fit: contain;
  width: 100%;
  height: 320px;
  text-align: center;
  background: linear-gradient(#231f20 15%, #fff);
}
br {
  border: 1px solid #ff5858;
  background: #fff;
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
.logoSlika {
  object-fit: contain;
  width: 100%;
  padding: 5px;
  height: 100px;
  cursor: pointer;
}
.display-image {
  width: 100%;
  border: 2px solid black;
  height: 400px;
  object-fit: contain;
}
#display-menu {
  height: 120px;
  object-fit: contain;
  width: 95%;
  border: 2px solid black;
}
.photoAlt {
  background-color: black;
  color: white;
  opacity: 0.3;
  width: 100%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  text-align: left;
  padding: 5px;
}
</style>
-
