<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  beforeCreate: function() {
    fetch(this.$store.state.apiUrl+'/api/test/user',{
      method: 'GET'
    })
    .then(res => res.json())
    .then(res => console.log(res))
  },
}
</script>

<style>
</style>