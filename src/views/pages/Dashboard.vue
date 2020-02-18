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
    <div class="d-flex felx-wrap justify-content-start" v-if="currentAccount && currentAccount.length > 0">
      <div v-for="currentAccount in accounts" :key="currentAccount.account">
        <b-card no-body class="overflow-hidden nb-2 ml-2" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img
                src="https://picsum.photos/200/200/?image=20"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Horizontal Card">
                <b-card-text>
                  This is a wider card with supporting text as a natural lead-in
                  to additional content. This content is a little bit longer.
                </b-card-text>
              </b-card-body>
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
  beforeRouteEnter(to, from, next) {
    accountService.getAllCurrentAccounts().then(res => {
      next(vm => {
        vm.currentAccount = res.data.currentAccount
      })
    })
  },
  methods: {
    onGetCurrent: async function() {
      const accountPromise = await accountService.getAllCurrentAccounts()
      await Promise.all([accountPromise])
    },
    logout: function() {
      auth.logout()
      const path = `/`
      if (this.$route.path !== path) this.$router.push(path)
    }
  }
}
</script>
