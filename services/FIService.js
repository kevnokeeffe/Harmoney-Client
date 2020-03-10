// import store from '../src/store/index'
import { http } from "./HttpService";
// import jwt from "jsonwebtoken";

export function financialInstitutionLogin(user) {
    return http()
    // Maybe trigger a login method in the H€Y server from here that method will do all the token work then come back here with a sucess message and trigger a redirect. possibly!!
    // Maybe need a method for each FI!!
      .post("api/fi/login-access", user)
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