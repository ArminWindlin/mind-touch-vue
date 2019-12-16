<template>
  <div class="navigation-view" @click="$emit('levelScreen')">

    <div class="level-display">
      Level {{level}}
    </div>

    <div class="menu-button" @click="$emit('menu')">
      Menu
    </div>

    <div class="navigation-left">
      <div class="navigation-button left" @click="$emit('move', 'left')">
        <div class="arrow arrow-left"></div>
      </div>
      <div class="navigation-button right" @click="$emit('move', 'right')">
        <div class="arrow arrow-right"></div>
      </div>
      <div class="navigation-button up" @click="$emit('move', 'up')">
        <div class="arrow arrow-up"></div>
      </div>
      <div class="navigation-button down" @click="$emit('move', 'down')">
        <div class="arrow arrow-down"></div>
      </div>
    </div>

    <div class="navigation-right">
      <div class="navigation-button left" @click="$emit('move', 'left')">
        <div class="arrow" :class="'arrow-' + controls2['left']"></div>
      </div>
      <div class="navigation-button right" @click="$emit('move', 'right')">
        <div class="arrow" :class="'arrow-' + controls2['right']"></div>
      </div>
      <div class="navigation-button up" @click="$emit('move', 'up')">
        <div class="arrow" :class="'arrow-' + controls2['up']"></div>
      </div>
      <div class="navigation-button down" @click="$emit('move', 'down')">
        <div class="arrow" :class="'arrow-' + controls2['down']"></div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: 'navigation-view',
        props: ['controls2', 'level'],
        data() {
            return {};
        },
        methods: {},
        beforeMount() {
        },
    };
</script>

<style scoped>

  .level-display {
    position: absolute;
    top: 10px;
    left: 10px;
    font-weight: bold;
    font-size: 16px;
    padding: 5px;
    background-color: rgba(50, 50, 50, 0.4);
    border-radius: 5px;
  }

  .menu-button {
    position: absolute;
    top: 10px;
    right: 10px;
    font-weight: bold;
    font-size: 16px;
    padding: 5px;
    background-color: rgba(50, 50, 50, 0.4);
    border-radius: 5px;
  }

  .navigation-button {
    width: 50px;
    height: 50px;
    background-color: rgba(50, 50, 50, 0.4);
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

  .navigation-right .left {
    position: absolute;
    bottom: 70px;
    right: 120px;
  }

  .navigation-right .right {
    position: absolute;
    bottom: 70px;
    right: 20px;
  }

  .navigation-right .up {
    position: absolute;
    bottom: 120px;
    right: 70px;
  }

  .navigation-right .down {
    position: absolute;
    bottom: 20px;
    right: 70px;
  }

  .arrow {
    margin: 3px;
    width: 44px;
    height: 44px;
    background: url('../../assets/ArrowLeft.svg') no-repeat center center;
  }

  .arrow.arrow-left {
    transform: rotate(180deg);
  }

  .arrow.arrow-up {
    transform: rotate(-90deg);
  }

  .arrow.arrow-down {
    transform: rotate(90deg);
  }

  @media screen and (max-width: 550px) {
  }
</style>
