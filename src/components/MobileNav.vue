<template>
  <nav id="nav-mob">
    <router-link to="/" >
      <div class ="menu-item-mob" ><strong> Pocetna</strong></div>
    </router-link>
    <router-link to="/reference" >
      <div class ="menu-item-mob"><strong>Reference</strong></div>
    </router-link>
    <router-link to="/about" >
      <div class ="menu-item-mob"><strong>O nama</strong></div>
    </router-link>
    <router-link to="/contact" >
      <div class ="menu-item-mob" ><strong>Kontakt</strong></div>
    </router-link>
    
  </nav>
</template>

<script>

export default {
  name: 'navbar',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<style>
#nav-mob {
  width:100%;
  position:fixed;
  margin-top:-280px;
  z-index: 100;
  transition: 1s transform cubic-bezier(0,.12,.14,1);
}
#nav-mob .menu-item-mob {
  color: #fff;
  background-color: #231f20;
  margin:auto;
  padding: 25px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid  #feca0a;
  transition: 0.4s;
  height: 70px;
}
#nav-mob .menu-item.active,
#nav-mob .menu-item:hover {
  background-color: #fff;
  border-bottom-color:  #feca0a;
}
#nav-mob .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>