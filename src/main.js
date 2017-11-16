// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueSmoothScroll from 'vue-smoothscroll'

import header from './components/MainHeader'
import home from './components/Home'
import about from './components/About'
import services from './components/Services'
import projects from './components/Projects'
import contact from './components/Contact'
import nav from './components/NavList'

Vue.use(Vuetify)
Vue.use(VueSmoothScroll)

Vue.component('main-header', header)
Vue.component('home', home)
Vue.component('about', about)
Vue.component('services', services)
Vue.component('projects', projects)
Vue.component('contact', contact)
Vue.component('nav-list', nav)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
