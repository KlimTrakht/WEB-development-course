import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jokes: []
  },
  mutations: {
    initJokes(state, payload){
      state.jokes.push(...payload)
    },
    addJoke(state, payload){
      state.jokes.push(payload)
    },
    removeJoke(state, index){
      state.jokes.splice(index, 1)
    }

  },
  actions: {
    initJokes({commit}){
      fetch('https://official-joke-api.appspot.com/random_ten', {
        method: 'GET'
      })
          .then(response => response.json())
          .then(json => commit('initJokes', json))
    },
    addJoke({commit}){
      fetch('https://official-joke-api.appspot.com/random_joke', {
        method: 'GET'
      })
          .then(response => response.json())
          .then(json => commit('addJoke', json))
    },
    removeJoke({commit}, index){
      commit('removeJoke', index)
    }

  }
})
