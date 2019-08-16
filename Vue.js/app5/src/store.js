import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    events: []

  },
  mutations: {
    signIn(state, user_payload){
      state.user = user_payload
    },
    signOut(state){
      state.user = {}
    },
    setEvents(state, events_payload) {
      state.events = events_payload
    }

  },
  actions: {
    signIn({commit}, user_payload) {
      commit('signIn', user_payload)
    },

    signOut({commit}) {
      commit('signOut')
    },

    setEvents({commit}, events_payload) {
      commit('setEvents', events_payload)
    }

  }
})
