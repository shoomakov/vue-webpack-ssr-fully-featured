import {
  EXAMPLE_FETCH
} from './mutation-types'

export default {
  [EXAMPLE_FETCH] (state, data) {
    state.data = data
  }
}