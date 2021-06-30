import { createStore } from 'vuex'

export default createStore({
  state: {
    name: 'peirong'
  },
  actions: {
    changeName ({ commit }, params) {
      commit('SET_NAME', params)
    }
  },
  mutations: {
    SET_NAME (state, params) {
      console.log(params)
      state.name = params
    }
  }
})
