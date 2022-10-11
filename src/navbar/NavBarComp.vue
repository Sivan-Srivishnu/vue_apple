<template>

     <nav class="custom--nav">
    <router-link to="/"><img
      src="https://www.apple.com/ac/globalnav/7/en_IN/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg"
      alt="logo"
    /></router-link>
    <router-link to="/in/store">Store</router-link>
    <router-link to="/in/mac/">Mac</router-link>
    <router-link to="/in/ipad/">iPad</router-link>
    <router-link to="/in/iphone/">iPhone</router-link>
    <router-link to="/in/watch/">Watch</router-link>
    <router-link to="/in/airpods/">AirPods</router-link>
    <router-link to="/in/tv-home/">TV & Home</router-link>
    <router-link to="/in/services/">Only on Apple</router-link>
    <router-link to="/in/shop/accessories/all">Accessories</router-link>
    <router-link to="/en-in">Support</router-link>
    <router-link to="#"
      ><v-icon class="vueIcons white--text">fas fa-search</v-icon></router-link
    >

    <v-menu
      v-for="[text, rounded] in btns"
      :key="text"
      :rounded="rounded"
      offset-y

    >
      <template v-slot:activator="{ attrs, on }">
        <router-link to=""
          ><v-icon
            @click.prevent=""
            v-bind="attrs"
            v-on="on"
            class="vueIcons white--text"
            >fa-solid fa-bag-shopping</v-icon
          ></router-link
        >
      </template>

      <v-list elevation="5" expand outlined class="dropDownList " rounded >
        <v-list-item class="mt-3 " tile outlined v-menuColor v-for="item in items" :key="item" link> 
          <v-list-item-title @click="item.func" class="menuHover dropDownListmenu" ><v-icon class="icon--color">{{item.icon}}</v-icon><span>{{item.name}}</span></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </nav>

  <!--  -->
</template>

<script>
import router from '@/router';
export default {
  name: "NavBarComp",
  data() {
    return {
      btns: [["Large", "lg"]],

      items: [
        { name: "Bag", func: "#", icon: "fa-solid fa-bag-shopping" },
        { name: "Saved Items", func: "#", icon: "fa-thin fa-bookmark" },
        { name: "Orders", func: "#", icon: "fa-thin fa-box" },
        {name:"Accounts", func:this.accountComp, icon:"fa-thin fa-gear"},
        { name: "Sign in", func: this.login, icon: "fa-thin fa-circle-user" },
        
        ],
    };
  },
  methods: {
    login() {
      router.push("/login")
      console.log("yes you are login");
    },
    accountComp() {
      router.push("/account")
      console.log("yes you are redirected to accounts page");
    }
  }
};
</script>

<style lang="css" scoped>
.icon--color{
  fill:#2079D2;
  padding:5px;
}

.menuHover{  
  border-bottom: 1px solid rgb(137, 120, 120);
}
.menuHover span:hover{
  text-decoration: underline;
}
nav a {
  text-decoration: none;
  text-align: center;
  color: #f5f5f7;
  font-size: 12px;
  line-height: 3.66667;
  font-weight: 400;
  /* letter-spacing: -.01em; */
  position: relative;
  z-index: 100;
  display: inline-block;
  /* padding: 0 2px; */
  height: 44px;
  opacity: 0.8;
  background: no-repeat;
  white-space: nowrap;
  -webkit-transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  outline-offset: -7px;
  margin: auto 22px;
}
.custom--nav {
  background-color: rgba(6, 6, 6, 0.932);
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  z-index: 10;
  width: 100%;
}

nav a img {
  overflow: hidden;
}

nav a .vueIcons {
  font-size: 14px;
}

.dropDownList{
  margin-top: 5px;
  
  width:200px;
  padding:15px;
  border-radius: 200px;
}

.dropDownListmenu{
  display: flex;
    align-items: center;
    margin-bottom: -34px;
    padding: 5px;
}
</style>
