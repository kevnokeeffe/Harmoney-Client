<template>
<div class="top-one-add">
  <div class="overlay-add">
    <b-overlay id="overlay-loading" :show="show" rounded="sm">
    <b-jumbotron
      class="b-jumbotron-add-account"
      :aria-hidden="show ? 'true' : null"
    >
    <h3 id="h3-title"><i class="fas fa-university"></i> Link Financial Institution</h3>
    <b-button style=" box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);" size="md" id="info-btn" squared variant="info" @click="instructions()"><b-icon-info></b-icon-info>Instructions</b-button>
      <b-form @submit="onSubmit">

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
            v-if="this.loading === false"
          ></b-form-select>
          <b-form-select
            id="input-3"
            :options="fis"
            disabled
            v-if="this.loading ===true"
          ></b-form-select>
        </b-form-group>

        <b-form-group 
          
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We do not store any of your account information."
          :invalid-feedback="invalidFeedback"
            :valid-feedback="validFeedback"
            :state="state"
        >
          <b-form-input
          :state="state"
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
            v-if="this.loading === false"
          ></b-form-input>
          <b-form-input
      
            id="input-1"
            v-if="this.loading === true"
            type="email"
            disabled
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Your Password:"
          label-for="input-2"
          :invalid-feedback="invalidFeedbackP"
            :valid-feedback="validFeedbackP"
            :state="stateP"
          
        >
          <b-form-input
          :state="stateP"
            id="input-2"
            v-model="form.password"
            required
            type="password"
            placeholder="Enter password"
             v-if="this.loading === false"
          ></b-form-input>
          <b-form-input
      
            id="input-2"
          v-if="this.loading === true"
          disabled
            type="password"
            placeholder="Enter password"
          ></b-form-input>
        </b-form-group>

        

        <b-form-group id="input-group-4">
          <b-button style=" box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);" v-if="this.loading === false" class="mt-4" squared variant="warning" v-b-modal.modal-scrollable>Terms & Conditions</b-button>
          <b-button style=" box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);" v-if="this.loading === true" disabled class="mt-4" squared variant="warning" v-b-modal.modal-scrollable>Terms & Conditions</b-button>
          <b-form-checkbox v-if="this.loading ===false" class="mt-2 mb-4" v-model="form.checked" id="checkboxes-4" value="true"
            >Accept Terms & Conditions</b-form-checkbox
          >
          <b-form-checkbox v-if="this.loading ===true" class="mt-2 mb-4" disabled id="checkboxes-4" value="true"
            >Accept Terms & Conditions</b-form-checkbox
          >
          <div>
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
        <b-button style=" box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);" class="mr-2" squared variant="info" disabled v-if="this.loading === true">
        <b-spinner small type="grow"></b-spinner>
          Loading...
        </b-button>
        <b-button style=" box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);" disabled v-if="this.state === false && this.stateP === false && this.loading === false" squared type="submit" variant="info">Submit</b-button>
        <b-button style=" box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);" v-if="this.state === true && this.stateP === true && this.loading === false" squared type="submit" id="submit-details-add-acc" variant="info">Submit</b-button>
      </b-form>
    </b-jumbotron>
    <template v-slot:overlay>
        <div class="text-center">
          <b-icon icon="stopwatch" font-scale="3" animation="cylon"></b-icon>
          <p id="cancel-label">Please wait...</p>
          <b-button
            ref="cancel"
            variant="outline-danger"
            size="sm"
            squared
            aria-describedby="cancel-label"
            @click="show = false"
          >
            Cancel
          </b-button>
        </div>
      </template>
    
    </b-overlay>
  </div>
  <vue-particles
        class="vue-particles-add"
        color="#839c99"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#3b988e"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push">
      </vue-particles>
      <b-modal id="modal-instructions" title="Instructions" ok-only>
    <b-container>
      <b-row><b-col><p>Welcome to the link FI account instructions modal. To link your account follow the instructions below.</p></b-col></b-row>
      <b-row><b-col><p>1) Select the Financial Institution your account is with.</p></b-col></b-row>
      <b-row><b-col><p>2) You must now enter the login details given to you by your Financial Institution.
        For this demo it is an email and password. <b-button id="show-details-btn" style=" box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);" @click="detailsOnOff()" squared size="sm">Show details</b-button></p></b-col></b-row>
        <b-container class="mb-2" style="box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2); background-color:#dae1e7; padding:10px; margin-top:2px;" v-if="this.details===true">
        <b-row v-if="this.details===true"><b-col><p>NB. The details are the same for each financial institution.</p></b-col></b-row>
        <b-row v-if="this.details===true"><b-col><p>email: <strong>kevokeeffe@gmail.com</strong></p></b-col></b-row>
        <b-row v-if="this.details===true"><b-col><p>password: <strong>123456</strong></p></b-col></b-row>
        </b-container>
        <b-row><b-col><p>3) Accept the terms & conditions.</p></b-col></b-row>
        <b-row><b-col><p>4) Now link your account by selecting the Submit button.</p></b-col></b-row>
    </b-container>
  </b-modal>
      </div>
      
</template>

<script>
import * as auth from '../../../services/FIAuthService'
export default {
  computed: {
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
      details:false,
      loading:false,
      show:false,
      form: {
        email: '',
        password: '',
        fi: null,
        checked: null,
        valid:false,
      },
      fis: [
        { text: 'Please select one', value: null,disabled: true },
        'Bank of WIT',
        'Allied Irish Bank',
        'Credit Union',
        'Post Office'
      ],
    }
  },
  methods: {
    detailsOnOff(){
      if(this.details === false){
        this.details=true
      }else if (this.details === true){
        this.details=false
      }
    },
    onSubmit: async function(evt) {
      this.show = true
      this.loading = true
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
                this.loading = false
                this.show = false
              }else{
                setTimeout(()=>{
                this.successFullAdd()
                },1000);
                this.$router.push({ path: '/harmoney-dashboard' })
                this.loading = false
                this.show = false
              }
          })
        } else if (this.form.fi === 'Allied Irish Bank') {
          const connectPromise = auth.loginAIB(connect)
          await Promise.all([connectPromise]).then(res => {
              if (res[0] === false){
                this.showMsgBoxInvalid()
                this.loading = false
                this.show = false
              }else{
                setTimeout(()=>{
                this.successFullAdd()
                },1000);
                this.$router.push({ path: '/harmoney-dashboard' })
                this.loading = false
                this.show = false
              }
          })
        } else if (this.form.fi === 'Credit Union') {
          const connectPromise = auth.loginCU(connect)
          await Promise.all([connectPromise]).then(res => {
              if (res[0] === false){
                this.showMsgBoxInvalid()
                this.loading = false
                this.show = false
              }else{
                setTimeout(()=>{
                this.successFullAdd()
                },1000);
                this.$router.push({ path: '/harmoney-dashboard' })
                this.loading = false
                this.show = false
              }
          })
        } else if (this.form.fi === 'Post Office') {
          const connectPromise = auth.loginPO(connect)
          await Promise.all([connectPromise]).then(async res => {
              if (res[0] === false){
                this.showMsgBoxInvalid()
                this.loading = false
                this.show = false
              }else{
                setTimeout(()=>{
                this.successFullAdd()
                },1000);
                this.$router.push({ path: '/harmoney-dashboard' })
                this.loading = false
                this.show = false
              }
          })
        }
      } else {
        this.showMsgBoxTwo()
        this.loading = false
        this.show = false
      }
    },
    instructions(){this.$bvModal.show('modal-instructions')},
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
          return err
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
          return err
        })
    },
    successFullAdd() {
      this.$bvToast.toast(
        `You have successfully linked your ${this.form.fi} account.`,
        {
          title: 'Congratulations!',
          variant: 'success',
          solid: true,
          center: true
        }
      )
    },
  }
}
</script>

<style>

#overlay-loading{
  min-height: 800px;
}



#input-group-1{
  overflow: auto;
}

#input-group-3{
  margin-top:20px;
}

@media (min-width:870px) {
  .vue-particles-add{
display: none;

  }

  #info-btn{
 margin-top: 60px;
}
}


@media (max-width: 870px) {
  #info-btn{
 margin-top: 40px;
}
.add-account {
  height: 100%;
  position: fixed;
  left: 0;
  right: 0;
  overflow: auto;
  background:#eff3c6
}
#h3-title{font-size: 22px;}
.top-one-add{
  height: 860px;
  min-height: 650px;
  position: absolute;
  left: 0;
  right: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
    background: rgb(246,75,60);
background: linear-gradient(73deg, rgba(246,75,60,1) 15%, rgba(255,255,255,1) 15%, rgba(255,255,255,1) 85%, rgba(222,255,139,1) 85%);  
}


.overlay-add{
  position: absolute;
  top: 2;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
 
}

.vue-particles-add{
  height: 100%;
  position: fixed;
  left: 0;
  right: 0;
        }

  .b-jumbotron-add-account {
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 80%;
  margin-bottom: 40px;
  margin-top: 60px;
  max-height: 100%;
  min-height: 650px;
  max-width: 400px;
  padding-bottom: 20px;
  overflow: auto;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  
        background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 65%, rgba(255,255,255,1) 87.5%, rgba(254,169,104,1) 87.5%, rgba(254,169,104,1) 93%); }
}

@media (min-width: 870px){
.b-jumbotron-add-account {
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 80%;
  margin-bottom: 40px;
  margin-top: 60px;
  max-height: 100%;
  min-height: 700px;
  max-width: 400px;
  padding-bottom: 20px;
  overflow: auto;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  
        background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 65%, rgba(255,255,255,1) 80%, rgba(254,169,104,1) 80%, rgba(254,169,104,1) 93%); }

.top-one-add{
  height: 860px;
  min-height: 650px;
  position: absolute;
  left: 0;
  right: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
    background: rgb(246,75,60);
background: linear-gradient(73deg, rgba(246,75,60,1) 15%, rgba(255,255,255,1) 15%, rgba(255,255,255,1) 85%, rgba(222,255,139,1) 85%);  
}
}
.form-select-options {
  max-width: 200px;
}
</style>
