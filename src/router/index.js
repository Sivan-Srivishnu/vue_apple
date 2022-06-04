import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
  {
    path: "/in/store",
    name: "Store",
    component: () => import("../components/Store.vue"),
  },
  {
    path: "/in/shop/accessories/all",
    name: "Accessories",
    component:()=>import("../components/AccessoriesComp.vue")
  },
  {
    path: "/in/mac/",
    name: "Mac",
    component: () => import("../components/Mac.vue"),
  },
  {
    path: "/in/ipad/",
    name: "Ipad",
    component: () => import("../components/Ipad.vue"),
  },
  
  {
    path: "/in/iphone/",
    name: "Iphone",
    component: () => import("../components/Iphone.vue"),
  },
  {
    path: "/in/watch/",
    name: "Watch",
    component: () => import("../components/Watch.vue"),
  },
  {
    path: "/in/airpods/",
    name: "AirPods",
    component: () => import("../components/AirPods.vue"),
  },
  {
    path: "/in/tv-home/",
    name: "TvHome",
    component: () => import("../components/TvHome.vue"),
  },
  {
    path: "/in/services/",
    name: "Services",
    component: () => import("../components/Services.vue"),
  },
  {
    path: "/en-in",
    name: "Support",
    component: () => import("../components/Support.vue"),
  },
  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
