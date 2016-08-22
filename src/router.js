import Vue from 'vue'
import VueRouter from 'vue-router'
import topView from './views/topView.vue'
import taskView from './views/taskView.vue'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/' : {
    component: topView
  },
  '/task' : {
    component: taskView
  }
})

export default router
