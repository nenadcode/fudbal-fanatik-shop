import clubsRoutesApi from '../../../api/navigation-routes'
import * as types from './mutation-types'

const state ={
  clubsRoutes: []
}

const getters = {
  allClubsRoutes: state => state.clubsRoutes
}

const actions = {
  getAllClubsRoutes ({ commit }) {
    return clubsRoutesApi.getClubsRoutes()
      .then(clubsRoutes => {
        commit(types.RECEIVE_CLUBS_ROUTES, { clubsRoutes: clubsRoutes })
      })
  }
}

const mutations = {
  [types.RECEIVE_CLUBS_ROUTES] (state, { clubsRoutes }) {
    state.clubsRoutes = clubsRoutes
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}