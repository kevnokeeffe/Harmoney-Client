/* eslint-disable no-useless-escape */ /* eslint-disable no-useless-escape */
<template>
  <div class="container-signUp">
   

    <b-jumbotron class="b-jumbotron-signUp">
      <h1 class="h1-register"><i class="fas fa-user-plus"></i> Sign-Up</h1>
      <div>
        <b-form>
          <b-form-group
            id="input-group-fName"
            label="First Name"
            label-for="input-fName"
          >
            <b-form-input
              data-test="fName"
              v-b-popover.hover.top="'Enter first name.'"
              v-if="this.loadingScreen === false"
              id="input-fName"
              v-model="form.fName"
              required
              :state="fNameState"
              placeholder="Enter first name"
            ></b-form-input>

              <b-form-input
              v-if="this.loadingScreen === true"
              disabled
              placeholder="Enter first name"
            ></b-form-input>

          </b-form-group>

          <b-form-group
            id="input-group-lName"
            label="Last Name"
            label-for="input-lName"
          >
            <b-form-input
              v-b-popover.hover.top="'Enter last name.'"
              id="input-lName"
              :state="lNameState"
              v-model="form.lName"
              required
              placeholder="Enter last name"
              v-if="this.loadingScreen === false"
            ></b-form-input>
            <b-form-input
           disabled
           v-if="this.loadingScreen === true"
              placeholder="Enter last name"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="b-form-group-email"
            id="b-form-group-email"
            label="Email address:"
            label-for="email"
            description="We'll never share your email with anyone else."
            :invalid-feedback="invalidFeedback"
            :valid-feedback="validFeedback"
            :state="state"
          >
            <b-form-input
              class="form__input"
              name="email"
              id="email"
              type="email"
              required
              v-model.trim="form.email"
              placeholder="Enter email"
              :state="state"
              trim
              v-if="this.loadingScreen === false"
            ></b-form-input>
             <b-form-input
              class="form__input"
              name="email"
              type="email"
              required
              placeholder="Enter email"
              disabled
              v-if="this.loadingScreen === true"
            ></b-form-input>
          </b-form-group>

          <b-form-group
          id="vue-tel"
            label="Phone number:"
            description="We'll never share your phone number with anyone else."
          >
            <vue-tel-input
            id="vue-tel-input"
            data-test="phoneNo"
              v-b-popover.hover.top="'Enter phone number here.'"
              v-bind="bindProps"
              v-model="form.phone"
              v-if="this.loadingScreen === false"
            ></vue-tel-input>
             <vue-tel-input
             v-if="this.loadingScreen === true"
              v-b-popover.hover.top="'Enter mobile number here.'"
              disabled
            ></vue-tel-input>
            <b-form-text id="mobile-help-block">
              Your must enter a valid Mobile phone number.
            </b-form-text>
          </b-form-group>

          <!-- <country-select v-model="country" :country="country" topCountry="US" />
  <region-select v-model="region" :country="country" :region="region" /> -->

          <b-form-group
            id="input-group-password"
            label="Your Password:"
            label-for="input-password"
            :invalid-feedback="invalidFeedbackP"
            :valid-feedback="validFeedbackP"
            :state="stateP"
          >
            <b-form-input
              v-b-popover.hover.top="'Enter password here.'"
              type="password"
              id="text-password"
              aria-describedby="password-help-block"
              v-model="form.password"
              required
              :state="stateP"
              v-if="this.loadingScreen === false"
              placeholder="Enter password"
            ></b-form-input>
            <b-form-input
            v-if="this.loadingScreen === true"
              type="password"
              aria-describedby="password-help-block"
              disabled
              placeholder="Enter password"
            ></b-form-input>
            <b-form-text id="password-help-block">
              Your password must be 6-20 characters long, contain letters,
              special characters and numbers, but should not contain spaces.
            </b-form-text>
          </b-form-group>



          <b-form-group
            id="input-group-password-re"
            label="Retype password:"
            label-for="input-password"
          >
            <b-form-input
              v-b-popover.hover.top="'Re-enter password here.'"
              type="password"
              id="text-password-re"
              aria-describedby="password-help-block"
              v-model="form.passwordMatch"
              required
              :state="passwordState"
              v-if="this.loadingScreen === false"
              placeholder="Re-enter password"
            ></b-form-input>
            <b-form-input
            v-if="this.loadingScreen === true"
              type="password"
              aria-describedby="password-help-block"
              disabled
              placeholder="Re-enter password"
            ></b-form-input>
            <b-form-text id="password-help-block">
              This password must match the previous password.
            </b-form-text>
          </b-form-group>



          <b-form-group id="input-group-checkboxes">
            <b-button
              v-if="this.loadingScreen === true"
              class="t-and-c mt-2 mb-2"
              squared
              variant="warning"
              size="sm"
              disabled
              >Terms & Conditions</b-button
            >
            <b-button
            v-if="this.loadingScreen === false"
              v-b-popover.hover.top="'Read the terms and conditions.'"
              class="t-and-c mt-2 mb-2"
              squared
              variant="warning"
              size="sm"
              v-b-modal.modal-scrollable
              >Terms & Conditions</b-button
            >
            <b-form-checkbox
              v-b-popover.hover.top="
                'Click here to accept the terms and conditions.'
              "
              class="mt-2 mb-2"
              id="b-checkbox-tnc"
              v-model="form.checked"
              value="true"
              v-if="this.loadingScreen === false"
              >Accept T&C's</b-form-checkbox
            >
            <b-form-checkbox
              disabled
              class="mt-2 mb-2"
              value="true"
              v-if="this.loadingScreen === true"
              >Accept T&C's</b-form-checkbox
            >
          </b-form-group>

          <b-button
            v-b-popover.hover.left="'Continue the sign-up process.'"
            type="button"
            id="showContinueModal"
            class="no-class"
            @click="showContinueModal()"
            squared
            variant="info"
            v-if="this.loadingScreen === false  && this.form.checked !== false"
            >Continue</b-button
          >
          <b-button
            type="button"
            class="no-class"
            squared
            disabled
            variant="info"
            v-if="this.loadingScreen === false && this.form.checked === false"
            >Continue</b-button
          >
          <b-button class="no-class" v-b-popover.hover.top="'Its Loading...'" variant="primary" disabled squared v-if="this.loadingScreen === true">
          <b-spinner small type="grow"></b-spinner>
            Loading...
          </b-button>
  
          <b-modal
            id="modal-center"
            headerBgVariant="dark"
            headerTextVariant="light"
            centered
            hide-footer
          >
          
            <template v-slot:modal-header>
              <h5 id="h5-modal">Mobile Validation</h5>
            </template>
            
            <template>
              <b-row>
                <b-col cols="1"></b-col>
                <b-col cols="10">
                  <p id="p-modal">
                    Enter the code you recive on your mobile into the input
                    field below.
                  </p>
                </b-col>
                <b-col cols="1"></b-col>
              </b-row>
              <b-row>
                <b-col cols="1"></b-col>
                <b-col cols="10">
                  <b-form-input
                  id="input-modal-ver-code"
                    v-b-popover.hover.top="
                      'Please enter your 10 digit verification code here..'
                    "
                    v-model="vCode"
                    required
                    trim
                    placeholder="Enter validation code"
                  ></b-form-input>
                </b-col>
                <b-col cols="1"></b-col
              ></b-row>
                <b-button
                class="float-right ml-2  mt-4"
                squared
                
                type="submit"
                variant="primary"
                disabled
                v-if="this.loading === false && this.vCode === null"
              >Submit
              </b-button>
              <b-button
                class="float-right ml-2  mt-4"
                squared
                id="submit-code"
                type="submit"
                variant="primary"
                @click="onSubmit()"
                v-if="this.loading === false && this.vCode !=null"
              >Submit
              </b-button>
              <b-button class="float-right ml-2  mt-4" v-b-popover.hover.top="'Its Loading...'" variant="primary" disabled squared v-if="loading === true">
          <b-spinner small type="grow"></b-spinner>
            Loading...
          </b-button>
              <b-button
              id="cancel-modal"
                class="float-right mt-4"
                squared
                variant="danger"
                @click="hideModal()"
                v-if="this.loading ===false"
              >
                Cancel
              </b-button>
              <b-button
                class="float-right mt-4"
                squared
                variant="danger"
                disabled
v-if="this.loading ===true"
              >
                Cancel
              </b-button>
            </template>
          </b-modal>

       </b-form>
 
      </div>
    </b-jumbotron>
    <div>
      <b-modal id="modal-scrollable" scrollable title="Terms & Conditions">
        <p class="my-4">
          The purpose of a Terms and Conditions agreement is to prevent
          misunderstandings between the business owner (you), and the consumer.
          The agreement helps you: Protect your intellectual property Avoid
          website abuse Define the limits of your legal obligations to the
          consumer Essentially, the T&C helps you run your business more
          effectively and with greater peace of mind. This agreement forms the
          basis of an enforceable legal relationship. It tells anyone browsing
          your website, whether they are a casual visitor or an active client,
          what their legal responsibilities and rights are. It also gives you,
          as the business owner and service provider, authority over certain
          undesirable things that a consumer may do on your website. However,
          let's consider the specific reasons why business owners should always
          include a Terms and Conditions agreement on their website. You can
          decide which country's laws apply to govern the agreement. This is
          otherwise known as choosing the jurisdiction. You will generally
          choose the country where the website, or business, is based. You can
          remove or delete abusive accounts. For example, say you run a social
          media platform and explain that people who post inflammatory, abusive,
          or explicit content will be blocked from the service. Someone posts
          abusive content. You can block their account without worry, because
          you can rely on your Terms and Conditions agreement. You can limit
          your responsibility. You can include disclaimer clauses in your
          agreement that say you're not liable for third party content, and you
          don't endorse it. You can also say that you're not responsible for
          mistakes and typos, or content uploaded by users which other users may
          find offensive. You can manage a user's expectations of your website
          or platform. When the terms are clear, users know what they can and
          cannot expect from you. You can set your own site rules and the
          consequences for violating these rules, within legal limits. You can't
          contract out of certain rules such as the law of negligence. It's
          vital that you protect your intellectual property rights. By setting
          out what your rights are in the Terms and Conditions agreement, you
          can take action against users who infringe your rights. It should be
          clear that the logo, brand, and content belong to you. When you begin
          to draft a Terms and Conditions agreement, there are certain clauses
          you should make sure to include. Let's look at each of these clauses
          in turn and consider how they are drafted. Introduction Clauses It's
          very helpful to set out a clause (or clauses) at the very beginning of
          the agreement explaining what the agreement is, who it applies to, and
          when the terms are triggered. Here's how Instagram does this. It notes
          that the terms are triggered when a user creates an account on the
          platform or uses the app, and it clearly states that the terms
          constitute an agreement between Instagram and the user: It's important
          to clarify who the agreement applies to since it's legally binding.
          YouTube, for example, makes it clear that: Users must agree to the
          terms before using the service Anyone who uses their service is
          assumed to agree to the terms Some people are legally prohibited from
          entering into the agreement. This clause is placed close to the
          beginning of the agreement and is part of the introductory clauses.
          Who Can Use Your Platform Although it's illegal to discriminate
          against people based on protected characteristics such as their
          gender, sexual orientation, or ethnicity, it is perfectly reasonable
          to put certain restrictions on who can use your website or app.
          Instagram, for example, prohibits children under the age of 13 from
          creating accounts. It also bans convicted sex offenders.
          Significantly, Instagram also bans users from returning to the site if
          their profile is deleted or blocked. The clause is simple but
          effective to include in its terms.
        </p>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { VueTelInput } from 'vue-tel-input'
import * as auth from '../../../services/AuthService'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  computed: {
    fNameState() {
        return this.form.fName.length > 2 ? true : false
      },
      lNameState() {
        return this.form.lName.length > 2 ? true : false
      },
      passwordState(){
        return this.form.passwordMatch === this.form.password && this.form.passwordMatch != '' && this.form.passwordMatch.length > 5 ? true : false
      },
    stateP() {
      let str = this.form.password
      let space = str.search(' ')
      return this.form.password.length >= 6 && space === -1 ? true : false
    },
    invalidFeedbackP() {
      let str = this.form.password
      let space = str.search(' ')
      if (this.form.password.length > 6 && space !== -1) {
        return ''
      } else if (this.form.password.length > 0 && space !== -1) {
        return 'Enter at least 6 characters and no spaces'
      } else {
        return 'Please enter something'
      }
    },
    validFeedbackP() {
      return this.stateP === true ? '' : ''
    },
    state() {
      const paragraph = this.form.email
      // eslint-disable-next-line no-useless-escape
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const found = paragraph.match(regex)
      return found !== null ? true : false
    },
    invalidFeedback() {
      const paragraph = this.form.email
      // eslint-disable-next-line no-useless-escape
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const found = paragraph.match(regex)
      if (found === null) {
        return ''
      } else if (found === null) {
        return 'Please enter a valid email'
      } else {
        return 'Please enter a valid email'
      }
    },
    validFeedback() {
      return this.state === true ? '' : ''
    },
  },
  data() {
    return {
      components: {
        VueTelInput,
      },
      validations: {
        form: {
          email: {
            email,
            required,
            minLength: minLength(6),
          },
          password: {
            required,
            minlength: minLength(6),
          },
        },
      },
      bindProps: {
        mode: 'international',
        defaultCountry: 'IRL',
        disabledFetchingCountry: false,
        disabled: false,
        disabledFormatting: false,
        placeholder: 'Enter a mobile number',
        required: true,
        enabledCountryCode: false,
        enabledFlags: true,
        preferredCountries: ['US', 'UK'],
        onlyCountries: [],
        ignoredCountries: [],
        autocomplete: 'on',
        name: 'telephone',
        maxLen: 25,
        minLen:10,
        wrapperClasses: '',
        inputClasses: '',
        dropdownOptions: {
          disabledDialCode: false,
        },
        inputOptions: {
          showDialCode: false,
        },
      },
      modalProps: {},
      submitted: false,
      form: {
        fName: '',
        lName: '',
        phone: '',
        email: '',
        password: '',
        checked: false,
        verified: true,
        passwordMatch:'',
      },
      loading: false,
      vCode: null,
      show: true,
      loadingScreen:false,
    }
  },
  methods: {
    onSubmit: async function() {
      let valid = false
      this.loading = true
      this.loadingScreen = false
      if (this.vCode != null && this.vCode.length === 10) {
        const code = {
          vCode: this.vCode,
        }
        const codePromise = auth.checkValidateAuthyUser(code)
        await Promise.resolve(codePromise).then((response) => {
          if (response.data.message === true) {
            this.codeValid()
            valid = true
            this.loading = false
          } else if (response.data.message === false) {
            valid = false
            this.loading = false
            this.makeToastCode()
          }else{valid = false
            this.loading = false
            this.makeToastCode()}
        })
      }
      if (valid === true) {
        const user = {
          fName: this.form.fName,
          lName: this.form.lName,
          email: this.form.email.toLowerCase(),
          password: this.form.password,
          phone: this.form.phone,
          verified: this.form.verified,
        }
        const registerPromise = auth.registerAuthyUser(user)
        await Promise.resolve(registerPromise).then(async (response) => {
          if (response.data.message === true) {
            this.loading = false
            this.hideModal()
            const loginPromise = auth.authyLogin(user)
            await Promise.resolve(loginPromise)
            await this.$router.push({ path: '/harmoney-dashboard' })
          } else if (response.data.message === false) {
            this.makeToastEmailError()
            this.hideModal()
            this.loading = false
          }
        })
      } else {
        this.makeToastCode()
        this.loading = false
      }
    },
    hideModal() {
      this.$bvModal.hide('modal-center')
    },
    showContinueModal() {
      if(this.form.password === this.form.passwordMatch && this.form.password.length > 5){
      this.loadingScreen = true
      if (
        this.form.email.length>5 &&
        this.form.fName.length>2 &&
        this.form.lName.length>2
      ) {
        if (this.form.checked === 'true') {
          this.verifyPing()
          //this.loadingScreen = false
        } else {
          this.showMsgBoxTNC()
          this.loadingScreen = false
          this.form.checked = false
        }
      } else {
        this.makeToastForm()
        this.loadingScreen = false
        this.form.checked = false
      }
    }else {
      this.makeToastPasswordMatch()
      this.loadingScreen = false
        this.form.checked = false
    }
    },
    makeToastPasswordMatch() {
      this.$bvToast.toast(
        "I'm so sorry but passwords don't match.",
        {
          title: 'Apologies!',
          variant: 'danger',
          solid: true,
          center: true,
        }
      )
    },
    makeToastForm() {
      this.$bvToast.toast(
        "I'm so sorry but would you mind filling in the form correctly, thank you so much.",
        {
          title: 'Apologies!',
          variant: 'danger',
          solid: true,
          center: true,
        }
      )
    },
    makeToastEmailError() {
      this.$bvToast.toast(
        "I'm so sorry but it seems that that email is already in use.",
        {
          title: 'Apologies!',
          variant: 'danger',
          solid: true,
          center: true,
        }
      )
    },
    makeToastCode() {
      this.$bvToast.toast(
        'Can you make sure you filled in the validation code correctly.',
        {
          title: 'Apologies!',
          variant: 'warning',
          solid: true,
          center: true,
        }
      )
    },
    makeToastSuccess() {
      this.$bvToast.toast('You have now signed up successfully.', {
        title: 'Congratulations!',
        variant: 'success',
        solid: true,
        center: true,
      })
    },
    codeValid() {
      this.$bvToast.toast('Verification code valid.', {
        title: '2FA!',
        variant: 'info',
        solid: true,
        center: true,
      })
    },
    makeSuccessCode() {
      this.$bvToast.toast('Verification code sent.', {
        title: '2FA!',
        variant: 'info',
        solid: true,
        center: true,
      })
    },
    makeToastMessageError() {
      this.$bvToast.toast(
        'Sorry but your email is already exists on the database!',
        {
          title: '2FA!',
          variant: 'danger',
          solid: true,
          center: true,
        }
      )
    },
    verifyPing() {
      this.loadingScreen = true
      if (this.form.phone != '' && this.form.phone.length >= 10) {
        const verify = {
          phone: this.form.phone,
          email: this.form.email.toLowerCase(),
        }
        const verifyAuth = {
          phone: this.form.phone,
        }
        const verifyEmail = auth.checkSignUpEmail(verify)
        Promise.resolve(verifyEmail).then(async (resp1) => {
          if (resp1.data.message === true) {
            const verifyPromise = await auth.validateAuthyUser(verifyAuth)
            await Promise.resolve(verifyPromise).then((response) => {
              if (response.data.message === true) {
                this.makeSuccessCode()
                this.$bvModal.show('modal-center')
                this.loadingScreen = false
              } else if (response.data.message == false) {
                this.makeToastMessageError()
                this.loadingScreen = false

                this.$bvModal.hide('modal-center')
              }else if (response.data.auth === false){
this.invalidPhoneNumber()
this.loadingScreen = false
this.$bvModal.hide('modal-center')
          }
              else{this.loadingScreen = false}
            })
          } else if (resp1.data.message === false) {
            this.makeToastMessageError()
            this.loadingScreen = false

            this.$bvModal.hide('modal-center')
          }
        })
      } else {
        this.makeToastForm()
        this.loadingScreen = false

        this.$bvModal.hide('modal-center')
      }
    },
    invalidPhoneNumber() {
      this.$bvToast.toast('Sorry you must enter a valid MOBILE phone number.', {
        title: '2FA!',
        variant: 'danger',
        solid: true,
        center: true,
      })
    },
    showMsgBoxTNC: function() {
      this.boxTwo = ''
      this.$bvModal
        .msgBoxOk(
          'We need you to accept the terms and conditions before we can continue the sign-up process.',
          {
            title: ' Terms & Conditions',
            size: 'sm',
            buttonSize: 'sm',
            okVariant: 'success',
            headerClass: 'p-2 border-bottom-0',
            footerClass: 'p-2 border-top-0',
            centered: true,
          }
        )
        .then((value) => {
          this.boxTwo = value
        })
        .catch((err) => {
          return err
        })
    },
  },
}
</script>

<style>
.overlay-signUp {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}

.container-signUp {
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
  left: 0;
  right: 0;
}
@media (min-width: 575px) {.b-jumbotron-signUp {background: rgb(108, 100, 139);
  background: linear-gradient(
    180deg,
    rgba(108, 100, 139, 1) 13%,
    rgba(254, 254, 254, 1) 13%,
    rgba(254, 254, 254, 1) 98%,
    rgba(108, 100, 139, 1) 98%
  );}}
@media (max-width: 575px) {.b-jumbotron-signUp {background: rgb(108, 100, 139);
  background: linear-gradient(
    180deg,
    rgba(108, 100, 139, 1) 10%,
    rgba(254, 254, 254, 1) 10%,
    rgba(254, 254, 254, 1) 98%,
    rgba(108, 100, 139, 1) 98%
  );}}
.b-jumbotron-signUp {
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 90%;
  margin-top: 60px;
  max-width: 500px !important;
  
}

.h1-register {
  text-align: center;
  color: ivory;
  font-family: 'Roboto', sans-serif;
  font-family: 'Open Sans', sans-serif;
  font-size: 2em;
  margin-bottom: 50px;
}
</style>
