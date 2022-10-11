<template>
    <div>
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
        <v-list-item class="mt-3" tile outlined v-menuColor v-for="item in items" :key="item" link> 
          <v-list-item-title @click="item.func" class="menuHover" ><v-icon class="icon--color">{{item.icon}}</v-icon><span>{{item.name}}</span></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </nav>
    </div>
</template>

<script>
    export default {
        name:"TvHomeComp"
    }
</script>

<style scoped>

</style>