<template>
<div class="on-top">
  <div class="overlay-about float-md-center">
    <b-jumbotron style="background-color:#fedd7c;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);" class="about-jumbo">
      <b-container id="cont-1" fluid>
        <b-row>
          <b-col style="background-color:#d9664b;" cols="3"></b-col>
          <b-col cols="9">
    <h1 id="h1-ab"><i class="fas fa-info-circle"></i> About Us</h1>
          </b-col>
    </b-row>
    <b-row>
      <b-col style="background-color:#d9664b; background-image:'../../assets/H€Y.svg';" cols="3"></b-col>
      <b-col style="background-color:#fff;" cols="9">
    <p id="p-abt">Harmon€y is an exciting new smart banking service. An all-in-one hub that allows users to open a Harmon€y account in minutes, and link all existing bank accounts. This unique experience allows users to synchronise all of their financial accounts (bank, credit union, post office, loan and mortgage accounts) in one application, providing you with a simple, fast and secure way of managing your finances, getting personalised insights into your spending, and receiving meaningful rewards and tailored financial solutions.</p>
  <p id="p-abt-2">Our ultimate goal is for our users to better understand their saving, spending and investing habits and to make Banking beautiful, simple and accesible to everyone.</p>
  </b-col>
  </b-row>
  </b-container>
  </b-jumbotron>

  </div>
  
  <vue-particles
        class="vue-particles-add"
        color="#839c99"
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

<style>
.overlay-about{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  margin-top:60px;
  
}

.about-jumbo{
  width: 90%;
   margin: auto;
text-align: left;
  border:thin;
  padding: 20px;
  
}

.on-top {
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  }
  .vue-particles-about{
  height: 100%;
  position: fixed;
  left: 0;
  right: 0;
} 
</style>
