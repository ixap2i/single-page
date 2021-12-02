
const axios = require('axios').default

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  console.log(error)
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const apiService = {
  async get (url, params) {
    return await axios.get(url, params)
  },

  async post (url, params) {
    return await axios.post(url, params)
  },

  async delete (url, params) {
    return await axios.delete(url, params)
  }
}
export default apiService
