<template>
  <div class="removeAccount">
    <h1>This is the Remove Account Page</h1>
    <b-form-group
          id="input-group-3"
          label="Financial Instutition:"
          label-for="input-3"
        >
          <b-form-select
            id="input-3"
            v-model="form.fi"
            :options="fis"
            required
          ></b-form-select>
        </b-form-group>
  </div>
</template>

<script>
import * as services from '../../../services/AccountService.js'
export default {
    
    data() {
    return {
      loading:false,
      form: {
        email: '',
        password: '',
        fi: null,
        checked: null,
        valid:false,
      },
      fis: [
        { text: 'Please select one', value: null,disabled: true },
        'Bank of WIT',
        'Allied Irish Bank',
        'Credit Union',
        'Post Office'
      ],
      show: true
    }
  },
methods: {
    onSubmit: async function(evt) {
      this.loading = true
      evt.preventDefault()
      const connect = {
        email: this.form.email,
        password: this.form.password
      }
      // Put all this in a method somewhere else later maybe
      if (this.form.checked === 'true') {
        if (this.form.fi === 'Bank of WIT') {
          const connectPromise = await services.deleteWIT(connect)
          await Promise.resolve(connectPromise).then(res => {
              if (res[0] === false){
                this.showMsgBoxInvalid()
                this.loading = false
              }else{
                this.$router.push({ path: '/harmoney-dashboard' })
                this.loading = false
              }
          })
        } else if (this.form.fi === 'Allied Irish Bank') {
          const connectPromise = services.deleteAIB(connect)
          await Promise.resolve(connectPromise).then(res => {
              if (res[0] === false){
                this.showMsgBoxInvalid()
                this.loading = false
              }else{
                this.$router.push({ path: '/harmoney-dashboard' })
                this.loading = false
              }
          })
        } else if (this.form.fi === 'Credit Union') {
          const connectPromise = services.deleteCU(connect)
          await Promise.resolve(connectPromise).then(res => {
              if (res[0] === false){
                this.showMsgBoxInvalid()
                this.loading = false
              }else{
                this.$router.push({ path: '/harmoney-dashboard' })
                this.loading = false
              }
          })
        } else if (this.form.fi === 'Post Office') {
          const connectPromise = services.deletePO(connect)
          await Promise.resolve(connectPromise).then(res => {
              if (res[0] === false){
                this.showMsgBoxInvalid()
                this.loading = false
              }else{
                this.$router.push({ path: '/harmoney-dashboard' })
                this.loading = false
              }
          })
        }
      } else {
        this.showMsgBoxTwo()
        this.loading = false
      }
    },
}
}
</script>

<style>
</style>