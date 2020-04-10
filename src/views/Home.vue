<template>
  <div class="top-one">
    <div class="overlay">
     <h1 class="h1">Welcome</h1>
     <h5 class="h5">to</h5>
     <h2 class="h2">Harmon€y</h2>
     </div>
        <vue-particles
        class="vue-particles"
        color="#4b6a74"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#3b988e"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push">
      </vue-particles>
    </div>
    
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  beforeCreate: async function() {
  },
  data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods:{
login(){
  const path = `/login`
        if (this.$route.path !== path) {this.$router.push(path)}
}
    },
  
}
</script>

<style>
.overlay{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}
.vue-particles{
  height: 100%;
  position: fixed;
  left: 0;
  right: 0;
} 
.top-one {
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

#btnJoin{
    font-family: 'Varela Round', sans-serif;
  font-family: 'Open Sans', sans-serif;

}


@media (min-width: 940px) {
.h1{
  font-family: 'Varela Round', sans-serif;
  font-family: 'Open Sans', sans-serif;
  align-self: center;
  margin-top: 10%;
  font-size: 5em;
  color: ivory;
  text-shadow: 1px 1px 1px black;
}
.h2{
  font-family: 'Varela Round', sans-serif;
  font-family: 'Open Sans', sans-serif;
  color: ivory;
  font-size: 4em;
  text-shadow: 1px 1px 1px black;
}
.h5{
 font-family: 'Varela Round', sans-serif;
  font-family: 'Open Sans', sans-serif;
  color: ivory;
  font-size: 1.5em;
  text-shadow: 1px 1px 1px black;
}

}

@media (max-width: 940px) and (min-width: 500px) {
.h1{
  font-family: 'Varela Round', sans-serif;
  font-family: 'Open Sans', sans-serif;
  align-self: center;
  margin-top: 20%;
  font-size: 5em;
  color: ivory;
  text-shadow: 1px 1px 1px black;
}

.h2{
  font-family: 'Varela Round', sans-serif;
  font-family: 'Open Sans', sans-serif;
  color: ivory;
  text-shadow: 1px 1px 1px black;
}
.h5{
 font-family: 'Varela Round', sans-serif;
  font-family: 'Open Sans', sans-serif;
  color: ivory;
  text-shadow: 1px 1px 1px black;
}
}

@media (max-width: 500px){
.h1{
  font-family: 'Varela Round', sans-serif;
  font-family: 'Open Sans', sans-serif;
  align-self: center;
  margin-top: 28%;
  font-size: 3em;
  color: ivory;
  text-shadow: 1px 1px 1px black;
}

.h2{
  font-family: 'Varela Round', sans-serif;
  font-family: 'Open Sans', sans-serif;
  color: ivory;
  text-shadow: 1px 1px 1px black;
}
.h5{
 font-family: 'Varela Round', sans-serif;
  font-family: 'Open Sans', sans-serif;
  color: ivory;
  text-shadow: 1px 1px 1px black;
}
}


</style>
