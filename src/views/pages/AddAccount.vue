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
              <template v-slot:modal-header="{ close }">
                <!-- Emulate built in modal header close button action -->
                <b-button size="sm" variant="outline-danger" @click="close()">
                  Close Modal
                </b-button>
                <h5>Modal Header</h5>
              </template>

              <template>
                <div>
                  <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                    description="We'll never share your email with anyone else."
                  >
                    <b-form-input
                      id="input-1"
                      type="email"
                      required
                      placeholder="Enter email"
                    ></b-form-input>
                  </b-form-group>
                </div>
                <b-form-group>
                  <label for="text-password">Password</label>
                  <b-input
                    type="password"
                    id="text-password"
                    aria-describedby="password-help-block"
                  ></b-input>
                  <b-form-text id="password-help-block">
                    Your password must be 8-20 characters long, contain letters
                    and numbers, and must not contain spaces, special
                    characters, or emoji.
                  </b-form-text>
                </b-form-group>
              </template>

              <template v-slot:modal-footer="{ ok, cancel, hide }">
                <b>Custom Footer</b>
                <!-- Emulate built in modal footer ok and cancel button actions -->
                <b-button size="sm" variant="success" @click="ok()">
                  OK
                </b-button>
                <b-button size="sm" variant="danger" @click="cancel()">
                  Cancel
                </b-button>
                <!-- Button with custom close trigger value -->
                <b-button
                  size="sm"
                  variant="outline-secondary"
                  @click="hide('forget')"
                >
                  Forget it
                </b-button>
              </template>
            </b-modal>
          </div>
        </b-media>
  </b-jumbotron>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 'None',
      options: [
        { item: 'Bank of WIT', name: 'Bank of WIT' },
        { item: 'An Post', name: 'An Post' },
        { item: 'Waterford Credit Union', name: 'Waterford Credit Union' },
        { item: { d: 1 }, name: 'Option D', notEnabled: true }
      ],
      name: '',
      nameState: null,
      submittedNames: []
    }
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    },
    resetModal() {
      this.name = ''
      this.nameState = null
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name)
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
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
