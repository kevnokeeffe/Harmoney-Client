<template>
  <div class="container-register">
    <h1 class="h1-register">Sign-Up</h1>
    <b-card class="b-card-register">
      <b-form v-on:submit.prevent="onSubmit">
        <b-form-group
          id="input-group-fName"
          label="First Name:"
          label-for="input-fName"
        >
          <b-form-input
            id="input-fName"
            v-model="form.fName"
            required
            placeholder="Enter first name"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-lName"
          label="Last Name:"
          label-for="input-lName"
        >
          <b-form-input
            id="input-lName"
            v-model="form.lName"
            required
            placeholder="Enter last name"
          ></b-form-input>
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
            required
            placeholder="Enter email"
          ></b-form-input>
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
            required
            placeholder="Enter password"
          ></b-form-input>
        </b-form-group>
        <b-card class="b-card-register-uploads" label="First Name:">
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

          <!-- <b-button @click="clearHeadShot" class="mr-2 mb-4">Reset Upload</b-button> -->

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
        </b-card>
        <!-- <b-button @click="clearPassport" class="mr-2 mb-4">Reset Upload</b-button> -->

        <!-- <b-form-group
          id="input-renter-password"
          label="Confirm Password:"
          label-for="password"
        >
          <b-form-input
            id="renter-password"
            type="password"
            v-model="form.renterPassword"
            required
            placeholder="Renter password"
          ></b-form-input>
        </b-form-group> -->
        <b-form-group>
          <b-button type="submit" class="btn btn-primary">Submit</b-button>
        </b-form-group>
      </b-form>
    </b-card>
  </div>
</template>

<script>
// import * as auth from '../../services/AuthService'
// import { minLength } from 'vuelidate/lib/validators'
export default {
  name: 'register',
  data() {
    return {
      form: {
        email: '',
        password: '',
        renterPassword: '',
        submitted: false,
        submitStatus: null,
        errorMsg: null,
        validationerror: false,
        headShot: null,
        passportImage: null
      },
      show: true
    }
  }
  //   validations: {
  //     message: {
  //       minLength: minLength(0)
  //     }
  //   },
  //   methods: {
  //     onSubmit: async function () {
  //       const user = {
  //         email: this.form.email,
  //         password: this.form.password,
  //         fName: this.form.fName,
  //         lName: this.form.lName
  //         // headShot: this.form.headShot,
  //         // passportImage: this.form.passportImage
  //       }
  //       const registerPromise = auth.registerUser(user)
  //       await Promise.all([registerPromise])
  //       const loginPromise = auth.login(user)
  //       await Promise.all([loginPromise])
  //       await this.$router.push({ name: 'Home' })
  //     },
  //     buttonDisabled: function () {
  //       return !this.email || !this.password
  //     },
  //     clearHeadShot () {
  //       this.$refs['input-head-shot'].reset()
  //     },
  //     clearPassport () {
  //       this.$refs['input-passport'].reset()
  //     }
  //   }
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

.b-card-register-uploads {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
