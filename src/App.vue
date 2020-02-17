<template>
  <div id="app">
      <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
// import auth from '../services/AuthService'
export default {
  name:'app',
  components: {
    Navbar
  },
  // created: ()=>{
  //   window.addEventListener('beforeunload', auth.logout())
  // },
  // methods: {
  //   logout() {
  //     const path = `/`
  //     auth.logout();
  //     this.$router.push(path);
  //   },
  //}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
