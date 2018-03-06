import TestProxy from 'src/proxies/TestProxy'
import * as types from './mutation-types'

const get = async ({commit, dispatch}) => {
  try {
    const { data } = await new TestProxy().test()
    console.log('GET', data)
    commit(types.SET_EXAMPLE, data)
  } catch (error) {
    dispatch('alert/show', {
      message: error.msg,
      type: 'fail',
      time: 10
    }, { root: true })
    console.warn('example/get', error)
  }
}

const example = async ({commit}) => {
  try {
    const { data } = await new TestProxy().example()
    commit(types.SET_EXAMPLE, data)
  } catch (error) {
    console.warn('example/example', error)
  }
}

export default {
  get,
  example
}
