<template>
  <div>
    <b-jumbotron
      header="Sign-Up"
      lead="Welcome to your Harmon€y register page."
    >
      <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group
            id="input-group-fName"
            label="First Name"
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
            label="Last Name"
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
            label="Phone number:"
            description="We'll never share your phone number with anyone else."
          >
            <vue-tel-input
              v-bind="bindProps"
              v-model="form.phone"
            ></vue-tel-input>
          </b-form-group>

          <!-- <country-select v-model="country" :country="country" topCountry="US" />
  <region-select v-model="region" :country="country" :region="region" /> -->

          <b-form-group
            id="input-group-password"
            label="Your Password:"
            label-for="input-password"
          >
            <b-form-input
              type="password"
              id="text-password"
              aria-describedby="password-help-block"
              v-model="form.password"
              required
              placeholder="Enter password"
            ></b-form-input>
            <b-form-text id="password-help-block">
              Your password must be 6-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </b-form-text>
          </b-form-group>

          <b-form-group id="input-group-checkboxes">
            <b-button
              class="mt-2 mb-2"
              squared
              variant="warning"
              size="sm"
              v-b-modal.modal-scrollable
              >Terms & Conditions</b-button
            >
            <b-form-checkbox
              class="mt-2 mb-2"
              v-model="form.checked"
              value="true"
              >Accept T&C's</b-form-checkbox
            >
          </b-form-group>

          <b-button
            type="button"
            class="mr-2"
            @click="showContinueModal()"
            squared
            variant="info"
            >Continue</b-button
          >

          <b-modal id="modal-center" centered hide-footer>
            <template v-slot:modal-header>
              <!-- Emulate built in modal header close button action -->
              <h5>Mobile Validation</h5>
            </template>

            <template>
              <p>
                Please select the "Send Verification Button" we will send a code
                to your mobile phone. Then enter the code you recive in the
                input field below.
              </p>
              <b-form-input
                id="vCode-input"
                v-model="vCode"
                required
                placeholder="Enter validation code"
              ></b-form-input>
              <b-button
                class="mt-4 mr-4"
                squared
                variant="warning"
                @click="verifyPing()"
                >Send Verification Code</b-button
              >

              <b-button
                class="mt-4 ml-4 mr-2"
                squared
                variant="danger"
                @click="hideModal()"
              >
                Cancel
              </b-button>
              <!-- Emulate built in modal footer ok and cancel button actions -->
              <b-button
                class="mt-4 mr-2"
                squared
                type="submit"
                variant="primary"
                @click="onSubmit()"
              >
                Submit
              </b-button>
            </template>
          </b-modal>

          <!-- <b-button type="submit" squared variant="success">Submit</b-button> -->
          <b-button type="reset" squared variant="danger">Reset</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
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
export default {
  data() {
    return {
      components: {
        VueTelInput
      },
      bindProps: {
        mode: 'international',
        defaultCountry: 'IRL',
        disabledFetchingCountry: false,
        disabled: false,
        disabledFormatting: false,
        placeholder: 'Enter a phone number',
        required: true,
        enabledCountryCode: false,
        enabledFlags: true,
        preferredCountries: ['US', 'UK'],
        onlyCountries: [],
        ignoredCountries: [],
        autocomplete: 'on',
        name: 'telephone',
        maxLen: 25,
        wrapperClasses: '',
        inputClasses: '',
        dropdownOptions: {
          disabledDialCode: false
        },
        inputOptions: {
          showDialCode: false
        }
      },
      modalProps: {},
      form: {
        fName: '',
        lName: '',
        phone: '',
        email: '',
        password: '',
        checked: null
      },
      vCode: null,
      show: true
    }
  },
  methods: {
    onSubmit: async function() {
      let valid = false
      if (this.vCode != null && this.vCode.length === 10) {
        const code = {
          vCode: this.vCode
        }
        const codePromise = auth.checkValidateAuthyUser(code)
        await Promise.resolve(codePromise).then(response => {
          if (response.data.message === true) {
            this.codeValid()
            valid = true
            //return
          } else if (response.data.message === false) {
            valid = false
          }
        })
      }
      if (valid === true) {
        const user = {
          fName: this.form.fName,
          lName: this.form.lName,
          email: this.form.email,
          password: this.form.password,
          phone: this.form.phone
        }
        const registerPromise = auth.registerAuthyUser(user)
        await Promise.resolve(registerPromise).then(async response => {
          console.log(response)
          if (response.data.message === true) {
            this.makeToastSuccess()
            this.hideModal()
            const loginPromise = auth.authyLogin(user)
            await Promise.resolve(loginPromise)
            await this.$router.push({ path: '/dashboard' })
          } else if (response.data.message === false) {
            this.makeToastEmailError()
            this.hideModal()
          }
        })
      } else {
        this.makeToastCode()
      }
    },
    hideModal() {
      this.$bvModal.hide('modal-center')
    },
    showContinueModal() {
      if (this.form.checked === 'true') {
        this.$bvModal.show('modal-center')
      } else {
        this.showMsgBoxTNC()
      }
    },
    onReset() {
      // Reset our form values
      this.form.email = 'kevokeeffe@gmail.com'
      this.form.fName = 'Kevin'
      this.form.lName = "O'Keeffe"
      this.form.password = '123456'
      this.form.phone = '+353 85 206 9520'
      this.form.checked = 'true'
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    makeToastForm() {
      this.$bvToast.toast(
        "I'm so sorry but would you mind filling in the form correctly, thank you so much.",
        {
          title: 'Apologies!',
          variant: 'danger',
          solid: true,
          center: true
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
          center: true
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
          center: true
        }
      )
    },
    makeToastSuccess() {
      this.$bvToast.toast('You have now signed up successfully.', {
        title: 'Congratulations!',
        variant: 'success',
        solid: true,
        center: true
      })
    },
    codeValid() {
      this.$bvToast.toast('Verification code valid.', {
        title: '2FA!',
        variant: 'info',
        solid: true,
        center: true
      })
    },
    makeSuccessCode() {
      this.$bvToast.toast('Verification code sent.', {
        title: '2FA!',
        variant: 'info',
        solid: true,
        center: true
      })
    },
    verifyPing() {
      if (this.form.phone != '' && this.form.phone.length >= 10) {
        const verify = {
          phone: this.form.phone
        }
        const verifyPromise = auth.validateAuthyUser(verify)
        Promise.resolve(verifyPromise).then(async response => {
          if (response.data.message === true) {
            this.makeSuccessCode()
          }
        })
      } else {
        this.makeToastForm()
      }
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
            centered: true
          }
        )
        .then(value => {
          this.boxTwo = value
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
