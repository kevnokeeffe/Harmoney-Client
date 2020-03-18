import store from '../src/store/index'
import { http } from "./HttpService";
import jwt from "jsonwebtoken";

export function isLoggedIn() {
  const token = localStorage.getItem("token");
  return token != null;
}

export function authyLogin(user) {
  return http()
    .post("api/auth/authy-login", user)
    .then(res => {
      if (res) {
        setToken(res.data.token);
      }
    }).catch(err => {
      if (err) {
        return 
      }
      return
    })
}

export function login(user) {
  return http()
    .post("api/auth/login", user)
    .then(res => {
      if (res) {
        setToken(res.data.token);
      }
    }).catch(err => {
      if (err) {
        return 
      }
      return
    })
}

export function logout() {
  localStorage.clear();
  store.dispatch("authenticate");
  //return http().get('api/user/logout')
}

function setToken(token) {
  localStorage.setItem("token", token);
  store.dispatch("authenticate");
}

export function getToken() {
  return localStorage.getItem("token");
}

export function getEmail() {
  const token = decodeToken();
  if (!token) {
    return null;
  }
  try {
    return token.email;
  } catch (error) {
    return null;
  }
}

export function getName() {
  const token = decodeToken();
  if (!token) {
    return null;
  }
  try {
    return token.fName;
  } catch (error) {
    return null;
  }
}

export function getLastName() {
  const token = decodeToken();
  if (!token) {
    return null;
  }
  try {
    return token.lName;
  } catch (error) {
    return null;
  }
}

export function getUserId() {
  const token = decodeToken();
  if (!token) {
    return null;
  }
  try {
    return token.id;
  } catch (error) {
    return null;
  }
}

export function registerUser(user) {
  return http().post("api/auth/register", user);
}

export function registerAuthyUser(user) {
  return http().post("api/auth/authy-register", user);
}

export function validateAuthyUser(verify) {
  return http().post("api/auth/authy-validate", verify);
}

export function checkValidateAuthyUser(code) {
  return http().post("api/auth/authy-validate-code", code);
}

// Checking to see if the login validation code is correct
export function checkValidateAuthyUserLogin(code) {
  return http().post("api/auth/authy-validate-code", code);
}

export function checkForUserEmail(uEmail) {
  return http().post("api/auth/authy-user-email", uEmail);
}

export function checkUser(user) {
  return http().get("api/user/get", user);
}

export function decodeToken() {
  const token = getToken();
  if (!token) {
    return null;
  }
  return jwt.decode(token);
}
