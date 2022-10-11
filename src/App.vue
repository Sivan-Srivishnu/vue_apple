<template>
  <v-app>
    
      <NavBarCompVue />
      <Transition  mode="out-in" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
        <router-view />
      </Transition>

        
    
    
  </v-app>
</template>

<script>
import NavBarCompVue from "./navbar/NavBarComp.vue";
import router from "./router";
export default {
  name: "App",

  data() {
    return {};
  },
  components: {
    NavBarCompVue,
  },
  mounted() {
    console.log(router.currentRoute.path);
    document.title = "Apple (India)";
  },
};
</script>

<style scoped>
:root {
  --animate-duration: 0.25s;
  
}
</style>
