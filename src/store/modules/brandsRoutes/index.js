import brandsRoutesApi from '../../../api/navigation-routes'
import * as types from './mutation-types'

const state ={
  brandsRoutes: []
}

const getters = {
  allBrandsRoutes: state => state.brandsRoutes
}

const actions = {
  getAllBrandsRoutes ({ commit }) {
    return brandsRoutesApi.getBrandsRoutes()
      .then(brandsRoutes => {
        commit(types.RECEIVE_BRANDS_ROUTES, { brandsRoutes: brandsRoutes })
      })
  }
}

const mutations = {
  [types.RECEIVE_BRANDS_ROUTES] (state, { brandsRoutes }) {
    state.brandsRoutes = brandsRoutes
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}