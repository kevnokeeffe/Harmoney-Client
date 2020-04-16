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
            <i id="fa-balance-lg" class="fas fa-balance-scale fa-4x mt-4"></i>
            <i id="fa-balance-sm" class=" fas fa-balance-scale fa-2x mt-4"></i>
            <number
              class="accountsTotal mt-5"
              ref="number1"
              :from="0"
              :to="accountTotal"
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
          <i class="left-col-p fas fa-balance-scale fa-sm mt-2 mb-2"></i>
          <b-container class="left-container">
            <i id="fas-scale" class="fas fa-money-bill fa-4x mt-4"></i>
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
            class="no-accounts mb-2 mt-2"
            v-if="currentAccount && currentAccount.length < 1"
          >
          <b-card v-if="this.loadAccountsCurrent === true" v-b-popover.hover.bottom="'Loading..'" class="add-current">
            <div class="text-center">
            </div>
  <b-spinner variant="primary" label="Text Centered"></b-spinner>
 <div class="text-center">
 <strong>Loading...</strong>
</div>
          </b-card>
          <b-card v-if="this.loadAccountsCurrent === false" v-b-popover.hover.bottom="'Click here to add an account'" @click="addAccount()" class="add-current">
            <h5 class="add-h5"><i class="fas fa-plus-circle"></i> Add Account</h5>
          </b-card>
          </div>
          <div
            class="accounts mb-2 mt-2"
            v-if="currentAccount && currentAccount.length > 0"
          >
            <div
              class="mb-2 mt-2"
              v-for="currentAccount in currentAccount"
              :key="currentAccount.currentAccount"
            >
              <b-card v-b-popover.hover.bottom="`View ${currentAccount.fiName} ${currentAccount.accountType} Account Details.`" @click="detailsModal(currentAccount)" class="b-card-account">
                <b-container fluid class="b-card-div">
                  <div>
                    <h6 class="b-card-header">{{ currentAccount.fiName }}</h6>
                  </div>
                  <b-row class="b-card-row">
                    <b-col>
                      <b-row class="b-card-balance mb-1 ml-2"
                        >Balance: €{{ currentAccount.balance.toFixed(2) }}</b-row
                      >
                      <b-row
                        ><b-col class="ml-4 mt-3"
                          ></b-col
                        ></b-row
                      >
                    </b-col>
                  </b-row>
                </b-container>
              </b-card>
              <b-card v-b-popover.hover.bottom="`View ${currentAccount.fiName} ${currentAccount.accountType} Account Details.`" no-body class="b-card-account-small"
              @click="detailsModal(currentAccount)">
                    <h1 class="h1-fiName">{{ currentAccount.fiName }}</h1>
                    <h1 class="h1-balance">€{{ currentAccount.balance.toFixed(0) }}</h1>      
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
                  <i class="piggy fas fa-money-bill fa-2x mt-1"></i>
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
                  <p class="text-ac-details">Balance: €{{ account.balance.toFixed(2) }}</p>
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
                    Aavailable Overdraft: €{{ account.overDraft.toFixed(2) }}
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
                <b-col cols="3">
                  <b-button
                    v-b-popover.hover.top="'View your account statement'"
                    squared
                    variant="info"
                    size="md"
                    class="float-left"
                    @click="statement(account)"
                  >
                    Statement
                  </b-button>
                </b-col>
                <b-col cols="4">
                  <b-button
                    v-b-popover.hover.top="'Transfer funds to another account'"
                    squared
                    variant="warning"
                    size="md"
                    class="float-left ml-4"
                    @click="transfer(account)"
                  >
                    Transfer
                  </b-button>
                </b-col>
                <b-col cols="3">
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
        <b-col class="left-col-savings" cols="2">
          <i class="left-col-p fas fa-balance-scale fa-sm mt-2 mb-2"></i>
          <b-container class="left-container">
            <i id="piggy" class="fas fa-piggy-bank fa-4x mt-4"></i>
            <h5 class="h5-ca mt-4">Total Savings Account Balance:</h5>
            <number
              class="currentACTotal"
              ref="number1"
              :from="0"
              :to="savingsAccountTotal"
              :format="theFormatAC"
              :duration="5"
              :delay="2"
              easing="Power1.easeOut"
            />
          </b-container>
        </b-col>

        <b-col class="right-col-savings" cols="10">
          <div
            class="no-accounts mb-2 mt-2"
            v-if="savingsAccount && savingsAccount.length < 1"
          >
          <b-card v-if="this.loadAccountsSavings === true" v-b-popover.hover.bottom="'Loading..'" class="add-current">
            <div class="text-center">
            </div>
  <b-spinner variant="primary" label="Text Centered"></b-spinner>
 <div class="text-center">
 <strong>Loading...</strong>
</div>
          </b-card>
          <b-card v-if="this.loadAccountsSavings === false" v-b-popover.hover.top="'Click here to add an account'" @click="addAccount()" class="add-savings">
            <h5 class="add-h5"><i class="fas fa-plus-circle"></i> Add Account</h5>
          </b-card>
          </div>
          <div
            class="accounts mb-2 mt-2"
            v-if="savingsAccount && savingsAccount.length > 0"
          >
            <div
              class="mb-2 mt-2"
              v-for="savingsAccount in savingsAccount"
              :key="savingsAccount.savingsAccount"
            >
              <b-card v-b-popover.hover.top="`View ${savingsAccount.fiName} ${savingsAccount.accountType} Account Details.`" @click="detailsModalSave(savingsAccount)" class="b-card-account-savings">
                <b-container fluid class="b-card-div">
                  <div>
                    <h6 class="b-card-header">{{ savingsAccount.fiName }}</h6>
                  </div>
                  <b-row class="b-card-row">
                    <b-col>
                      <b-row class=" b-card-balance mb-1 ml-2"
                        >Balance: €{{ savingsAccount.balance.toFixed(2) }}</b-row
                      >
                      <b-row
                        ><b-col class="mt-3 ml-4"
                          ></b-col
                        ></b-row
                      >
                    </b-col>
                  </b-row>
                </b-container>
              </b-card>

              <b-card v-b-popover.hover.top="`View ${savingsAccount.fiName} ${savingsAccount.accountType} Account Details.`" no-body @click="detailsModalSave(savingsAccount)" class="b-card-account-savings-small">
<h1 class="h1-fiName">{{ savingsAccount.fiName }}</h1>
           <h1 class="h1-balance"> €{{ savingsAccount.balance.toFixed(0) }}</h1>
              </b-card>
            </div>
          </div>
          <b-modal
            id="modal-center-save"
            hide-footer
            hide-header
            centered
            squared
            button-size="sm"
          >
            <b-container fluid>
              <b-row class="row-gap-top"></b-row>
              <b-row class="col-row-topS">
                <b-col class="col-row-topS" cols="2">
                  <i class="piggy fas fa-piggy-bank fa-2x"></i>
                </b-col>
                <b-col cols="10">
                  <h4 class="ac-details-header mb-2">{{ account.fiName }}</h4>
                </b-col>
              </b-row>
              <b-row class="mt-2">
                <b-col class="col-modal-detailsS" cols="2"></b-col>
                <b-col cols="">
                  <p class="text-ac-details">
                    Account Type: {{ account.accountType }}
                  </p>
                </b-col>
              </b-row>
              <b-row>
                <b-col class="col-modal-detailsS" cols="2"></b-col>
                <b-col cols="">
                  <p class="text-ac-details">Balance: €{{ account.balance.toFixed(2) }}</p>
                </b-col></b-row
              >
              <b-row>
                <b-col class="col-modal-detailsS" cols="2"></b-col>
                <b-col cols="">
                  <p class="text-ac-details">IBAN: {{ account.iban }}</p>
                </b-col></b-row
              >
              <b-row>
                <b-col class="col-modal-detailsS" cols="2"></b-col>
                <b-col cols="">
                  <p class="text-ac-details">
                    Aavailable Overdraft: €{{ account.overDraft }}
                  </p>
                </b-col></b-row
              >
              <b-row>
                <b-col class="col-modal-detailsS" cols="2"></b-col>
                <b-col cols="">
                  <p class="text-ac-details">
                    Updated Last: {{ account.updatedAt }}
                  </p>
                </b-col></b-row
              >
              <b-row>
                <b-col class="col-modal-detailsS" cols="2"></b-col>
                <b-col cols="3">
                  <b-button
                    v-b-popover.hover.top="'View your account statement'"
                    squared
                    variant="info"
                    size="md"
                    class="float-left"
                    @click="statement(account)"
                  >
                    Statement
                  </b-button>
                </b-col>
                <b-col cols="4">
                  <b-button
                    v-b-popover.hover.top="'Transfer funds to another account'"
                    squared
                    variant="warning"
                    size="md"
                    class="float-left ml-4"
                    @click="transfer(account)"
                  >
                    Transfer
                  </b-button>
                </b-col>
                <b-col cols="3">   <b-button
                    squared
                    variant="success"
                    size="md"
                    class="float-right"
                    @click="closeModelSave()"
                  >
                    OK
                  </b-button></b-col>
                </b-row
              >
            </b-container>
          </b-modal>
        </b-col>
        <b-col class="bottom-col" cols="12">
          <b-modal id="modal-transfer" hide-footer hide-header squared centered>
            <b-container fluid>
              <b-row class="mb-4 ml-2 mt-2">
                <h4><i class="fas fa-hat-wizard"></i> Transfer Wizzard</h4>
              </b-row>
              <b-row class="ml-2 mr-2 mb-2">
                <p>
                  Welcome to the transfer wizzard. Please select one of the
                  options below. "Internal transfer", to transfer money
                  between your accounts registered on Harmon€y.
                  "External transfers" to transfer funds from your
                  account anywhere.
                </p>
              </b-row>
              <b-row class="mb-4">
              
                <b-col cols="6">
                  
                    <b-button
                      v-b-popover.hover.top="'Transfer between accounts registered on Harmon€y'"
                      squared
                      variant="info"
                      @click="internal(account)"
                    >
                      <i class="fas fa-sign-in-alt"></i> Internal Transfer</b-button
                    >
                
                </b-col>
                <b-col cols="6">
                
                    <b-button
                      v-b-popover.hover.top="'Transfer funds anywhere'"
                      squared
                      variant="info"
                      @click="external(account)"
                      ><i class="fas fa-sign-out-alt"></i> External
                      Transfer</b-button
                    >
                 
                </b-col>
               
              </b-row>
              <b-row class="mt-2"></b-row>
              <b-row class="ml-2 mt-2">
                <b-button squared variant="danger" @click="cancelModels()"
                  >Close</b-button
                >
              </b-row>
            </b-container>
          </b-modal>
        </b-col>
        <b-col class="bottom-col-last" cols="12">
          <b-modal id="modal-internal" hide-footer hide-header squared centered>
            <b-container fluid>
              <b-col cols="12">
                <b-row class="ml-2 mr-2 mt-2 mb-4">
                  <h4><i class="fas fa-sign-in-alt"></i> Internal Transfer</h4>
                </b-row>
                <b-row class="ml-2 mr-2 mt-2">
                  <h6>Please select an account to transfer to:</h6>
                </b-row>
                <b-row class="ml-2 mr-2">
                  <b-form-select
                    required
                    v-model="selectedAccount"
                    :options="options"
                  ></b-form-select>
                </b-row>
                <b-row class="ml-2 mr-2 mt-4">
                  <h6>Please enter the amount to transfer:</h6>
                </b-row>
                <b-row class="ml-2 mr-2" 
              >
                  <b-form-input
      
                    v-model="transferNumber"
                    min="0.01"
                    max="account.balance"
                    required
                    number
                    placeholder="Enter Amount €.00"
                    pattern="^\d*(\.\d{0,2})?$"
                  ></b-form-input>
                </b-row>
                <b-row class="ml-2 mt-1">
                  <h6>
                    Maximum for this account is €{{ this.account.balance.toFixed(2) }}
                  </h6>
                </b-row>
                <b-row class="mt-2 ml-2">
                  <b-form-checkbox
                    v-b-popover.hover.top="'Switch this to accept'"
                    id="checkbox-internal-transfer"
                    v-model="status"
                    name="Internal Transfer"
                    value="true"
                    unchecked-value="false"
                    switch
                  >
                    I concent to the transfer.
                  </b-form-checkbox>
                </b-row>
                <b-row class="mt-4">
                  <b-col cols="3">
                    <b-button squared variant="danger" @click="cancelModels()"
                      >Close</b-button
                    >
                  </b-col>
                    <b-col cols="3">
                    <b-button class="ml-2" squared @click="backToTransfer()"
                      >Back</b-button
                    >
                  </b-col>
                  <b-col  cols="6">
                    <b-button
                      class="float-right"
                      squared
                      variant="success"
                      v-if="this.loading === false"
                      @click="sendInternal()"
                      >Send</b-button
                    >
                    <b-button class="float-right" v-if="this.loading === true" squared variant="success" disabled>
    <b-spinner small type="grow"></b-spinner>
    Sending...
  </b-button>
                  </b-col>
                </b-row>
              </b-col>
            </b-container>
          </b-modal>
        </b-col>
        <b-col class="bottom-col-last" cols="12">
          <b-modal id="modal-external" hide-footer hide-header squared centered>
            <b-container fluid>
              <b-row class="ml-2 mr-2 mt-2 mb-4">
                <h4><i class="fas fa-sign-out-alt"></i> External Transfer</h4>
              </b-row>
              <b-row>
                <b-col cols="12">
                  <b-row class="ml-2 mr-2 mt-2">
                    <h6>Please enter accounts IBAN:</h6>
                  </b-row>
                  <b-row class="ml-2 mr-4">
                    <b-form-input
                      v-model="enterIban"
                      required
                      placeholder="Enter IBAN"
                    ></b-form-input>
                  </b-row>
                  <b-row class="ml-2 mr-2 mt-2">
                    <h6>Please enter the amount to transfer</h6>
                  </b-row>
                  <b-row class="ml-2 mr-4" 
                  
                  >
                    <b-form-input
                      v-model="transferNumber"
                      max="account.balance"
                      min="0.01"
                      required
                      number
                  
                      placeholder="Enter Amount €.00"
                      pattern="^\d*(\.\d{0,2})?$"
                    ></b-form-input>
                  </b-row>
                  <b-row class="ml-2 mt-1">
                    <h6>
                      Maximum for this account is €{{ this.account.balance.toFixed(2) }}
                    </h6>
                  </b-row>
                  <b-row class="mt-2 ml-2">
                    <b-form-checkbox
                      id="checkbox-external-transfer"
                      v-model="statusEx"
                      name="External Transfer"
                      value="true"
                      unchecked-value="false"
                      switch
                      v-b-popover.hover.top="'Switch this to accept'"
                    >
                      I concent to the transfer.
                    </b-form-checkbox>
                  </b-row>
                  <b-row class="mr-2 mt-4">
                    <b-col cols="3">
                      <b-button squared variant="danger" @click="cancelModels()"
                        >Close</b-button
                      >
                    </b-col>
                      <b-col cols="3">
                      <b-button class="ml-2" squared @click="backToTransfer()"
                        >Back</b-button
                      >
                    </b-col>
                    <b-col cols="6">
                      <b-button
                      
                        class="float-right"
                        @click="sendExternal()"
                        squared
                        variant="success"
                        v-if="this.loading !== true"
                        >Send</b-button
                      >
                      <b-button v-if="this.loading === true" class="float-right" variant="success" squared disabled>
                      <b-spinner small type="grow"></b-spinner>
                      Sending...
                       </b-button>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-container>
          </b-modal>
        </b-col>
      </b-row>
      
    </b-container>
  </div>
</template>

<script>
import * as accountService from '../../../services/AccountService'
import * as auth from '../../../services/AuthService'
import * as transactionService from '../../../services/TransactionService'
export default {
  name: 'dashboard',
  data() {
    return {
      userLogged:auth.getUserId(),
      show:false,
      loading:false,
      loadAccountsCurrent:false,
      loadAccountsSavings:false,
      log:false,
      selectedAccount: null,
      selected: null,
      status: 'false',
      statusEx: 'false',
      value: 'Please select account',
      options: [],
      accounts: [],
      currentAccount: [],
      savingsAccount: [],
      transaction: null,
      currentAccountId: null,
      savingsAccountId: null,
      accountTotal: 0,
      savingsAccountTotal: 0,
      currentAccountTotal: 0,
      transferNumber: 0,
      enterIban: null,
      accountHoldNumber: null,
      account: {
        id: null,
        balance: 0,
        accountType: null,
        bankId: null,
        createdAt: null,
        currency: null,
        dueDate: null,
        fiName: null,
        iban: null,
        overDraft: 0,
        updatedAt: null,
        userId: null
      }
    }
  },
  created() {
    this.getCurrentAccounts()
    this.getSavingsAccounts()
  },
  watch: {
    // call again the method if the route changes
    $getCurrentAccounts: 'getCurrentAccounts',
    $getSavingsAccounts: 'getSavingsAccounts',
  },
  methods: {
    sendExternal() {
      this.loading = true
      if (this.statusEx === 'true') {
        if (
          this.transferNumber <= this.account.balance &&
          this.transferNumber > 0 &&
          this.transferNumber !== 0
        ) {
          if (this.enterIban != null) {
            let num = this.transferNumber
            let iban = this.enterIban
            this.transaction = [iban, this.account.id, num]
            const transactionPromise = transactionService.postTransactionInternal(
              this.transaction
            )
            Promise.resolve(transactionPromise).then(response => {
              if (response === true) {
                this.makeTransferSuccessful()
                this.loading = false
                this.currentAccount = []
                this.savingsAccount = []
                this.accountTotal = 0
                this.savingsAccountTotal = 0
                this.currentAccountTotal = 0
                this.transferNumber = 0
                this.getCurrentAccounts()
                this.getSavingsAccounts()
              } else {
                this.loading = false
                this.makeToastTransferError()
              }
            })
          } else {
            this.loading = false
            this.mustEnterIBAN()
          }
        } else if (this.transferNumber > this.account.balance) {
          this.loading = false
          this.makeToastTransferTooHigh()
        } else if (this.transferNumber <= 0) {
          this.loading = false
          this.makeTransferTooLow()
        }
      } else if (this.status === 'false') {
        this.loading = false
        this.makeToastCheckbox()
      } 
    },
    mustEnterIBAN() {
      this.$bvToast.toast('You must enter an IBAN!', {
        title: 'Apologies!',
        variant: 'warning',
        solid: true,
        center: true
      })
    },
    makeToastTransferTooHigh() {
      this.$bvToast.toast('You cant transfer more than is in your account!', {
        title: 'Apologies!',
        variant: 'warning',
        solid: true,
        center: true
      })
    },
    makeToastCheckbox() {
      this.$bvToast.toast('You must consent to the transfer!', {
        title: 'Apologies!',
        variant: 'danger',
        solid: true,
        center: true
      })
    },
    makeTransferSuccessful() {
      this.$bvToast.toast('Your transfer has been sucessfull!', {
        title: 'Congratulations!',
        variant: 'success',
        solid: true,
        center: true
      })
    },
    makeTransferTooLow() {
      this.$bvToast.toast('Your transfer amount has to be above 0!', {
        title: 'Apologies!',
        variant: 'warning',
        solid: true,
        center: true
      })
    },
    makeToastSelectAccountToTransfer() {
      this.$bvToast.toast('Must select an account to transfer to!', {
        title: 'Apologies!',
        variant: 'warning',
        solid: true,
        center: true
      })
    },
    makeToastTransferError() {
      this.$bvToast.toast(
        'There seems to be an issue with your transaction! Transaction dropped!',
        {
          title: 'Apologies!',
          variant: 'danger',
          solid: true,
          center: true
        }
      )
    },
    sendInternal() {
      this.loading === true
      if (this.status === 'true') {
        if (
          this.transferNumber <= this.account.balance &&
          this.transferNumber > 0 &&
          this.transferNumber !== 0
        ) {
          if (this.selectedAccount != null) {
            let trasAcc = this.selectedAccount
            let num = this.transferNumber
            let iban = trasAcc[2].split(' ').pop()
            this.transaction = [iban, this.account.id, num]
            const transactionPromise = transactionService.postTransactionInternal(
              this.transaction
            )
            Promise.resolve(transactionPromise).then(response => {
              if (response === true) {
                this.loading = false
                this.makeTransferSuccessful()
                this.$bvModal.hide('modal-internal')
                this.currentAccount = []
                this.savingsAccount = []
                this.accountTotal = 0
                this.savingsAccountTotal = 0
                this.currentAccountTotal = 0
                this.transferNumber = 0
                this.getCurrentAccounts()
                this.getSavingsAccounts()


              } else {
                this.makeToastTransferError()
                this.loading = false
              }
            })
          } else {
            this.makeToastSelectAccountToTransfer()
            this.loading = false
          }
        } else if (this.transferNumber > this.account.balance) {
          this.makeToastTransferTooHigh()
          this.loading = false
        } else if (this.transferNumber <= 0) {
          this.makeTransferTooLow()
          this.loading = false
        }
      } else if (this.status === 'false') {
        this.makeToastCheckbox()
        this.loading = false
      }
    },
    combineAccounts() {
      this.accounts = this.currentAccount.concat(this.savingsAccount)
    },
    closeModel() {
      this.$bvModal.hide('modal-center')
    },
    closeModelSave() {
      this.$bvModal.hide('modal-center-save')
    },
    sortAccounts(accounts) {
      let i = 0
      this.options = []
      for (i = 0; i < accounts.length; ++i) {
        if (accounts[i].iban != this.account.iban) {
          this.options[i] = [
            accounts[i].fiName,
            ' Type: ' + accounts[i].accountType,
            ' IBAN: ' + accounts[i].iban
          ]
        }
      }
      this.options.unshift({
        value: null,
        text: 'Please select account',
        disabled: true
      })
    },
    cancelModels() {
      this.$bvModal.hide('modal-center')
      this.$bvModal.hide('modal-center-save')
      this.$bvModal.hide('modal-transfer')
      this.$bvModal.hide('modal-internal')
      this.$bvModal.hide('modal-external')
    },
    transfer() {
      this.enterIban = null
      this.selectedAccount = null
      this.transferNumber = null
      this.combineAccounts()
      this.sortAccounts(this.accounts)
      this.$bvModal.hide('modal-center-save')
      this.$bvModal.hide('modal-center')
      this.$bvModal.show('modal-transfer')
    },
    backToTransfer() {
      this.enterIban = null
      this.selectedAccount = null
      this.transferNumber = null
      this.$bvModal.hide('modal-center-save')
      this.$bvModal.hide('modal-internal')
      this.$bvModal.hide('modal-external')
      this.$bvModal.show('modal-transfer')
      // this.transfer(account)
    },
    backToDetails() {
      this.enterIban = null
      this.selectedAccount = null
      this.transferNumber = null
      this.$bvModal.hide('modal-transfer')
      this.$bvModal.show('modal-center')
    },
    backToDetailsSave() {
      this.enterIban = null
      this.selectedAccount = null
      this.transferNumber = null
      this.$bvModal.hide('modal-transfer')
      this.$bvModal.show('modal-center-save')
    },

    internal() {
      this.status = 'false'
      this.enterIban = null
      this.selectedAccount = null
      this.transferNumber = null
      this.$bvModal.hide('modal-transfer')
      this.$bvModal.show('modal-internal')
    },
    external() {
      this.statusEx = 'false'
      this.enterIban = null
      this.selectedAccount = null
      this.transferNumber = null
      this.$bvModal.hide('modal-transfer')
      this.$bvModal.show('modal-external')
    },
    statement() {},
    detailsModal(currentAccount) {
      this.$bvModal.show('modal-center')
      this.account.id = currentAccount._id
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
    detailsModalSave(savingsAccount) {
      this.$bvModal.show('modal-center-save')
      this.account.id = savingsAccount._id
      this.account.balance = savingsAccount.balance
      this.account.accountType = savingsAccount.accountType
      this.account.bankId = savingsAccount.bankId
      this.account.createdAt = savingsAccount.createdAt
      this.account.currency = savingsAccount.currency
      this.account.fiName = savingsAccount.fiName
      this.account.iban = savingsAccount.iban
      this.account.overDraft = savingsAccount.overDraft
      this.account.updatedAt = savingsAccount.updatedAt
      this.account.userId = savingsAccount.userId
    },
    getCurrentAccounts() {
      this.loadAccountsCurrent = true
      const postAccount = accountService.getPostCurrentAccounts(this.userLogged)
      const aibAccount = accountService.getAIBCurrentAccounts(this.userLogged)
      const creditUnionAccount = accountService.getAllCUcurrentAccounts(this.userLogged)
      const witAccount = accountService.getAllWITcurrentAccounts(this.userLogged)
      Promise.all([
        postAccount,
        aibAccount,
        creditUnionAccount,
        witAccount
      ]).then(values => {
        let i = 0
        for (i = 0; i < values.length; i++) {
          if (values[i] != false) {
            let Account = values[i].currentAccounts[0]
            this.currentAccount[i] = Account
          }
        }
        this.currentAccount = this.currentAccount.flat()
        this.addUpCurrentAccounts(values)
        this.loadAccountsCurrent = false
      })
    },
    getSavingsAccounts() {
      this.loadAccountsSavings = true
      const postAccount = accountService.getAllPostSavingsAccounts(this.userLogged)
      const aibAccount = accountService.getAllAIBsavingsAccounts(this.userLogged)
      const creditUnionAccount = accountService.getAllCUsavingsAccounts(this.userLogged)
      const witAccount = accountService.getAllWITsavingsAccounts(this.userLogged)

      Promise.all([
        postAccount,
        aibAccount,
        creditUnionAccount,
        witAccount
      ]).then(values => {
        let i = 0
        for (i = 0; i < values.length; i++) {
          if (values[i] != false) {
            let Account = values[i].savingsAccounts[0]
            this.savingsAccount[i] = Account
          }
        }
        this.savingsAccount = this.savingsAccount.flat()
        this.addUpSavingsAccounts(values)
        this.loadAccountsSavings = false
      })
    },

    // Working...
    addUpCurrentAccounts(req) {
      let x
      let value = 0
      for (x = 0; x < req.length; x++) {
        if (req[x] != false) {
          value = value + req[x].currentAccounts[0].balance
        }
      }
      this.currentAccountTotal = value
      this.accountTotal = this.accountTotal + value
    },
    addUpSavingsAccounts(req) {
      let x
      let value = 0
      for (x = 0; x < req.length; x++) {
        if (req[x] != false) {
          value = value + req[x].savingsAccounts[0].balance
        }
      }
      this.savingsAccountTotal = value
      this.accountTotal = this.accountTotal + value
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
    },
    addAccount(){
      const path = `/add-account`
        if (this.$route.path !== path) this.$router.push(path)
    },
  }
}
</script>

<style>
.particles-div-har{
background-color:#f7f7f7;
max-height: 100%;
}

.line-border {
  background-color: #6b7a86;
  padding-top: 2px;
}
.b-jumbotron-dash-left-col {
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
}
.vue-particles-har{
  max-height: 100%;
}

#fa-balance-lg {
  align-self: center;
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
  text-shadow: .15px .15px .15px black;
}
.b-card-balance{
  text-shadow: .15px .15px .15px black;
   font-family: 'Roboto', sans-serif;
  
  font-size: 20px;
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
  background: #18b0b0;
}
.col-modal-detailsS {
  background: #de7119;
}
.col-row-top {
  background-color: #dee3e2;
}
.col-row-topS {
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
  background-color:#f1f1f0;
}
.left-col-savings {
  background-color: #ef4b4b;
}
.divider-col {
  background-color: #6b7a86;
  padding: 1px;
}
.divider-col-top {
  background-color: #e3f6f5;
}
.bottom-col {
  background-color: #6b7a86;
  padding: 1px;
}
.little-ca-row{
    display:none;
  }
#fa-balance-sm {
  display: none;
}

#fa-balance-lg {
  display: inline-block;
  margin-right: 10px;
}
.no-accounts{
  padding: 5px;
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: space-evenly;
  margin: 10px;
}
.add-current{
width: 180px;
height:100px;
  font-family: 'Roboto', sans-serif;
  font-family: 'Open Sans', sans-serif;
  background: rgb(67, 171, 146);
  background: linear-gradient(
    90deg,
    rgba(67, 171, 146, 1) 0%,
    rgba(67, 171, 146, 1) 10%,
    rgba(249, 249, 249, 1) 10%,
    rgba(249, 249, 249, 1) 100%
  );
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}
.add-current:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.add-savings{
 width: 180px;
height:100px;
  font-family: 'Roboto', sans-serif;
  font-family: 'Open Sans', sans-serif;
  background: rgb(247, 95, 0);
  background: linear-gradient(
    90deg,
    rgba(247, 95, 0, 1) 0%,
    rgba(247, 95, 0, 1) 10%,
    rgba(249, 249, 249, 1) 10%
  );
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}
.add-savings:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.div-center-top {
  width: 70%;
}
@media (min-width: 870px) {

.accounts {
  padding: 5px;
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: space-evenly;
  margin: 4px;
}

  .b-card-account {
  width: 280px;
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
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

.b-card-account:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.b-card-account-savings:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.b-card-account-savings {
  width: 280px;
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
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}
 .b-card-account-small{
   display:none;
 }
 .b-card-account-savings-small{
   display:none;
 }
}
@media (max-width: 870px) {
  .b-card-account-small{
    width: 100px;
    height:100px;
    background: rgb(67, 171, 146);
  background: linear-gradient(
    90deg,
    rgba(67, 171, 146, 1) 0%,
    rgba(67, 171, 146, 1) 10%,
    rgba(249, 249, 249, 1) 10%,
    rgba(249, 249, 249, 1) 100%
  );
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  }
  .b-card-account-savings-small{
    width: 100px;
    height:100px;
    background: rgb(247, 95, 0);
  background: linear-gradient(
    90deg,
    rgba(247, 95, 0, 1) 0%,
    rgba(247, 95, 0, 1) 10%,
    rgba(249, 249, 249, 1) 10%
  );
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  }
  .h1-fiName{
    font-size: 13px;
    margin-top: 16px;
    text-shadow: .21px .21px .21px black;
     font-family: 'Roboto', sans-serif;
  
  }
  .h1-balance{
    font-size: 18px;
    text-shadow: .151px .151px .151px black;
     font-family: 'Roboto', sans-serif;
    font-family: 'Open Sans', sans-serif;
  }
  .b-card-account-small:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.b-card-account-savings-small:hover{
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  .accounts {
    display: flex;
    flex-direction: column;
    flex-flow: row wrap;
    justify-content: space-evenly; 
  }
  #h5-total-balance {
    display: none;
  }
  #fa-balance-sm {
    display: inline-block;
    margin-right: 5px;
  }
  #fa-balance-lg {
    display: none;
  }
  .div-center-top {
    width: 80%;
  }
  .big-ca-row{
    display:none;
  }
  .b-card-account {
   display:none;
  }
  .b-card-account-savings {
   display:none;
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
  #piggy {
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
  background-color: rgb(250, 245, 228);
}
</style>
