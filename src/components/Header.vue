<template>
    <div id ="header">
    <div class="content-header"  >
      <div class="top-bar">
        <div id="navigation-icon" v-if="mobileView"
          @click="showNav = !showNav; " :class="{'openNav':showNav}">
          <MobileNav :key="mobileView"/>
          <i class="fas fa-bars"></i>
        </div>
        <Navbar v-if="!mobileView" />
      </div>
    </div>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import MobileNav from '@/components/MobileNav.vue'

export default {
  name: 'Header',
  data:() => {
    return {
      mobileView: false,
      showNav: false
    }
  },
  components: {
    Navbar,
    MobileNav,
  },
  created(){
    // this.handleView();
    window.addEventListener("resize", () => {
    if (window.innerWidth < 900) {
      this.mobileView = true
     }else{
      this.mobileView = false
     }
  })
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
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Tahoma;
  background-color: #231f20;
}
#header {
  position: relative;
  width: 100% ;
  height: auto;
  color: #333;
  overflow: hidden;
  
}
.top-bar {
  width: 100%;
}
#navigation-icon {
  position:fixed;
  background-color: #feca0a;
  z-index: 100;
  width: 100%;
  text-align: left;
  transition: 1s transform cubic-bezier(0,.12,.14,1);
  margin-left: 0px;
}
i {
    font-size: 1.5rem;
    margin:20px;
  }
.content-header {
  width: calc(100%);
  height: calc(100% - 10px);
  background-color: #fff;
  border-radius: 16px 16px 0px 0px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: 1s transform cubic-bezier(0,.12,.14,1);
}
.openNav {
  transform: translateY(270px);
}
.titl{
  position:relative;
  text-align: center;
}
</style>