<template class="temp">
  <div class="add-account">

    <b-jumbotron class="b-jumbotron-add-account">
    <b-media>
          <b-media-body class="ml-3">
            <h5 class="mt-0">Select Account Provider</h5>
            <div>
              <b-form-select
                v-model="selected"
                :options="options"
                class="form-select-options mb-2"
                value-field="item"
                text-field="name"
                disabled-field="notEnabled"
              ></b-form-select>

              <div class="mt-2">
                Selected: <strong>{{ selected }}</strong>
              </div>
              <div>
                <b-button class="mt-4" @click="$bvModal.show('modal-scoped')"
                  >Connect Account</b-button
                >
              </div>
            </div>
          </b-media-body>
          <div>
            <b-modal id="modal-scoped">
              <template v-slot:modal-header="{}">
                <h5>Add {{ selected }} Account</h5>
              </template>

              <template>
                <div>
                  <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      type="email"
                      v-model="email"
                      required
                      placeholder="Enter email"
                    ></b-form-input>
                  </b-form-group>
                </div>
                <b-form-group>
                  <label for="text-password">Password</label>
                  <b-input
                    type="password"
                    v-model="password"
                    id="text-password"
                    aria-describedby="password-help-block"
                  ></b-input>
                </b-form-group>
              </template>

              <template v-slot:modal-footer="{ ok, cancel}">
                <!-- Emulate built in modal footer ok and cancel button actions -->
                <b-button size="sm" variant="success" @click="ok()">
                  OK
                </b-button>
                <b-button size="sm" variant="danger" @click="cancel()">
                  Cancel
                </b-button>
              </template>
            </b-modal>
          </div>
        </b-media>
  </b-jumbotron>
  </div>
</template>

<script>
import * as auth from '../../../services/FIService'
export default {
  data() {
    return {
      email:null,
      password:null,
      selected: null,
      options: [
        { item: 'Bank of WIT', name: 'Bank of WIT'},
        { item: 'An Post', name: 'An Post'},
        { item: 'Waterford Credit Union', name: 'Waterford Credit Union'},
        { item: 'AIB', name: 'AIB'}
      ],
      name: '',
      nameState: null,
      submittedNames: []
    }
  },
  methods: {
    ok: async function(){
      const user = {
        email: this.email,
        password: this.password
      }
      const registerPromise = auth.financialInstitutionLogin(user)
      await Promise.all([registerPromise])
    }
  }
}
</script>

<style>

.add-account{
  height: 100%;
  position: fixed;
  left: 0;
  right: 0;
  overflow: auto;
}

.b-jumbotron-add-account{
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
