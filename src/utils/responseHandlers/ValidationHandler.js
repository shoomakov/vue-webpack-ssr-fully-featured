// @flow
type Validation = {
  [key: string]: Array<string>
}

type Error = {
  validation: Validation,
  statusCode: number,
  message: string
}

class ValidationHandler {
  validation: Validation
  statusCode: number
  message: string

  /**
   *
   * @param error
   */
  constructor (error: Error) {
    const { validation, statusCode, message } = error
    this.validation = validation
    this.statusCode = statusCode
    this.message = message
  }

  /**
   *
   * @param validation
   * @returns {string}
   */
  getMessage (validation: Validation) {
    let message = []
    for (let validationField in validation) {
      validation[validationField].forEach((value) => {
        message.push(`<p>${value}</p>`)
      })
    }
    return this.concatenate(message)
  }

  /**
   *
   * @param message
   * @returns {string}
   */
  concatenate (message: Array<string>): string {
    let newMessage = ''
    message.forEach(value => {
      newMessage += value
    })
    return newMessage
  }

  /**
   *
   */
  handle () {
    switch (this.statusCode) {
      case 422:
        return {
          message: this.getMessage(this.validation),
          type: 'fail'
        }
      default:
        return {
          message: this.message,
          type: 'fail'
        }
    }
  }
}

export default ValidationHandler
