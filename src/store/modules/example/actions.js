import * as types from './mutation-types'
import axios from 'plugins/axios'

export default {
  fetchExampleData: ({ commit }) => {
    return axios
      .get('https://api.livecoin.net/exchange/ticker?currencyPair=BTC/USD')
      .then((response) => {
        commit(types.EXAMPLE_FETCH, response.data)
      })
      .catch((error) => {
        console.warn('Something went wrong, local data set')
        commit(types.EXAMPLE_FETCH, {
          symbol: '17000'
        })
      })
  }
}
