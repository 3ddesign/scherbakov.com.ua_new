// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueParallaxJs from 'vue-parallax-js'
import vueSmoothScroll from 'vue-smooth-scroll'

Vue.config.productionTip = false
Vue.use(VueParallaxJs)
Vue.use(vueSmoothScroll)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
