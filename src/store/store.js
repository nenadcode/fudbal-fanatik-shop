import Vue from 'vue'
import Vuex from 'vuex'

import clubsRoutesModule from './modules/clubRoutes'

Vue.use(Vuex)

export const store = new Vuex.Store ({
  modules: {
    clubsRoutesModule
  },
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