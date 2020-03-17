import { http } from './HttpService'
let mes = false

// Axios API call for Harmon€y to WIT FI
export function loginWIT(connect) {
  return http()
    .post('api/fi/login-refresh-wit', connect)
    .then(response => {
      if (response.auth === true) {
        return
      }
    }).catch(err => {
      if (err) {
        return mes
      }
      return
    })
}

// Axios API call for Harmon€y to AIB FI
export function loginAIB(connect) {
  return http()
    .post('api/fi/login-refresh-aib', connect)
    .then(response => {
      if (response.auth === true) {
        return
      }
    })
    .catch(err => {
        if (err) {
          return mes
        }
        return
      })
}

// Axios API call for Harmon€y to Credit Union FI
export function loginCU(connect) {
  return http()
    .post('api/fi/login-refresh-credit-union', connect)
    .then(response => {
      if (response.auth === true) {
        return
      }
    })
    .catch(err => {
        if (err) {
          return mes
        }
        return
      })
}

// Axios API call for Harmon€y to Post Office FI
export function loginPO(connect) {
  return http()
    .post('api/fi/login-refresh-post', connect)
    .then(response => {
      if (response.auth === true) {
        return
      }
    })
    .catch(err => {
        if (err) {
          return mes
        }
        return
      })
}
