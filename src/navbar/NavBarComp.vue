<template>
   
       <nav class="custom--nav">
           <img src="https://www.apple.com/ac/globalnav/7/en_IN/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg" alt="logo">
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
           <router-link to="#"><v-icon class="vueIcons white--text">fas fa-search</v-icon></router-link>
           <router-link to=""><v-icon class="vueIcons white--text">fa-solid fa-bag-shopping</v-icon></router-link>
       </nav>
       <!-- <router-view/> -->
      
       
   
</template>

<script>

    export default {
        name:"NavBarComp"
    
}
</script>

<style lang="css" scoped>
nav a{
    text-decoration: none;
    text-align: center;
    color: #f5f5f7;
    font-size: 12px;
    line-height: 3.66667;
    font-weight: 400;
    letter-spacing: -.01em;
    position: relative;
    z-index: 1;
    display: inline-block;
    padding: 0 2px;
    height: 44px;
    opacity: .8;
    background: no-repeat;
    text-decoration: none;
    white-space: nowrap;
    -webkit-transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
        outline-offset: -7px;
        margin: auto 22px;

}
.custom--nav{
    background-color: rgba(6, 6, 6, 0.767);
    display: flex;
    justify-content: center;
    overflow: hidden;
    
}

nav a img{
    overflow: hidden;
}

nav a .vueIcons{
    font-size: 14px;
}
</style>