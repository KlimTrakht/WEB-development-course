import Vue from 'vue'
import App from './App.vue'

import './assets/scss/style.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data: {
    url: process.env.VUE_APP_URL
  }
}).$mount('#app')
