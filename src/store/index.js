import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    loading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    setLoading (context, payload) {
      context.commit('loading', payload)
    }
  },
  modules: {
  }
})
