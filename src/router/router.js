import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../views/topView'
import Tasks from '../views/tasksView'

Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  "/": {
    component: Top
  },
  "/tasks": {
    component: Tasks
  },
})

export default router

