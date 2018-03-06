// @flow

import * as types from './mutation-types'
import type {Commit} from 'vuex'
import type {AlertArgs} from './types'

export const show = ({ commit }: { commit: Commit }, { type, message }: AlertArgs) => {
  commit(types.SHOW, { message, type })
  setTimeout(() => {
    commit(types.HIDE)
  }, 0)
}

export default {
  show
}
