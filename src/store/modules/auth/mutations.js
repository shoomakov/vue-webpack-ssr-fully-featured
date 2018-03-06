import Vue from 'vue'
import {
  LOGIN,
  LOGOUT,
  CHECK,
  REGISTER
} from './mutation-types'

export default {
  [LOGIN] (state, token) {
    state.authenticated = true
    localStorage.setItem('id_token', token)
    Vue.axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  [LOGOUT] (state) {
    state.authenticated = false
    localStorage.removeItem('id_token')
    Vue.axios.defaults.headers.common.Authorization = ''
  },
  [CHECK] (state) {
    state.authenticated = !!localStorage.getItem('id_token')
    if (state.authenticated) {
      Vue.axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('id_token')}`
    }
  },
  [REGISTER] () {
    //
  }
}
