// @flow
import Transformer from './Transformer'

type RegisterData = {
  data: {
    email: string,
    mobileNumber: string,
    password: string,
    gender: string,
    firstName: string,
    lastName: string,
    birthdayAt: string,
    cityName: string,
    inviteCode: string
  },
  template: {
    activationUrl: string
  }
}

export default class AuthTransformer extends Transformer {
  static send (user: RegisterData) {
    return {
      data: {
        email: user.data.email,
        mobile_number: user.data.mobileNumber,
        password: user.data.password,
        gender: user.data.gender,
        first_name: user.data.firstName,
        last_name: user.data.lastName,
        birthday_at: user.data.birthdayAt,
        city_name: user.data.cityName,
        invite_code: user.data.inviteCode ? user.data.inviteCode : null
      },
      template: {
        activation_url: user.template.activationUrl
      }
    }
  }
}
