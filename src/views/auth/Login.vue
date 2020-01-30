<template>
  <div class="container-login">
    <h1 class="h1-login">Login</h1>
    <b-card class="b-card-login">
      <b-form @submit="onSubmit" v-if="show">
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
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-password"
          label="Password:"
          label-for="password"
        >
          <b-form-input
            id="password"
            type="password"
            v-model="form.password"
            required
            placeholder="Enter password"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4">
          <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
            <b-form-checkbox value="me">Remember Me</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
// import * as auth from '../../services/AuthService'
// import { minLength } from 'vuelidate/lib/validators'
export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: '',
        password: '',
        submitted: false,
        submitStatus: null,
        checked: [],
        errorMsg: null,
        validationerror: false
      },
      show: true
    }
  },
//   validations: {
//     message: {
//       minLength: minLength(0)
//     }
//   },
//   methods: {
//     onSubmit: async function () {
//       const user = {
//         email: this.form.email,
//         password: this.form.password
//       }
//       await auth.login(user)
//       this.$router.push({ name: 'DashBoard' })
//     },
//     buttonDisabled: function () {
//       return !this.email || !this.password
//     }
//   }
}
</script>

<style>
.h1-login {
  text-align: center;
  color: #17252a;
  font-family: "Roboto", sans-serif;
  font-family: "Open Sans", sans-serif;
  font-size: 2em;
}

/* .container-login{
    max-width: 100%;
    background-image: url('@/../../../assets/backgroundThreeColors.png');
    image-rendering: auto;
    max-height: 100%;
    padding-bottom: 400px;
} */


</style>