// @flow
import Vue from 'vue'
import Component from 'vue-class-component'
import {mapState} from 'vuex'

type AlertData = {|
  dismissSecs: number,
  dismissCountDown: number
|}

@Component({
  watch: {
    show (value: boolean) {
      if (value) {
        this.showAlert()
      }
    },
    dismissCountDown (value: number) {
      if (value > 0) {
        this.hideAlert(value)
      }
    }
  },
  computed: mapState('alert', [
    'show',
    'type',
    'message'
  ])
})
export default class Alert extends Vue {
  /**
   *
   * @returns {{dismissSecs: number, dismissCountDown: number}}
   */
  data (): AlertData {
    return {
      dismissSecs: 10,
      dismissCountDown: 0
    }
  }

  /**
   *
   * @param dismissCountDown
   */
  countDownChanged (dismissCountDown: number) {
    this.dismissCountDown = dismissCountDown
  }

  showAlert (): void {
    this.dismissCountDown = this.dismissSecs
  }

  /**
   *
   * @param seconds
   */
  hideAlert (seconds: number): void {
    setTimeout(() => {
      this.dismissCountDown = 0
    }, seconds * 1000)
  }
}
