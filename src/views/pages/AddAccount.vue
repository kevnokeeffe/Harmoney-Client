<template>
  <div>
    <b-jumbotron
      class="b-jumbotron-add-account"
      lead="Add Financal Institution"
    >
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Your Password:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.password"
            required
            placeholder="Enter password"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Financial Instutition:"
          label-for="input-3"
        >
          <b-form-select
            id="input-3"
            v-model="form.fi"
            :options="fis"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-4">
          <b-form-checkbox v-model="form.checked" id="checkboxes-4" value="true"
            >Accept Terms & Conditions</b-form-checkbox
          >
          <div>
            <b-button v-b-modal.modal-scrollable>Terms & Conditions</b-button>
            <b-modal
              id="modal-scrollable"
              scrollable
              title="Terms & Conditions"
            >
              <p class="my-4">
                The purpose of a Terms and Conditions agreement is to prevent
                misunderstandings between the business owner (you), and the
                consumer. The agreement helps you: Protect your intellectual
                property Avoid website abuse Define the limits of your legal
                obligations to the consumer Essentially, the T&C helps you run
                your business more effectively and with greater peace of mind.
                This agreement forms the basis of an enforceable legal
                relationship. It tells anyone browsing your website, whether
                they are a casual visitor or an active client, what their legal
                responsibilities and rights are. It also gives you, as the
                business owner and service provider, authority over certain
                undesirable things that a consumer may do on your website.
                However, let's consider the specific reasons why business owners
                should always include a Terms and Conditions agreement on their
                website. You can decide which country's laws apply to govern the
                agreement. This is otherwise known as choosing the jurisdiction.
                You will generally choose the country where the website, or
                business, is based. You can remove or delete abusive accounts.
                For example, say you run a social media platform and explain
                that people who post inflammatory, abusive, or explicit content
                will be blocked from the service. Someone posts abusive content.
                You can block their account without worry, because you can rely
                on your Terms and Conditions agreement. You can limit your
                responsibility. You can include disclaimer clauses in your
                agreement that say you're not liable for third party content,
                and you don't endorse it. You can also say that you're not
                responsible for mistakes and typos, or content uploaded by users
                which other users may find offensive. You can manage a user's
                expectations of your website or platform. When the terms are
                clear, users know what they can and cannot expect from you. You
                can set your own site rules and the consequences for violating
                these rules, within legal limits. You can't contract out of
                certain rules such as the law of negligence. It's vital that you
                protect your intellectual property rights. By setting out what
                your rights are in the Terms and Conditions agreement, you can
                take action against users who infringe your rights. It should be
                clear that the logo, brand, and content belong to you. When you
                begin to draft a Terms and Conditions agreement, there are
                certain clauses you should make sure to include. Let's look at
                each of these clauses in turn and consider how they are drafted.
                Introduction Clauses It's very helpful to set out a clause (or
                clauses) at the very beginning of the agreement explaining what
                the agreement is, who it applies to, and when the terms are
                triggered. Here's how Instagram does this. It notes that the
                terms are triggered when a user creates an account on the
                platform or uses the app, and it clearly states that the terms
                constitute an agreement between Instagram and the user: It's
                important to clarify who the agreement applies to since it's
                legally binding. YouTube, for example, makes it clear that:
                Users must agree to the terms before using the service Anyone
                who uses their service is assumed to agree to the terms Some
                people are legally prohibited from entering into the agreement.
                This clause is placed close to the beginning of the agreement
                and is part of the introductory clauses. Who Can Use Your
                Platform Although it's illegal to discriminate against people
                based on protected characteristics such as their gender, sexual
                orientation, or ethnicity, it is perfectly reasonable to put
                certain restrictions on who can use your website or app.
                Instagram, for example, prohibits children under the age of 13
                from creating accounts. It also bans convicted sex offenders.
                Significantly, Instagram also bans users from returning to the
                site if their profile is deleted or blocked. The clause is
                simple but effective to include in its terms.
              </p>
            </b-modal>
          </div>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-jumbotron>
  </div>
</template>

<script>
import * as auth from '../../../services/FIAuthService'
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
        fi: null,
        checked: null
      },
      fis: [
        { text: 'Select One', value: null },
        'Bank of WIT',
        'Allied Irish Bank',
        'Credit Union',
        'Post Office'
      ],
      show: true
    }
  },
  methods: {
    onSubmit: async function(evt) {
      evt.preventDefault()
      const connect = {
        email: this.form.email,
        password: this.form.password
      }
      // Put all this in a method somewhere else later maybe
      if (this.form.checked === 'true') {
        if (this.form.fi === 'Bank of WIT') {
          const connectPromise = await auth.loginWIT(connect)
          await Promise.all([connectPromise]).then(res => {
              if (res[0] === false){
                this.showMsgBoxInvalid()
              }else{
                this.$router.push({ path: '/harmoney-dashboard' })
              }
          })
        } else if (this.form.fi === 'Allied Irish Bank') {
          const connectPromise = auth.loginAIB(connect)
          await Promise.all([connectPromise]).then(res => {
              if (res[0] === false){
                this.showMsgBoxInvalid()
              }else{
                this.$router.push({ path: '/harmoney-dashboard' })
              }
          })
        } else if (this.form.fi === 'Credit Union') {
          const connectPromise = auth.loginCU(connect)
          await Promise.all([connectPromise]).then(res => {
              if (res[0] === false){
                this.showMsgBoxInvalid()
              }else{
                this.$router.push({ path: '/harmoney-dashboard' })
              }
          })
        } else if (this.form.fi === 'Post Office') {
          const connectPromise = auth.loginPO(connect)
          await Promise.all([connectPromise]).then(res => {
              if (res[0] === false){
                this.showMsgBoxInvalid()
              }else{
                this.$router.push({ path: '/harmoney-dashboard' })
              }
          })
        }
      } else {
        this.showMsgBoxTwo()
      }
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.password = ''
      this.form.fi = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    // @click="showMsgBoxTwo"
    showMsgBoxTwo: function() {
      this.boxTwo = ''
      this.$bvModal
        .msgBoxOk('Please Accept the Terms & Conditions', {
          title: 'Submittion Error',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
        .then(value => {
          this.boxTwo = value
        })
        .catch(err => {
          console.log(err)
        })
    },
    showMsgBoxInvalid: function() {
      this.boxTwo = ''
      this.$bvModal
        .msgBoxOk('Your Details are Incorrect', {
          title: 'Submittion Error',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
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

<style>
.add-account {
  height: 100%;
  position: fixed;
  left: 0;
  right: 0;
  overflow: auto;
}

.b-jumbotron-add-account {
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 80%;
  margin-top: 60px;
  max-height: 70%;
  min-height: 40%;
  max-width: 400px;
  overflow: auto;
}

.form-select-options {
  max-width: 200px;
}
</style>
