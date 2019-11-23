<template>
  <div class="menu">
    <div class="button-play">PLAY</div>
  </div>
</template>

<script>
    export default {
        name: 'menuu',
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
  .button-play {
    position: fixed;
    width: 200px;
    height: 100px;
    text-align: center;
    font-size: 20px;
  }

  @media screen and (max-width: 550px) {
  }
</style>
