
<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style>
body {
    animation: fadeInAnimation ease 1.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  @keyframes fadeInAnimation {
  0%    {
        opacity: 0;
        }
  100%  {
        opacity: 1;
        }
  }
@font-face {
  font-family: "Autobus";
  src: local("Autobus"),
  url(./assets/fonts/Autobusbold.ttf) format("truetype");
}
#app {
  font-family: "Autobus";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #231f20;
  background-image: url("assets/images/gasovod.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>
