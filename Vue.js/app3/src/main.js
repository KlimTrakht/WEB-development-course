import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import './assets/scss/style.scss'

import App from './App.vue'

Vue.config.productionTip = false

import About from './components/About'
import Data from './components/Data'

const routes = [
  { path: '/about', component: About },
  { path: '/data/:type', component: Data }
];


const router = new VueRouter({
  routes,
  mode: 'history'
});


Vue.mixin({
  mounted() {
    console.log('hello from global mixin!')
  }
});

const EventBus = new Vue();

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
