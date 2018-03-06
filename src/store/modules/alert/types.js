// @flow

export type AlertTypes = 'warning' | 'info' | 'success' | 'fail'

export type AlertArgs = {|
  type: AlertTypes,
  message: string
|}

export type AlertState = {
  show: boolean,
  ...AlertArgs
}

export type RootState = {}