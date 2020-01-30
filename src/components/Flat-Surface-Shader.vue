<template>
  <div id="app">
    <flat-surface-shader class="shader"
                         type="canvas" 
                         :light="{ambient: '#22bc9e', diffuse: '#2b7c6b', draw: false}" 
                         :mesh="{segments: 10, slices: 10, width: 1.5, height: 1.5}">
    </flat-surface-shader>
    <div class="mask">
          <div class="title">
            HARMON€Y
          </div>
          <div class="subtitle">
            Your Holistic Accounts Management System
          </div>
        </div>
</div>
</template>

<style>
  .shader {
      width: 100%;
      height: 100%;
      opacity: 30%;
      align-self: center;
      align-items: center;
  }
  .mask {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.6);
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: rgba(255, 255, 255,0.9)
      }
      .title {
        font-size: 3em;
        font-family: Teko, sans-serif;
        text-shadow: 4px 4px rgba(0,0,0,0.2);
      }
      .subtitle {
        font-family: Avenir,Helvetica,Arial,sans-serif;
        font-size: 1em;
        margin-bottom: 30px;
      }
</style>