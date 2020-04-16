<template>
  <div class="user-profile">
    <div class="overlay">
    <b-jumbotron class="profile-jumbo">
<div>
  <b-container class="b-container-profile">
 <b-row class="ml-2 mb-2">
  <h4 class="float-left"><i class="fas fa-user-secret"></i> {{this.fName}}'s Info</h4>
  </b-row>
   <b-row class="ml-2">
      <h6>Name: {{this.fName}} {{this.lName}}</h6>
   </b-row>
   <b-row class="ml-2">
      <h6>E-mail: {{this.email}}</h6>
   </b-row>
   <b-row class="ml-2 mt-4">
     <b-button v-b-modal.modal-sm squared>
       Delete Account
     </b-button>
   </b-row>
   </b-container>
</div>
    </b-jumbotron>
    <b-modal hide-footer squared id="modal-sm" size="sm" centered title="Delete Account">
      <b-row class="ml-2 mr-2">Are you sure about this? There is no going back!</b-row>
      <b-row class="ml-2 mt-2"> <b-form-checkbox
              class="mt-2 mb-2"
              v-model="checked"
              value="true"
              >Confirm Deletion</b-form-checkbox
            ></b-row>
      <b-row class="mt-4"><b-col cols="6"><b-button @click="cancelModels()" squared variant="info">Cancel</b-button></b-col>
      <b-col cols="6">
        <b-button v-if="this.loading === true" variant="danger" disabled>
    <b-spinner small type="grow"></b-spinner>
    Deleting...
  </b-button>
        <b-button v-if="this.loading === false" @click="deleteAccount()" class="float-right" squared variant="danger">Delete</b-button>
        </b-col></b-row></b-modal>
    </div>
    <vue-particles
        class="vue-particles-UP"
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
  </div>
</template>

<script>
import * as auth from '../../../services/AuthService'
export default {
  data() {
    return {
      loading:false,
      id: auth.getUserId(),
      fName: auth.getName(),
      lName: auth.getLastName(),
      email: auth.getEmail(),
      checked:null
    }
  },
  methods:{
    deleteAccount(){
      this.loading = true
      if(this.checked!=null){
        const deletePromise = auth.deleteAuthyUser(this.id)
        const deleteFiDetails = auth.deleteFiInfo(this.id)
        Promise.all([deletePromise,deleteFiDetails]).then(response => {
               if (response[0].data.message === true && response[1].data.message) {
                 this.$router.push({ path: '/' })
                 this.loading=false
                 this.checked=null
                 this.$bvModal.hide('modal-sm')
                auth.logout()
               }
              else{
                this.error()
                this.loading=false
              }
              })
      }
      else if (this.checked === null){
      this.confirmToast()
      this.loading=false
      }
    },
    cancelModels() {
      this.$bvModal.hide('modal-sm')
      this.checked = null
    },
    confirmToast() {
      this.$bvToast.toast('Must check confirmation box!', {
        title: 'Apologies!',
        variant: 'warning',
        solid: true,
        center: true
      })
    },
    error() {
      this.$bvToast.toast('There has been a network error, please try again later.', {
        title: 'Apologies!',
        variant: 'warning',
        solid: true,
        center: true
      })
    },
    success() {
      this.$bvToast.toast('Your account has been deleted, sad to see you leave.', {
        title: 'Success',
        variant: 'success',
        solid: true,
        center: true
      })
    },
  }
}
</script>

<style>
.overlay{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}
.user-profile{
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  margin-bottom: 60px;
  background: rgb(34,193,195);
background: linear-gradient(299deg, rgba(34,193,195,1) 11%, rgba(255,255,255,1) 11%, rgba(255,255,255,1) 64%, rgba(186,220,94,1) 64%, rgba(195,222,88,1) 78%, rgba(255,233,48,1) 78%);
}

.vue-particles-UP{
  height: 100%;
  position: fixed;
  left: 0;
  right: 0;
} 
.profile-jumbo{
  width:80%;
  height:70%;
  max-width: 400px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  margin:auto;
  margin-top:60px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
     background: rgb(222,88,88);
background: linear-gradient(90deg, rgba(222,88,88,1) 4%, rgba(255,255,255,1) 4%, rgba(255,255,255,1) 78%, rgba(255,169,48,1) 78%); 

}
</style>