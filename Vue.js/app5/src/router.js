import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from './views/Dashboard'
import SignIn from './views/SignIn'
import SignUp from './views/SignUp'

Vue.use(Router)



export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/dashboard',
      component: Dashboard,
      name: 'dashboard'
    },
    {
      path: '/signin',
      component: SignIn,
      name: 'signin'
    },
    {
      path: '/signup',
      component: SignUp,
      name: 'signup'
    }
  ]
})
