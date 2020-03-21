<template>
  <div class="div-harmoney-dashboard">
    <b-container fluid class="b-container-dashboard">
      <b-row class="b-row-dashboard">


        <b-col class="left-top-col" cols="2">
          <i id="fa-bank" class="fas fa-university fa-5x mt-3"></i>
          <i id="fa-bank-sm" class="fas fa-university fa-3x mt-3"></i>
        </b-col>
        <b-col class="center-col" cols="10">
          <div class="div-center-top">
            <i
            id="fa-balance-lg"
            class="fas fa-balance-scale fa-4x mt-4"
          ></i>
          <i id="fa-balance-sm" class=" fas fa-balance-scale fa-2x mt-4"></i>
          <number
            class="accountsTotal mt-5"
            ref="number1"
            :from="0"
            :to="currentAccountTotal"
            :format="theFormat"
            :duration="5"
            :delay="2"
            easing="Power1.easeOut"
          />
          </div>
        </b-col>

        <b-col class="line-border" cols="12"></b-col>
        <b-col class="divider-col-top" cols="12"></b-col>
        <b-col class="left-col-top" cols="2">
          <i class="left-col-p fas fa-balance-scale fa-sm mt-4"></i>
          <b-container class="left-container">
            <i id="fas-scale" class="fas fa-money-bill fa-4x mt-5"></i>
            <h5 class="h5-ca mt-4">Total Current Account Balance:</h5>
            <number
              class="currentACTotal"
              ref="number1"
              :from="0"
              :to="currentAccountTotal"
              :format="theFormatAC"
              :duration="5"
              :delay="2"
              easing="Power1.easeOut"
            />
          </b-container>
        </b-col>
        <b-col class="right-col" cols="10">
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
                        >Balance: €{{ currentAccount.balance }}</b-row
                      >
                      <b-row
                        ><b-col class="mt-3"
                          ><b-row
                            ><b-button
                              v-b-popover.hover.top="
                                'View the details for the account'
                              "
                              title="Account Details"
                              @click="detailsModal(currentAccount)"
                              class="mb-2"
                              size="sm"
                              squared
                              id="details-button-c"
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

          <b-modal
            id="modal-center"
            hide-footer
            hide-header
            centered
            squared
            button-size="sm"
          >
            <b-container fluid>
              <b-row class="row-gap-top"></b-row>
              <b-row class="col-row-top">
                <b-col class="col-row-top" cols="2">
                  <i class="piggy fas fa-piggy-bank fa-2x"></i>
                </b-col>
                <b-col cols="10">
                  <h4 class="ac-details-header mb-2">{{ account.fiName }}</h4>
                </b-col>
              </b-row>
              <b-row class="mt-2">
                <b-col class="col-modal-details" cols="2"></b-col>
                <b-col cols="">
                  <p class="text-ac-details">
                    Account Type: {{ account.accountType }}
                  </p>
                </b-col>
              </b-row>
              <b-row>
                <b-col class="col-modal-details" cols="2"></b-col>
                <b-col cols="">
                  <p class="text-ac-details">Balance: €{{ account.balance }}</p>
                </b-col></b-row
              >
              <b-row>
                <b-col class="col-modal-details" cols="2"></b-col>
                <b-col cols="">
                  <p class="text-ac-details">IBAN: {{ account.iban }}</p>
                </b-col></b-row
              >
              <b-row>
                <b-col class="col-modal-details" cols="2"></b-col>
                <b-col cols="">
                  <p class="text-ac-details">
                    Aavailable Overdraft: €{{ account.overDraft }}
                  </p>
                </b-col></b-row
              >
              <b-row>
                <b-col class="col-modal-details" cols="2"></b-col>
                <b-col cols="">
                  <p class="text-ac-details">
                    Updated Last: {{ account.updatedAt }}
                  </p>
                </b-col></b-row
              >
              <b-row>
                <b-col class="col-modal-details" cols="2"></b-col>
                <b-col cols="">
                  <b-button
                    v-b-popover.hover.top="'View your account statement'"
                    title="Statement"
                    squared
                    variant="info"
                    size="md"
                    class="float-left"
                    @click="closeModel()"
                  >
                    Statement
                  </b-button>
                  <b-button
                    v-b-popover.hover.top="'Transfer funds to another account'"
                    title="Transfer"
                    squared
                    variant="warning"
                    size="md"
                    class="float-left ml-4"
                    @click="closeModel()"
                  >
                    Transfer
                  </b-button>

                  <b-button
                    squared
                    variant="success"
                    size="md"
                    class="float-right"
                    @click="closeModel()"
                  >
                    OK
                  </b-button>
                </b-col></b-row
              >
            </b-container>
          </b-modal>
        </b-col>
        <b-col class="divider-col" cols="12"></b-col>
        <b-col class="left-col-savings" cols="2"
          ><i class="fas fa-piggy-bank fa-4x mt-4"></i>
          <h5 class="h5-ca mt-4">Total Savings Account Balance:</h5>
          <number
            class="currentACTotal"
            ref="number1"
            :from="0"
            :to="currentAccountTotal"
            :format="theFormatAC"
            :duration="5"
            :delay="2"
            easing="Power1.easeOut"
          />
        </b-col>

        <b-col class="right-col-savings" cols="10"
          ><div
            class="accounts mb-2 mt-2"
            v-if="savingsAccount && savingsAccount.length > 0"
          >
            <div
              class="mb-2 mt-2"
              v-for="savingsAccount in savingsAccount"
              :key="savingsAccount.savingsAccount"
            >
              <b-card class="b-card-account-savings">
                <b-container fluid class="b-card-div">
                  <div>
                    <h6 class="b-card-header">{{ savingsAccount.fiName }}</h6>
                  </div>
                  <b-row class="b-card-row">
                    <b-col>
                      <b-row class="mb-1"
                        >Balance: €{{ savingsAccount.balance }}</b-row
                      >
                      <b-row
                        ><b-col class="mt-3"
                          ><b-row
                            ><b-button
                              v-b-popover.hover.top="
                                'View the details for the account'
                              "
                              title="Account Details"
                              @click="detailsModal(savingsAccount)"
                              class="mb-2"
                              size="sm"
                              id="details-button-c"
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
          </div></b-col
        >
      </b-row>
      <b-col class="bottom-col" cols="12"></b-col>
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
      accountTotal: 0,
      savingsAccountTotal: 0,
      currentAccountTotal: 0,
      account: {
        balance: 0,
        accountType: null,
        bankId: null,
        createdAt: null,
        currency: null,
        dueDate: null,
        fiName: null,
        iban: null,
        overDraft: null,
        updatedAt: null,
        userId: null
      }
    }
  },

  created() {
    this.getAllAccounts()
    this.getAllSavingsAccounts()
  },
  mounted() {
    this.addAll()
  },
  watch: {
    // call again the method if the route changes
    $route: 'getAllAccounts',
    $route2: 'getAllSavingsAccounts'
  },
  methods: {
    closeModel() {
      this.$bvModal.hide('modal-center')
    },
    detailsModal(currentAccount) {
      this.$bvModal.show('modal-center')
      this.account.balance = currentAccount.balance
      this.account.accountType = currentAccount.accountType
      this.account.bankId = currentAccount.bankId
      this.account.createdAt = currentAccount.createdAt
      this.account.currency = currentAccount.currency
      this.account.fiName = currentAccount.fiName
      this.account.iban = currentAccount.iban
      this.account.overDraft = currentAccount.overDraft
      this.account.updatedAt = currentAccount.updatedAt
      this.account.userId = currentAccount.userId
    },
    getAllAccounts() {
      const acPromise = accountService.getAllCurrentAccounts()
      Promise.resolve(acPromise)
        .then(res => {
          this.currentAccount = res.currentAccounts
          this.addUpCurrentAccounts(res)
        })
        .catch(error => {
          return console.log(error)
        })
    },
    getAllSavingsAccounts() {
      const asPromise = accountService.getAllSavingsAccounts()
      Promise.resolve(asPromise)
        .then(res => {
          this.savingsAccount = res.savingsAccounts
          this.addUpSavingsAccounts(res)
        })
        .catch(error => {
          return console.log(error)
        })
    },
    addAll() {
      let valueA = this.savingsAccountTotal
      let valueB = this.currentAccountTotal
      this.accountTotal = valueA + valueB
    },
    addUpCurrentAccounts(req) {
      let x
      let value = null
      for (x = 0; x < req.currentAccounts.length; x++) {
        value = value + req.currentAccounts[x].balance
      }
      this.currentAccountTotal = value
    },
    addUpSavingsAccounts(req) {
      let y
      let value2 = null
      for (y = 0; y < req.savingsAccounts.length; y++) {
        value2 = value2 + req.savingsAccounts[y].balance
      }
      this.savingsAccountTotal = value2
    },
    logout: function() {
      auth.logout()
      const path = `/`
      if (this.$route.path !== path) this.$router.push(path)
    },
    theFormat(number) {
      return `€ ${number.toFixed(2)}`
    },
    theFormatAC(number) {
      return `€${number.toFixed(2)}`
    }
  }
}
</script>

<style>
.line-border {
  background-color: #6b7a86;
  padding-top: 2px;
}
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

#fa-balance-lg {
  align-self: center;
}
.b-card-account {
  width: 180px;
  font-family: 'Roboto', sans-serif;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  background: rgb(67, 171, 146);
  background: linear-gradient(
    90deg,
    rgba(67, 171, 146, 1) 0%,
    rgba(67, 171, 146, 1) 10%,
    rgba(249, 249, 249, 1) 10%,
    rgba(249, 249, 249, 1) 100%
  );
}

.b-card-account-savings {
  width: 180px;
  font-family: 'Roboto', sans-serif;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  background: rgb(247, 95, 0);
  background: linear-gradient(
    90deg,
    rgba(247, 95, 0, 1) 0%,
    rgba(247, 95, 0, 1) 10%,
    rgba(249, 249, 249, 1) 10%
  );
}

.b-card-div {
  padding-top: 5px;
}
.left-col-p {
  display: none;
}

.h5 {
  font-family: 'Roboto', sans-serif;
  font-family: 'Open Sans', sans-serif;
}
.accountsTotal {
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
.left-col-top {
  background-color: #ccda46;
}
.left-top-col {
  background-color: #f8b400;
}
.currentACTotal {
  font-family: 'Roboto', sans-serif;
  font-family: 'Open Sans', sans-serif;
}
.ac-details-header {
  font-family: 'Roboto', sans-serif;
  font-family: 'Open Sans', sans-serif;
  margin-top: 4px;
  padding-bottom: 5px;
}

.h5-ca {
  font-family: 'Roboto', sans-serif;
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
}
#h5-total-balance {
  font-family: 'Roboto', sans-serif;
  font-family: 'Open Sans', sans-serif;
  font-size: 30px;
  margin-right: 10px;
}
.col-modal-details {
  background: #eef9bf;
}
.col-row-top {
  background-color: #dee3e2;
}
.row-gap-top {
  padding-top: 10px;
  background-color: #dee3e2;
}
.text-ac-details {
  font-family: 'Roboto', sans-serif;
}
#fa-bank-sm {
  display: none;
}
.right-col-savings {
  background-color: #afe4e1;
}
.left-col-savings {
  background-color: #ef4b4b;
}
.divider-col {
  background-color: #e3f6f5;
  padding: 5px;
}
.divider-col-top {
  background-color: #e3f6f5;
  padding: 5px;
}
.bottom-col {
  background-color: #e3f6f5;
}

#fa-balance-sm {
  display: none;
}

#fa-balance-lg {
  display:inline-block;
  margin-right:10px;
}

.div-center-top{
  width:70%;

}

@media (max-width: 870px) {
  .accounts {
    padding: 5px;
    display: flex;
    flex-direction: column;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin: 4px;
  }
  #h5-total-balance {
    display: none;
  }
  #fa-balance-sm {
    display: inline-block;
   margin-right:4px;

  }
  #fa-balance-lg {
    display: none;
  }
.div-center-top{
  width:80%;
}
  .b-card-account {
    display: flex;
    flex-direction: column;
    width: 130px;
    height: 200px;
    display: inline-block;
    align-content: center;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    background: rgb(67, 171, 146);
    background: linear-gradient(
      90deg,
      rgba(67, 171, 146, 1) 0%,
      rgba(67, 171, 146, 1) 10%,
      rgba(249, 249, 249, 1) 10%,
      rgba(249, 249, 249, 1) 100%
    );
  }

  .h5-ca {
    font-family: 'Roboto', sans-serif;
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    display: none;
  }
  .left-container {
    -webkit-transform: rotate(-90deg); /* Safari */
    -moz-transform: rotate(-90deg); /* Firefox */
    -ms-transform: rotate(-90deg); /* IE */
    -o-transform: rotate(-90deg); /* Opera */

    transform: rotate(-90deg);
    margin-top: 60px;
    margin-bottom: 80px;
    display: inline-block;
  }
  .left-col-p {
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    font-family: 'Open Sans', sans-serif;
    margin-top: 10px;
  }
  #fas-scale {
    display: none;
  }
  #fa-bank {
    display: none;
  }
  #fa-bank-sm {
    display: inline-block;
  }
  #details-button-c {
    margin-top: bottom;
  }
}

.center-col {
  background-color: #f8b400;
  padding-bottom: 20px;
}
.right-col {
  background-color: #c4e2e1;
}
</style>
