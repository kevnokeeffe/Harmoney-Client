<template>
  <div class="container-home">
    <b-card class="b-card-home" body-class="text-center" header-tag="nav">
      <div>
        <b-tabs content-class="mt-3" justified>
          <b-tab no-body title="Welcome" active>
            <div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      caption="Nature"
      img-src="https://picsum.photos/1024/480/?image=10"
    ></b-carousel-slide>
    
    <b-carousel-slide
      caption="People"
      img-src="https://picsum.photos/1024/480/?image=22"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="HARMON€Y"
      img-src="https://picsum.photos/1024/480/?image=12"
    ></b-carousel-slide>
  </b-carousel>
</div>
          </b-tab>
          <b-tab title="Why Join?"><p>Because we love you</p></b-tab>
          <b-tab title="About">
            <b-card-img
              bottom
              class="b-card-image-eco"
              src="https://s3-us-west-2.amazonaws.com/medici-prod/root/Medici/public/uploads/custom2_fintechs-for-sustainable-finance-trends-and-opportunities.png?1574922914"
            ></b-card-img>
            <p class="text-about-eco">
              Being environmentally conscious can mean something different to
              each person. For us, eco-friendly decision-making drives our
              behavior, minimizing our environmental impact and harm.
            </p></b-tab
          >
        </b-tabs>
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
  beforeCreate: async function() {
    fetch(this.$store.state.apiUrl + '/api/test/user', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => console.log(res))
      await fetch('http://localhost:4000/api/test/bank', {
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

.b-card-image-eco {
  width: 50%;
  float: left;
  margin-right: 100%;
  margin-bottom: 20px;
  max-width: 200px;
}

.b-button-in-card-login{
  width: 80px;
  margin: 4px;
  padding: 10px;
  position: relative;
}
.b-button-in-card-info{
  width: 80px;
  padding: 6px;
  margin:10px;
  position: relative;
}
.b-button-in-card-sign-up{
  width: 80px;
   margin: 4px;
   padding: 10px;
  position: relative;
}
.b-card-image-welcome{
  max-width: 300px;
  position: relative;
}

.text-about-eco {
  text-align: left;
  max-width: 400px;
  position: relative;
}

.b-card-home {
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 80%;
  margin-top: 60px;
  max-height: 70%;
  min-height: 40%;
  max-width: 600px;
}

.h1-home {
  position: relative;
  font-family: 'Open Sans', sans-serif;
}
.h2-welcome{
  font-family: 'Varela Round', sans-serif;
}
.b-button-home {
}
</style>
