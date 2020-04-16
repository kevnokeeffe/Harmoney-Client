<template>
  <div class="remove-account">
    <div class="overlay-remove">
    <b-jumbotron class="remove-jumbo">
      <h3>Remove Account</h3>
      <b-container class="cont-rem">
        <b-row>
    <b-form-group
          id="input-group-remove"
          label="Financial Instutition:"
          label-for="input-3"
        >
        <b-row>
          <b-form-select
            id="input-remove"
            v-model="form.fi"
            :options="fis"
            required
          ></b-form-select>
          </b-row>
          <b-row>
            <b-form-checkbox class="check-remove" v-model="form.checked" switch size="lg">Accept</b-form-checkbox>
          </b-row>
          <b-row>
          <b-button class="bt-remove" variant="danger" squared @click="removeContinue()">Remove</b-button>
          </b-row>
        </b-form-group>
        </b-row>
        </b-container>
        </b-jumbotron>
        </div>
        <vue-particles
        class="vue-particles-remove"
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
      <b-modal size="md" hide-footer centered id="modal-remove" title="Delete">
        <b-container>
          <b-row>
    <p class="my-4 ml-3 mr-2"> Are you sure you wish to delete this account!</p>
    </b-row>
    <b-row>
      <b-col cols="6">
      <b-button  @click="cancel()" class="float-left mt-2 mb-2" squared variant="info"><i class="fas fa-times-circle"></i> No</b-button>
      </b-col>
      <b-col class="float-right" cols="6">
       <b-button @click="deleteAccount()" v-if="this.loading === false" class="float-right mt-2 mb-2" squared variant="danger">Delete</b-button>
       <b-button class="float-right mt-2 mb-2" v-if="this.loading === true" squared variant="danger" disabled>
      <b-spinner small type="grow"></b-spinner>
        Loading....
      </b-button>
  </b-col>
  </b-row>
    </b-container>
  </b-modal>
  </div>
  
</template>

<script>
// import * as services from '../../../services/AccountService.js'
import * as auth from '../../../services/AuthService'
export default {
    
    data() {
    return {
      show:false,
      loading:false,
      form: {
        email: '',
        password: '',
        fi: null,
        checked: false,
        valid:false,
        userId:auth.getUserId()
      },
      fis: [
        { text: 'Please select one', value: null,disabled: true },
        'Bank of WIT',
        'AIB',
        'Credit Union',
        'Post Office'
      ],
    }
  },
methods: {
    removeContinue(){
      this.loading = false
      if(this.form.checked === true && this.form.fi != null){
      this.$bvModal.show('modal-remove')}
      else if (this.form.fi === null){
        this.mustChoose()
      }      
      else if(this.form.checked === false){
      this.mustAccept()
      }
    },
    cancel(){
      this.$bvModal.hide('modal-remove')
      this.loading = false
      this.form.checked = false
      this.form.fi = null
    },
    deleteAccount(){
    this.show = true
    this.loading = true
    let id = this.form.userId
    let fiName = this.form.fi
    let data = [fiName , id]
    const deletePromise = auth.deleteFiIndividual(data)
    Promise.resolve(deletePromise).then(res => {
      if (res.data.message === "no matching account"){
        this.noMatchingAccount()
        this.loading = false
        this.$bvModal.hide('modal-remove')
        this.form.checked = false
      this.form.fi = null
      }
      if(res.data.message === true){
this.successFullDelete()
this.loading = false
this.form.checked = false
      this.form.fi = null
this.$bvModal.hide('modal-remove')
      }
    })
    },
    successFullDelete() {
      this.$bvToast.toast(
        'You have deleted the accounts successfully.',
        {
          title: 'Congratulations!',
          variant: 'success',
          solid: true,
          center: true
        }
      )
    },
    noMatchingAccount() {
      this.$bvToast.toast(
        'You have no matching account! Delete account from an existing financial instution.',
        {
          title: 'Apologies!',
          variant: 'danger',
          solid: true,
          center: true
        }
      )
    },
    mustAccept() {
      this.$bvToast.toast(
        'Please switch accept!',
        {
          title: 'Apologies!',
          variant: 'danger',
          solid: true,
          center: true
        }
      )
    },
    mustChoose(){
      this.$bvToast.toast(
        'Please select financial institution to remove!',
        {
          title: 'Apologies!',
          variant: 'warning',
          solid: true,
          center: true
        }
      )
    }
}
}
</script>

<style>
.check-remove{
   display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
}
.bt-remove{
   margin-top: 30px;
    display: block;
    margin-left: auto;
    margin-right: auto
}
.cont-rem{
  display: block;
    margin-left: auto;
    margin-right: auto
}
#input-group-remove{
  margin-top: 70px;
    display: block;
    margin-left: auto;
    margin-right: auto
}
#input-remove{
  width: 200px;
    display: block;
    margin-left: auto;
    margin-right: auto
}
.add-account {
  height: 100%;
  position: fixed;
  left: 0;
  right: 0;
  overflow: auto;
}
  .vue-particles-remove{
  height: 100%;
  position: fixed;
  left: 0;
  right: 0;
} 
.overlay-remove{
  position: absolute;
  top: 2;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}

.remove-account{
  height: 100%;
  min-height: 650px;
  position: absolute;
  left: 0;
  right: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
    background: rgb(133,163,146);
background: radial-gradient(circle, rgba(133,163,146,1) 4%, rgba(255,255,255,1) 4%, rgba(255,255,255,1) 78%, rgba(247,130,89,1) 78%);   
}

#input-group-1{
  margin-top:60px;
  overflow: auto;
}
@media (min-width: 870px){
.remove-jumbo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 80%;
  margin-top: 60px;
  max-height: 100%;
  min-height: 500px;
  max-width: 400px;
  overflow: auto;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      background: rgb(133,163,146);
background: linear-gradient(0deg, rgba(133,163,146,1) 4%, rgba(255,255,255,1) 4%, rgba(255,255,255,1) 74%, rgba(254,183,43,1) 74%);    
} 
        }
@media (max-width: 870px){
.remove-jumbo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 80%;
  margin-top: 60px;
  max-height: 100%;
  min-height: 400px;
  max-width: 400px;
  overflow: auto;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  
        background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 65%, rgba(255,255,255,1) 78%, rgba(254,169,104,1) 78%, rgba(254,169,104,1) 93%); }
}
.form-select-options {
  max-width: 200px;
}
</style>