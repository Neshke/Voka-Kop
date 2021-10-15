<template >
<div >
  <div class="menu-item"  @click="isOpen = !isOpen">
    <a href="#" >
      {{ title }}
    </a>
    <svg viewBox="0 0 1030 638" width="10">
      <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF"></path>
    </svg>
    <transition name="fade" >
      <div class="sub-menu" v-if="isOpen" @mouseleave="isOpen = !isOpen" >
        <div v-for="(item, i) in items" :key="i" class="menu-item">
          <a :href="item.link">{{ item.title }}</a>
        </div>
      </div>
    </transition>
  </div>
  </div>
</template>

<script>

export default {
  name: 'dropdown',
  props: ['title', 'items'],
  data () {
    return {
      isOpen: false
    }
  },
  methods:{
    
  }
  
}
</script>

<style>
nav .menu-item{
  cursor: pointer;
}
nav .menu-item svg {
  width: 10px;
  margin-left: 10px;
}
nav .menu-item .sub-menu {
  position: absolute;
  background-color: #222;
  top: calc(100%  );
  left: 50%;
  transform: translateX(-50%);
  width: 122px;
  border-radius: 0px 0px 7px 7px;
  z-index: 1;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>