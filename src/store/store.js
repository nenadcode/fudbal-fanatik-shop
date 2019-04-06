import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store ({
  state: {
    menuActive: false
  },

  getters: {
    menuActive: state => state.menuActive
  },

  mutations: {
    TOGGLE_MENU_ACTIVE: state => state.menuActive = !state.menuActive
  }
})