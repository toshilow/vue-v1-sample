import Vue from 'vue'
import App from './app/app'
import store from './vuex/store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  store: store
})