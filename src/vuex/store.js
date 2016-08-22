import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  posts: [
    {title:'first post', body:'本日は晴天なり'}
  ]
}

const mutations = {
  ADD_POST (state, post) {
    state.posts.push(post)
  },
  DELETE_POST (state, index) {
    state.posts.splice(index, 1)
  },
}

export default new Vuex.Store({
  state,
  mutations
})
