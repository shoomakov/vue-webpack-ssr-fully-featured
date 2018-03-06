// @flow
import BaseProxy from './BaseProxy'

class TestProxy extends BaseProxy {
  /**
   * The constructor for the RatingAllProxy
   *
   * @param {Object} parameters The query parameters.
   */
  constructor (parameters: Object = {}) {
    super('/test', parameters)
  }

  test = () => this.submit('get', this.endpoint)

  example = () => this.submit('get', `${this.endpoint}/example`)
}

export default TestProxy
