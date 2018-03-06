import BaseProxy from './BaseProxy'

class AuthProxy extends BaseProxy {
  /**
   * The constructor for the AuthProxy
   *
   * @param {Object} parameters The query parameters.
   */
  constructor (parameters) {
    super('/v1/auth', parameters)
  }

  login = data => this.submit('post', `${this.endpoint}/login`, data)

  register = data => this.submit('post', `${this.endpoint}/register`, data)
}

export default AuthProxy
