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

  export async function transactionCurrentWIT() {
    let message = false
      return http()
        .get(`api/transaction/transaction-current-wit`, {
          method: 'GET',
        }).then(res => {
      if (res.data.message === false) {
        return message
      }
      if (res.data.message === "No transactions") {
        return message
      }
      if (res.data.message === true) {
        return res.data
      }
    }).catch(error => {
      return error
    })
  }

  export function transactionSavingsWIT() {
    let message = false
    return http()
      .get(`api/transaction/transaction-savings-wit`, {
        method: 'GET',
      })
      .then(res => {
        if (res.data.message === false) {
          return message
        }
        if (res.data.message === "No transactions") {
          return message
        }
        if (res.data.message === true) {
          return res.data
        }
      }).catch(error => {
        return error
      })
    }

  export function transactionSavingsAIB() {
    let message = false
    return http()
      .get(`api/transaction/transaction-savings-aib`, {
        method: 'GET',
      })
      .then(res => {
        if (res.data.message === false) {
          return message
        }
        if (res.data.message === "No transactions") {
          return message
        }
        if (res.data.message === true) {
          return res.data
        }
      }).catch(error => {
        return error
      })
    }

  export function transactionCurrentAIB() {
    let message = false
    return http()
      .get(`api/transaction/transaction-current-aib`, {
        method: 'GET',
      })
      .then(res => {
        if (res.data.message === false) {
          return message
        }
        if (res.data.message === "No transactions") {
          return message
        }
        if (res.data.message === true) {
          return res.data
        }
      }).catch(error => {
        return error
      })
    }

  export function transactionCurrentCU() {
    let message = false
    return http()
      .get(`api/transaction/transaction-current-cu`, {
        method: 'GET',
      })
      .then(res => {
        if (res.data.message === false) {
          return message
        }
        if (res.data.message === "No transactions") {
          return message
        }
        if (res.data.message === true) {
          return res.data
        }
      }).catch(error => {
        return error
      })
    }

  export function transactionSavingsCU() {
    let message = false
    return http()
      .get(`api/transaction/transaction-savings-cu`, {
        method: 'GET',
      })
      .then(res => {
        if (res.data.message === false) {
          return message
        }
        if (res.data.message === "No transactions") {
          return message
        }
        if (res.data.message === true) {
          return res.data
        }
      }).catch(error => {
        return error
      })
    }

  export function transactionSavingsPost() {
    let message = false
    return http()
      .get(`api/transaction/transaction-savings-post`, {
        method: 'GET',
      })
      .then(res => {
        if (res.data.message === false) {
          return message
        }
        if (res.data.message === "No transactions") {
          return message
        }
        if (res.data.message === true) {
          return res.data
        }
      }).catch(error => {
        return error
      })
    }
    
  export function transactionCurrentPost() {
    let message = false
    return http()
      .get(`api/transaction/transaction-current-post`, {
        method: 'GET',
      })
      .then(res => {
        if (res.data.message === false) {
          return message
        }
        if (res.data.message === "No transactions") {
          return message
        }
        if (res.data.message === true) {
          return res.data
        }
      }).catch(error => {
        return error
      })
    }