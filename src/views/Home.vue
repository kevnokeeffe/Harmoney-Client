<template>
<div class="container-home">
  <b-card class='b-card-home'>
    </b-card>
    </div>
    
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import FlatSurfaceShader from '@/components/Flat-Surface-Shader.vue'
export default {
  name: 'home',
  components: {
    // HelloWorld
    //FlatSurfaceShader
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
.b-card-home{
  display: block;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    width: 70%;
    margin-top: 60px;
    height:70%;
}
</style>