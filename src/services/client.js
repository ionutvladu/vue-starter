
import axios from 'axios'
import store from '../store'
import localStorageService from './localStorageService'
const Client = axios.create({
  baseURL: '/api',
  timeout: 300000
})
// Do something before request is sent
Client.interceptors.request.use(
  config => {
    if (!config.hideLoading) store.dispatch('setLoading', true)
    if (config.authorization !== false) {
      const token = localStorageService.getAccessToken()
      if (token) {
        config.headers.Authorization = 'Bearer ' + token
      }
    }
    return config
  },
  error => {
    store.dispatch('setLoading', false)
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
Client.interceptors.response.use(
  response => {
    store.dispatch('setLoading', false)

    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  error => {
    store.dispatch('setLoading', false)
    return Promise.reject(error)
  }
)
export default Client
