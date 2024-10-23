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
          <div class="col-sm-4" style="text-align: left; padding: 60px">
            <p>
              Građevinsko preduzeće "Voka Kop" je osnovano 2004. godine u
              Smederevu, i od tada smo se afirmisali kao lideri u izvođenju
              specijalizovanih građevinskih radova na području Srbije. Sa
              fokusom na kvalitet, efikasnost i poštovanje rokova, izvodimo sve
              vrste radova u oblasti mašinskog iskopa i daljinskog podbušenja za
              polaganje podzemnih kablova, gasnih, PTT i vodovodnih instalacija.
            </p>
            <br />
            <p>Tokom godina, postali smo prepoznatljivi po:</p>
            <ul>
              <li>
                Iskustvu i stručnosti u izgradnji magistralnih vodova i kućnih
                priključaka
              </li>
              <li>
                Kompletnim uslugama koje obuhvataju iskop, daljinsko podbušenje,
                izgradnju šahtova, asfaltiranje, polaganje behaton kocki i
                distribuciju instalacija
              </li>
              <li>
                Savremenoj opremi, uključujući Ditch Witch 2020 mašine za
                podbušenje, bagere od 3 do 7 tona, kao i kamione i prikolice za
                sve vrste terena
              </li>
            </ul>
          </div>
        </div>
        <div class="row" style="padding-top: 0px">
          <div class="col-sm-4" style="text-align: left; padding: 60px">
            <p>
              Naša kompanija poseduje pet specijalizovanih ekipa za iskop i dve
              za daljinsko podbušenje, sa timom od preko 35 iskusnih radnika, uz
              dodatnu podršku sezonske radne snage. Opremljeni smo najnovijom
              tehnologijom, što nam omogućava efikasnu realizaciju svakog
              projekta, bez obzira na njegovu složenost.
            </p>
            <p>
              Voka Kop nudi profesionalizam na najvišem nivou, poštovanje svih
              rokova i kompletna rešenja za infrastrukturne projekte.
              Specijalizovani smo za polaganje optičkih kablova, gasnih i PTT
              instalacija, kao i vodovodnih sistema, pružajući usluge koje
              odgovaraju najvišim standardima građevinske industrije.
            </p>
            <p>
              Za sve vaše projekte – od inicijalne faze do završnih radova –
              Voka Kop je vaša sigurna adresa.
            </p>
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
import Logo3 from "@/assets/images/millennium_logo.png";
import Logo4 from "@/assets/images/setec.png";
import about1 from "@/assets/images/postavljanje-behaton-kocki.jpg";
import about2 from "@/assets/images/polaganje-gasnih-instalacija.jpg";

export default {
  name: "Home",
  data: () => {
    return {
      mobileView: true,
      showNav: true,
      cev1: about1,
      slideOne: about2,
      slideThree: Logo3,
      slideFour: Logo4,
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
.row {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 600px) {
  .col-sm-4 {
    text-align: justify !important;
  }
}
.contents {
  position: relative;
  width: 100%;
  background-color: white;
  padding: 20px;
  height: 100%;
}
.slider {
  width: 100%;
  height: 410px;
  padding: 5px;
  background-color: white;
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
}
.col-sm-6 {
  display: flex;
  align-items: center;
  justify-self: center;
}
</style>
-
