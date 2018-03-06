import Vue from 'vue'
import * as types from './mutation-types'
import AuthProxy from 'src/proxies/AuthProxy'
import AuthTransformer from 'src/transformers/AuthTransformer'

export const login = async ({ commit, dispatch }, user = {}) => {
  user = {
    email: 'lulu_user@mailforspam.com',
    password: '12345678'
  }
  try {
    const { auth: { access_token }, message } = await new AuthProxy().login(user)
    commit(types.LOGIN, access_token)
    dispatch('alert/show', {
      message,
      type: 'success',
      time: 10
    }, { root: true })
  } catch ({error}) {
    dispatch('alert/show', {
      message: error.message,
      type: 'fail',
      time: 10
    }, { root: true })
    return {
      status: false
    }
  }
}

export const register = async ({ commit }, data) => {
  try {
    const response = await new AuthProxy().register(AuthTransformer.send(data))
    commit(types.REGISTER, response)
    // store.dispatch('alert/show', {
    //   message: response.message,
    //   type: 'success',
    //   time: 10
    // })
    return {
      status: true
    }
  } catch ({ error }) {
    // store.dispatch('alert/show', {
    //   message: error.message,
    //   type: 'fail',
    //   time: 10
    // })
    if (error.status_code === 422) {
      return {
        status: false,
        errors: error.validation
      }
    }
    return {
      status: false,
      message: error.message,
      code: error.status_code
    }
  }
}

export const logout = ({ commit }) => {
  commit(types.LOGOUT)
  Vue.router.push({
    name: 'home'
  })
}

export const check = ({ commit }) => {
  commit(types.CHECK)
}

export default {
  login,
  logout,
  check,
  register
}
