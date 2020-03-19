<template>
  <div class="div-harmoney-dashboard">
    <b-container fluid class="b-container-dashboard">
      <b-row class="b-row-dashboard">
        <b-col class="left-col" cols="3">
          <b-container fluid>
              <b-col >
                  <h5 class="h5 mt-4">Total Balance:</h5>
                <number
                class="accountsTotal"
                  ref="number1"
                  :from="0"
                  :to="accountTotal"
                  :format="theFormat"
                  :duration="5"
                  :delay="2"
                  easing="Power1.easeOut"
                />
              </b-col>
            <b-row class="mt-2 mb-2">
              <b-col
                ><b-button to="/add-account" squared variant="info">+ Account</b-button></b-col
              >
            </b-row>
          </b-container>
        </b-col>
        <b-col class="right-col" cols="9">
          <div
            class="accounts mb-2 mt-2"
            v-if="currentAccount && currentAccount.length > 0"
          >
            <div
              class="mb-2 mt-2"
              v-for="currentAccount in currentAccount"
              :key="currentAccount.currentAccount"
            >
              <b-card class="b-card-account">
                <b-container fluid class="b-card-div">
                  <div>
                    <h6 class="b-card-header">{{ currentAccount.fiName }}</h6>
                  </div>
                  <b-row class="b-card-row">
                    <b-col>
                      <b-row class="mb-1"
                        >A/C Type: {{ currentAccount.accountType }}</b-row
                      >
                      <b-row class="mb-1"
                        >Balance: €{{ currentAccount.balance }}</b-row
                      >
                      <b-row
                        ><b-col class="mt-3"
                          ><b-row
                            ><b-button
                              class="mb-2"
                              size="sm"
                              squared
                              variant="info"
                              >Details</b-button
                            >
                          </b-row></b-col
                        ></b-row
                      >
                    </b-col>
                  </b-row>
                </b-container>
              </b-card>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
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
      currentAccount: [],
      savingsAccount: null,
      currentAccountId: null,
      savingsAccountId: null,
      accountTotal: 0
    }
  },

  created() {
    this.getAllAccounts()
  },
  watch: {
    // call again the method if the route changes
    $route: 'getAllAccounts'
  },
  methods: {
    getAllAccounts() {
      const acPromise = accountService.getAllCurrentAccounts()
      Promise.resolve(acPromise)
        .then(res => {
        //   const creditUnion = {
        //       balance: res.allAccounts.creditUnion[0].balance,
        //       accountType:res.allAccounts.creditUnion[0].accountType,
        //       fiName:res.allAccounts.creditUnion[0].fiName,
        //       iban:res.allAccounts.creditUnion[0].iban,
        //       bankId:res.allAccounts.creditUnion[0].bankId,
        //       currency:res.allAccounts.creditUnion[0].currency,
        //       overDraft:res.allAccounts.creditUnion[0].overDraft,
        //       userId:res.allAccounts.creditUnion[0].userId,}
        //   this.currentAccount = {
        //       account:res.currentAccounts.BOW,
        //       account2:res.currentAccounts.AIB,
        //       account3:res.currentAccounts.creditUnion,
        //       account4:res.currentAccounts.AnPost}
        
              console.log(res)
              this.currentAccount= res.currentAccounts
          
          //this.addUpAccounts(res.allAccounts)
        })
        .catch(error => {
          return console.log(error)
        })
    },
    onGetCurrent: async function() {
      const accountPromise = await accountService.getAllCurrentAccounts()
      await Promise.all([accountPromise])
    },
    addUpAccounts(req) {
      this.accountTotal = req
    },
    logout: function() {
      auth.logout()
      const path = `/`
      if (this.$route.path !== path) this.$router.push(path)
    },
    theFormat(number) {
      return `€ ${number.toFixed(2)}`
    },
  }
}
</script>

<style>
@media (min-width: 940px) {
  .b-jumbotron-dash-left-col {
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .accounts {
    padding: 5px;
    display: flex;
    flex-direction: column;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin: 4px;
  }

  .b-card-account {
    width: 200px;
    font-family: 'Roboto', sans-serif;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    margin: 5px;
    background: rgb(203, 226, 176);
  }

  .b-card-div {
    padding-top: 2px;
    background: rgb(246, 209, 134);
    background: linear-gradient(
      180deg,
      rgb(246, 209, 134) 0%,
      rgb(246, 209, 134) 16%,
      rgba(255, 255, 240, 1) 16%
    );
  }

.h5{
    font-family: 'Roboto', sans-serif;
font-family: 'Open Sans', sans-serif;
}
.accountsTotal{
font-size: 28px;
font-family: 'Roboto', sans-serif;
font-family: 'Open Sans', sans-serif;
}

  .b-card-row {
    margin-left: 0px;
  }

  .b-card-header {
    font-family: 'Roboto', sans-serif;
    font-family: 'Open Sans', sans-serif;
    margin-bottom: 20px;
  }
}

@media (max-width: 940px) and (min-width: 800px) {
  .b-jumbotron-dash-left-col {
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .h1-dash-left-col {
    font-size: 30px;
  }

  .b-card-account {
  }
}

@media (max-width: 800px) and (min-width: 630px) {
  .b-jumbotron-dash-left-col {
    margin-top: 10px;
    margin-left: 1px;
    margin-right: 1px;
    align-content: center;
  }

  .h1-dash-left-col {
    font-size: 20px;
  }
}

@media (max-width: 630px) and (min-width: 200px) {
  .b-jumbotron-dash-left-col {
    margin-top: 10px;
    margin-left: 1px;
    margin-right: 1px;
    align-content: center;
  }

  .h1-dash-left-col {
    font-size: 15px;
  }
}

.left-col {
  background-color: #ffd868;
}
.right-col {
  background-color: #edffea;
}
</style>
