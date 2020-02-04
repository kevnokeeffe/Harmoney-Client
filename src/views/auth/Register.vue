<template>
  <div class="container-register">
    <b-card class="b-card-register">
      <div class="h1-register-div">
      <h1 class="h1-register">Sign-Up</h1>
      <b-form class="custom-form" @submit.prevent="onSubmit">
        <b-form-group
          id="input-group-fName"
          label="First Name:"
          label-for="input-fName"
        >
          <b-form-input
            id="input-fName"
            v-model="form.fName"
            v-model.trim="$v.form.fName.$model"
            :class="{
              'is-invalid': $v.form.fName.$error,
              'is-valid': !$v.form.fName.$invalid
            }"
            placeholder="Enter first name"
          ></b-form-input>
          <div class="valid-feedback">Your first name is valid!</div>
          <div class="invalid-feedback">
            <span v-if="!$v.form.fName.required">First name is required</span>
            <span v-if="!$v.form.fName.minLength">First name is too short</span>
            <span v-if="!$v.form.fName.maxLength">First name is too long!</span>
          </div>
        </b-form-group>

        <b-form-group
          id="input-group-lName"
          label="Last Name:"
          label-for="input-lName"
        >
          <b-form-input
            id="input-lName"
            v-model="form.lName"
            v-model.trim="$v.form.lName.$model"
            :class="{
              'is-invalid': $v.form.lName.$error,
              'is-valid': !$v.form.lName.$invalid
            }"
            placeholder="Enter last name"
          ></b-form-input>
          <div class="valid-feedback">Your last name is valid!</div>
          <div class="invalid-feedback">
            <span v-if="!$v.form.lName.required">Last name is required</span>
            <span v-if="!$v.form.lName.minLength">Last name is too short</span>
            <span v-if="!$v.form.lName.maxLength">Last name is too long!</span>
          </div>
        </b-form-group>

        <b-form-group
          id="input-group-email"
          label="Email address:"
          label-for="input-email"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-email"
            v-model="form.email"
            type="email"
            v-model.trim="$v.form.email.$model"
            :class="{
              'is-invalid': $v.form.email.$error,
              'is-valid': !$v.form.email.$invalid
            }"
            placeholder="Enter email"
          ></b-form-input>
          <div class="valid-feedback">Your e-mail name is valid!</div>
          <div class="invalid-feedback">
            <span v-if="!$v.form.email.required">E-mail is required</span>
            <span v-if="!$v.form.email.minLength"
              >E-mail name is too short</span
            >
            <span v-if="!$v.form.email.maxLength"
              >E-mail name is too long!</span
            >
            <span v-if="!$v.form.email.isUnique"
              >This e-mail is already registered</span
            >
          </div>
        </b-form-group>

<b-form-group
          id="input-group-phone"
          label="Phone Number:"
          label-for="input-phone"
          description="We'll never share your phone number with anyone else."
        >
          <b-form-input
            id="input-phone"
            v-model="form.phone"
            type="number"
            v-model.number.lazy="$v.form.phone.$model"
            :class="{
              'is-invalid': $v.form.phone.$error,
              'is-valid': !$v.form.phone.$invalid
            }"
            placeholder="Enter phone number"
          ></b-form-input>
          <div class="valid-feedback">Your phone number is valid!</div>
          <div class="invalid-feedback">
            <span v-if="!$v.form.phone.required">Phone number is required</span>
            <span v-if="!$v.form.phone.minLength"
              >Phone number is too short</span
            >
            <span v-if="!$v.form.phone.numeric"
              >Only numeric accepted!</span
            >
          </div>
        </b-form-group>

        <b-form-group
          id="input-password"
          label="Password:"
          label-for="password"
          description="Password must be at least 6 characters long!"
        >
          <b-form-input
            id="password"
            type="password"
            v-model="form.password"
            v-model.trim="$v.form.password.$model"
            :class="{
              'is-invalid': $v.form.password.$error,
              'is-valid': !$v.form.password.$invalid
            }"
            placeholder="Enter password"
          ></b-form-input>
          <div class="valid-feedback">Your password name is valid!</div>
          <div class="invalid-feedback">
            <span v-if="!$v.form.password.required">Password is required</span>
            <span v-if="!$v.form.password.minLength"
              >Password is too short</span
            >
            <span v-if="!$v.form.password.maxLength"
              >Password is too long!</span
            >
          </div>
        </b-form-group>
<!-- <div class="b-form-group">
  <b-form-checkbox id="showpassword" class="b-form-checkox"
  @click="toggleShowPassword" v-model="showpassword">
  <label class="form-check-label" for="showpassword">Show password</label>
  </b-form-checkbox>
</div> -->
  <!-- <b-form-group
          id="input-repeat-password"
          label="Repeat Password:"
          label-for="repeat-password"
          description="Must match password exactly."
        >
          <b-form-input
            id="repeat-password"
            type="password"
            v-model="form.repeatPassword"
            v-model.trim="$v.form.repeatPassword.$model"
            :class="{
              'is-invalid': $v.form.repeatPassword.$error,
              'is-valid': !$v.form.repeatPassword.$invalid
            }"
            placeholder="Enter password"
          ></b-form-input>
          <div class="valid-feedback">Passwords Match!</div>
          <div class="invalid-feedback">
            <span v-if="!$v.form.repeatPassword.required">Password is required</span>
            <span v-if="!$v.form.repeatPassword.minLength"
              >Password is too short</span
            >
            <span v-if="!$v.form.repeatPassword.maxLength"
              >Password is too long!</span
            >
          </div>
        </b-form-group> -->
<!-- 
        <b-card class="b-card-register-uploads">
          <b-form-group
            id="input-group-head-shot"
            label="Head Shot:"
            label-for="input-head-shot"
            description="Please make sure the picture is suitable as a passport photo."
          >
            <b-form-file
              v-model="form.headShot"
              ref="input-head-shot"
              accept="image/jpeg, image/png"
              class="b-form-file-photo"
              placeholder="Upload image"
            ></b-form-file>
          </b-form-group>

           <b-button @click="clearHeadShot" class="mr-2 mb-4">Reset Upload</b-button> -->
<!-- 
          <b-form-group
            id="input-group-passport"
            label="Passport Photo:"
            label-for="input-passport"
            description="We only accept .jpeg or .png file types. Make sure the image is clear."
          >
            <b-form-file
              v-model="form.passportImage"
              ref="input-passport"
              accept="image/jpeg, image/png"
              placeholder="Upload image"
            ></b-form-file>
          </b-form-group>
        </b-card> -->
        <b-form-group>
          <b-button type="submit" class="btn btn-success">Submit {{ submitStatus }}</b-button>
        </b-form-group>
      </b-form>
      <p class="typo__p" v-if="submitStatus === 'OK'">User Created!</p>
      <p class="typo__p" v-if="submitStatus === 'ERROR'">
        Please Enter Valid Details.
      </p>
      <p class="typo__p" v-if="submitStatus === 'PASSWORD'">
        Password must be at least 6 characters long.
      </p>
      <p class="typo__p" v-if="submitStatus === 'PENDING'">Registering...</p>
      </div>
    </b-card>
  </div>
</template>

<script>
import * as auth from '../../../services/AuthService'
// import axios from 'axios'
import {
  minLength,
  required,
  maxLength,
  email,
  sameAs,
  numeric
} from 'vuelidate/lib/validators'
export default {
  name: 'register',
  data() {
    return {
      form: {
        fName: '',
        lName: '',
        email: '',
        password: '',
        repeatPassword: '',
        showPassword: false,
        submitStatus: null,
        headShot: null,
        passportImage: null,
        phone:'',
        url:'',
        submitstatus: null
      },
      show: true
    }
  },
  validations: {
    message: {
      minLength: minLength(0)
    },
    form:{
    fName: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(20)
    },
    lName: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(20)
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(20)
    },
    repeatPassword:{
      sameAsPassword: sameAs('password')
    },
    phone:{
      required,
      numeric,
      minLength: minLength(9)
    },
    email: {
      required,
      email,
      isUnique(value) {
        if (value === '') return true
        var email_regex = process.env.VUE_APP_REG_X
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(email_regex.test(value))
          }, 350 + Math.random() * 300)
        })
      }
    }
    }
  },
  methods: {
    onSubmit: async function() {
      // this.$v.$touch()
      // if (this.$v.$invalid) {
      //   this.submitStatus = 'FAIL'
      // } else {
    //   try{
      const user = {
        email: this.form.email,
        password: this.form.password,
        fName: this.form.fName,
        lName: this.form.lName
        // headShot: this.form.headShot,
        // passportImage: this.form.passportImage
      }
      const registerPromise = auth.registerUser(user)
      await Promise.all([registerPromise])
      const loginPromise = auth.login(user)
      await Promise.all([loginPromise])
      await this.$router.push({ path: '/dashboard' })
      //   }catch{if (this.password.length != this.password.minLength) {
      //       this.submitStatus = "PASSWORD";
      //     } else {
      //       this.submitStatus = "ERROR";
      //     }}
      // }
    },
    // buttonDisabled: function() {
    //   return !this.email || !this.fName || !this.lName || !this.password;
    // },
    clearHeadShot() {
      this.$refs['input-head-shot'].reset()
    },
    clearPassport() {
      this.$refs['input-passport'].reset()
    },
    toggleShowPassword(){
      let show = document.getElementById('password')
      if(this.showpassword == false){
        this.showpassword = true
        show.type ='text'
      }else{
        this.showpassword = false
        show.type = 'password'
      }
    },
  //   checkEmail: function(){
  //     let email = this.form.email.trim();
  //     if(email != ''){
 
  //      axios.get('api/auth/user', {
  //        params: {
  //          email: email
  //        }
  //      })
  //      .then(function (response) {
  //        app.isAvailable = response.data;
  //        if(response.data == 0){
  //          app.responseMessage = "E-mail is Available.";
  //        }else{
  //          app.responseMessage = "E-mail is not Available.";
  //        }
  //      })
  //      .catch(function (error) {
  //        console.log(error);
  //      });

  //    }else{
  //      this.responseMessage = "";
  //    }
  //  }
  }
}
</script>

<style>
.h1-register {
  text-align: center;
  color: #17252a;
  font-family: 'Roboto', sans-serif;
  font-family: 'Open Sans', sans-serif;
  font-size: 2em;
}

.b-card-register {
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 90%;
  margin-top: 20px;
  max-width: 500px !important;
  margin-bottom: 20px;
}

.container-register {
  width: 100%;
  height: 100%;
}

.container-register {
  background: rgb(249,190,2);
  background: linear-gradient(90deg, rgba(249,190,2,1) 0%, rgba(249,190,2,1) 22%, rgba(255,255,240,1) 22%);
  padding-top: 4px;
  padding-bottom:30%;
  height:100%;
left:0;
right:0;
}
.b-card-register-uploads {
  margin-top: 20px;
  margin-bottom: 20px;
}
.h1-register {
  text-align: center;
  color: #263347;
  font-family: 'Roboto', sans-serif;
  font-family: 'Open Sans', sans-serif;
  font-size: 2em;
  margin-bottom: 50px;
}

.h1-register-div {
  width:100%;
  height:100%;
  padding: 15px;
  margin-bottom:15px;
}
.b-card-register {
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    width: 90%;
    margin-top: 60px;
    max-width: 500px !important;
    background: rgb(150,206,180);
    background: linear-gradient(180deg, rgba(150,206,180,1) 12%, rgba(254,254,254,1) 12%, rgba(255,255,255,1) 94%, rgba(255,255,255,1) 94%);
  }
</style>
