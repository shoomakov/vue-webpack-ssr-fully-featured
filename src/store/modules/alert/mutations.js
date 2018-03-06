/* ============
 * Mutations for the alert module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

// import Vue from 'vue'
import {
  SHOW,
  HIDE
} from './mutation-types'

export default {
  [SHOW] (state, { message, type }) {
    state.show = true
    state.message = message
    state.type = type
  },

  [HIDE] (state) {
    state.show = false
  }
}
