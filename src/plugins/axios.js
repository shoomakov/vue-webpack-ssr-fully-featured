import Axios from 'axios'
// import store from '@/store'

Axios.defaults.baseURL = process.env.API_LOCATION
Axios.defaults.headers.common.Accept = 'application/json'
Axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
Axios.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response.status === 401) {
      // store.dispatch('auth/logout')
    }
    if (error.response.status === 503) {
      // new AlertError
    }

    return Promise.reject(error)
  })

export default Axios
