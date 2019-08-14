import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}

  },
  mutations: {
    signIn(state, user_payload){
      state.user = user_payload
    },
    signOut(state){
      state.user = {}
    }

  },
  actions: {
    signIn({commit}, user_payload) {
      commit('signIn', user_payload)
    },

    signOut({commit}) {
      commit('signOut')
    }

  }
})
