<template>
  <div class="win-screen">
    <div class="main-container">
      <div class="text-big win">YOU WIN</div>
      <div class="button-big continue" @click="$emit('continue')">CONTINUE</div>
      <div class="button-big menu" @click="$emit('menu')">MENU</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'win-screen',
        props: [],
        data() {
            return {};
        },
        methods: {},
        beforeMount() {
        },
    };
</script>

<style scoped>

  .main-container {
    background: rgba(255, 255, 255, 0.9);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  .button-big {
    width: 200px;
    height: 80px;
    font-size: 30px;
    border: 1px solid black;
    line-height: 80px;
    text-align: center;
    margin: 20px;
  }

  .text-big {
    width: 200px;
    height: 80px;
    font-size: 30px;
    line-height: 80px;
    text-align: center;
    font-weight: bold;
  }

  @media screen and (max-width: 550px) {
  }
</style>
