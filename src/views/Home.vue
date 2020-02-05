<template>
  <div class="container-home">
    <b-card class="b-card-home" body-class="text-center" header-tag="nav">
      <div>
        <b-tabs content-class="mt-3" justified>
          <b-tab no-body title="Welcome" active>
            <b-card-img
              bottom
              src="https://sociology.uconn.edu/wp-content/uploads/sites/2172/2019/06/WELCOME-ST-IVES.jpg"
            ></b-card-img>
          </b-tab>
          <b-tab title="Joining"><p>I'm the first tab</p></b-tab>
          <b-tab title="About">
            <b-card-img
              bottom
              class="b-card-image-home"
              src="https://s3-us-west-2.amazonaws.com/medici-prod/root/Medici/public/uploads/custom2_fintechs-for-sustainable-finance-trends-and-opportunities.png?1574922914"
            ></b-card-img>
            <p class="text-about-home">
              Being environmentally conscious can mean something different to
              each person. For us, eco-friendly decision-making drives our
              behavior, minimizing our environmental impact and harm.
            </p></b-tab
          >
        </b-tabs>
      </div>
      <div class="mt-3">
        <b-button-group>
          <b-button variant="success" to="/login">Login</b-button>
          <b-button variant="info" to="/about">Info</b-button>
          <b-button variant="warning" to="/register">Sign-Up</b-button>
        </b-button-group>
      </div>
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
    fetch(this.$store.state.apiUrl + '/api/test/user', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => console.log(res))
  }
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

.b-card-image-home {
  width: 50%;
  float: left;
  margin-right: 50%;
  margin-bottom: 5%;
}

.text-about-home {
  text-align: left;
}

.b-card-home {
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 80%;
  margin-top: 60px;
  height: 70%;
}

.h1-home {
  position: relative;
  font-family: 'Open Sans', sans-serif;
}

.b-button-home {
}
</style>
