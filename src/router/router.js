import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../views/topView'
import Posts from '../views/postsView'

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    { path: '/', component: Top},
    { path: '/posts', component: Posts},
  ]
})

export default router

