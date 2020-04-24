// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'expose-loader?$!jquery'
import store from './store'
import 'assets/styl/index.styl'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  mounted(){
    this.$nextTick(()=>{
      document.dispatchEvent(new Event('custom-render-trigger'))
    })
  }
})