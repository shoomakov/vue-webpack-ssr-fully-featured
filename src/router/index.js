// @flow
import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes'

Vue.use(Router)

const NotFound = () => import('views/NotFound.vue') // load dynamically when needed

// push as last element because the wildcard match will catch all the unknown urls
routes.push({ path: '*', component: NotFound })

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes
  })
}
