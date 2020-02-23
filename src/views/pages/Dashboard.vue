<template>
  <div class="d-flex flex-column dashboard">
    <div class="mb-4">
      <h1>This is the Dash Board</h1>
      <router-link to="/add-account" class="btn btn-success ml-2">
        Add Account</router-link
      >
      <b-button
        v-on:click.prevent="onGetCurrent()"
        class="btn btn-success ml-2 mt-2"
      >
        Get Current</b-button
      >
      <b-button v-on:click.prevent="logout()" class="btn btn-success ml-2 mt-2">
        Logout</b-button
      >
    </div>
    <div class="accounts mb-2 mt-2" v-if="currentAccount && currentAccount.length > 0">
      <div class="nb-2 mt-2" v-for="currentAccount in currentAccount" :key="currentAccount.currentAccount">

        <b-card class="b-card-account" header-tag="header" footer-tag="footer">
          <template v-slot:header>
              <h6 class="mb-0">{{ currentAccount.fiName }}</h6>
        </template>
        <b-row>
          <b-col>
          <b-row>{{ currentAccount.accountType }}</b-row>
          <b-row>€{{ currentAccount.balance }}</b-row>
          </b-col>
        </b-row>
        </b-card>

      </div>
    </div>
  </div>
</template>

<script>
import * as accountService from '../../../services/AccountService'
import * as auth from '../../../services/AuthService'
export default {
  name: 'dashboard',
  data() {
    return {
      accounts: null,
      currentAccount: null,
      savingsAccount: null,
      currentAccountId: null,
      savingsAccountId: null
    }
  },
  
  beforeRouteEnter: async function (currentAccount, from, next) {
   await accountService.getAllCurrentAccounts()
   .then(res =>{
     console.log(res)
     currentAccount = res
     console.log(currentAccount)
     next(vm =>{
       vm.currentAccount =  res
       console.log(vm.currentAccount)
     })
    
   }).catch(error => {
      return console.log(error)
    })
  },

  methods: {
    onGetCurrent: async function() {
      const accountPromise = await accountService.getAllCurrentAccounts()
      await Promise.all([accountPromise])
      console.log(accountPromise)
    },
    logout: function() {
      auth.logout()
      const path = `/`
      if (this.$route.path !== path) this.$router.push(path)
    }
  }
}
</script>

<style>

@media all and (max-width:500px){
.accounts{
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: space-evenly;
  margin: 4px;
}
}

.header{
  background-color: black;
}

.b-card-account{

}
</style>
