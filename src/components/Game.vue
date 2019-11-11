<template>
    <div class="game">
        <view-canvas></view-canvas>
    </div>
</template>

<script>
  import ViewCanvas from './View.vue';

  export default {
    name: 'game',
    props: [],
    components: {ViewCanvas},
    data() {
      return {};
    },
    methods: {
      keyBoardListener() {
        document.addEventListener('keydown', function(event) {
          // LEFT
          if (event.keyCode === 37) {
            console.log('cmon');
          }
          // UP
          else if (event.keyCode === 38) {
            console.log('cmon');
          }
          // RIGHT
          else if (event.keyCode === 39) {
            console.log('cmon');
          }
          // DOWN
          else if (event.keyCode === 40) {
            console.log('cmon');
          }
        });
      },
    },
    beforeMount() {
      this.keyBoardListener();
    },
  };
</script>

<style scoped>
    @media screen and (max-width: 550px) {
    }
</style>
