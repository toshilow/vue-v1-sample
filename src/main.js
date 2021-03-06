import 'bulma/bulma.sass'
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'

import router from './router/router'

sync(store, router)

router.start(Vue.extend({store}), '#app')
