<template>
    <div class="game">
        <view-canvas :character1="character1" ref="view"></view-canvas>
    </div>
</template>

<script>
  import ViewCanvas from './View.vue';

  export default {
    name: 'game',
    props: [],
    components: {ViewCanvas},
    data() {
      return {
        character1: {
          x: 0,
          y: 0,
          exactX: 0,
          exactY: 0,
        },
      };
    },
    methods: {
      processKeyPress(keyCode) {
        let animationWidth = this.$refs.view.rectSize;
        let counter = 0;
        let move = {
          left: false,
          up: false,
          right: false,
          down: false,
        };
        // LEFT
        if (keyCode === 37) {
          move.left = true;
        }
        // UP
        else if (keyCode === 38) {
          move.up = true;
        }
        // RIGHT
        else if (keyCode === 39) {
          move.right = true;
        }
        // DOWN
        else if (keyCode === 40) {
          move.down = true;
        }

        // move
        this.character1.x++;
        let speed1 = 2;
        let interval = setInterval(() => {
          if (move.right) this.character1.exactX += speed1;
          if (move.left) this.character1.exactX -= speed1;
          if (move.up) this.character1.exactY -= speed1;
          if (move.down) this.character1.exactY += speed1;
          counter += speed1;
          if (counter >= animationWidth) clearInterval(interval);
        }, 10);
      },
    },
    beforeMount() {
    },
    mounted() {
      // key listener
      let self = this;
      document.addEventListener('keydown', function(event) {
        self.processKeyPress(event.keyCode);
      });
    },
  };
</script>

<style scoped>
    @media screen and (max-width: 550px) {
    }
</style>
