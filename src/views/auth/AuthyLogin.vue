<template>
  <div class="container-authyLogin">
    <b-jumbotron class="b-jumbotron-login">
      <h1 class="h1-login"><i class="fas fa-sign-in-alt"></i> Login</h1>
      <b-form v-if="show">
        <b-form-group
          id="input-group-email"
          label="Email address:"
          label-for="input-email"
          description="Please enter a valid email and password."
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
          id="input-password-group"
          label="Your Password:"
          label-for="input-password"
          :invalid-feedback="invalidFeedback"
          :valid-feedback="validFeedback"
          :state="state"
        >
          <b-form-input
            id="input-password"
            v-model="form.password"
            required
            type="password"
            aria-describedby="password-help-block"
            placeholder="Enter password"
            :state="state"
          ></b-form-input>
        </b-form-group>

        <b-button
          class="mt-2"
          squared
          type="button"
          variant="info"
          disabled
          v-if="this.form.password.length < 6"
        >
          Continue
        </b-button>
        <b-button
          class="mt-2"
          v-if="this.form.password.length >= 6 && this.loading === true"
          squared
          variant="info"
          disabled
        >
          <b-spinner small type="grow"></b-spinner>
          Loading...
        </b-button>
        <b-button
          type="button"
          class="mt-2"
          @click="showValidationModal()"
          squared
          variant="info"
          v-if="this.form.password.length >= 6 && this.loading === false"
          >Continue</b-button
        >
        <b-modal
          id="modal-center"
          centered
          hide-footer
          headerBgVariant="dark"
          headerTextVariant="light"
          title="Two Factor Authentication"
        >
          <b-row>
            <b-col cols="2"></b-col>
            <b-col cols="8">
              <p class="mt-2">
                Please enter the validation code we have sent to your registered
                mobile number in the text field below.
              </p>
            </b-col>
            <b-col cols="2"></b-col>
          </b-row>
          <b-row>
            <b-col cols="2"></b-col>
            <b-col cols="9">
              <b-form-input
                id="vCode-input"
                v-model="vCode"
                required
                placeholder="Enter validation code"
              ></b-form-input>
            </b-col>
            <b-col cols="1"></b-col
          ></b-row>
          <b-row class="buttons-row-modal">
            <b-col cols="2"></b-col>
            <b-col cols="10">
              <div>
                <b-button
                  class="mt-4 mr-2"
                  squared
                  variant="danger"
                  @click="hideModal()"
                >
                  Cancel
                </b-button>

                <b-button
                  class="mt-4 mr-2"
                  squared
                  type="submit"
                  variant="primary"
                  disabled
                  v-if="this.vCode === null && this.loading === false"
                >
                  Submit
                </b-button>
                <b-button
                class="mt-4 mr-2"
                  v-if="this.vCode != null && this.loading === true"
                  variant="primary"
                  squared
                  disabled
                >
                  <b-spinner small type="grow"></b-spinner>
                  Loading...
                </b-button>
                <b-button
                  class="mt-4 mr-2"
                  squared
                  type="submit"
                  variant="primary"
                  @click="onSubmit()"
                  v-if="this.loading === false && this.vCode != null"
                >
                  Submit
                </b-button>
              </div>
            </b-col></b-row
          >
        </b-modal>
      </b-form>
    </b-jumbotron>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import * as auth from '../../../services/AuthService'
export default {
  computed: {
    state() {
      let str = this.form.password
      let space = str.search(' ')
      return this.form.password.length >= 6 && space === -1 ? true : false
    },
    invalidFeedback() {
      let str = this.form.password
      let space = str.search(' ')
      if (this.form.password.length > 6 && space !== -1) {
        return ''
      } else if (this.form.password.length > 0 && space !== -1) {
        return 'Enter at least 6 characters and no spaces'
      } else {
        return 'Please enter your password'
      }
    },
    validFeedback() {
      return this.state === true ? 'Thank you' : ''
    },
  },
  data() {
    return {
      form: {
        email: null,
        password: '',
      },
      show: true,
      vCode: null,
      loading: false,
      log: false,
    }
  },
  methods: {
    onSubmit() {
      this.loading = true
      if (this.vCode != null && this.vCode.length === 6) {
        const code = {
          vCode: this.vCode,
        }
        const codePromise = auth.checkValidateAuthyUserLogin(code)
        Promise.resolve(codePromise).then(async (response) => {
          if (response.data.message === true) {
            const user = {
              email: this.form.email,
              password: this.form.password,
            }
            const loginPromise = auth.authyLogin(user)
            await Promise.resolve(loginPromise)
            this.hideModal()
            this.loading = false
            await this.$router.push({ path: '/harmoney-dashboard' })
          } else if (response.data.message === false) {
            this.codeInValid()
            this.loading = false
          }
        })
      } else {
        this.codeInValid()
        this.loading = false
      }
    },
    hideModal() {
      this.$bvModal.hide('modal-center')
    },
    showValidationModal() {
      this.loading = true
      if (this.form.email != null && this.form.password != null) {
        const uCheck = {
          email: this.form.email,
        }
        const emailPromise = auth.checkForUserEmail(uCheck)
        Promise.resolve(emailPromise).then((response) => {
          if (response.data.message === false) {
            this.makeToastEmailInv()
            this.loading = false
          } else if (response.data.message === true) {
            this.makeToastEmailValid()
            this.$bvModal.show('modal-center')
            this.loading = false
          } else if (response.data.message === null) {
            this.seriousError()
            this.loading = false
          } else if (response.data.message === 'password') {
            this.passwordError()
            this.loading = false
          }
        })
      } else {
        this.makeToastForm()
        this.loading = false
      }
    },
    makeToastForm() {
      this.$bvToast.toast(
        "I'm so sorry, but would you mind filling your login details correctly. Thank you so much.",
        {
          title: 'Apologies!',
          variant: 'danger',
          solid: true,
          center: true,
        }
      )
    },
    makeToastEmailInv() {
      this.$bvToast.toast(
        "I'm so sorry, but the email you have provided is not on our database!",
        {
          title: 'Apologies!',
          variant: 'danger',
          solid: true,
          center: true,
        }
      )
    },
    passwordError() {
      this.$bvToast.toast(
        "I'm so sorry, but you have entered the wrong password!",
        {
          title: 'Apologies!',
          variant: 'danger',
          solid: true,
          center: true,
        }
      )
    },
    makeToastEmailValid() {
      this.$bvToast.toast('We have sent a verification code to your mobile.', {
        title: 'Hurray.',
        variant: 'info',
        solid: true,
        center: true,
      })
    },
    seriousError() {
      this.$bvToast.toast(
        'We have encountered a serious error! Try our services later.',
        {
          title: '!!Something went wrong!!',
          variant: 'danger',
          solid: true,
          center: true,
        }
      )
    },
    codeValid() {
      this.$bvToast.toast('The code you entered is valid.', {
        title: '2FA!',
        variant: 'success',
        solid: true,
        center: true,
      })
    },
    codeInValid() {
      this.$bvToast.toast('The code you entered is invalid!', {
        title: '2FA!',
        variant: 'warning',
        solid: true,
        center: true,
      })
    },
  },
}
</script>

<style>
.container-authyLogin {
  background: rgb(249, 190, 2);
  background: linear-gradient(
    90deg,
    rgba(249, 190, 2, 1) 0%,
    rgba(249, 190, 2, 1) 22%,
    rgb(250, 245, 228) 22%
  );
  padding-top: 4px;
  padding-bottom: 30%;
  height: 100%;
  position: relative;
  left: 0;
  right: 0;
}
.buttons-row-modal {
  margin-bottom: 20px;
}

.h1-login {
  text-align: center;
  color: rgb(255, 255, 221);
  font-family: 'Roboto', sans-serif;
  font-family: 'Open Sans', sans-serif;
  font-size: 2em;
  padding-bottom: 2em;
}

#vCode-input {
  width: 60%;
}

@media (max-width: 600px) {
  #vCode-input {
    width: 70%;
  }
}

.b-jumbotron-login {
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 90%;
  margin-top: 60px;
  max-width: 500px !important;
  background: rgb(252, 74, 26);
  background: linear-gradient(
    180deg,
    rgba(252, 74, 26, 1) 25%,
    rgba(254, 254, 254, 1) 25%,
    rgba(254, 254, 254, 1) 98%,
    rgba(252, 74, 26, 1) 98%
  );
}
</style>
