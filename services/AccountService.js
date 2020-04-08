import { http } from './HttpService'
// import jwt from 'jsonwebtoken'

// Working function
export async function getAllCurrentAccounts() {
  return http()
    .get(`api/account/current-all`, {
      method: 'GET'
    })
    .then(res => {
      return res.data
    })
    .catch(error => {
      return console.log(error)
    })
}

export async function getAllSavingsAccounts() {
  return http()
    .get(`api/account/savings-all`, {
      method: 'GET'
    })
    .then(res => {
      return res.data
    })
    .catch(error => {
      return console.log(error)
    })
}

export async function getPostCurrentAccounts() {
  let message = false
  return http()
    .get(`api/account/current-all-post`, {
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
      return console.log(error)
    })
}

export async function getAIBCurrentAccounts() {
  
  let message = false
  return http()
    .get(`api/account/current-all-aib`, {
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
      return console.log(error)
    })
}

export async function getAllCUcurrentAccounts() {
  let message = false
  return http()
    .get(`api/account/current-all-cu`, {
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
      return console.log(error)
    })
}

export async function getAllWITcurrentAccounts() {
  let message = false
  return http()
    .get(`api/account/current-all-wit`, {
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
      return console.log(error)
    })
}

// SAVINGS ACCOUNT CALLS

// WIT method call
export async function getAllWITsavingsAccounts() {
  let message = false
  return http()
    .get(`api/account/saving-all-wit`, {
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
      return console.log(error)
    })
}

// AIB method call
export async function getAllAIBsavingsAccounts() {
  let message = false
  return http()
    .get(`api/account/saving-all-aib`, {
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
      return console.log(error)
    })
}

// Credit Union method call
export async function getAllCUsavingsAccounts() {
  let message = false
  return http()
    .get(`api/account/saving-all-cu`, {
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
      return console.log(error)
    })
}

// AIB method call
export async function getAllPostSavingsAccounts() {
  let message = false
  return http()
    .get(`api/account/saving-all-post`, {
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
      return console.log(error)
    })
}

export function getIndividualCurrentAccount(id) {
  return http().get(`api/account/current-all/${id}`)
}

export function getIndividualSavingsAccount(id) {
  return http().get(`api/account/current-all/${id}`)
}
