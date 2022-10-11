import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'

Vue.config.productionTip = false

Vue.directive("menuColor", {
  bind(el) {
    el.style.color = "#2079D2";
  }
})



new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
