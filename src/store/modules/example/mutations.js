import {
  SET_EXAMPLE
} from './mutation-types'

export default {
  [SET_EXAMPLE] (state, data) {
    state.data = data
  }
}
