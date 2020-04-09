import { http } from './HttpService'

export async function postTransactionInternal(transaction) {
    return http()
      .post(`api/transaction/execute-internal`, {
        method: 'POST',
        transaction
      })
      .then(res => {
        return res.data.message
      })
      .catch(error => {
        return error
      })
  }

  export async function postTransactionExternal(transaction) {
    return http()
      .post(`api/transaction/execute-external`, {
        method: 'POST',
        transaction
      })
      .then(res => {
        return res.data.message
      })
      .catch(error => {
        return error
      })
  }