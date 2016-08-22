import Vue from 'vue'
import './app.scss'
import template from './app.html'

import { incrementCounter } from "../vuex/action"

export default Vue.extend({
  template: template,
  vuex: {
    getters: {
      count: (state) => state.count
    },
    actions: {
      increment: incrementCounter
    }
  }
})