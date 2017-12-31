import Vue from 'vue'
import Vuex from 'vuex'

// import { actions } from './actions'
// import { mutations } from './mutations'

import example from './modules/example'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',

    // state: {
    //   counter: 0,
    //   remotePageContent: null,
    //   error: null,
    //   fetchData: []
    // },
    // actions,
    // mutations,
    modules: {
      example
    }
  })
}

/*
// TODO: move to entry-client.js
if (module.hot) {
  module.hot.accept([
    "./actions",
    "./mutations"
  ], () => {
    store.hotUpdate({
      actions: require("./actions").actions,
      mutations: require("./mutations").mutations
    })
  })
}*/
