// import store from '../src/store/index'
import { http } from './HttpService'
// import jwt from 'jsonwebtoken'

// Working function
export async function getAllCurrentAccounts() {
  return http()
    .get(`api/account/current-all`, {
      method: 'GET'
    })
    .then(res => console.log(res))
    .catch(res => {
      return console.log(res)
    })
}

export function getAllSavingsAccounts() {
  return http().get(`api/account/savings-all`)
}

export function getIndividualCurrentAccount(id) {
  return http().get(`api/account/current-all/${id}`)
}

export function getIndividualSavingsAccount(id) {
  return http().get(`api/account/current-all/${id}`)
}
