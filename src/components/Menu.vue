<template>
  <div class="menu">
    <div class="main-button-container">
      <div class="menu-button-big play" @click="$emit('play')">PLAY</div>
      <div class="menu-button-big levels" @click="$emit('levels')">LEVELS</div>
      <div class="menu-button-big update" @click="update()">UPDATE</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'menuu',
        props: [],
        data() {
            return {};
        },
        methods: {
            update() {
                location.reload();
            },
        },
        beforeMount() {
            // console.log(this.$store.state.unitSize)
        },
    };
</script>

<style scoped>
  .main-button-container {
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

  .menu-button-big {
    width: 200px;
    height: 80px;
    font-size: 30px;
    border: 1px solid black;
    line-height: 80px;
    text-align: center;
    margin: 20px;
  }

  @media screen and (max-width: 550px) {
  }
</style>
