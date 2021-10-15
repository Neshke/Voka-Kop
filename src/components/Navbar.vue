<template>
  <nav id="nav-pc">
    <router-link to="/" >
      <div class ="menu-item-first" style=""> <strong> Početna</strong></div>
    </router-link>
    <transition name="fade" mode="out-in">
    <router-link to="/reference" >
      <div class ="menu-item"><strong>Reference</strong></div>
    </router-link>
    </transition >
     <router-link to="/about" >
      <div class ="menu-item"><strong>O nama</strong></div>
    </router-link>
    <router-link to="/contact" >
    <transition name="scale" mode="out-in">
      <div class ="menu-item-last" ><strong>Kontakt</strong></div>
    </transition>
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

#nav-pc {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left:calc(50% - 315px);
  position:fixed;
  z-index: 100;
}

#nav-pc .menu-item {
  position: relative;
  text-align: center;
  color:#ffae00;
  background-color: #444;
  border-bottom: 3px solid transparent;
  border-bottom-color: #ffae00;
  height:57px;
  padding:15px;
  transition: 0.4s;
  width:150px;
}
#nav-pc .menu-item-first {
  
  text-align: center;
  color:#fff;
  background-color: #444;
  border-bottom: 3px solid transparent;
  border-bottom-color: #FF5858;
  border-bottom-left-radius: 8px;
  padding: 15px;
  transition: 0.4s;
  width:150px;
}
#nav-pc .menu-item-last {
  position: relative;
  text-align: center;
  display: flex;
  color:#fff;
  background-color: #444;
  border-bottom: 3px solid transparent;
  border-bottom-color: #FF5858;
  border-bottom-right-radius: 8px;
  padding: 15px 45px;
  transition: 0.4s;
  width:150px;
}

#nav-pc .menu-item.active,
#nav-pc .menu-item:hover {
  color:#444;
  background-color: #ffae00;
  border-bottom-color: #FFF;
}
#nav-pc .menu-item-first:hover  {
  background-color: #fff;
  color:#444;
  border-bottom-color: #FF5858;
}
#nav-pc .menu-item-last:hover {
  background-color: #fff;
  color:#444;
  border-bottom-color: #FF5858;
}
a:hover, a:visited, a:link, a:active
{
    color: inherit;
    text-decoration: none;
}
</style>