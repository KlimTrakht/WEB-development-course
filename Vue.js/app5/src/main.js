import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/scss/style.scss'

import { firebaseApp } from "./firebase";

Vue.config.productionTip = false


firebaseApp.auth().onAuthStateChanged(user => {
  store.dispatch('signIn', user);
  if(user) {
    router.push('/dashboard')
  }else {
    router.replace('signin')
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
