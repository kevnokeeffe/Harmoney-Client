
import { http } from './HttpService'
// import jwt from 'jsonwebtoken'

// Working function
export async function getAllCurrentAccounts() {
  return http()
    .get(`api/account/current-all`, {
      method: 'GET',
    })
    .then(res => {
      return res.data})
    .catch(error => {
      return console.log(error)
    })
}

export async function getAllSavingsAccounts() {
  try {
    const res = await http().get(`api/account/savings-all`, {
      method: 'GET',
    })
    return res.data
  }
  catch (error) {
    return console.log(error)
  }
}

export function getIndividualCurrentAccount(id) {
  return http().get(`api/account/current-all/${id}`)
}

export function getIndividualSavingsAccount(id) {
  return http().get(`api/account/current-all/${id}`)
}
