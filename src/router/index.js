import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/reference",
    name: "Reference",
    component: () => import("../views/Reference.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/req",
    name: "Req",
    component: () => import("/form/req.php"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
