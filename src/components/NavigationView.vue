<template>
  <div class="navigation-view">
    <div class="navigation-left">
      <div class="navigation-button left" @click="$emit('move', 'left')"></div>
      <div class="navigation-button right" @click="$emit('move', 'right')"></div>
      <div class="navigation-button up" @click="$emit('move', 'up')"></div>
      <div class="navigation-button down" @click="$emit('move', 'down')"></div>
    </div>
    <div class="navigation-rigth">
      <div class="navigation-button left" @click="$emit('move', 'left')"></div>
      <div class="navigation-button right" @click="$emit('move', 'right')"></div>
      <div class="navigation-button up" @click="$emit('move', 'up')"></div>
      <div class="navigation-button down" @click="$emit('move', 'down')"></div>
    </div>
    <div class="navigation-right">

    </div>
  </div>
</template>

<script>
    export default {
        name: 'navigation-view',
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
  .navigation-button {
    width: 50px;
    height: 50px;
    background-color: rgba(50, 50, 250, 0.5);
    border-radius: 5px;
  }

  .navigation-left .left {
    position: absolute;
    bottom: 70px;
    left: 20px;
  }

  .navigation-left .right {
    position: absolute;
    bottom: 70px;
    left: 120px;
  }

  .navigation-left .up {
    position: absolute;
    bottom: 120px;
    left: 70px;
  }

  .navigation-left .down {
    position: absolute;
    bottom: 20px;
    left: 70px;
  }

  .navigation-rigth .left {
    position: absolute;
    bottom: 70px;
    right: 120px;
  }

  .navigation-rigth .right {
    position: absolute;
    bottom: 70px;
    right: 20px;
  }

  .navigation-rigth .up {
    position: absolute;
    bottom: 120px;
    right: 70px;
  }

  .navigation-rigth .down {
    position: absolute;
    bottom: 20px;
    right: 70px;
  }

  @media screen and (max-width: 550px) {
  }
</style>
