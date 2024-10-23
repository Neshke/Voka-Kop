<template>
  <div id="home">
    <Header />
    <div class="logo">
      <img src="../assets/images/logo.png" alt="logo" class="logo-img" />
      <p class="mt-3">Dobrodošli</p>
    </div>
    <div class="above-slider-div">
      <h1>Građevinsko preduzeće "Voka Kop"</h1>
      <p>Vaš pouzdan partner za izgradnju i infrastrukturne projekte</p>
      <p>
        Sa dugogodišnjim iskustvom i izvanrednom reputacijom, "Voka Kop" iz
        Smedereva od 2004. godine pruža vrhunske usluge u izvođenju građevinskih
        radova na urbanim i neurbanim lokacijama širom Srbije. Naša
        specijalizacija, podržana savremenom mehanizacijom i
        visokokvalifikovanim timom, garantuje uspešnu realizaciju svih
        projekata, od početka do kraja.
      </p>
      <h2 style="float: left; padding-left: 2rem">Naša rešenja uključuju:</h2>
      <br />
      <div class="above-slider-list">
        <ul>
          <li>Mašinski iskop i zemljane radove</li>
          <li>Daljinsko podbušenje za podzemne instalacije</li>
          <li>Izgradnju šahtova, asfaltiranje i polaganje behaton kocki</li>
          <li>Kompletnu distribuciju instalacija do krajnjih korisnika</li>
        </ul>
      </div>
      <p>
        Ako tražite partnera koji će ispuniti vaše zahteve u najkraćim rokovima
        uz visok nivo profesionalnosti, "Voka Kop" je pravi izbor za vas.
        Kontaktirajte nas za detaljnu ponudu koja odgovara vašim potrebama.
      </p>
      <div class="slider">
        <Slider />
      </div>
    </div>
    <div class="content">
      <hr />
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div class="three-p">
              <p class="p1">Više od</p>
              30
              <p class="p1">izgrađenih infrastruktura i mreža...</p>
            </div>
          </div>
          <div class="col-sm">
            <div class="three-p">
              <p class="p1">...na više od</p>
              25
              <p class="p1">lokacija širom Srbije...</p>
            </div>
          </div>
          <div class="col-sm">
            <div class="three-p">
              <p class="p1">...kao i sa iskustvom više od</p>
              {{ godineIskustva }}
              <p class="p1">godina rada u građevinskoj industriji</p>
            </div>
          </div>
          <div style="text-align: ceneter; font-size: 1.7em; color: #231f20">
            ...i nastavljamo da brojimo...
          </div>
        </div>
      </div>
      <hr />
    </div>
    <div class="transparent-div">
      <div class="container">
        <div class="row" style="margin-top: 110px">
          <div class="col-sm-12" style="color: #fff; text-align: right">
            <h1 class="transparent-div-h1">
              Više od 5000km ugrađene gasne i vodovodne mreže širom Srbije
            </h1>
          </div>

          <div
            class="col-sm"
            style="color: #fff; text-align: right; margin: 10px"
          >
            <router-link to="/reference"
              ><button class="portfolio-button">
                <strong>Reference</strong>
              </button></router-link
            >
            <br />
            <br />
            <router-link to="/about"
              ><button class="portfolio-button">
                <strong>Kontakt</strong>
              </button></router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <hr />
      <div class="container">
        <br />
        <div style="text-align: ceneter; font-size: 2.5em; color: #231f20">
          Nudimo
        </div>
        <div class="row">
          <div class="col-sm">
            <div class="three-p">
              <img :src="s1" alt="" class="offerLogo" />
              <h1 class="offerTitle">Efikasnost</h1>
            </div>
          </div>
          <div class="col-sm">
            <div class="three-p">
              <img :src="s2" alt="" class="offerLogo" />
              <h1 class="offerTitle">Sigurnost</h1>
            </div>
          </div>
          <div class="col-sm">
            <div class="three-p">
              <img :src="s3" alt="" class="offerLogo" />
              <h1 class="offerTitle">Kvalitet</h1>
            </div>
          </div>
          <hr />
        </div>
        <div class="row">
          <div class="col-sm">
            <div class="right-p">
              U proteklom periodu preduzeće se sepcijalizovalo na poslovima
              iskopa i daljinskog podbušenja za potrebe polaganja podzemnih
              kablova za optičke, gasne, ptt kao i vodovodne instalacije.
            </div>
            <div class="right-p">
              Akcenat je takođe na izvodima magistralnih voda, kućnih
              priključaka, izvršavanje radova kako na iskopu, daljinskom
              pobušenju tako i na izgradnji šahtova, asfaltiranje, polaganja
              Behaton kocki tako i nad proizvodima po objektima do krajnjih
              korisnika
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
//components
import Slider from "@/components/Slider.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
//pictures
import Slika1 from "@/assets/images/efficiency.png";
import Slika2 from "@/assets/images/security.png";
import Slika3 from "@/assets/images/quality.png";

export default {
  name: "Home",
  data: () => {
    return {
      mobileView: true,
      showNav: true,
      s1: Slika1,
      s2: Slika2,
      s3: Slika3,
      godineIskustva: 20,
    };
  },
  components: {
    Slider,
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
  height: 100vh;
  padding: 0;
  background-color: #231f20;
}
#home {
  width: 100%;
  height: 100%;
}
.content {
  position: relative;
  width: 100%;
  padding: 20px;
  background-color: white;
}
.above-slider-div {
  background-color: #fff;
  padding: 2rem;
}
.above-slider-list {
  width: 100%;
  text-align: left;
  display: flex;
  margin-left: 10rem;
}
@media screen and (max-width: 600px) {
  .above-slider-list {
    margin-left: 0;
  }
}
.slider {
  display: flex;
  justify-content: center;
  height: 410px;
  padding: 5px;
  background: white;
  overflow: hidden;
}
.transparent-div {
  height: 500px;
  width: 100%;
  background-color: transparent;
}
.row {
  width: 100%;
  margin-left: 0px;
}
.right-p {
  text-align: justify;
  text-justify: inter-cluster;
  font-size: 1.1em;
  font-weight: 600;
  border-radius: 10px;
  padding-bottom: 2rem;
}
.open {
  transform: translateX(150px);
}
.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  position: relative;
  width: 100%;
  background: #231f20;
  background: linear-gradient(rgba(255, 0, 0, 0), #231f20 50%);
  color: #fff;
  height: 300px;
  font-size: 6vh;
}
.logo-img {
  width: 15rem;
  height: 3rem;
  object-fit: contain;
}
.title {
  margin-top: 100px;
}
.three-p {
  text-align: justify;
  font-size: 6em;
  margin-top: 20px;
  border-radius: 10px;
  padding: 50px;
  color: #ff5858;
  text-align: center;
}
hr {
  border: 1px solid #feca0a;
}
.p1 {
  text-align: center;
  color: #231f20;
  font-size: 0.2em;
}
.offerLogo {
  width: 175px;
  height: 175px;
  object-fit: contain;
}
.offerTitle {
  margin-top: 50px;
  color: #231f20;
  font-size: 0.5em;
}
.portfolio-button {
  width: 120px;
  height: 60px;
  background-color: #231f20;
  border-bottom: 3px solid transparent;
  border-bottom-color: #ff5858;
  transition: 0.4s;
  color: #fff;
  border-radius: 8px;
}
.portfolio-button.active,
.portfolio-button:hover {
  background-color: transparent;
  color: #fff;
  border-bottom-color: #ff5858;
  border-color: #fff;
}
.transparent-div-h1 {
  font-size: 2.5em;
  width: fit-content;
  background-color: #fff;
  color: #231f20;
  border: 2px;
  border-radius: 10px;
  opacity: 0.7;
  padding: 1rem;
}
@media screen and (max-width: 600px) {
  .transparent-div-h1 {
    font-size: 1.5em;
  }
  
}
</style>
