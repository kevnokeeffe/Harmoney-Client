<template>
  <div class="container-home">
    <h1 class="home-h1">HARMON€Y</h1>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  beforeCreate: async function() {
    // fetch(this.$store.state.apiUrl + '/api/test/user', {
    //   method: 'GET'
    // })
    //   .then(res => res.json())
    //   .then(res => console.log(res))
    //   await fetch('http://localhost:4000/api/test/bank', {
    //   method: 'GET'
    // })
    //   .then(res => res.json())
    //   .then(res => console.log(res))
  },
}
</script>

<style>
.container-home {
  height: 100%;
  position: fixed;
  left: 0;
  right: 0;
  background: rgb(246, 198, 52);
  background: linear-gradient(
    117deg,
    rgba(246, 198, 52, 1) 33%,
    rgba(252, 74, 26, 1) 33%,
    rgba(252, 74, 26, 1) 54%,
    rgba(1, 157, 195, 1) 54%
  );
}

@media (min-width: 940px) {
.home-h1{
  font-family: 'Varela Round', sans-serif;
  font-family: 'Open Sans', sans-serif;
  align-self: center;
  margin-top: 6%;
  font-size: 8em;
  color: ivory;
}
}

@media (max-width: 940px) and (min-width: 500px) {
.home-h1{
  font-family: 'Varela Round', sans-serif;
  font-family: 'Open Sans', sans-serif;
  align-self: center;
  margin-top: 15%;
  font-size: 5em;
  color: ivory;
}
}

@media (max-width: 500px){
.home-h1{
  font-family: 'Varela Round', sans-serif;
  font-family: 'Open Sans', sans-serif;
  align-self: center;
  margin-top: 50%;
  font-size: 3em;
  color: ivory;
}
}


</style>
