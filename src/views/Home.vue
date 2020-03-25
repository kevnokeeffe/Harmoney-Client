<template>
  <div class="container-home">
    <h1 class="home-h1">HARMON€Y</h1>
    <h3 class="home-h3">Your personal accounts management system</h3>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  beforeCreate: async function() {
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

.home-h3{
  font-family: 'Varela Round', sans-serif;
  font-family: 'Open Sans', sans-serif;
  align-self: center;
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

.home-h3{
  font-family: 'Varela Round', sans-serif;
  font-family: 'Open Sans', sans-serif;
  align-self: center;
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

.home-h3{
  font-family: 'Varela Round', sans-serif;
  font-family: 'Open Sans', sans-serif;
  align-self: center;
  color: ivory;
}
}


</style>
