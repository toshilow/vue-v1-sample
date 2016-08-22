import Vue from 'vue'
import template from './template.html'

import { addPost, deletePost } from "../../vuex/action"

export default Vue.extend({
  template: template,
  data: () => {
    return {
      newPost: {title:'', body:''}
    }
  },
  vuex: {
    getters: {
      posts: state => state.posts
    },
    actions: {
      addPost,deletePost
    }
  },
  methods: {
    save: function() {
      this.addPost(this.newPost)
      this.newPost = {title:'', body:''}
    }
  }
})
