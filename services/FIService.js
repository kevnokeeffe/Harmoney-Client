// import store from '../src/store/index'
import { http } from "./HttpService";
// import jwt from "jsonwebtoken";

export function financialInstitutionLogin(user) {
    return http()
      .post("api/fi/login-refresh", user)
      .then(res => {
        if (res) {
          console.log(res.data.message)
        }
      }).catch(err => {
        if (err) {
          return 
        }
        return
      })
  }