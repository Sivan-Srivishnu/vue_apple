import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const storeComp = {
  state: {
    content: {
      emojiFaceSrc:""
    }
  },
  getters: {},
  mutations: {

  },
  actions: {
    storeAssets: () => {
      
    }
  }
}

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    storeComp,
  },
});
