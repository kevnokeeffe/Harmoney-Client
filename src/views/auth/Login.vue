<template>
  <div class="container-login">
    <b-card class="b-card-login">
      <div class="h1-login-div">
      <h1 class="h1-login">Login</h1>
      </div>
      <b-form class="custom-form" v-on:submit.prevent="onSubmit">
        <b-form-group
          id="input-group-email"
          label="Email address:"
          label-for="input-email"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-email"
            v-model.trim="$v.form.email.$model"
            type="email"
            class="form-control"
            required
            placeholder="Enter email"
          ></b-form-input>
          <div class="valid-feedback">Your e-mail is valid!</div>
          <div class="invalid-feedback">
            <span v-if="!$v.form.email.required">E-mail Required</span>
            <span v-if="!$v.form.email.minLength">E-mail must be valid</span>
            <span v-if="!$v.form.email.maxLength">E-mail is too long!</span>
          </div>
        </b-form-group>

        <b-form-group
          id="input-password"
          label="Password:"
          label-for="password"
        >
          <b-form-input
            id="password"
            type="password"
            v-model.trim="$v.form.password.$model"
            required
            placeholder="Enter password"
          ></b-form-input>
          <div class="valid-feedback">Your password is valid!</div>
          <div class="invalid-feedback">
            <span v-if="!$v.form.password.required">Password Required</span>
            <span v-if="!$v.form.password.minLength"
              >Password must be valid</span
            >
            <span v-if="!$v.form.password.maxLength"
              >Password is too long!</span
            >
          </div>
        </b-form-group>

        <div class="form-group">
          <b-button
            :disabled="buttonDisabled()"
            type="submit"
            class="btn btn-secondary"
            >Submit</b-button
          >
        </div> 
      </b-form>
      <p class="typo__p" v-if="form.submitStatus === 'OK'">Logged in!</p>
        <p class="typo__p" v-if="form.submitStatus === 'ERROR'">Please Enter Correct Details.</p>
        <p class="typo__p" v-if="form.submitStatus === 'PENDING'">Logging in...</p>
        <p class="typo__p" v-if="form.submitStatus === 'PASSWORD'">Invalid Password</p>
    </b-card>
  </div>
</template>

<script>
import * as auth from '../../../services/AuthService'
import {
  required,
  minLength,
  maxLength,
  email
} from 'vuelidate/lib/validators'
export default {
  name: 'login',
  data() {
    return {
      form: {
        email: '',
        password: '',
        submitStatus: null
      }
    }
  },
  validations: {
    form: {
      email: {
        required,
        email,
        minLength: minLength(0),
        maxLength: maxLength(50)
      },
      password: {
        required,
       
        minLength: minLength(6),
        maxLength: maxLength(20)
      }
    }
  },
  methods: {
    onSubmit: async function(event) {
      event.preventDefault()
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        const user = {
          email: this.form.email,
          password: this.form.password
        }
        const loginPromise = await auth.authyLogin(user)
        await Promise.all([loginPromise])
        await this.$router.push({ path: '/dashboard' })
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    },
    buttonDisabled: function() {
      return !this.form.email || !this.form.password
    }
  }
}
</script>

<style>
.h1-login {
  text-align: center;
  color: ivory;
  font-family: 'Roboto', sans-serif;
  font-family: 'Open Sans', sans-serif;
  font-size: 2em;
}

.h1-login-div {
  width:100%;
  height:100%;
  padding: 15px;
  margin-bottom:15px;
}
#input-group-email{
  padding-top:20px;
}
.container-login {
  background: rgb(249,190,2);
  background: linear-gradient(90deg, rgba(249,190,2,1) 0%, rgba(249,190,2,1) 22%, rgba(255,255,240,1) 22%);
  padding-top: 4px;
  padding-bottom:30%;
  height:100%;
  position:fixed;
left:0;
right:0;
}

</style>
