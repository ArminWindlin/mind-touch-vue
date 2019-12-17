<template>
  <div class="navigation-view">

    <div class="level-display" @click="$emit('levelScreen')">
      Level {{level}}
    </div>

    <div class="menu-button" @click="$emit('menu')">
      Menu
    </div>

    <div class="navigation-left">
      <div class="navigation-button left" :class="{'activeB': activeMove === 'left'}"
           @click="$emit('move', 'left'); moveButtonEffect('left')">
        <div class="arrow arrow-left"></div>
      </div>
      <div class="navigation-button right" :class="{'activeB': activeMove === 'right'}"
           @click="$emit('move', 'right'); moveButtonEffect('right')">
        <div class="arrow arrow-right"></div>
      </div>
      <div class="navigation-button up" :class="{'activeB': activeMove === 'up'}"
           @click="$emit('move', 'up'); moveButtonEffect('up')">
        <div class="arrow arrow-up"></div>
      </div>
      <div class="navigation-button down" :class="{'activeB': activeMove === 'down'}"
           @click="$emit('move', 'down'); moveButtonEffect('down')">
        <div class="arrow arrow-down"></div>
      </div>
    </div>

    <div class="navigation-right">
      <div class="navigation-button left" :class="{'activeG': activeMove === 'left'}"
           @click="$emit('move', 'left'); moveButtonEffect('left')">
        <div class="arrow" :class="'arrow-' + controls2['left']"></div>
      </div>
      <div class="navigation-button right" :class="{'activeG': activeMove === 'right'}"
           @click="$emit('move', 'right'); moveButtonEffect('right')">
        <div class="arrow" :class="'arrow-' + controls2['right']"></div>
      </div>
      <div class="navigation-button up" :class="{'activeG': activeMove === 'up'}"
           @click="$emit('move', 'up'); moveButtonEffect('up')">
        <div class="arrow" :class="'arrow-' + controls2['up']"></div>
      </div>
      <div class="navigation-button down" :class="{'activeG': activeMove === 'down'}"
           @click="$emit('move', 'down'); moveButtonEffect('down')">
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
            return {
                activeMove: '',
            };
        },
        methods: {
            moveButtonEffect(dir) {
                this.activeMove = dir;
                setTimeout(() => this.activeMove = '', 400);
            },
        },
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
    box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0);
    transition: box-shadow 200ms;
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

  .activeB {
    box-shadow: inset 0 0 10px 10px #6200EA;
    transition: box-shadow 200ms;
  }

  .activeG {
    box-shadow: inset 0 0 10px 10px #8BC34A;
    transition: box-shadow 200ms;
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
