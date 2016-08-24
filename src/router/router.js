import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../views/topView'
import Posts from '../views/postsView'

Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  "/": {
    component: Top
  },
  "/posts": {
    component: Posts
  },
})

export default router

