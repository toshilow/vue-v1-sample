import Vue from 'vue'
import template from './template.html'
import { mapGetters, mapActions } from 'vuex'

export default Vue.extend({
  template: template,
  data: () => {
    return {
      newPost: {title:'', body:''}
    }
  },
  computed: {
    ...mapGetters(['posts'])
  },
  methods: {
    ...mapActions(['addPost', 'deletePost']),
    save: function() {
      this.addPost(this.newPost)
      this.newPost = {title:'', body:''}
    }
  }
})
