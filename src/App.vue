<template>
  <v-app>
    <NavBarCompVue />
    <router-view/>
    
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

</style>
