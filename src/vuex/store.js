import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  a: "1"
}

const mutations = {
  CHANGE () {

  }
}

export default new Vuex.Store({
  state,
  mutations
})
