import axios from 'axios'

class Request {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.VUE_APP_NEYDA_API_URL, // Should be something like https://api.neyda.com
      timeout: 10000
    })
  }

  // Internal calls
  call({ method = 'GET', url, data, params, timeout = 10000 }) {
    return new Promise((resolve, reject) => {
      this.api({
        method,
        url,
        params,
        data,
        timeout
      })
        .then(response => resolve(response.data))
        .catch(error => {
          reject(error)
        })
    })
  }
}

// External calls to services
export const externalCall = ({
  method = 'GET',
  url,
  data,
  params,
  timeout = 10000
}) => {
  return new Promise((resolve, reject) => {
    axios({
      method,
      url,
      params,
      data,
      timeout
    })
      .then(response => resolve(response.data))
      .catch(error => {
        reject(error)
      })
  })
}

export default Request
