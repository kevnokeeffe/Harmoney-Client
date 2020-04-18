import { http } from './HttpService'
// import jwt from 'jsonwebtoken'

// Working function
export async function getAllCurrentAccounts(id) {
  return http()
    .get(`api/account/current-all`,{
      id,
      method: 'GET'
    })
    .then(res => {
      return res.data
    })
    .catch(error => {
      return error
    })
}

export async function getAllSavingsAccounts(id) {
  return http()
    .get(`api/account/savings-all`, {
      id,
      method: 'GET'
    })
    .then(res => {
      return res.data
    })
    .catch(error => {
      return error
    })
}

export async function getPostCurrentAccounts(id) {
  let message = false
  return http()
    .get(`api/account/current-all-post`, {
      id,
      method: 'GET'
    })
    .then(res => {
      if (res.data.message === false) {
        return message
      } 
      if (res.data.message === true){
        return res.data
      }
      else{
        return message
      }
    })
    .catch(error => {
      return error
    })
}

export async function getAIBCurrentAccounts(id) {
  let message = false
  return http()
    .get(`api/account/current-all-aib`, {
      id,
      method: 'GET'
    })
    .then(res => {
    
      if (res.data.message === false) {
        return message
      } 
      if (res.data.message === true){
        return res.data
      }
      else{
        return message
      }
    })
    .catch(error => {
      return error
    })
}

export async function getAllCUcurrentAccounts(id) {
  let message = false
  return http()
    .get(`api/account/current-all-cu`, {
      id,
      method: 'GET'
    })
    .then(res => {
      if (res.data.message === false) {
        return message
      } 
      if (res.data.message === true){
        return res.data
      }
      else{
        return message
      }
    })
    .catch(error => {
      return error
    })
}

export async function getAllWITcurrentAccounts(id) {
  let message = false
  return http()
    .get(`api/account/current-all-wit`, {
      id,
      method: 'GET'
    })
    .then(res => {
      if (res.data.message === false) {
        return message
      } 
      if (res.data.message === true){
        return res.data
      }
      else{
        return message
      }
    })
    .catch(error => {
      return error
    })
}

// SAVINGS ACCOUNT CALLS

// WIT method call
export async function getAllWITsavingsAccounts(id) {
  let message = false
  return http()
    .get(`api/account/saving-all-wit`, {
      id,
      method: 'GET'
    })
    .then(res => {
      if (res.data.message === false) {
        return message
      } 
      if (res.data.message === true){
        return res.data
      }
      else{
        return message
      }
    })
    .catch(error => {
      return error
    })
}

// AIB method call
export async function getAllAIBsavingsAccounts(id) {
  let message = false
  return http()
    .get(`api/account/saving-all-aib`, {
      id,
      method: 'GET'
    })
    .then(res => {
      if (res.data.message === false) {
        return message
      } 
      if (res.data.message === true){
        return res.data
      }
      else{
        return message
      }
    })
    .catch(error => {
      return error
    })
}

// Credit Union method call
export async function getAllCUsavingsAccounts(id) {
  let message = false
  return http()
    .get(`api/account/saving-all-cu`, {
      id,
      method: 'GET'
    })
    .then(res => {
      if (res.data.message === false) {
        return message
      } 
      if (res.data.message === true){
        return res.data
      }
      else{
        return message
      }
    })
    .catch(error => {
      return error
    })
}

// AIB method call
export async function getAllPostSavingsAccounts(id) {
  let message = false
  return http()
    .get(`api/account/saving-all-post`, {
      id,
      method: 'GET'
    })
    .then(res => {
      if (res.data.message === false) {
        return message
      } 
      if (res.data.message === true){
        return res.data
      }
      else{
        return message
      }
    })
    .catch(error => {
      return error
    })
}

export function getIndividualCurrentAccount(id) {
  return http().get(`api/account/current-all/${id}`)
}

export function getIndividualSavingsAccount(id) {
  return http().get(`api/account/current-all/${id}`)
}

export function deleteWIT(id) {
  return http().get(`api/account/current-all/${id}`)
}
export function deleteAIB(id) {
  return http().get(`api/account/current-all/${id}`)
}
export function deleteCU(id) {
  return http().get(`api/account/current-all/${id}`)
}
export function deletePO(id) {
  return http().get(`api/account/current-all/${id}`)
}


