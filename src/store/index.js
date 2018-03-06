// @flow
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import auth from './modules/auth'
import alert from './modules/alert'
import example from './modules/example'

Vue.use(Vuex)

const debug: boolean = process.env.NODE_ENV !== 'production'

export function createStore () {
  return new Vuex.Store({
    strict: debug,

    modules: {
      example,
      alert,
      auth
    },
    plugins: debug ? [createLogger()] : []
  })
}
