<template>
  <div id="reference">
    <Header />
    <div class="reference-logo">Reference</div>
    <div class="contents">
      <div class="container">
        <h1 class="my-4">GRAĐEVINSKA FIRMA VOKA KOP - REFERENCE</h1>
        <p>
          Voka Kop doo je firma koja ima reference iz različitih oblasti
          građevinarstva. Naši klijenti i investitori su renomirani brendovi
          Srbije. Postanite i vi deo naše REFERENC liste.
        </p>
        <hr />

        <div class="row reference-carousel">
          <Carousel
            class="carousel"
            :per-page="3"
            :mouse-drag="true"
            :paginationEnabled="false"
            :autoplay="true"
            :loop="true"
            :autoplayHoverPause="true"
            :autoplayTimeout="3000"
            :navigationEnabled="false"
          >
            <Slide class="Reference-slide">
              <img
                :src="slideOne"
                alt=""
                class="logoSlika"
                @click="redirectOne"
              />
            </Slide>
            <Slide class="Reference-slide">
              <img
                :src="slideTwo"
                alt=""
                class="logoSlika"
                @click="redirectTwo"
              />
            </Slide>
            <Slide class="Reference-slide">
              <img
                :src="slideThree"
                alt=""
                class="logoSlika"
                @click="redirectThree"
              />
            </Slide>
            <Slide class="Reference-slide">
              <img
                :src="slideEight"
                alt=""
                class="logoSlika"
                @click="redirectEight"
              />
            </Slide>
          </Carousel>
          <Carousel
            class="carousel"
            :per-page="3"
            :mouse-drag="true"
            :paginationEnabled="false"
            :autoplay="true"
            :loop="true"
            :autoplayHoverPause="true"
            :autoplayTimeout="3000"
            :navigationEnabled="false"
          >
            <Slide class="Reference-slide">
              <img
                :src="slideFour"
                alt=""
                class="logoSlika"
                @click="redirectFour"
              />
            </Slide>
            <Slide class="Reference-slide">
              <img
                :src="slideFive"
                alt=""
                class="logoSlika"
                @click="redirectFive"
              />
            </Slide>
            <Slide class="Reference-slide">
              <img
                :src="slideSix"
                alt=""
                class="logoSlika"
                @click="redirectSix"
              />
            </Slide>
            <Slide class="Reference-slide">
              <img
                :src="slideSeven"
                alt=""
                class="logoSlika"
                @click="redirectSeven"
              />
            </Slide>
          </Carousel>
        </div>
        <hr />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
//components
import { Carousel, Slide } from "vue-carousel";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
//pictures
import Logo1 from "@/assets/images/kabelnet.png";
import Logo2 from "@/assets/images/promont.png";
import Logo3 from "@/assets/images/millennium_logo.png";
import Logo4 from "@/assets/images/setec.png";
import Logo5 from "@/assets/images/workers.jpg";
import Logo6 from "@/assets/images/gasInvest.jpg";
import Logo7 from "@/assets/images/dmInvest.jpg";
import Logo8 from "@/assets/images/kbv.png";
import Logo9 from "@/assets/images/telefonkabl-logo.png";

export default {
  name: "Home",
  data: () => {
    return {
      mobileView: true,
      showNav: true,
      slideOne: Logo1,
      slideTwo: Logo2,
      slideThree: Logo3,
      slideFour: Logo4,
      slideFive: Logo6,
      slideSix: Logo7,
      slideEight: Logo9,
      slideSeven: Logo8,
      slika5: Logo5,
      displayPhoto: Logo1,
      displayPhotoAlt: "Prvi",
    };
  },
  components: {
    Header,
    Footer,
    Carousel,
    Slide,
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
    redirectFive() {
      window.location.href = "https://gas-invest.ls.rs/rs/";
    },
    redirectSix() {
      window.location.href = "https://dminvest.rs/";
    },
    redirectSeven() {
      window.location.href = "http://www.kbvdatacom.rs/sr/";
    },
    redirectEight() {
      window.location.href = "http://www.tkb.rs/";
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
.reference-carousel {
  padding-top: 0px;
  border: 5px solid #feca0a;
  border-radius: 1rem;
  background-image: url("../assets/images/wavey-fingerprint.svg");
}
.carousel {
  padding: 0 !important;

  border-radius: 1rem;
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
  background-image: transparent;
  width: 100%;
  z-index: 1;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 50px;

  border-radius: 1rem;
}
.logoSlika {
  object-fit: contain;
  width: 100%;
  padding: 10px;
  height: 80px;
  cursor: pointer;
}
@media screen and (max-width: 900px) {
  .logoSlika {
    height: 120px;
  }
}
#display-menu {
  height: 70px;
  object-fit: fill;
  width: 95%;
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;
}
</style>
