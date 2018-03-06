// @flow
import Vue from 'vue'

type Parameters = {}

interface Proxy {
  submit(requestType: string, url: string, data: {}): Promise<void>
}

export default class BaseProxy implements Proxy {
  endpoint: string
  parameters: Parameters
  /**
   * The constructor of the BaseProxy.
   *
   * @param {string} endpoint   The endpoint being used.
   * @param {Object} parameters The parameters for the request.
   */
  constructor (endpoint: string, parameters: Parameters = {}) {
    this.endpoint = endpoint
    this.parameters = parameters
  }

  /**
   * Method used to transform a parameters object to a parameters string.
   *
   * @returns {string} The parameter string.
   */
  getParameterString (): string {
    const keys = Object.keys(this.parameters)

    const parameterStrings = keys
      .filter(key => !!this.parameters[key])
      .map(key => `${key}=${this.parameters[key]}`)

    return parameterStrings.length === 0 ? '' : `?${parameterStrings.join('&')}`
  }

  /**
   * Check if token is expired.
   *
   * @param response
   * @returns {boolean|string | null}
   */
  static isTokenExpired (response: { status: number }): boolean {
    return response.status === 401 && (localStorage.getItem('id_token') !== null)
  }

  /**
   *
   * @returns {Promise<T>}
   */
  tokenUpdate (): Promise<{}> {
    console.log('Send request to refresh old token')
    return Vue.axios.post('/v1/auth/refresh')
      .then(response => {
        console.info('Token received. Updating headers and local storage...')
        let token = response.data.auth.access_token
        localStorage.setItem('id_token', token)
        location.reload()
      })
      .catch(({ response }) => {
        if (typeof response !== 'undefined' && this.constructor.isTokenExpired(response)) {
          console.info('Refresh token has failed, need to re-login', response)
          localStorage.removeItem('id_token')
          location.reload()
        }
      })
  }

  /**
   * The method used to perform an AJAX-request.
   *
   * @param {string}      requestType The request type.
   * @param {string}      url         The URL for the request.
   * @param {Object|null} data        The data to be send with the request.
   *
   * @returns {Promise} The result in a promise.
   */
  submit (requestType: string, url: string, data: Object = {}): Promise<void> {
    return new Promise((resolve, reject) => {
      Vue.axios[requestType](url + this.getParameterString(), data)
        .then((response) => {
          console.log('submit success', response)
          resolve(response.data)
        })
        .catch(({ response }) => {
          console.log('submit fail', response)
          if (this.constructor.isTokenExpired(response)) {
            console.info('User token is expired, I\'m trying to update him')
            this.tokenUpdate()
            return
          }
          if (!response.data) {
            reject(new Error('error'))
            return
          }
          reject(response.data)
        })
    })
  }

  /**
   * Method used to fetch all items from the API.
   *
   * @returns {Promise} The result in a promise.
   */
  all () {
    return this.submit('get', `/${this.endpoint}`)
  }
  /**
   * Method used to fetch a single item from the API.
   *
   * @param {int} id The given identifier.
   *
   * @returns {Promise} The result in a promise.
   */
  find (id: number) {
    return this.submit('get', `/${this.endpoint}/${id}`)
  }
  /**
   * Method used to create an item.
   *
   * @param {Object} item The given item.
   *
   * @returns {Promise} The result in a promise.
   */
  create (item: Object) {
    return this.submit('post', `/${this.endpoint}`, item)
  }
  /**
   * Method used to update an item.
   *
   * @param {int}    id   The given identifier.
   * @param {Object} item The given item.
   *
   * @returns {Promise} The result in a promise.
   */
  update (id: number, item: Object) {
    return this.submit('put', `/${this.endpoint}/${id}`, item)
  }
  /**
   * Method used to destroy an item.
   *
   * @param {int} id The given identifier.
   *
   * @returns {Promise} The result in a promise.
   */
  destroy (id: number) {
    return this.submit('delete', `/${this.endpoint}/${id}`)
  }
}
