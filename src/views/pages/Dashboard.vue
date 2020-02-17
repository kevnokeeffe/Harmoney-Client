<template>
  <div class="dashboard">
    <h1>This is the Dash Board</h1>
    <router-link to="/add-account" class="btn btn-success ml-2">
      Add Account</router-link
    >
    <b-button v-on:click.prevent="onGetCurrent()" class="btn btn-success ml-2 mt-2">
      Get Current</b-button
    >
    <b-button v-on:click.prevent="logout()" class="btn btn-success ml-2 mt-2">
      Logout</b-button
    >
  </div>
</template>

<script>
import * as accountService from '../../../services/AccountService'
import * as auth from '../../../services/AuthService'
export default {
  name: 'dashboard',
  // beforeRouteEnter(to, from, next) {
  //   accountService.getAllCurrentAccounts().then(res => {
  //     console.log(res)
  //     next()
  //   })
  // }
  methods:{
    onGetCurrent: async function() {
            const accountPromise = await accountService.getAllCurrentAccounts()
      await Promise.all([accountPromise])
      await this.$router.push({ path: '/dashboard' })
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
