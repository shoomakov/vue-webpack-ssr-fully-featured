// @flow

import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

import type {Module} from 'vuex'
import type {AlertState, RootState} from './types'

const alert: Module<AlertState, RootState> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default alert
